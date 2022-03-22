//store question text, options and answers in an array
const questions = [
  {
    questionText: "Koks tai paukštis?",
    src: "./quiz-game-img/p2.jpg",
    options: ["1. Gandras", "2. Pelėda", "3. Žvirblis", "4. Gegutė"],
    answer: "4. Gegutė",
  },
  {
    questionText: "Koks tai paukštis?",
    src: "./quiz-game-img/p3.jpg",
    options: [
      "1. Pelėda",
      "2. Gandras",
      "3. Gegutė",
      "4. Tai ne paukštis!",
    ],
    answer: "1. Pelėda",
  },
  {
    questionText: "Koks tai paukštis Koks tai paukštis? Koks tai paukštis??",
    src: "./quiz-game-img/10.jpg",
    options: ["1. Gandras", "2. Pelėda", "3. Žvirblis", "4. Gegutė"],
    answer: "4. Gegutė",
  },
  {
    questionText: "Koks tai paukštis? Koks tai paukštis? Koks tai paukštis? Koks tai paukštis?",
    src: "./quiz-game-img/1.jpg",
    options: [
      "1. Pelėda",
      "2. Gandras",
      "3. Gegutė",
      "4. Tai ne paukštis!",
    ],
    answer: "1. Pelėda",
  },
  {
    questionText: "Koks tai paukštis? Koks tai paukštis?",
    src: "./quiz-game-img/2.jpg",
    options: ["1. Gandras", "2. Pelėda", "3. Žvirblis", "4. Gegutė"],
    answer: "4. Gegutė",
  },
  {
    questionText: "Koks tai paukštis?",
    src: "./quiz-game-img/3.jpg",
    options: [
      "1. Pelėda",
      "2. Gandras",
      "3. Gegutė",
      "4. Tai ne paukštis!",
    ],
    answer: "1. Pelėda",
  },
  {
    questionText: "Koks tai paukštis?",
    src: "./quiz-game-img/5.jpg",
    options: ["1. Gandras", "2. Pelėda", "3. Žvirblis", "4. Gegutė"],
    answer: "4. Gegutė",
  },
  {
    questionText: "Koks tai paukštis?",
    src: "",
    options: [
      "1. Pelėda",
      "2. Gandras",
      "3. Gegutė",
      "4. Tai ne paukštis!",
    ],
    answer: "1. Pelėda",
  },
  {
    questionText: "Koks tai paukštis?",
    src: "",
    options: ["1. Gandras", "2. Pelėda", "3. Žvirblis", "4. Gegutė"],
    answer: "4. Gegutė",
  },
  {
    questionText: "Koks tai paukštis?",
    src: "",
    options: [
      "1. Pelėda",
      "2. Gandras",
      "3. Gegutė",
      "4. Tai ne paukštis!",
    ],
    answer: "1. Pelėda",
  }
  
];

  //select each card div by id and assign to variables
  const startCard = document.getElementById("start-card");
  const imageCard = document.getElementById("image-card");
  const questionCard = document.getElementById("question-card");
  const quizOption = document.getElementById("quiz-options");
  const questionText = document.getElementById("question-text");
  const countCard = document.getElementById("count-card");
  const endButton1 = document.getElementById("end-button1")
  const startContainer = document.getElementById("start-container");
  const answerContainer = document.getElementById("answ-container");
  const resultDiv = document.getElementById("result-div");
  const resultText = document.getElementById("result-text");
  const containerColor = document.getElementById("container-color")


  //these variables are required globally
    var intervalID;
    var currentQuestion;
    var correctAnswers = 0;
    var displayNumbers = 1;

    document.getElementById("start-button").addEventListener("click", startQuiz);
    document.getElementById("end-button").addEventListener("click",reloadPage);
    document.getElementById("end-button1").addEventListener("click",reloadPage);
    
    function reloadPage(){
      location.reload()
    }

  // program started after push start-button
    function startQuiz() {
        imageCard.classList.remove("d-none");
        questionCard.classList.remove("d-none");
        quizOption.classList.remove("d-none");
        questionText.classList.remove("d-none");
        countCard.classList.remove("d-none");
        startContainer.classList.add("d-none");
        endButton1.classList.remove("d-none");
        containerColor.classList.add("background-color")

        countCard.textContent =displayNumbers + "/10"

        //assign 0 to currentQuestion when start button is clicked, then display the current question on the page
        currentQuestion = 0;
        // displayQuestion();
       displayQuestion()
      }

    //display the question and answer options for the current question
    function displayQuestion() {

        let question = questions[currentQuestion];
        let options = question.options;
    
        let h2QuestionElement = document.getElementById("question-text");
        h2QuestionElement.textContent = question.questionText;
        let imageElement = document.getElementById("imagess");
        imageElement.src = questions[currentQuestion].src
       
    
        for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let optionButton = document.getElementById("option" + i);
        optionButton.textContent = option;
        }
    }

//behaviour when an answer button is clicked: click event bubbles up to div with id "quiz-options"
//eventObject.target identifies the specific button element that was clicked on
document.getElementById("quiz-options").addEventListener("click", checkAnswer);

//Compare the text content of the option button with the answer to the current question
function optionIsCorrect(optionButton) {
     return optionButton.textContent === questions[currentQuestion].answer
  }

  // counting true answers
function checkAnswer(eventObject) {
    let optionButton = eventObject.target;
    if (optionIsCorrect(optionButton)) {
        console.log("true");
        correctAnswers++
        console.log(correctAnswers + "teisingai");
    } else {
        console.log("false")
    }

    optionIsCorrect(optionButton);
    
    //increment current question by 1
    currentQuestion++;
    console.log(currentQuestion)

    //increment count display by 1
    displayNumbers++

    //if we have not run out of questions then display next question, else end quiz
    if (currentQuestion < questions.length) {
      countCard.textContent =displayNumbers + "/10"
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz(){
     console.log("end")
    imageCard.setAttribute("hidden", true);
    quizOption.setAttribute("hidden", true);
    countCard.setAttribute("hidden", true);
    endButton1.setAttribute("hidden", true);
    questionText.setAttribute("hidden", true);
    answerContainer.classList.remove("d-none");
    containerColor.classList.remove("background-color")
    
    let correctAnswer = document.getElementById("result-text");       
        if(correctAnswers <= 3){
            correctAnswer.textContent = "Prastokai"
        } else if(correctAnswers > 4 && correctAnswers <= 5 ){
            correctAnswer.textContent = "Normaliai"
        } else if(correctAnswers > 5 && correctAnswers <= 8 ){
            correctAnswer.textContent = "puikiai"
        } else if(correctAnswers > 8 && correctAnswers <= 10 ){
            correctAnswer.textContent = "tu esi tikras pauksciu ekspertas"
        }
  }

