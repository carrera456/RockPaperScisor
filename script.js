//console.log("Hello World")

function getComputerChoice(){
    let option = 0;
    let result 
    option = Math.random();
    option = option.toFixed(2);
    option = option*100;

    if(option<33)
	result = "Rock";
    else if (option >=33 && option<=66)
	result = "Paper";
    else
	result = "Scisor";
    return result;
}

//console.log(getComputerChoice());

function getHumanChoice(){
    let option = window.prompt('Write your option (Rock,Paper,Scisor) ');
    option = option.toLowerCase();
    option = option.substring(0,1).toUpperCase() + option.substring(1);
    console.log(option);
    while(option != 'Rock' && option != 'Paper' && option != 'Scisor' ){
	if (option == null)
	    break;
	option = window.prompt('Wrong option,choose again (Rock,Paper,Scisor) ');
    }
    return option    
}

function  playRound(humanChoice,computerChoice){
    let pChoise= document.createElement("p");
    pChoise.textContent = `Human choice = ${humanChoice} , Computer choice = ${computerChoice}`;
    let pResult = document.createElement("p");
    let pScore = document.createElement("p");    
    
    if (humanChoice == computerChoice){
	pResult.textContent = 'Tie';
    }
    else if (humanChoice == 'Rock'){
	if (computerChoice == 'Paper'){
	    pResult.textContent = 'Computer Wins!';
	    computerScore++;
	}
	else {
	    pResult.textContent = 'Human wins!';
	    humanScore++;
	}
    }
    else if (humanChoice == 'Paper') {
	if (computerChoice == 'Scisor'){
	    pResult.textContent = 'Computer Wins!';
	    computerScore++;
	}
	else {
	    pResult.textContent = 'Human wins!';
	    humanScore++;
	}   
    }
    else if (humanChoice == 'Scisor') {
	if (computerChoice == 'Rock'){
	    pResult.textContent = 'Computer Wins!';
	    computerScore++;
	}
	else {
	    pResult.textContent = 'Human wins!';
	    humanScore++;
	}
	
    }
    else
	pResult.textContent = ('Error');
    pScore.textContent = `Human score ${humanScore} , Computer score ${computerScore}`;
    resultsDiv.appendChild(pChoise);
    resultsDiv.appendChild(pResult);
    resultsDiv.appendChild(pScore);
    if(humanScore == 5 || computerScore ==5){
	let pFinal = document.createElement("p");
	if(humanScore == 5){
	    pFinal.textContent = 'Human WINS!'
	}
	else {
	    pFinal.textContent = 'Computer WINS!'
	}
	resultsDiv.appendChild(pFinal);
	buttonDiv.removeEventListener("click", buttonClick);
	
    }
    
}

 let humanScore = 0, computerScore = 0;
// for (let i=1; i<=6;i++){
//     console.log(`Round ${i}`)
//     playRound(getHumanChoice(), getComputerChoice());    
// }
const buttonDiv = document.querySelector(".buttons");
const resultsDiv = document.querySelector(".results");

function buttonClick(e) {
    switch(e.target.id) {
    case 'rockButton':
	playRound('Rock', getComputerChoice());
	break;
    case 'paperButton':
	playRound('Paper', getComputerChoice());
	break;
    case 'scissorButton':
	playRound('Scisor', getComputerChoice());
	break;
    }
	
};
buttonDiv.addEventListener("click", buttonClick);



