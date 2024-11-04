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
  const { name, age } = request.body;
  const number = Math.random() * 100;
  const result = Math.floor(number);

  try {
    if (!name || !age) {
      return response.send(" Ner eswel nas dutuu baina");
    } else {
      if (typeof name !== "string") {
        return response.send(" Ner temdegt bish bna");
      }
      if (typeof age !== "number") {
        return response.send("Nas too bish bna");
      }
      const newUser = {
        id: result,
        name: name,
        age: age,
      };
      users.push(newUser);
      response.send(users);
    }
  } catch (error) {
    throw new Error(error);
  }
  // newUser = {
  //   id: `${Math.random()}`,
  //   ...newUser,
  // };
  // users.push(newUser);
  // response.send(users);
});
app.put("/users", (request, response) => {
  const { id, updateName, updateAge } = request.body; //undefined

  if (!id) {
    return response.send("ID baihgui baina");
  }
  if (!updateName && !updateAge) {
    return response.send("2uulaa baihgui bna");
  }
  // users.find((user) => {
  //   if (user.id == id) {
  //     user.name = updateName ? updateName : user.name;
  //     user.age = updateAge ? updateAge : user.age;
  //     return user;
  //   }
  // });
  users.find((user) => {
    if (user.id == id) {
      user.name = updateName ?? updateName;
      user.age = updateAge ?? updateAge;
      return user;
    }
  });
  // users.find((user) => {
  //   if (user.id == id) {
  //     if (updateName) {

  //       user.name = updateName;
  //     }
  //     if (updateAge) {
  //       user.age = updateAge;
  //     }
  //     return user;
  //   }
  // });

  // if (!name) {
  //   response.send(users);
  // }
  // if (!age) {
  //   response.send(users);
  // }
  // users = users.map((user) => {
  //   if (user.id == id) {
  //     return {
  //       ...user,
  //       name: name,
  //       age: age,
  //     };
  //   }
  //   return user;
  // });
  // try {
  //   if { }
  // } catch (error) {
  //   throw new Error(error);
  // }
  response.send(users);
});
app.delete("/users", (request, response) => {
  const { id } = request.body;
  // users = users.filter((user) => user.name !== name);
  const filterUsers = users.filter((user) => {
    if (user.id !== id) {
      return user;
    }
  });
  if (filterUsers.length == users.length) {
    return response.send("Users");
  }
  users = filterUsers;
  response.send(filterUsers);
});

app.listen(Port, () => {
  console.log("ajillaj ehellee");
});
//(){} function
//()=>{}  Arrow function
