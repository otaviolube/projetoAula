require("dotenv").config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env",
});

const express = require("express");

const app = express();

app.use("/public", express.static(`${__dirname}/public`));

const port = process.env.PORT;

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.listen(port, function () {
  console.log(`Servidor funcionando na porta ${port}`);
});
