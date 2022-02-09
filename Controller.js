const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", function(req, res) {
    res.send("Olá, Mundo!");
});

app.get("/clientes", function(req, res) {
    res.send("Sejam bem-vindo(a) a ServicesTI!");
});

app.get("/servicos", function(req, res) {
    res.send("Aba Serviços - Qual serviço gostaria de fazer?");
});

app.get("/pedidos", function(req, res) {
    res.send("Qual pedido gostaria de fazer?");
});

let port = process.env.port || 3001;

app.listen(port, (req, res) => {
    console.log(`Servidor Ativo: http://localhost:3001`);
});