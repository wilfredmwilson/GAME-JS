function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    // document.write(pick[Math.floor(Math.random() * pick.length)])
   return pick[Math.floor(Math.random() * pick.length)];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
    {
        // document.write("DRAW")
        alert("Its a Draw");
        return "DRAW";
    }
    if ((playerSelection == "rock" && computerSelection =="paper") || (playerSelection == "paper" && computerSelection =="scissors") || (playerSelection == "scissors" && computerSelection =="rock"))
    {
        // document.write("LOSE")
        alert("You Lose");
        return "LOSE";
    }

    if ((playerSelection == "paper" && computerSelection =="rock") || (playerSelection == "scissors" && computerSelection =="paper") || (playerSelection == "rock" && computerSelection =="scissors"))
    {
        // document.write("WIN")
        alert("You WON");
        return "WIN";
    }
   
  }
  function playGame()
  {
    var wincount=0;
    for(let i=1;i<=5 ;i++)
    {   
        let playerSelection= prompt("ENTER YOUR CHOICE")
        const computerSelection = getComputerChoice();
        let result=playRound(playerSelection.toLowerCase(),computerSelection);
        if(result == "WIN")
        {
            
            wincount ++;
        }
    }
    if(wincount >= 3)
    {
        return `YOU WON THE MATCH WITH SCORE  ${wincount}`;
    }
    else
    {
        return `YOU LOSE THE MATCH WITH SCORE ${wincount}`;
    }
  }
  
 
  console.log(playGame());