
function carregarQuizzes() {
    const requisicaoQuizzes = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes');
    requisicaoQuizzes.then(quizzes);
}

carregarQuizzes();

let idGlobal = 0;

function quizzes(resposta) {
    idGlobal = resposta.data[i].id;
    let trio = 0;
    for (let i = 0; i < resposta.data.length; i++) {

        if (trio == 0) {
            const elemento = document.querySelector(".todosQuizzes");
            elemento.innerHTML += `
            <div class="faixa">
                <div class="item primeiro" onclick="carregarQuizz(${resposta.data[i].id})">
                    <img src="${resposta.data[i].image}">
                    <h4>${resposta.data[i].title}</h4>
                </div>
        
            </div>
            `;
            trio ++;
        }

        else if (trio == 1) {
            const elemento = document.querySelector(".todosQuizzes");
            elemento.lastElementChild.innerHTML += `
            <div class="item segundo" onclick="carregarQuizz(${resposta.data[i].id})">
                <img src="${resposta.data[i].image}">
                <h4>${resposta.data[i].title}</h4>
            </div>
        `;
        trio ++;
        }
        else if (trio == 2) {
            const elemento = document.querySelector(".todosQuizzes");
            elemento.lastElementChild.innerHTML += `
            <div class="item terceiro" onclick="carregarQuizz(${resposta.data[i].id})">
                <img src="${resposta.data[i].image}">
                <h4>${resposta.data[i].title}</h4>
            </div>
        `;
        trio =0;
        }

    }


}
