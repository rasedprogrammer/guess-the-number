let guesses = [];

let currentNumber = getRandomNumber();

window.onload = function (){
  document.getElementById("number-submit").addEventListener('click', playGame);
  document.getElementById("reset-game").addEventListener('click', initGame);
};

function playGame(){
  let numberGuess = document.getElementById('number-guess').value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function getRandomNumber (){
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

function saveGuessHistory (guess) {
  guesses.push(guess);
}

function displayResult (numberGuess){
  if(numberGuess > currentNumber){
    return showNumberAbove ();
  }else if(numberGuess < currentNumber){
    return showNumberBelow ();
  }else{
    return showYouWon ();
  }
}

function initGame () {
  currentNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();

}

function displayHistory (){
  let index = guesses.length -1 ;
  let list = "<ul class='list-group'>"
  while (index >= 0) {
    list += "<li class='list-group-item'>"+"You guessed " + guesses[index] + "</li>";
    index -= 1;
  }
  list += "</ul>"
  document.getElementById("history").innerHTML = list;
}

function getDialog (dialogText, text){
  let dialog;
  switch (dialogText) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='aler'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='aler'>"
      break;
    default:
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon (){
  const text= "Awesome Job, You got it!!!!"
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}
function showNumberAbove (){
  const text= "Your guess is too High!!!!!"
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
function showNumberBelow (){
  const text= "Your guess is too Low!!!!!!"
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}