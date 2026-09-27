import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const connectionUrl = process.env.REDIS_URL;

const redis = new Redis(connectionUrl);

console.log("Redis says :", await redis.ping());

export default redis;
