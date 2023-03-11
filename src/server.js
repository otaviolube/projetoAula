require("dotenv").config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const express = require("express");
const execQuery = require("./services/execQuery");
const getAll = require("./services/getAll");

const app = express();

app.use("/public", express.static(`${__dirname}/public`));

const port = process.env.PORT;

(async () => await execQuery("INSERT INTO alunos VALUES ('otavio')"))();

app.get("/", async function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/alunos", async function (req, res) {
  const alunos = await getAll();
  console.log(alunos);
});

app.listen(port, function () {
  console.log(`Servidor funcionando na porta ${port}`);
});
