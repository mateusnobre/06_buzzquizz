let questionTemplate = `
            <div class="question">
                <div class="section">
                    Pergunta 1
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="Texto da pergunta">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="Cor de fundo da pergunta">
                </div>
                <div class="section">
                    Resposta Correta
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="Resposta correta">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="URL da imagem">
                </div>
                </div>
                <div class="section">
                    Respostas Incorretas
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="Resposta incorreta 1">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="URL da imagem 1">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="Resposta incorreta 2">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="URL da imagem 2">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="Resposta incorreta 3">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" value="URL da imagem 3">
                </div>
            </div>
`;
let levelTemplate = ``;

let quizTemplate = {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [
		{
			title: "Título da pergunta 1",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 2",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		},
		{
			title: "Título da pergunta 3",
			color: "#123456",
			answers: [
				{
					text: "Texto da resposta 1",
					image: "https://http.cat/411.jpg",
					isCorrectAnswer: true
				},
				{
					text: "Texto da resposta 2",
					image: "https://http.cat/412.jpg",
					isCorrectAnswer: false
				}
			]
		}
	],
	levels: [
		{
			title: "Título do nível 1",
			image: "https://http.cat/411.jpg",
			text: "Descrição do nível 1",
			minValue: 0
		},
		{
			title: "Título do nível 2",
			image: "https://http.cat/412.jpg",
			text: "Descrição do nível 2",
			minValue: 50
		}
	]
} 
let phaseTitles = document.getElementsByClassName('phaseTitle');
let defineQuizz  = document.querySelector('.defineQuizz');
defineQuizzInputs = defineQuizz.getElementsByClassName("quizzCreationInput");
let levelProgressionButtons = document.getElementsByClassName('.levelProgressionButton');
let defineQuestions  = document.querySelector('.defineQuestions');
let currentLevel = 1;

function phaseProgression() {
    if (currentLevel == 1){
        phaseTitles[0].classList.add('off');
        phaseTitles[1].classList.remove('off');
        levelProgressionButtons[0].classList.add('off');
        levelProgressionButtons[1].classList.remove('off');
        defineQuizz.classList.add('off');
        defineQuestions.classList.remove('off');
    }
    else if (currentLevel == 2){
        currentLevel +=1;
        phaseTitles[1].classList.add('off');
        phaseTitles[2].classList.remove('off');
        levelProgressionButtons[1].classList.add('off');
        levelProgressionButtons[2].classList.remove('off');
        defineQuestions.classList.add('off');
    }
    else if (currentLevel == 3){
        currentLevel +=1;
        phaseTitles[2].classList.add('off');
        phaseTitles[3].classList.remove('off');
        levelProgressionButtons[2].classList.add('off');
        levelProgressionButtons[3].classList.remove('off');
    }
}

