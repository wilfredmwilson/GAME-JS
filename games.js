const playercounter = document.getElementById("player-counter");
const cpucounter = document.getElementById("cpu-counter");
const message = document.getElementById("message");
const playerpick = document.getElementById("player-pick");
const cpupick = document.getElementById("cpu-pick");

var playerwin = 0;
var cpuwin = 0;

function getComputerChoice() {
  const pick = ['Rock', 'Paper', 'Scissors'];
 return pick[Math.floor(Math.random() * pick.length)];
}

function playerWon() {
  if (confirm("You Win!")) {
    window.location.reload();
  }
}

function cpuWon() {
    if (confirm("You Lose!")) {
      window.location.reload();
    }
  }
  
// Player selects rock
function playerRock() {
  var cpuchoice = getComputerChoice();
  playerpick.innerHTML = "Rock";
 
    if (cpuchoice == "Rock") {
      // Tie
      message.innerHTML = "Tie";
      cpupick.innerHTML = cpuchoice;
    } else if (cpuchoice == "Scissors") {
      // Player Wins
      message.innerHTML = "Player Wins";
      cpupick.innerHTML = cpuchoice;
      playerwin++;
      playercounter.innerHTML = playerwin;
      if (playerwin == 5) {
        setTimeout(playerWon, 100);
      }
    } else {
      //cpu wins
      message.innerHTML = "Player Loses";
      cpupick.innerHTML = cpuchoice;
      cpuwin++;
      cpucounter.innerHTML = cpuwin;
      if (cpuwin == 5) {
        setTimeout(cpuWon, 100);
      }
    }
  } 


//Player selects paper
function playerPaper() {
    var cpuchoice = getComputerChoice();
    playerpick.innerHTML = "Paper";
    console.log("player = Paper", "cpu =", cpuchoice);
      if (cpuchoice == "Rock") {
        // Tie
        message.innerHTML = "Player Wins";
        cpupick.innerHTML = cpuchoice;
        playerwin++;
        playercounter.innerHTML = playerwin;
        if (playerwin == 5) {
          setTimeout(playerWon, 100);
        }
      } else if (cpuchoice == "Scissors") {
        // Player Wins
        message.innerHTML = "Player Loses";
        cpupick.innerHTML = cpuchoice;
        cpuwin++;
        cpucounter.innerHTML = cpuwin;
        if (cpuwin == 5) {
          setTimeout(cpuWon, 100);
        }
      } else {
        //cpu wins
        console.log("Tie");
        message.innerHTML = "Tie";
        cpupick.innerHTML = cpuchoice;
        
      }
}

//Player Selects Scissors
function playerScissors() {
    var cpuchoice = getComputerChoice();
    playerpick.innerHTML = "Scissors";
      if (cpuchoice == "Rock") {
        // Tie
        message.innerHTML = "Player Loses";
        cpupick.innerHTML = cpuchoice;
        cpuwin++;
        cpucounter.innerHTML = cpuwin;
        if (cpuwin == 5) {
          setTimeout(cpuWon, 100);
        }
      } else if (cpuchoice == "Scissors") {
        // Player Wins
        message.innerHTML = "Tie";
        cpupick.innerHTML = cpuchoice;
       
      } else {
        //cpu wins
        message.innerHTML = "Player Wins";
        cpupick.innerHTML = cpuchoice;
        playerwin++;
        playercounter.innerHTML = playerwin;
        if (playerwin == 5) {
          setTimeout(playerWon, 100);
        }
        
      }
}
