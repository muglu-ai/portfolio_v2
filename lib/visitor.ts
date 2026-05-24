export interface VisitorRecord {
  visitorNumber: number;
  ip: string;
  userAgent: string;
  device: string;
  browser: string;
  os: string;
  referer: string | null;
  page: string | null;
  visitedAt: string;
}

export interface VisitorResponse {
  visitorNumber: number;
}
