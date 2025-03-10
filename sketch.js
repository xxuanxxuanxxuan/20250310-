let question, radio, submitButton, nextButton, retryButton;
let result = "";
let resultColor = 0;
let currentQuestion = 0;
let correctCount = 0;
let incorrectCount = 0;
const questions = [
  { q: "請問下列哪一個顏色的代碼是 #fefae0？", options: ["#fefae0", "#fefae1", "#fefad0"], answer: "#fefae0" },
  { q: "請問下列哪一個顏色的代碼是 #000000？", options: ["#000000", "#010101", "#111111"], answer: "#000000" },
  { q: "請問下列哪一個顏色的代碼是 #ffffff？", options: ["#ffffff", "#fffffe", "#fffffd"], answer: "#ffffff" },
  { q: "請問下列哪一個顏色的代碼是 #ff0000？", options: ["#ff0000", "#ff0001", "#ff0010"], answer: "#ff0000" },
  { q: "請問下列哪一個顏色的代碼是 #00ff00？", options: ["#00ff00", "#00ff01", "#00ff10"], answer: "#00ff00" }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#fefae0");

  question = createP("");
  question.style('font-size', '24px');
  question.style('text-align', 'center');
  question.position(windowWidth / 2 - 200, windowHeight / 2 - 150);
  
  radio = createRadio();
  radio.style('font-size', '20px');
  radio.style('text-align', 'center');
  radio.position(windowWidth / 2 - 200, windowHeight / 2 - 50);
  
  submitButton = createButton("送出");
  submitButton.style('font-size', '20px');
  submitButton.position(windowWidth / 2 - submitButton.elt.offsetWidth / 2, windowHeight / 2);
  submitButton.mousePressed(checkAnswer);

  nextButton = createButton("下一題");
  nextButton.style('font-size', '20px');
  nextButton.position(windowWidth / 2 - nextButton.elt.offsetWidth / 2, windowHeight / 2 + 50);
  nextButton.mousePressed(nextQuestion);
  nextButton.hide();

  retryButton = createButton("重新作答");
  retryButton.style('font-size', '20px');
  retryButton.position(windowWidth / 2 - retryButton.elt.offsetWidth / 2, windowHeight / 2 + 50);
  retryButton.mousePressed(retryQuestion);
  retryButton.hide();

  loadQuestion();
}

function draw() {
  background("#fefae0");
  textSize(32);
  fill(resultColor);
  textAlign(CENTER, CENTER);
  text(result, windowWidth / 2, windowHeight / 2 + 100);

  textSize(16);
  fill(0);
  textAlign(LEFT, TOP);
  text(`答對: ${correctCount} 題, 答錯: ${incorrectCount} 題`, 10, 10);
  text("林品萱412730144", 10, 30);
}

function checkAnswer() {
  if (radio.value() === questions[currentQuestion].answer) {
    result = "答對了！";
    resultColor = color(0, 128, 0); // 深綠色
    correctCount++;
    nextButton.show();
  } else {
    result = "答錯了！";
    resultColor = color(255, 0, 0); // 紅色
    incorrectCount++;
    retryButton.show();
  }
  submitButton.hide();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
    result = "";
    resultColor = 0;
    submitButton.show();
    nextButton.hide();
    retryButton.hide();
  } else {
    result = "測驗結束！";
    resultColor = color(0, 0, 255); // 藍色
    nextButton.hide();
    retryButton.hide();
  }
}

function retryQuestion() {
  result = "";
  resultColor = 0;
  submitButton.show();
  retryButton.hide();
}

function loadQuestion() {
  question.html(questions[currentQuestion].q);
  radio.html('');
  questions[currentQuestion].options.forEach(option => radio.option(option));
}
