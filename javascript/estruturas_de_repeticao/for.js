let notas = [6,7,7];

let soma_notas = 0;
let quantidade = 3;

for (let contador = 0; contador < notas.length; contador++) {
    soma_notas = soma_notas + notas[contador];
    
}

let media = soma_notas / quantidade;

if (media >=7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado")
};