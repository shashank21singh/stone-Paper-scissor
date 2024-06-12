let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"]
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};
const drawGame =() => {
    console.log("game was draw.");
};

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText='you win! your ${userChoice} beats ${compChoice}'
        msg.style.backgroundcolor ="green";
    }else{
        compscore++;
        computerscorepara.innerText=compscore;
        msg.innerText=(("you loose") (compChoice) ("beats your") (userChoice));
        msg.style.backgroundcolor="red";
    }
};
const playgame=(userChoice) => {
    console.log("user choice =",userChoice);
    //generate computer choices
const compChoice=genCompChoice();
console.log("comp choice =",compChoice);

if (userChoice === compChoice) {
  //draw game
  drawGame();
}else{
    let userwin =true;
    if(userChoice === "rock"){
        //scissors, paper
        userwin = compChoice === "paper"? false: true;
    }else if(userChoice === paper){
    //rock, scissors
    userwin=compChoice === "scissor"? false:true;
    } else{
        //rock,paper
        userwin = compChoice === "rock"? false:true;
    }
    showWinner(userwin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
}); 
