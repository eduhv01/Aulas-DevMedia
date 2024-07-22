let funcionarios = [
    {id: 1, nome: "Eduardo", habilitado: true},
    {id: 2, nome: "Beatriz", habilitado: true},
    {id: 3, nome: "Arthur", habilitado: true}
];

let contador = 0;
let habilitadoEncontrado = false;

do {
    let funcionario = funcionarios[contador];
    if (funcionario.habilitado == true) {
        console.log("Habilito encontrado: "+ funcionario.nome);
        habilitadoEncontrado = true
        
    }
    contador++
} while (contador < funcionarios.length);

if(!habilitadoEncontrado) {
    console.log("Nenhuma habilitado encontrado.");
}