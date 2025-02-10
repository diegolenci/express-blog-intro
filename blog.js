// 1: inizializzare npm init nel terminale
// 2: installare express
// 3: creazione gitignore
// 4: importazione di express

const express = require("express");
const app = express();
const port = 3000;

//attivazione rotta api della bacheca
app.get("/api/bacheca", (req,res) =>{
    
    const list = 
    
    res.json(list)
})

//attivazione del server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})