let funcionarios = [
    {id: 1, nome: "Eduardo", habilitado: true},
    {id: 2, nome: "Beatriz", habilitado: false},
    {id: 3, nome: "Arthur", habilitado: false}
];

for (let contador = 0; contador < funcionarios.length; contador++) {
    let funcionario = funcionarios[contador]
if(funcionario.habilitado == true) {
    console.log("O funcionario é ", funcionario.nome)
}  
}