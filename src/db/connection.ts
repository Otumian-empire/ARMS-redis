// import { Client } from "redis-om";
// import { createClient } from 'redis'

// import logger from "../config/logger.js";
// import { REDIS_URI } from "../util/app.constant.js";

// // const client = new Client();
// // await client.open(REDIS_URI);
// // logger.debug(await client.execute(["PING", "Redis server running"]));





// export const connection = createClient({ url: REDIS_URI })
// connection.on("error", (error) => logger.error(error.message));

// connection.on("connect", () => {
//   logger.info("Redis server connected");
// });

// connection.on("end", () => {
//   logger.info("Redis server disconnected");
// });

// connection.on("reconnecting", () => {
//   logger.info("Redis server reconnecting");
// });
// await connection.connect()

// const client = await new Client().use(connection)

// export default client