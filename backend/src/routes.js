const express = require("express");

const { cadastrarUsuario } = require("./controllers/cadastrarUsuario");
const { realizarLogin } = require("./controllers/realizarLogin");
const { verificarLogin } = require("./middleware/verificarLogin");
const { detalharUsuario } = require("./controllers/detalharUsuario");
const { editarUsuario } = require("./controllers/editarUsuario");
const { listarCategorias } = require("./controllers/listarCategorias");
const { listarTransacoes } = require("./controllers/listarTransacoes");
const { exibirExtrato } = require("./controllers/exibirExtrato");
const { detalharTransacao } = require("./controllers/detalharTransacao");
const { cadastrarTransacao } = require("./controllers/cadastrarTransacao");
const { editarTransacao } = require("./controllers/editarTransacao");
const { deletarTransacao } = require("./controllers/deletarTransacao");

const rotas = express();

rotas.post("/usuario", cadastrarUsuario)
rotas.post("/login", realizarLogin)

rotas.use(verificarLogin);

rotas.get("/usuario", detalharUsuario)
rotas.put("/usuario", editarUsuario);
rotas.get("/categorias", listarCategorias);
rotas.get("/transacao", listarTransacoes);
rotas.get("/transacao/extrato", exibirExtrato);
rotas.get("/transacao/:id", detalharTransacao);
rotas.post("/transacao", cadastrarTransacao);
rotas.put("/transacao/:id", editarTransacao);
rotas.delete("/transacao/:id", deletarTransacao);


module.exports ={
    rotas
}