//let não podemos podemos ter outro let de mesmo nome

let aluno = 'Eduardo';
let aluna = 'Beatriz';

var botaoLigado = true

console.log(aluno)
console.log(typeof aluna)
console.log(typeof botaoLigado)

var celulares = ['Samsung', 'LG', 'Motorola', 'Xiaomi'];
console.log(celulares[1])

var frutas = ['Abacaxi', 'Maçã', 'Laranja', 'Melão', 'Uva', 'Banana', 'Kiwi', 'Morango'];
var acessandoFruta3 = frutas[2]
var acessandoFruta7 = frutas[7]
var acessandoaUva = frutas[4]
frutas.splice(5)
frutas.push('Pipoca')
frutas.unshift('Pitaya')
frutas.shift(2)

console.log("Vamos acessar a fruta número 7 que é o "+ acessandoFruta7+ ". e a fruta número 3 que é a "+acessandoFruta3)
console.log(acessandoaUva)
console.log(frutas)


