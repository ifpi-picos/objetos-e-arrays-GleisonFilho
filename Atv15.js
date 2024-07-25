const prompt = require('prompt-sync')();

let filmes = [];

filmes.push(prompt("Digite o nome do filme 1:"))
filmes.push(prompt("Digite o nome do filme 2:"))
filmes.push(prompt("Digite o nome do filme 3:"))
filmes.push(prompt("Digite o nome do filme 4:"))
filmes.push(prompt("Digite o nome do filme 5:"))

let filmesescolhidos = filmes.join(", ")

for (const elemento of filmes) {
    console.log(elemento); 
   }
   