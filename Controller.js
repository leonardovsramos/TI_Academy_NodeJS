const express = require("express");
const cors = require("cors");

const models = require("./models");

const app = express();
app.use(cors());

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;

app.get("/", function(req, res) {
    res.send("Olá, Mundo!");
});

app.get("/servicos", async(req, res) => {
    await servico.create({
        nome: "HTML e CSS",
        descricao: "Curso desenvolvido pela TI Academy, focado no desenvolvimento de páginas estáticas com HTML5 e CSS3",
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send("O serviço foi criado com sucesso");
})

app.get("/clientes", async(req, res) => {
    await cliente.create({
        nome: "Eduardo Vieira",
        endereco: "Rua rosa cruz, 411",
        cidade: "Maringá",
        uf: "PR",
        nascimento: new Date("1950-02-14"),
        clienteDesde: new Date("2018-06-17"),
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send("Cliente cadastrado com Sucesso!");
});

app.get("/pedidos", async(req, res) => {
    await pedido.create({
        data: new Date("2022-02-09"),
        // ClienteId: ,
        createAt: new Date(),
        updateAt: new Date()
    });
    res.send("Pedido realizado com Sucesso!")
});

let port = process.env.port || 3001;

app.listen(port, (req, res) => {
    console.log(`Servidor Ativo: http://localhost:3001`);
});