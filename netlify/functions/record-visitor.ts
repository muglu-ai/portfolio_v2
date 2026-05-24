import type { Config, Context } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import type { VisitorRecord } from "../../lib/visitor";

const MAX_LOG_ENTRIES = 1000;
// First visitor is assigned #2523 (2522 + 1)
const VISITOR_COUNT_START = 2522;

function parseUserAgent(userAgent: string) {
  const ua = userAgent || "Unknown";

  let device = "Desktop";
  if (/tablet|ipad/i.test(ua)) device = "Tablet";
  else if (/mobile|iphone|android/i.test(ua)) device = "Mobile";

  let browser = "Unknown";
  if (/edg\//i.test(ua)) browser = "Edge";
  else if (/chrome/i.test(ua)) browser = "Chrome";
  else if (/firefox/i.test(ua)) browser = "Firefox";
  else if (/safari/i.test(ua)) browser = "Safari";

  let os = "Unknown";
  if (/windows/i.test(ua)) os = "Windows";
  else if (/mac os x|macintosh/i.test(ua)) os = "macOS";
  else if (/android/i.test(ua)) os = "Android";
  else if (/iphone|ipad|ios/i.test(ua)) os = "iOS";
  else if (/linux/i.test(ua)) os = "Linux";

  return { device, browser, os };
}

function getClientIp(req: Request, context: Context) {
  return (
    context.ip ||
    req.headers.get("x-nf-client-connection-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const store = getStore("portfolio-visitors");
    const countValue = await store.get("visitor-count", { type: "text" });
    const storedCount = countValue
      ? Number.parseInt(countValue, 10)
      : VISITOR_COUNT_START;
    const currentCount = Math.max(storedCount, VISITOR_COUNT_START);
    const visitorNumber = currentCount + 1;

    const userAgent = req.headers.get("user-agent") || "Unknown";
    const { device, browser, os } = parseUserAgent(userAgent);

    let page: string | null = null;
    try {
      const body = await req.json();
      page = typeof body?.page === "string" ? body.page : null;
    } catch {
      page = null;
    }

    const record: VisitorRecord = {
      visitorNumber,
      ip: getClientIp(req, context),
      userAgent,
      device,
      browser,
      os,
      referer: req.headers.get("referer"),
      page,
      visitedAt: new Date().toISOString(),
    };

    await store.set("visitor-count", String(visitorNumber));
    await store.set(`visitor-${visitorNumber}`, JSON.stringify(record));

    const logValue = await store.get("visitors-log", { type: "text" });
    const log: VisitorRecord[] = logValue ? JSON.parse(logValue) : [];
    log.push(record);
    await store.set("visitors-log", JSON.stringify(log.slice(-MAX_LOG_ENTRIES)));

    return Response.json({ visitorNumber });
  } catch (error) {
    console.error("Failed to record visitor:", error);
    return Response.json({ error: "Failed to record visitor" }, { status: 500 });
  }
};

export const config: Config = {
  path: "/api/visitor",
  method: "POST",
};
