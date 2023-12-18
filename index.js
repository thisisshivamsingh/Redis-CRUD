// const express = require("express");
// const app = express();
// const redis = require("redis");

// const redisClient = redis.createClient(6379, "127.0.0.1");
// redisClient.connect();
// redisClient.on("connect", function (err) {
//   console.log("Connected Redis");
// });

// app.get("/", async (req, res) => {
//   let keyName = "normal key";
//   let getCacheData = await redisClient.get(keyName);
//   let result = {
//     id: 12,
//     name: "Test Demo",
//   };
//   let responseArray = "";

//   if (getCacheData) {
//     responseArray = JSON.parse(getCacheData);
//     console.log("GET Cache");
//   } else {
//     console.log("SET Cache");
//     redisClient.set(keyName, JSON.stringify(result), { Ex: 30 });
//     responseArray = result;
//   }
//   console.log(getCacheData);
//   res.status(200).json(responseArray);
// });

// app.listen(3001, () => {
//   console.log("App is running on port 3001");
// });

// function factor(num) {
//   if (num == 0) {
//     return 1;
//   }
//   return num * factor(--num);
// }
// console.log(factor(5));
let i = 5;

console.log("i++", i++);
console.log("++i", ++i);
console.log("i--", i--);
console.log("--i", --i);
