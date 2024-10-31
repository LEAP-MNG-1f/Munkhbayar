// const http = require("http");
// // import http from "http";

// const server = http.createServer((request, response) => {
//   console.log(request);
//   response.end("Hello world");
// });
// server.listen(3333);
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
const Port = 3939;

let users = [
  { name: "tuugii", age: 32 },
  { name: "toogii", age: 22 },
];

app.get("/users", (request, response) => {
  response.send(users);
});
app.post("/users", (request, response) => {
  const newUser = request.body;
  users.push(newUser);
  response.send(users);
});
app.put("/users", (request, response) => {
  response.send("im put");
});
app.delete("/users", (request, response) => {
  const { name } = request.body;
  users = users.filter((user) => user.name !== name);
  response.send(users);
});

app.listen(Port, () => {
  console.log("ajillaj ehellee");
});
