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
    console.log(`Human choice = ${humanChoice} , Computer choice = ${computerChoice}`);
    if (humanChoice == computerChoice){
	console.log('Tie');
    }
    else if (humanChoice == 'Rock'){
	if (computerChoice == 'Paper'){
	    console.log('Computer Wins!');
	    computerScore++;
	}
	else {
	    console.log('Human wins!')
	    humanScore++;
	}
    }
    else if (humanChoice == 'Paper') {
	if (computerChoice == 'Scisor'){
	    console.log('Computer Wins!');
	    computerScore++;
	}
	else {
	    console.log('Human wins!')
	    humanScore++;
	}   
    }
    else if (humanChoice == 'Scisor') {
	if (computerChoice == 'Rock'){
	    console.log('Computer Wins!');
	    computerScore++;
	}
	else {
	    console.log('Human wins!')
	    humanScore++;
	}
	
    }
    else
	console.log('Error')
    console.log(`Human score ${humanScore} , Computer score ${computerScore}`);
}

let humanScore = 0, computerScore = 0;
for (let i=1; i<=6;i++){
    console.log(`Round ${i}`)
    playRound(getHumanChoice(), getComputerChoice());    
}

