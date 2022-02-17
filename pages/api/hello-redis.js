export default async function handler(req, res) {

  const Redis = require("ioredis");

  let client = new Redis(process.env.DEV_REDIS_URL);
  let result = await client.get("greeting");

  console.log(result);

  res.status(200).json({greeting: result});
}
