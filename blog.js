// 1: inizializzare npm init nel terminale
// 2: installare express
// 3: creazione gitignore
// 4: importazione di express
// 5: creazione array oggetti
// 6: impostato rotta api bacheca
// 7: creato start e watch in package.json
// 8: attivato da terminale npm run watch x aggiornare
// 9: creazione cartalle public con immagini all'interno

const express = require("express");
const app = express();
const port = 3000;

//per leggere la cartella public con le img all'interno
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.type('html').send(`<img src="localhost:3000/imgs/cracker_barbabietola.jpeg">`)
})

//attivazione rotta api della bacheca
app.get("/api/bacheca", (req,res) =>{
    
    const list = [
        {
            title: "Cracker alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "imgs/cracker_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "pasta alla barbabietola",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "imgs/pasta_barbabietola.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "Pane fritto dolce",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "imgs/pane_fritto_dolce.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "Torta paesana",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "imgs/torta_paesana.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        }, {
            title: "Ciambellone",
            content: `I cracker alla barbabietola sono uno snack stuzzicante da preparare in casa. 
                      Queste sfogliette arricchiranno la tavola con il loro gusto unico e accattivante. 
                      I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola.`,
            image: "imgs/ciambellone.jpeg",
            tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
        },
        
    ]
    
    res.json(list)
})

//attivazione del server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})