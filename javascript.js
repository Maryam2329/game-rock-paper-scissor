let getComputerChoice = function (){
    // objectiv : randomly return paper rock or scissor
    // make an array of the three strings
    // create a random number between 1 and 3
    // return the string corresponding to the number
    let arrayState = ["paper","rock","scissor"];
    let randomInt = Math.floor(Math.random()*3);
    return arrayState[randomInt];
}

let playRound = function (playerSelection,computerSelection){
    // two arguments : playerSelection and computerSelection
    // determine the winner and return a string
    // duos : paper beats rock and looses against scissor
    //        scissor looses against rock
    console.log("You chose "+playerSelection+", your adversaire chose "+computerSelection+".");
    if (playerSelection==computerSelection) {
        return ("It is a tie, the adversaire also chose a "+computerSelection+" !");
    } else if (playerSelection=="paper"){
        if (computerSelection=="scissor"){
            return ("You loose, "+computerSelection+" beats "+playerSelection+" !")
        } else {
            return ("You win, "+playerSelection+" beats "+computerSelection+" !")
        }
    } else if (playerSelection=="scissor"){
        if (computerSelection=="rock"){
            return ("You loose, "+computerSelection+" beats "+playerSelection+" !")
        } else {
            return ("You win, "+playerSelection+" beats "+computerSelection+" !")
        }
    } else {
        if (computerSelection=="paper"){
            return ("You loose, "+computerSelection+" beats "+playerSelection+" !")
        } else {
            return ("You win, "+playerSelection+" beats "+computerSelection+" !")
        }
    }
}


let scoreRound = function (choice1, choice2){
    // return 0 if it is a tie or if choice1 looses, return 1 otherwise
    if (choice1==choice2 || (choice1=="rock" && choice2=="paper") || (choice1=="paper" && choice2=="scissor") || (choice1=="scissor" && choice2=="rock")){
        return 0;
    } else {
        return 1;
    }
}
let winner = function(score){
    const container = document.querySelector('body')
    const div = document.createElement('div');
    div.classList.add('div');
    if (score>=3){
        alert("You won, with a score of "+score+" rounds won. Congratulations !");
        div.textContent = 'You won, with a score of '+score+' rounds won. Congratulations !';
    }
    else if (score==0){
        alert("Well, looks like you lost every game. Next time maybe !!");
        div.textContent = 'Well, looks like you lost every game. Next time maybe !!';
    }
    else {
        alert("You lost, but you did win "+score+" round(s). Next time maybe !!");
        div.textContent = 'You lost, but you did win '+score+' round(s). Next time maybe !!';
    }
    container.appendChild(div);
}
let game = function(){
    // play 5 rounds and keep scores, so you need a variable to store the result
    // display the result of each round with console.log
    // display the winner of the game with console.log
    // get user input with prompt()
    let result =0;
    let round =0;
    let paper = document.querySelector('#paper');
    let rock = document.querySelector('#rock');
    let scissor = document.querySelector('#scissor');
    let elementArray = [[paper,"paper"],[rock,"rock"],[scissor,"scissor"]];
    for (let i=0;i<elementArray.length;i++){
        elementArray[i][0].addEventListener('click',()=>{
            if (round<5){
                let computerSelection=getComputerChoice();
                alert(playRound(elementArray[i][1],computerSelection));
                result += scoreRound(elementArray[i][1],computerSelection);
                round++;
                alert("Round number "+round+"/5 done.");
                if (round==5){
                    winner(result);
                }
            } else {
                alert("You have played your five rounds, parce."); 
            }
            });
    }
    console.log("result : "+result);

}
game();
