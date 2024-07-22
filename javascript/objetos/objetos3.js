 var produto = {
    nome: "cabo_hdmi",
    id: 40,
    preço: 99.99
};
console.log(produto);

var aluno1 = {
    nome: 'Eduardo',
    peso: 200,
    altura: 1.65
};

var aluno11 = aluno1.peso;
var aluno12 = aluno1.altura;
var imc = aluno11/ (aluno12 * aluno12);

if (imc <= 18.5) {
    console.log("Seu imc é de "+imc.toFixed(2) +" sua classificação é magreza.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu imc é de "+imc.toFixed(2) +" sua classificação é normal.");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Seu imc é de "+imc.toFixed(2) +" sua classificação é sobrepeso.");
} else if (imc >= 30.0 && imc <= 39.9) {
    console.log("Seu imc é de "+imc.toFixed(2) +" sua classificação é obesidade.");
} else {
    console.log("Seu imc é de "+imc.toFixed(2) +" sua classificação é obesidade grave.");
}
