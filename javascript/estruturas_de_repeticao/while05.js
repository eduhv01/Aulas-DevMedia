let numeros = [10, 5, 7, 8, 9, 6, 12, 4];

let total_impares = 0;
let total_pares = 0;

let contador = 0;

while(contador < numeros.length) {
    if (numeros[contador] % 2 == 0) {
        total_pares++;
    } else {
        total_impares++
    }
    contador++
}
console.log("Total de ímpares "+ total_impares);
console.log("Total de pares "+ total_pares);