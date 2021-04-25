
function carregarQuizz(idQuizz) {
    var endereco = "https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/" + idQuizz;
    const requisicaoQuizz = axios.get(endereco);
    requisicaoQuizz.then(quizz);
}

var limitador = [];
var solucoes = [];
let acertos = 0;
let contador = 0;
let numeroPerguntas = 0;
let score = 0;

var conteudoGlobal = [];

function quizz(resposta) {
    console.log(resposta.data);

    conteudoGlobal = resposta.data;

    var resetar = document.querySelector(".background");

    resetar.innerHTML =
        `
        <div class="tela1 off">
            <div class="fundo">
                <div class="containerGeral">
                    <div class="blocoCriarQuizz">

                        <h3>Você não criou nenhum<br>quizz ainda :(</h3>
                        <div class="criarQuizz">Criar Quizz</div>

                    </div>


                    <div class="seusQuizzes">
                        <div class="tituloSeusQuizzes">
                            <h2>Seus Quizzes</h2>
                            <ion-icon name="add-circle"></ion-icon>
                        </div>
                        <div class="faixa">
                            <div class="item primeiro">
                                <img src="imgs/potterhead.png">
                                <h4>O quão Potterhead é você?</h4>
                            </div>
                            <div class="item segundo">
                                <img src="imgs/preguica.png">
                                <h4>O quanto você é de boas?</h4>
                            </div>

                        </div>


                    </div>

                    <div class="todosQuizzes">
                        <h2>Todos os Quizzes</h2>
                        <div class="faixa">
                            <div class="item primeiro">
                                <img src="imgs/preguica.png">
                                <h4>O quanto você é de boas?</h4>
                            </div>
                            <div class="item segundo">
                                <img src="imgs/preguica.png">
                                <h4>O quanto você é de boas?</h4>
                            </div>
                            <div class="item segundo">
                                <img src="imgs/preguica.png">
                                <h4>O quanto você é de boas?</h4>
                            </div>
                        </div>
                        <div class="faixa">
                            <div class="item primeiro">
                                <img src="imgs/preguica.png">
                                <h4>O quanto você é de boas?</h4>
                            </div>
                            <div class="item segundo">
                                <img src="imgs/preguica.png">
                                <h4>O quanto você é de boas?</h4>
                            </div>
                            <div class="item segundo">
                                <img src="imgs/preguica.png">
                                <h4>O quanto você é de boas?</h4>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    <div class="tela2">
        <div class="fundo">
        <div class="tituloQuizz">
            <h2>${resposta.data.title}</h2>
        </div>
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
        
        let numeroAlternativas = resposta.data.questions[j].answers.length;


        for (let k = 0; k < numeroAlternativas; k++) {
            if (resposta.data.questions[numeroPerguntas - 1 - j].answers[k].isCorrectAnswer == true) {
                solucoes.push(k);
            }
        }

    }

    setTimeout(exibirPergunta, 500);


}

let i = 0;

function exibirPergunta() {
    let contadorAlternativa = 0;
    var elemento = document.querySelector(".perguntas");
    elemento.innerHTML += `
    <div class="pergunta">
    <div class="topoPergunta azul">
        <h3>${conteudoGlobal.questions[i].title}</h3>
    </div>
    </div>
`;

    for (n = 0; n < conteudoGlobal.questions[i].answers.length; n++) {

        if (contadorAlternativa == 0) {
            elemento.lastElementChild.innerHTML += `
        <div class="faixaPergunta">
            <div class="alternativa q${i} a0">
                <img src="${conteudoGlobal.questions[i].answers[0].image}" onclick="escolherAlternativa(${i},0)">
                ${conteudoGlobal.questions[i].answers[0].text}
            </div>
        </div>
        `;
            contadorAlternativa++;
        }

        else if (contadorAlternativa == 1) {
            elemento.lastElementChild.lastElementChild.innerHTML +=
                `
            <div class="alternativa q${i} a1">
                    <img src="${conteudoGlobal.questions[i].answers[1].image}" onclick="escolherAlternativa(${i},1)">
                    ${conteudoGlobal.questions[i].answers[1].text}
            </div>            
                `;
            contadorAlternativa++;
        }

        else if (contadorAlternativa == 2) {
            if(conteudoGlobal.questions[i].answers.length<3){
                elemento.lastElementChild.innerHTML += `
                <div class="faixaPergunta">
                    <div class="alternativa q${i} a2 vazia">
                    </div>
                </div>
                `;
            }
            else{
            elemento.lastElementChild.innerHTML += `
            <div class="faixaPergunta">
                <div class="alternativa q${i} a2">
                    <img src="${conteudoGlobal.questions[i].answers[2].image}" onclick="escolherAlternativa(${i},2)">
                    ${conteudoGlobal.questions[i].answers[2].text}
                </div>
            </div>
            `;
        }
        contadorAlternativa++;
        }

        else if (contadorAlternativa == 3) {

            if(conteudoGlobal.questions[i].answers.length<4){
                elemento.lastElementChild.lastElementChild.innerHTML += `
                <div class="alternativa q${i} a3 vazia">
                </div>
                `;
            }

            else{

            elemento.lastElementChild.lastElementChild.innerHTML += `
                <div class="alternativa q${i} a3">
                <img src="${conteudoGlobal.questions[i].answers[3].image}" onclick="escolherAlternativa(${i},3)">
                ${conteudoGlobal.questions[i].answers[3].text}
            </div>
                `;
            }
            contadorAlternativa = 0;
        }
    }

    elemento = document.querySelector(".q" + i + ".a1");
    elemento.scrollIntoView();
    i++;
}

function escolherAlternativa(questao, alternativa) {
    if (limitador[questao] == 0) {
        var a0 = document.querySelector(".a0.q" + questao);
        a0.classList.add("apagado");
        a0.classList.add("alternativaErrada");
        var a1 = document.querySelector(".a1.q" + questao);
        a1.classList.add("apagado");
        a1.classList.add("alternativaErrada");
        if(conteudoGlobal.questions[questao].answers.length > 2){
            var a2 = document.querySelector(".a2.q" + questao);
            a2.classList.add("apagado");
            a2.classList.add("alternativaErrada");
        }

        if(conteudoGlobal.questions[questao].answers.length >3){
            var a3 = document.querySelector(".a3.q" + questao);
            a3.classList.add("apagado");
            a3.classList.add("alternativaErrada");

        }
        
        


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


    setTimeout(exibirPergunta, 500);


    let nivel = {};

    if (contador != 0 && contador == numeroPerguntas) {
        score = Math.floor(100 * (acertos / contador));

        setTimeout(exibirResultado, 500);



    }

}


function exibirResultado() {
    for (let m = 0; m < conteudoGlobal.levels.length; m++) {
        if (score >= conteudoGlobal.levels[m].minValue) {
            nivel = conteudoGlobal.levels[m];
        }
    }


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

         <div class="reiniciarQuizz" onclick="recarregar()" ><h5>Reiniciar Quizz</h5></div>
        <div class="voltar"  onclick="irHome()"><h5>Voltar para home</h5></div>
    
    `;


    elemento = document.querySelector(".voltar");
    elemento.scrollIntoView(false);


}


function recarregar() {
    carregarQuizz(idGlobal);
}

function irHome() {

    const ocultar = document.querySelector(".tela2");
    ocultar.classList.add("off");

    const mostrar = document.querySelector(".tela1");
    mostrar.classList.remove("off");

}






