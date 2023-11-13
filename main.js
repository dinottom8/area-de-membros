const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + "/public/index.html"));
})

app.listen(8801, function(){
    console.log("Servidor rodando em: http://localhost:8801")
})