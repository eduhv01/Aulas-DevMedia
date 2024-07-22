let numeros = [5, 12, 32, 3, 2, 18, 17, 8];
let contador = 0;

while(contador < numeros.length) {
    if(numeros[contador] > 10) {
        console.log("Número maior que 10 são eles: "+ numeros[contador]);
    }
    contador++;
}