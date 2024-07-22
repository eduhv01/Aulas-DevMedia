var idade = 17;

if(idade >= 18) {
    console.log("Pode beber")
} else {
    console.log("Não pode beber")
};

var aluno = {
    nome: "Eduardo",
    idade: -999,
    curso: "Sistemas para Internet",
    media: 6
};

if(aluno.media != 7) {
    console.log("É diferente de 7")
} else {
    console.log("É igual a 7")
};

if(aluno.idade <=0 && aluno.idade <= 17) {
    console.log("Menor de idade ")
} else {
    console.log("Maior de idade ")
}

var semaforo = "vermelho";

if(semaforo == "verde") {
    console.log("Pode seguir");
} else if(semaforo == "amarelo") {
    console.log("Atenção");
} else {
    console.log("Pare");
}

var limiteDoCartao = 1000;
var valor = 899.99;

if(limiteDoCartao >= valor) {
    console.log("Compra aprovada");
} else {
    console.log("Compra negada");
}

var diasDeSemana = 6

if(diasDeSemana == 0 || diasDeSemana == 6) {
    console.log("Loja fechada");
} else {
    console.log("Loja aberta");
}