const express = require('express');
const app = express();

//Responsável por inserir o campo body na requisição(req)
const body_parser = require('body-parser');

//Dizendo ao Express que a aplicação utilizará EJS como motor HTML
app.set('view engine', 'ejs')

//Usar arquivos estáticos (CSS, JS, Imagens)
app.use(express.static('public'));

//Permite que dados enviados em formulários sejam lidos por javascript
app.use(body_parser.urlencoded({extended: false}));

//Permite que json seja lido por javascript
app.use(body_parser.json())

//Rotas
app.get("/", (req, res) =>{
    res.render("index");
});
app.get("/perguntar", (req, res) =>{
    res.render("perguntar");
});
app.post("/perguntar", (req, res) =>{
    titulo = req.body.titulo;
    pergunta = req.body.pergunta;

    res.send("Formulário recebido!<br/>Titulo:"+titulo+"<br/>Pergunta:"+pergunta)
});

app.listen(8080, ()=>{
    console.log("App rodando");
});