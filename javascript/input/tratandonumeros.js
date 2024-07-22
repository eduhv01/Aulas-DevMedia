import tratamentoDeNumeros from 'readline-sync';

console.log("Vamso calcular uns números");

let n1 = tratamentoDeNumeros.question("Digite o primeiro numero: ");
let n2 = tratamentoDeNumeros.question("Digite o segundo numero: ");

let calculo = Number(n1) - Number(n2);
console.log(n1 +" - "+ n2 +" = "+ calculo);