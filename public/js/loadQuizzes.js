
function carregarQuizzes() {
    const requisicaoQuizzes = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes');
    requisicaoQuizzes.then(quizzes);
}

carregarQuizzes();


function quizzes(resposta) {
    let trio = 0;
    for (let u = 0; u < resposta.data.length; u++) {

        if (trio == 0) {
            const elemento = document.querySelector(".todosQuizzes");
            elemento.innerHTML += `
            <div class="faixa">
                <div class="item primeiro" onclick="carregarQuizz(${resposta.data[u].id})">
                    <img src="${resposta.data[u].image}">
                    <h4>${resposta.data[u].title}</h4>
                </div>
        
            </div>
            `;
            trio ++;
        }

        else if (trio == 1) {
            const elemento = document.querySelector(".todosQuizzes");
            elemento.lastElementChild.innerHTML += `
            <div class="item segundo" onclick="carregarQuizz(${resposta.data[u].id})">
                <img src="${resposta.data[u].image}">
                <h4>${resposta.data[u].title}</h4>
            </div>
        `;
        trio ++;
        }
        else if (trio == 2) {
            const elemento = document.querySelector(".todosQuizzes");
            elemento.lastElementChild.innerHTML += `
            <div class="item terceiro" onclick="carregarQuizz(${resposta.data[u].id})">
                <img src="${resposta.data[u].image}">
                <h4>${resposta.data[u].title}</h4>
            </div>
        `;
        trio =0;
        }

    }


}
