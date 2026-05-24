import type { Config } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import type { VisitorRecord } from "../../lib/visitor";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });
  } catch {
    return iso;
  }
}

function isAuthorized(req: Request) {
  const secret = process.env.VISITOR_ADMIN_SECRET;
  if (!secret) return false;

  const url = new URL(req.url);
  const queryKey = url.searchParams.get("key");
  const headerKey = req.headers.get("x-admin-key");

  return queryKey === secret || headerKey === secret;
}

function renderHtml(totalCount: number, visitors: VisitorRecord[]) {
  const rows = visitors
    .map(
      (visitor) => `
        <tr>
          <td>#${visitor.visitorNumber}</td>
          <td>${escapeHtml(formatDate(visitor.visitedAt))}</td>
          <td>${escapeHtml(visitor.ip)}</td>
          <td>${escapeHtml(visitor.device)}</td>
          <td>${escapeHtml(visitor.browser)}</td>
          <td>${escapeHtml(visitor.os)}</td>
          <td>${escapeHtml(visitor.page || "—")}</td>
          <td>${escapeHtml(visitor.referer || "—")}</td>
        </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Visitor Log</title>
    <style>
      body { font-family: system-ui, sans-serif; background: #0b1020; color: #e5e7eb; margin: 0; padding: 24px; }
      h1 { margin: 0 0 8px; font-size: 1.5rem; }
      p { color: #9ca3af; margin: 0 0 20px; }
      table { width: 100%; border-collapse: collapse; background: #111827; border-radius: 12px; overflow: hidden; }
      th, td { padding: 12px 14px; text-align: left; border-bottom: 1px solid #1f2937; font-size: 0.875rem; }
      th { background: #1f2937; color: #cbd5e1; font-weight: 600; }
      tr:hover td { background: #172033; }
      .badge { display: inline-block; padding: 4px 10px; border-radius: 999px; background: #312e81; color: #ddd6fe; font-size: 0.875rem; }
    </style>
  </head>
  <body>
    <h1>Portfolio Visitor Log</h1>
    <p>Total recorded visits: <span class="badge">${totalCount.toLocaleString()}</span> · Showing latest ${visitors.length.toLocaleString()} entries</p>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Date & time</th>
          <th>IP</th>
          <th>Device</th>
          <th>Browser</th>
          <th>OS</th>
          <th>Page</th>
          <th>Referrer</th>
        </tr>
      </thead>
      <tbody>
        ${rows || `<tr><td colspan="8">No visitors recorded yet.</td></tr>`}
      </tbody>
    </table>
  </body>
</html>`;
}

export default async (req: Request) => {
  if (req.method !== "GET") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  if (!isAuthorized(req)) {
    return Response.json({ error: "Unauthorized" }, {
      status: 401,
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    const store = getStore("portfolio-visitors");
    const countValue = await store.get("visitor-count", { type: "text" });
    const totalCount = countValue ? Number.parseInt(countValue, 10) : 0;

    const logValue = await store.get("visitors-log", { type: "text" });
    const visitors: VisitorRecord[] = logValue ? JSON.parse(logValue) : [];
    const sortedVisitors = [...visitors].sort(
      (a, b) => b.visitorNumber - a.visitorNumber
    );

    const url = new URL(req.url);
    if (url.searchParams.get("format") === "json") {
      return Response.json(
        {
          totalCount,
          count: sortedVisitors.length,
          visitors: sortedVisitors,
        },
        {
          headers: {
            "Cache-Control": "no-store",
            "X-Robots-Tag": "noindex, nofollow",
          },
        }
      );
    }

    return new Response(renderHtml(totalCount, sortedVisitors), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch (error) {
    console.error("Failed to load visitor log:", error);
    return Response.json({ error: "Failed to load visitor log" }, { status: 500 });
  }
};

export const config: Config = {
  path: "/api/visitors-admin",
  method: "GET",
};
