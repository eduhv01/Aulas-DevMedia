import dadosUser from 'readline-sync';
console.log("Olá, vamos fazer seu cadastro");

let nome = dadosUser.question("Qual seu nome? ");
let idade = dadosUser.question("Qual sua idade? ");
let profissao = dadosUser.question("Qual sua profissao? ");

var dados = {
    nome: nome,
    idade: idade,
    profissao: profissao
};
console.log(dados)
console.log("Olá "+ nome +" sua idade é "+ idade +" e sua profissao é "+ profissao +".");