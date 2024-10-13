let userScore=0;
let compScore=0;

const select=document.querySelectorAll(".choices");
const message = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const computer = document.querySelector("#computer-score");

const generatecomp = () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3); 
    return options[randIdx];

}
 
const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userScore++;
        user.innerText=userScore;
        message.innerText = `You Win! Yours ${userchoice} beats ${compchoice} 👍❤️👍`;
        message.style.backgroundColor = "red";
    }else{
        compScore++;
        computer.innerText=compScore;
        message.innerText = `You Lose.${userchoice} beats your ${compchoice} 😘😘😒`; 
        message.style.backgroundColor = "green";
    }
}

const draw = () =>{
    message.innerText = "Game was Draw.Play again 🤞😜😔";
    message.style.backgroundColor = "black";
}

const playGame = (userchoice) => {
     //computer choice call generate random
     const compchoice = generatecomp();

     if(userchoice == compchoice){
        //Draw Game
        draw();
     }else{
        let userwin = true;
        if(userchoice === "rock" ){
            //compchoice -- scissors ,paper
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //computer choice -- rock ,scissors
            userwin = compchoice === "scissors" ? false:true;
        }else if(userchoice === "scissors"){
            //computer choice -- rock ,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
     }

}

select.forEach((choices) => {
    choices.addEventListener("click", () =>{
        const userchoice =choices.getAttribute("id");
        // console.log("choices was clicked",userchoice);
        playGame(userchoice);

    });
});


