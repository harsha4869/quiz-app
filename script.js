const quizdb=[
 {
  question: "Q1:What is full form of JTR",  
  a:"john the ripper",
  b:"john the rupper",
  c:"john the reaper",
  d:"jack the ripper", 
  ans:"ans4" 
 },
 {
  question: "Q2:What is full form of HTML",
   a: "Hypertext Markup language",
   b: "hypertest Markup langauage",
   c: "Hynotictest Markup language",
   d: "Hypertext Markdown language",
   ans:"ans1" 
},
{
  question: "Q3:what is full form of POT",
  a:"Prince of tabletennis",
  b:"Prince of tupples",
  c:"Prince of Tennis",
  d:"Prince of Teppist",
  ans:"ans3"
},
{
    question: "Q4:What is full form of FAS",
    a:"Flat Approach Shot",
    b:"Faith August sin",
    c:"Flat Approach Spin",
    d:"Flat Approach Slice",
    ans:"ans1"
}
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers = document.querySelectorAll('.ans');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    const QuestionList = quizdb[questionCount];
    question.innerText = QuestionList.question;
    option1.innerText = QuestionList.a;
    option2.innerHTML =QuestionList.b;
    option3.innerHTML = QuestionList.c;
    option4.innerHTML = QuestionList.d;
}
loadQuestion();

const getCheckedAnswer = () =>{
    let answer;
    answers.forEach((CurrAnsElement) => {
        if(CurrAnsElement.checked){
            answer = CurrAnsElement.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((CurAnsElement) => CurAnsElement.checked = false);
}

submit.addEventListener('click', () => {
    const CheckedAnswer = getCheckedAnswer();
     console.log(CheckedAnswer);

     if(CheckedAnswer === quizdb[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount<quizdb.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML=`
        <h3>You scored ${score}/${quizdb.length}<h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove('score');
        }   
});

