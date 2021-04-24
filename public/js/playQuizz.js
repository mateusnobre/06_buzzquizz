

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

function quizz1(resposta) {
    console.log(resposta.data);

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
                <div class="reiniciarQuizz"><h5>Reiniciar Quizz</h5></div>
                <div class="voltar"><h5>Voltar para home</h5></div>
            </div>
        </div>
    </div>
    `;

    let numeroPerguntas = resposta.data.questions.length;
    for(let i = 0; i<numeroPerguntas; i++){

    var elemento = document.querySelector(".perguntas");
    elemento.innerHTML += `
    <div class="pergunta">
                    <div class="topoPergunta azul">
                        <h3>${resposta.data.questions[i].title}</h3>
                    </div>
                    <div class="faixaPergunta">
                        <div class="alternativa">
                            <img src="${resposta.data.questions[i].answers[0].image}">
                            <h4>${resposta.data.questions[i].answers[0].text}</h4>
                        </div>
                        <div class="alternativa">
                            <img src="${resposta.data.questions[i].answers[1].image}">
                            <h4>${resposta.data.questions[i].answers[1].text}</h4>
                        </div>
                    </div>

                    <div class="faixaPergunta">
                        <div class="alternativa">
                            <img src="${resposta.data.questions[i].answers[2].image}">
                            <h4>${resposta.data.questions[i].answers[2].text}</h4>
                        </div>
                        <div class="alternativa">
                            <img src="${resposta.data.questions[i].answers[3].image}">
                            <h4>${resposta.data.questions[i].answers[3].text}</h4>
                        </div>
                    </div>
            </div>
    `;
    }

}
