import entradaDeDados from 'readline-sync';

console.log("Calculadora com soma de dois números");

let idade = entradaDeDados.question("Digite sua idade: ")
console.log("Então sua idada é "+ idade+ ".")

if(idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}