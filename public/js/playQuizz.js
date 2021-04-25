

function carregarQuizzes() {
    const requisicaoQuizzes = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes');
    requisicaoQuizzes.then(quizzes);
}



function quizzes(resposta) {
    console.log(resposta.data);
}

carregarQuizz1();

function carregarQuizz1() {
    const requisicaoQuizz = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/1');
    requisicaoQuizz.then(quizz1);
}

var limitador = [];
var solucoes = [];
let acertos = 0;
let contador = 0;
let numeroPerguntas = 0;
let score = 0;

var conteudoGlobal = [];

function quizz1(resposta) {
    console.log(resposta.data);

    conteudoGlobal = resposta.data;

    var resetar = document.querySelector(".background");

    resetar.innerHTML =
        `
    <div class="tela2">
        <div class="tituloQuizz">
            <h2>${resposta.data.title}</h2>
        </div>
        <div class="fundo">
            <div class="containerQuizz">
            <div class="perguntas">
            </div>
                
            </div>
        </div>
    </div>
    `;



    numeroPerguntas = resposta.data.questions.length;

    for (let j = 0; j < numeroPerguntas; j++) {
        limitador.push(0);

        for (let k = 0; k < 4; k++) {
            if (resposta.data.questions[numeroPerguntas - 1 - j].answers[k].isCorrectAnswer == true) {
                solucoes.push(k);
            }
        }

    }

    alert(solucoes);

    for (let i = 0; i < numeroPerguntas; i++) {

        var elemento = document.querySelector(".perguntas");
        elemento.innerHTML += `
    <div class="pergunta">
                    <div class="topoPergunta azul">
                        <h3>${resposta.data.questions[i].title}</h3>
                    </div>
                    <div class="faixaPergunta">
                        <div class="alternativa q${i} a0">
                            <img src="${resposta.data.questions[i].answers[0].image}" onclick="escolherAlternativa(${i},0)">
                            ${resposta.data.questions[i].answers[0].text}
                        </div>
                        <div class="alternativa q${i} a1">
                            <img src="${resposta.data.questions[i].answers[1].image}" onclick="escolherAlternativa(${i},1)">
                            ${resposta.data.questions[i].answers[1].text}
                        </div>
                    </div>

                    <div class="faixaPergunta">
                        <div class="alternativa q${i} a2">
                            <img src="${resposta.data.questions[i].answers[2].image}" onclick="escolherAlternativa(${i},2)">
                            ${resposta.data.questions[i].answers[2].text}
                        </div>
                        <div class="alternativa q${i} a3">
                            <img src="${resposta.data.questions[i].answers[3].image}" onclick="escolherAlternativa(${i},3)">
                            ${resposta.data.questions[i].answers[3].text}
                        </div>
                    </div>
            </div>
    `;
    }

}


function escolherAlternativa(questao, alternativa) {
    if (limitador[questao] == 0) {
        var a0 = document.querySelector(".a0.q" + questao);
        a0.classList.add("apagado");
        a0.classList.add("alternativaErrada");
        var a1 = document.querySelector(".a1.q" + questao);
        a1.classList.add("apagado");
        a1.classList.add("alternativaErrada");
        var a2 = document.querySelector(".a2.q" + questao);
        a2.classList.add("apagado");
        a2.classList.add("alternativaErrada");
        var a3 = document.querySelector(".a3.q" + questao);
        a3.classList.add("apagado");
        a3.classList.add("alternativaErrada");


        var elemento = document.querySelector(".q" + questao + ".a" + alternativa);
        elemento.classList.remove("apagado");

        var texto = document.querySelector(".q" + questao + ".a" + solucoes[questao]);
        texto.classList.remove("alternativaErrada");
        texto.classList.add("alternativaCerta");

        if (alternativa == solucoes[questao]) {
            acertos++;
        }

        limitador[questao]++;
        contador++;
    }



    let nivel = {};

    if (contador != 0 && contador == numeroPerguntas) {
        score = Math.floor(100 * (acertos / contador));
        exibirResultado(score);


    }

}


function exibirResultado(score) {
    for (let m = 0; m < conteudoGlobal.levels.length; m++) {
        if (score >= conteudoGlobal.levels[m].minValue) {
            nivel = conteudoGlobal.levels[m];
        }
    }
    alert(nivel.title);

    let elemento = document.querySelector(".containerQuizz");
    elemento.innerHTML += `
         <div class="resultado">
                    <div class="topoResultado vermelha">
                        <h3>${score}% de acerto: ${nivel.title}</h3>
                    </div>

                    <div class="recados">
                        <img src="${nivel.image}">
                        ${nivel.text}
                    </div>

         </div>

         <div class="reiniciarQuizz"><h5>Reiniciar Quizz</h5></div>
        <div class="voltar"><h5>Voltar para home</h5></div>
    
    `;

}




