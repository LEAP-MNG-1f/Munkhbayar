// const http = require("http");
// // import http from "http";

// const server = http.createServer((request, response) => {
//   console.log(request);
//   response.end("Hello world");
// });
// server.listen(3333);
import express from "express";

const Port = 3939;
const app = express();

app.listen(Port, () => {
  console.log("ajillaj ehellee");
});
