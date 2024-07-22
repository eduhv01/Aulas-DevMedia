import area from 'readline-sync';
console.log("Vamos calcular a area do triangulo");

let base = area.question("Informe o comprimento da base: ");
let altura = area.question("Informe a altura: ");
let calculo = (base * altura) / 2;

console.log("O comprimento da base informada foi "+ base);
console.log("A altura informada foi "+ altura);
console.log("O resultado é = "+ calculo)