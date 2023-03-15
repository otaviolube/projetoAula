const { Router } = require("express");

const roteador = Router();

roteador.get("/", async function (req, res) {
  const paths = __dirname.split("\\");
  let path = "";
  for (let i = 0; i < paths.length - 1; i++) {
    path = path + paths[i] + "\\";
  }
  console.log(path);
  res.sendFile(`${path}/views/index.html`);
});

roteador.get("*", async function (req, res) {
  res.sendFile(`${__dirname}/views/404.html`);
});

module.exports = roteador;
