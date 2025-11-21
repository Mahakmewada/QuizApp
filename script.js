const questions = [
  {
  question: "Which tag is used to create a hyperlink in HTML?",
  answers: [
    { text: "<img>", correct: false },
    { text: "<a>", correct: true },
    { text: "<link>", correct: false },
    { text: "<href>", correct: false }
  ]
},
{
  question: "Which HTML tag is used to display an image?",
  answers: [
    { text: "<image>", correct: false },
    { text: "<pic>", correct: false },
    { text: "<img>", correct: true },
    { text: "<src>", correct: false }
  ]
},
{
  question: "Which CSS property is used to change text color?",
  answers: [
    { text: "font-color", correct: false },
    { text: "color", correct: true },
    { text: "text-color", correct: false },
    { text: "foreground", correct: false }
  ]
},
{
  question: "Which HTML tag creates the largest heading?",
  answers: [
    { text: "<h6>", correct: false },
    { text: "<heading>", correct: false },
    { text: "<h1>", correct: true },
    { text: "<title>", correct: false }
  ]
},
{
  question: "Which CSS property controls the font size?",
  answers: [
    { text: "font-size", correct: true },
    { text: "text-size", correct: false },
    { text: "size", correct: false },
    { text: "font-style", correct: false }
  ]
},
{
  question: "Which JavaScript keyword declares a variable?",
  answers: [
    { text: "var", correct: true },
    { text: "make", correct: false },
    { text: "declare", correct: false },
    { text: "new", correct: false }
  ]
},
{
  question: "Which attribute provides alternative text for an image?",
  answers: [
    { text: "title", correct: false },
    { text: "alt", correct: true },
    { text: "src", correct: false },
    { text: "desc", correct: false }
  ]
},
{
  question: "Which tag inserts a line break?",
  answers: [
    { text: "<br>", correct: true },
    { text: "<lb>", correct: false },
    { text: "<break>", correct: false },
    { text: "<hr>", correct: false }
  ]
},
{
  question: "Which method shows a popup alert in JavaScript?",
  answers: [
    { text: "popup()", correct: false },
    { text: "alert()", correct: true },
    { text: "message()", correct: false },
    { text: "warn()", correct: false }
  ]
},
{
  question: "Which tag is used to create an ordered list?",
  answers: [
    { text: "<ul>", correct: false },
    { text: "<ol>", correct: true },
    { text: "<li>", correct: false },
    { text: "<list>", correct: false }
  ]
},
{
  question: "Which tag creates a table row?",
  answers: [
    { text: "<td>", correct: false },
    { text: "<tr>", correct: true },
    { text: "<table>", correct: false },
    { text: "<row>", correct: false }
  ]
},
{
  question: "Which CSS property sets the background color?",
  answers: [
    { text: "bg-color", correct: false },
    { text: "background-color", correct: true },
    { text: "color-bg", correct: false },
    { text: "background-style", correct: false }
  ]
},
{
  question: "Which tag holds the title shown on the browser tab?",
  answers: [
    { text: "<header>", correct: false },
    { text: "<meta>", correct: false },
    { text: "<title>", correct: true },
    { text: "<head>", correct: false }
  ]
},
{
  question: "Which keyword prevents variable changes?",
  answers: [
    { text: "var", correct: false },
    { text: "let", correct: false },
    { text: "const", correct: true },
    { text: "static", correct: false }
  ]
},
{
  question: "Which attribute opens a link in a new tab?",
  answers: [
    { text: "window='_new'", correct: false },
    { text: "open='new'", correct: false },
    { text: "target='_blank'", correct: true },
    { text: "tab='new'", correct: false }
  ]
},
{
  question: "Which element is used for bold text?",
  answers: [
    { text: "<em>", correct: false },
    { text: "<strong>", correct: true },
    { text: "<bold>", correct: false },
    { text: "<b>", correct: false }
  ]
},
{
  question: "Which CSS property is used to center text?",
  answers: [
    { text: "align", correct: false },
    { text: "text-align", correct: true },
    { text: "center", correct: false },
    { text: "font-align", correct: false }
  ]
},
{
  question: "Which JavaScript operator checks both value and type?",
  answers: [
    { text: "==", correct: false },
    { text: "=", correct: false },
    { text: "===", correct: true },
    { text: "!==", correct: false }
  ]
},
{
  question: "Which HTML element contains all visible content?",
  answers: [
    { text: "<content>", correct: false },
    { text: "<display>", correct: false },
    { text: "<body>", correct: true },
    { text: "<main>", correct: false }
  ]
},
{
  question: "Which function is used to print something in the browser console?",
  answers: [
    { text: "log()", correct: false },
    { text: "console.print()", correct: false },
    { text: "console.log()", correct: true },
    { text: "print()", correct: false }
  ]
}
]; 

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
} 

function showQuestion(){
  resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". "+ currentQuestion.question;
    


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
          button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

} 

function resetState(){
  nextButton.style.display= "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
} 

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;

  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.
  length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();

  }else{
    startQuiz();
  }
});
startQuiz();



