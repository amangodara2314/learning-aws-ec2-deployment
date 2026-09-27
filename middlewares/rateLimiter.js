import redis from "../configs/redis.js";

export default async function rateLimiter(req, res, next) {
  const ip = req.ip;
  console.log("Request from user with ip : ", ip);

  const key = `rate_limit:${ip}`;

  const reqCount = await redis.incr(key);

  if (reqCount == 1) {
    await redis.expire(key, 60);
  }

  console.log("req count is:", reqCount);

  if (reqCount > 5) {
    res.status(429).json({ message: "Too Many Requests." });
  }

  next();
}
