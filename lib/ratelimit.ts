const rateLimitMap = new Map();

export function rateLimit(ip: string, limit = 5, windowMs = 60000) {
  const now = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return true;
  }

  const data = rateLimitMap.get(ip);

  if (now - data.startTime > windowMs) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return true;
  }

  if (data.count >= limit) {
    return false;
  }

  data.count++;
  return true;
}