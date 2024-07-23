const prompt = require('prompt-sync')();

let filmes = [];

filmes.push(prompt("Digite o nome do filme 1:"))
filmes.push(prompt("Digite o nome do filme 2:"))
filmes.push(prompt("Digite o nome do filme 3:"))
filmes.push(prompt("Digite o nome do filme 4:"))
filmes.push(prompt("Digite o nome do filme 5:"))

let filmesescolhidos = filmes.join(", ")

for (let i = 0; i < 5 ; i++) {
    console.log("O nome do filme é: " + filmes[i])
}
