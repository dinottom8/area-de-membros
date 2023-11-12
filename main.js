var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/login", function(req,res){
    res.send("tela de login");
})

app.listen("8801", ()=> {
    console.log("Servidor rodando em: http://localhost:8801")
})