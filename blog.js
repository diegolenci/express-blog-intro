// 1: inizializzare npm init nel terminale
// 2: installare express
// 3: creazione gitignore
// 4: importazione di express
// 5: creazione array oggetti

const express = require("express");
const app = express();
const port = 3000;

//attivazione rotta api della bacheca
app.get("/api/bacheca", (req,res) =>{
    
    const list = [
        {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "cracker_barbabietola.avif",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "cracker_barbabietola.avif",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "cracker_barbabietola.avif",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "cracker_barbabietola.avif",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "cracker_barbabietola.avif",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        },
        
    ]
    
    res.json(list)
})

//attivazione del server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})