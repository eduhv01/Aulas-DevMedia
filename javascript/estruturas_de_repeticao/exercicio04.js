let funcionarios = [
    {id: 1, nome: "Eduardo", habilitado: false},
    {id: 2, nome: "Beatriz", habilitado: false},
    {id: 3, nome: "Deyvid", habilitado: false},
    {id: 4, nome: "Lobo", habilitado: false}
];

let contador = 0;
let habilitadoEncontrado = false;

while(contador < funcionarios.length) {
    let funcionario = funcionarios[contador]
if (funcionario.habilitado == true) {
    console.log("O habilitado é o(a) "+ funcionario.nome);
}
    contador++;
}

if (!habilitadoEncontrado) {
    console.log("Nenhum habilitado encontrado.")
} 


