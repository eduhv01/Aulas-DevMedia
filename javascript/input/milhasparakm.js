import milhasparakm from 'readline-sync';

console.log("Vamos fazer a conversão de milhas para KM");

let milhas = milhasparakm.question("Digite numero em milhas: ")

let conversor = milhas * Number(1.60934);
let conversorArredondado = Math.round(conversor)
console.log("Seus reaultado é = "+ conversorArredondado)