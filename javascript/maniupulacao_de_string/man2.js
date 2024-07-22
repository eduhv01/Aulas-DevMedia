let cep = "580770-72";
let nome = "Eduardo Honório";

console.log(`${cep} o cep possui ${cep.length} caracteres.`);
console.log(`O nome ${nome} possui caractere porem o espaço entre o nome e sobrenome tambem é considerado caractere, assim possuindo ${nome.length} caracteres.`);

if(cep.length == 9) {
    console.log("O cep está correto, todo cep deve possuir 9 carcteres.")
} else {
    console.log("O cep deve possuir 9 caracteres.")
}