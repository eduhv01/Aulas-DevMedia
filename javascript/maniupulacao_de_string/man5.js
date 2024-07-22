let nome = "Eduardo Honório de Vasconcelos";
let email = "eduardohv1021@gmail.com";
let numero = "(83)-98671-5415";

let nomeInformacao = "Nome Completo:";
let emailInformacao = "Email:";
let numeroInformacao = "Numero:";

console.log(nomeInformacao + nome.padStart(20, "."));
console.log(emailInformacao + email.padStart(31, "."));
console.log(numeroInformacao + numero.padStart(22, "."));