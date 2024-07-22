const idade = 18; 
let contador = 0;

while(contador < 10) {
    contador++;
    if(contador === 1) {
        console.log("Você tem "+ contador +" segundo para sair daqui")
        continue;
    } else if (contador === 5) {
        console.log("Você tem "+ contador +" segundos para sair daqui");
        break;
    }
    console.log("Você tem "+ contador +" segundos para sair daqui");
};