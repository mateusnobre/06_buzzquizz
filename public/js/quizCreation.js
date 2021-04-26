function buildLevelTemplate(level){
    const levelTemplate = `<div class="level">
    <div class="section">
        Nível ${level}
    </div>
    <div class="quizzCreationInput">
        <input type="text" name="" id="" placeholder="Título do nível">
    </div>
    <div class="quizzCreationInput">
        <input type="text" name="" id="" placeholder="URL da imagem do nível">
    </div>
    <div class="quizzCreationInput">
        <input type="text" name="" id="" placeholder="Descrição do nível">
    </div>    
    </div>`;
    return levelTemplate;
}

function buildQuestionTemplate(questionNumber){
    const questionTemplate = `
            <div class="question">
                <div class="section">
                    Pergunta ${questionNumber}
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="Texto da pergunta">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="Cor de fundo da pergunta">
                </div>
                <div class="section">
                    Resposta Correta
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="Resposta correta">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="URL da imagem">
                </div>
                </div>
                <div class="section">
                    Respostas Incorretas
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="Resposta incorreta 1">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="URL da imagem 1">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="Resposta incorreta 2">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="URL da imagem 2">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="Resposta incorreta 3">
                </div>
                <div class="quizzCreationInput">
                    <input type="text" name="" id="" placeholder="URL da imagem 3">
                </div>
            </div>`;
    return questionTemplate
}



function fillAnswer(question, text, image, isCorrectAnswer){
    answerJSON.text = text;
    answerJSON.image = image;
    answerJSON.isCorrectAnswer = isCorrectAnswer;
    question.answers.append(answerJSON)
}
function fillQuestion(quiz, title, text, color, answers){
    questionJSON.title = title;
    questionJSON.text = text;
    questionJSON.color = color;
    for (const answer in answers) {
        fillAnswer(questionJSON, answer.text, answer.image, answer.isCorrectAnswer);
    }
    quiz.questions.append(questionJSON);
}
function fillLevel(quiz, title, image, text, minValue){
    levelJSON.title = title;
    levelJSON.image = image;
    levelJSON.text = text; 
    levelJSON.minValue = minValue;
    quiz.levels.append(levelJSON)
}
function fillQuiz(title, image, questions, levels){
    quizJSON.title = title;
    quizJSON.image = image;
    for (const question in questions) {
        fillQuestion(quizJSON, question, title, color, answers);
    }
    for (const level in levels) {
        fillLevel(quiz, title, image, text, minValue);
    }
}let quizzTitle = '';
let quizzImageURL = '';
let numberOfLevels = 0;
let numberOfQuestions = 0;
let answerJSON = {
            text: "Texto da resposta 1",
            image: "https://http.cat/411.jpg",
            isCorrectAnswer: true
        }
let questionJSON = {
    title: "Título da pergunta 1",
    color: "#123456",
    answers: []
};
let levelJSON = {
    title: "Título do nível 1",
    image: "https://http.cat/411.jpg",
    text: "Descrição do nível 1",
    minValue: 0
};
let quizJSON = {
	title: "Título do quizz",
	image: "https://http.cat/411.jpg",
	questions: [],
	levels: []
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
        defineQuestions.classList.remove('off');    
        for (let index = 1; index <= numberOfQuestions; index++) {
            defineQuestions.innerHTML += buildQuestionTemplate(index);
        }
        questions = defineQuestions.getElementsByClassName('question');
        for (const question in questions) {
            questionInputs = question.getElementsByClassName("input")
            questionTitle = questionInputs[0].value;
            questionColor = questionInputs[1].value;

            correctAnswerText = questionInputs[2].value;
            correctAnswerImage = questionInputs[3].value;
            fillAnswer(questionJSON, correctAnswerText, correctAnswerImage, true);
            
            let AnswerText = questionInputs[4].value;
            let AnswerImage = questionInputs[5].value;
            fillAnswer(questionJSON, AnswerText, AnswerImage, false);
            
            if (questionInputs.length > 5) {
                AnswerText = questionInputs[6].value;
                AnswerImage = questionInputs[7].value;
                fillAnswer(questionJSON, AnswerText, AnswerImage, false);
                if (questionInputs.length > 7) {
                    AnswerText = questionInputs[8].value;
                    AnswerImage = questionInputs[9].value;
                    fillAnswer(questionJSON, AnswerText, AnswerImage, false);
                }
            }
            console.log(questionJSON);
            fillQuestion(quizJSON, questionTitle, questionText, questionColor, answers);
         }

    }
    else if (currentLevel == 2){
        currentLevel +=1;
        phaseTitles[1].classList.add('off');
        phaseTitles[2].classList.remove('off');
        levelProgressionButtons[1].classList.add('off');
        levelProgressionButtons[2].classList.remove('off');
        defineQuestions.classList.add('off');
        for (let index = 1; index <= numberOfLevels; index++) {
            defineLevels.innerHTML += buildLevelTemplate(index);
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

