let questionNumber = 1;
let level = 1;
let quizzTitle = '';
let quizzImageURL = '';
let numberOfLevels = 0;
let numberOfQuestions = 0;
let questionTemplate = `
            <div class="question">
                <div class="section">
                    Pergunta ${questionNumber}
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
            </div>`;
let levelTemplate = `<div class="level">
                        <div class="section">
                            Nível ${level}
                        </div>
                        <div class="quizzCreationInput">
                            <input type="text" name="" id="" value="Título do nível">
                        </div>
                        <div class="quizzCreationInput">
                            <input type="text" name="" id="" value="URL da imagem do nível">
                        </div>
                        <div class="quizzCreationInput">
                            <input type="text" name="" id="" value="Descrição do nível">
                        </div>    
                    </div>`;

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
let levelProgressionButtons = document.getElementsByClassName('levelProgressionButton');
let defineQuestions  = document.querySelector('.defineQuestions');
let defineLevels = document.querySelector('.defineLevels');
let currentLevel = 1;
let accessQuizzButton = document.querySelector('.accessQuizzButton');
let goHomeButton = document.querySelector('.goHomeButton');
let quizzImage = document.querySelector('.quizzImage');

function phaseProgression() {
    if (currentLevel == 1){
        currentLevel += 1;
        phaseTitles[0].classList.add('off');
        phaseTitles[1].classList.remove('off');
        levelProgressionButtons[0].classList.add('off');
        levelProgressionButtons[1].classList.remove('off');
        defineQuizz.classList.add('off');
        quizzTitle = defineQuizzInputs[0].querySelector("input").value;
        quizzImageURL = defineQuizzInputs[1].querySelector("input").value;
        numberOfQuestions = defineQuizzInputs[2].querySelector("input").value;
        numberOfLevels = defineQuizzInputs[3].querySelector("input").value;
        for (let index = 0; index < numberOfQuestions; index++) {
            defineQuestions.innerHTML += questionTemplate;
            questionNumber += 1;
        }
        defineQuestions.classList.remove('off');    
    }
    else if (currentLevel == 2){
        currentLevel +=1;
        phaseTitles[1].classList.add('off');
        phaseTitles[2].classList.remove('off');
        levelProgressionButtons[1].classList.add('off');
        levelProgressionButtons[2].classList.remove('off');
        defineQuestions.classList.add('off');
        for (let index = 0; index < numberOfLevels; index++) {
            defineLevels.innerHTML += levelTemplate;
            level += 1;
        }
        defineLevels.classList.remove("off");
    }
    else if (currentLevel == 3){
        currentLevel +=1;
        phaseTitles[2].classList.add('off');
        phaseTitles[3].classList.remove('off');
        levelProgressionButtons[2].classList.add('off');
        defineLevels.classList.add("off");
        accessQuizzButton.classList.remove('off');
        goHomeButton.classList.remove('off');
        quizzImage.classList.remove('off');
    }
}

