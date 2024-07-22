let cursos = [
    {nome: "Inglês", preco: 2500, carga_horaria:160},
    {nome: "Espanhol", preco: 1500, carga_horaria:110},
    {nome: "Francês", preco: 3600, carga_horaria:200},
    {nome: "Chinês", preco: 5500, carga_horaria:400},
    {nome: "Alemão", preco: 3800, carga_horaria:230}
];

for (let contador = 0; contador < cursos.length; contador++) {
   console.log(cursos[contador]);
   let nome_do_curso = cursos[contador].nome;
   let preco_do_curso = cursos[contador].preco;
   let carga_horaria_do_curso = cursos[contador].carga_horaria;

   let preco_por_hora = preco_do_curso / carga_horaria_do_curso;

   console.log("O curso "+ nome_do_curso);
   console.log("Possui carga horária de "+ carga_horaria_do_curso);
   console.log("Preço do curso "+ preco_do_curso); 

if(preco_por_hora >= 15) {
    console.log("Hora/aula superior a R$15,00 por aula.")
} else {
    console.log("Hora/aula inferior a R$15,00 por aula.")
}
}

