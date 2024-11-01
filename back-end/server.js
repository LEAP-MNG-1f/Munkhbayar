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
  { id: 1, name: "tuugii", age: 32 },
  { id: 2, name: "toogii", age: 22 },
];

app.get("/users", (request, response) => {
  response.send(users);
});
app.post("/users", (request, response) => {
  let newUser = request.body;
  newUser = {
    id: `${Math.random()}`,
    ...newUser,
  };
  users.push(newUser);
  response.send(users);
});
app.put("/users", (request, response) => {
  const { id, name, age } = request.body;
  users = users.map((user) => {
    if (user.id == id) {
      return {
        ...user,
        name: name,
        age: age,
      };
    }
    return user;
  });
  response.send(users);
});
app.delete("/users", (request, response) => {
  const { name } = request.body;
  users = users.filter((user) => user.name !== name);
  response.send(users);
});

app.listen(Port, () => {
  console.log("ajillaj ehellee");
});
//(){} function
//()=>{}  Arrow function
