var total = 29.99
var desconto = 9.99
var precoFinal = total - desconto
console.log(precoFinal)


var produto = 'Notebook';
var preço = 1899.99
var desconto = 200
  
var total = function(preço, desconto) {
    return preço - desconto;
}
console.log(total(preço,desconto))

var total = function(preço, desconto){
    return(preço - desconto);
}
console.log(total(preço - desconto))