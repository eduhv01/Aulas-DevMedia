let linguagem_de_programacao = "JavaScript";

let stack = "front-end";

switch (stack) {
    case "back-end":
        console.log(`Estuda Node.js para programação ${stack} em ${linguagem_de_programacao}`);
        break;
    case "front-end":
        console.log(`Estuda react para programação ${stack} em ${linguagem_de_programacao}`);
        break;
    case "mobile":
        console.log(`Estuda React Native para programação ${stack} em ${linguagem_de_programacao}`);
    default:
        console.log(`Tecnlogia indisponível para ${stack} em ${linguagem_de_programacao}`)
        break;
}