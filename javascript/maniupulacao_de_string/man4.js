let nome = "Eduardo";
let sobrenome = "Honório";
let nome2 = "   Beatriz    ";
let email = "eduardohv1021@gmail.com";

console.log(nome.length);
console.log(sobrenome.length);

console.log(nome.toLowerCase()); //colocar a string toda com letra minuscula.
console.log(sobrenome.toUpperCase()); // colocar a string toda com letra maiuscula.
console.log(nome2.trim()); //tirar os espaços desnecessários da string.

let cep = "58077-072";
let cep2 = "   58077-072   ";

if(cep.trim() == cep2.trim()) {
    console.log("Os dois CEPs informados são iguais.");
} else {
    console.log("Os dos CEPs são diferentes.");
}

console.log(email.padEnd(25, ".")); 
console.log(email.length);