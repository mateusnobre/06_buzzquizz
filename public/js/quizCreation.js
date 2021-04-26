function isValidHttpUrl(string) {
  let url;
  
  try {
    url = new URL(string);
  } catch (_) {
    return false;  
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function isColor(strColor){
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}

function buildLevelTemplate(level) {
    const levelTemplate = `<div class="level">
    <div class="section">
        Nível ${level}
    </div>
    <div class="quizzCreationInput">
        <input type="text" name="" id="" placeholder="Título do nível">
    </div>
    <div class="quizzCreationInput">
        <input type="text" name="" id="" placeholder="% de acerto mínima">
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

function buildQuestionTemplate(questionNumber) {
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

function fillAnswer(text, image, isCorrectAnswer) {
    var answerJSON = {
        text: text,
        image: image,
        isCorrectAnswer: isCorrectAnswer
    };
    return answerJSON
}
function fillQuestion(title, color, answers) {
    var questionJSON = {
        title: title,
        color: color,
        answers: answers
    };
    quizJSON.questions.push(questionJSON);
}
function fillLevel(title, image, text, minValue) {
    var levelJSON = {
        title: title,
        image: image,
        text: text,
        minValue: minValue
    };
    quizJSON.levels.push(levelJSON);
}
function fillQuiz(title, image) {
    quizJSON.title = title;
    quizJSON.image = image;
    console.log(quizJSON);
} 

var quizzTitle = '';
var quizzImageURL = '';
var numberOfLevels = 0;
var numberOfQuestions = 0;


var quizJSON = {
    title: "Título do quizz",
    image: "https://http.cat/411.jpg",
    questions: [],
    levels: []
}

var phaseTitles = document.getElementsByClassName('phaseTitle');
var defineQuizz = document.querySelector('.defineQuizz');
defineQuizzInputs = defineQuizz.getElementsByClassName("quizzCreationInput");
var levelProgressionButtons = document.getElementsByClassName('levelProgressionButton');
var defineQuestions = document.querySelector('.defineQuestions');
var defineLevels = document.querySelector('.defineLevels');
var currentLevel = 1;
var accessQuizzButton = document.querySelector('.accessQuizzButton');
var goHomeButton = document.querySelector('.goHomeButton');
var quizzImage = document.querySelector('.quizzImage');
var blocoCriarQuizz = document.querySelector(".blocoCriarQuizz");
var seusQuizzes = document.querySelector(".seusQuizzes");
var quizCreation = document.querySelector(".quizCreation");
var tela1 = document.querySelector(".tela1");

function phaseProgression() {
    if (currentLevel == 1) {
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
        if (quizzTitle.length < 20 && quizzTitle.length > 65) {
            alert("O título do seu quiz deve ter entre 20 e 65 caracteres");
            document.location.reload();
        }
        else if (!isValidHttpUrl(quizzImageURL)) {
            alert('Insira um URL válida de imagem!');
            document.location.reload();
        }
        else if (numberOfQuestions < 3) {
            currentLevel = 1;
            alert('Seu quizz deve ter pelo menos 3 perguntas!')
            document.location.reload();
        }
        else if (numberOfLevels < 2) {
            currentLevel = 1;
            alert('Seu quizz deve ter pelo menos 2 níveis!')
            document.location.reload();
         }
        defineQuestions.classList.remove('off');
        for (let index = 1; index <= numberOfQuestions; index++) {
            defineQuestions.innerHTML += buildQuestionTemplate(index);
        }

    }
    else if (currentLevel == 2) {
        currentLevel += 1;
        phaseTitles[1].classList.add('off');
        phaseTitles[2].classList.remove('off');
        levelProgressionButtons[1].classList.add('off');
        levelProgressionButtons[2].classList.remove('off');
        defineQuestions.classList.add('off');
        for (let index = 1; index <= numberOfLevels; index++) {
            defineLevels.innerHTML += buildLevelTemplate(index);
        }
        defineLevels.classList.remove("off");
        var questionsHTML = defineQuestions.getElementsByClassName('question');
        var answers = [];
        for (let index = 0; index < questionsHTML.length; index++) {
            var questionInputs = questionsHTML[index].getElementsByTagName("input")
            console.log(questionInputs);
            var questionTitle = questionInputs[0].value;
            var questionColor = questionInputs[1].value;
            var correctAnswerText = questionInputs[2].value;
            var correctAnswerImage = questionInputs[3].value;
            if (questionTitle.length < 20) {
                alert("O título do seu quiz deve ter pelo menos 20 caracteres");
                document.location.reload();
            }
            else if (!isColor(questionColor)) {
                alert("Insira um código hexadecimal válido de cor");
                document.location.reload();
            }
            else if (!isValidHttpUrl(correctAnswerImage)) {
                alert('Insira um URL válida de imagem!');
                document.location.reload();
            }
            else if (correctAnswerText.length == 0) {
                alert("O texto da sua resposta não pode estar vazio");
                document.location.reload();
            }
            answers.push(fillAnswer(correctAnswerText, correctAnswerImage, true));

            var AnswerText = questionInputs[4].value;
            var AnswerImage = questionInputs[5].value;
            if (AnswerText.length == 0) {
                alert("O texto da sua resposta não pode estar vazio");
                document.location.reload();
            }
            else if (!isValidHttpUrl(AnswerImage)) {
                alert('Insira um URL válida de imagem!');
                document.location.reload();
            }
            answers.push(fillAnswer(AnswerText, AnswerImage, false));

            if (!questionInputs[6] && !questionInputs[7]) {
                AnswerText = questionInputs[6].value;
                AnswerImage = questionInputs[7].value;
                if (AnswerText.length == 0) {
                    alert("O texto da sua resposta não pode estar vazio");
                    document.location.reload();
                }
                else if (!isValidHttpUrl(AnswerImage)) {
                    alert('Insira um URL válida de imagem!');
                    document.location.reload();
                }
                answers.push(fillAnswer(AnswerText, AnswerImage, false));
                if (!questionInputs[8] && !questionInputs[9]) {
                    AnswerText = questionInputs[8].value;
                    AnswerImage = questionInputs[9].value;
                    if (AnswerText.length == 0) {
                        alert("O texto da sua resposta não pode estar vazio");
                        document.location.reload();
                    }
                    else if (!isValidHttpUrl(AnswerImage)) {
                        alert('Insira um URL válida de imagem!');
                        document.location.reload();
                    }
                    answers.push(fillAnswer(AnswerText, AnswerImage, false));
                }
            }
            fillQuestion(questionTitle, questionColor, answers);
            answers = []
        }
    }
    else if (currentLevel == 3) {
        currentLevel = 1;
        phaseTitles[2].classList.add('off');
        phaseTitles[3].classList.remove('off');
        levelProgressionButtons[2].classList.add('off');
        defineLevels.classList.add("off");
        accessQuizzButton.classList.remove('off');
        goHomeButton.classList.remove('off');
        quizzImage.classList.remove('off');

        var levels = defineLevels.getElementsByClassName('level');
        var minValues = [];
        for (let index = 0; index < levels.length; index++) {
            var levelInputs = levels[index].getElementsByTagName("input");
            var title = levelInputs[0].value;
            var minValue = levelInputs[1].value;
            var image = levelInputs[2].value;

            var text = levelInputs[3].value;
            if (title.length < 10) {
                alert("O título do seu nível deve ter pelo menos 10 caracteres");
                document.location.reload();
            }
            else if (minValue < 0 || minValue > 100) {
                alert("A % deve estar entre 0 e 100");
                document.location.reload();
            }
            else if (!isValidHttpUrl(image)) {
                alert('Insira um URL válida de imagem!');
                document.location.reload();
            }
            else if (text.length < 30) {
                alert("A descrição do seu nível deve ter pelo menos 30 caracteres");
                document.location.reload();
            }
            minValues.push(minValue);
            fillLevel(title, image, text, minValue);
        }
        if (!minValues.includes(0)) {
            alert("Pelo menos um nível deve ter % de acerto mínima de 0");
            document.location.reload();
        }

        fillQuiz(quizzImage, quizzImageURL);
        quizPost = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes', quizJSON);
        quizPost.then(storeQuizID);
        quizJSON.questions = [];
        quizJSON.levels = [];
    }
}

function createQuizz() {
    tela1.classList.add('off');
    quizCreation.classList.remove('off');
}

function sendQuizz() {
    blocoCriarQuizz.classList.add('off');
    tela1.classList.remove('off');
    seusQuizzes.classList.remove('off');
    quizCreation.classList.add('off');
    blocoCriarQuizz.style.display = "None";
}