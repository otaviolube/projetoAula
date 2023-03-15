const { Router } = require("express");
const getAll = require("../services/getAll");
const inserirAluno = require("../services/AlunosServices/inserirAluno");
const AlunosController = require("../controllers/AlunosController");

const roteador = Router();

roteador.get("/alunos", async function (req, res) {
  const alunos = await getAll();
  res.sendFile(`${__dirname}/views/index.html`);
});

roteador.post("/aluno", AlunosController.inserirAluno);

roteador.delete("/aluno", AlunosController.excluirAluno);

module.exports = roteador;
