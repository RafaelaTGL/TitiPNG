
const dataInicial = new Date("2024-04-01T00:00:00").getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = agora - dataInicial; 

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerHTML = `${dias} dias`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
