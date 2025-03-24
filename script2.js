const perguntas = [
    {
        pergunta: "Quando a gente começou a namorar?",
        opcoes: ["Não sei", "01/04/2024", "29/03/2024"],
        resposta: "01/04/2024"
    },
    {
        pergunta: "Complete: Te amo...",
        opcoes: ["Mais", "Quantidade alta", "Gay"],
        resposta: "Quantidade alta"
    },
    {
        pergunta: "Qual é o pior agente do Valorant?",
        opcoes: ["Deadlock", "Sova", "Yoru"],
        resposta: "Deadlock"
    },
    {
        pergunta: "Quem falou 'Eu te amo' primeiro?",
        opcoes: ["Rafa", "Titi", "A Maisa que você disse que amava"],
        resposta: "Rafa"
    },
    {
        pergunta: "O Meruem é?",
        opcoes: ["Poggers", "Overrated", "Tanajura"],
        resposta: "Overrated"
    },
    {
        pergunta: "Segundo sua namorada, qual o melhor champ do LoL?",
        opcoes: ["Nunu", "Kayn", "Teemo"],
        resposta: "Teemo"
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const perguntaObj = perguntas[perguntaAtual];
    document.getElementById("pergunta").textContent = perguntaObj.pergunta;

    const opcoesContainer = document.getElementById("opcoes");
    opcoesContainer.innerHTML = "";

    perguntaObj.opcoes.forEach(opcao => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.onclick = () => verificarResposta(botao, opcao);
        opcoesContainer.appendChild(botao);
    });

    document.getElementById("resultado").textContent = "";
    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;
    

    const botaoProxima = document.getElementById("botaoProxima");
    botaoProxima.style.display = "none";
    botaoProxima.disabled = true;
}

function verificarResposta(botaoClicado, respostaEscolhida) {
    const perguntaObj = perguntas[perguntaAtual];
    const resultado = document.getElementById("resultado");

    if (respostaEscolhida === perguntaObj.resposta) {
        resultado.textContent = "Boa👍";
        resultado.style.color = "green";
        botaoClicado.style.backgroundColor = "green";
        pontuacao++;
    } else {
        resultado.textContent = "Paia👎";
        resultado.style.color = "red";
        botaoClicado.style.backgroundColor = "red";
    }

    document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;


    document.querySelectorAll(".opcao").forEach(botao => {
        botao.disabled = true;
    });


    const botaoProxima = document.getElementById("botaoProxima");
    botaoProxima.style.display = "block";
    botaoProxima.disabled = false;
}

function proximaPergunta() {
    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        document.getElementById("pergunta").textContent = `Acabou, Você fez ${pontuacao} pontos.`;
        document.getElementById("opcoes").innerHTML = "";
        document.getElementById("resultado").textContent = "Boa!";
        document.getElementById("botaoProxima").style.display = "none";


        const botaoReiniciarExistente = document.getElementById("botaoReiniciar");
        if (botaoReiniciarExistente) botaoReiniciarExistente.remove();

        const reiniciarBotao = document.createElement("button");
        reiniciarBotao.textContent = "Reiniciar";
        reiniciarBotao.id = "botaoReiniciar";
        reiniciarBotao.onclick = () => {
            perguntaAtual = 0;
            pontuacao = 0;
            carregarPergunta();
            reiniciarBotao.remove();
        };

        document.getElementById("opcoes").appendChild(reiniciarBotao);
    }
}


carregarPergunta();