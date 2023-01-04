// A software should be developed where, automatically questions will be generated for young children. The questions will be on addition, subtraction, multiplication, division and division. And any questions should come after each answer submission. Any question of addition, subtraction, multiplication, division should come up

//Problem Solving step


//Randomly Genarate number and arithmitik operator
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
let randoWord = ['Sum', 'Susubtract', 'multiply', 'divided'];

const inputEl = document.querySelector('.input_btn');
const formEl = document.querySelector('.form');

const upateScore = document.querySelector('.score');

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}


upateScore.innerText = `Score: ${score}`;

let generatedRandom = randoWord[Math.floor(Math.random() * randoWord.length)];

const question = document.querySelector('.question');
question.innerText = `What is ${num1} ${generatedRandom} by ${num2} ?`;





let correctAns = null;

switch (generatedRandom) {
    case randoWord[0]:
        correctAns = num1 + num2
        break;

    case randoWord[1]:
        correctAns = num1 - num2
        break;
    case randoWord[2]:
        correctAns = num1 * num2
        break;
    case randoWord[3]:
        correctAns = num1 / num2
        break;

    default:
        break;
}




formEl.addEventListener("submit", () =>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateLocacStorage();
    }else{
        score--;
        updateLocacStorage();
    }
   
})

function updateLocacStorage (){
    localStorage.setItem("score", JSON.stringify(score))
}


