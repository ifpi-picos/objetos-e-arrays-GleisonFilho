const pessoas = [
{ nome: "Gleison", ano: 2006 },
{ nome: "Caio", ano: 2006 },
{ nome: "Kaio", ano: 2005 },
{ nome: "Widiney", ano: 2007 },
{ nome: "Juliana", ano: 2008 }
];

const anoAtual = 2024;

const pessoaMaiorDeIdade = pessoas.find(pessoa => (anoAtual - pessoa.ano) > 18);

console.log(pessoaMaiorDeIdade);