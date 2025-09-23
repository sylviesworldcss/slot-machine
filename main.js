let act1 = document.querySelectorAll(".theAct1 p");

let showMoney = document.querySelector(".theAct2");

let miniButton = document.querySelector("#miniButton");
miniButton.addEventListener('click', miniShuffle);
let maxiButton = document.querySelector("#maxiButton")
maxiButton.addEventListener('click', maxiShuffle);

let startingFunds = 1600;
let balance = document.querySelector("#balance");
balance.innerText = startingFunds;

function dance(bet) {
  if (bet > startingFunds) {
    alert("Put The Coco Chanel Down, Brokie!");
    return false;
  }
  return true;
}

function miniShuffle() {
    let bet = 40;
    if(dance(bet) === false) {
        return;
    }
    startingFunds = startingFunds - bet;
    balance.innerText = startingFunds;

    if(startingFunds<=0) {
      document.querySelector("#hereWeGo1").innerText = "MOVE OUT THE WAY, Brokie!";
      miniButton.disabled = true;
      maxiButton.disabled = true;
      return;
    }
    
    let hereWeGo1 = Math.floor(Math.random()* 5);
    document.querySelector("#hereWeGo1").innerText = hereWeGo1;

    let hereWeGo2 = Math.floor(Math.random()* 5);
    document.querySelector("#hereWeGo2").innerText = hereWeGo2;

    let hereWeGo3 = Math.floor(Math.random()* 5);
    document.querySelector("#hereWeGo3").innerText = hereWeGo3;

    if(hereWeGo1 === hereWeGo2 && hereWeGo2 === hereWeGo3) {
        let winningTotal = bet * 25;
        startingFunds +=winningTotal;
        balance.innerText = startingFunds;
        alert(`THIQUE MONEY WON $${winningTotal}!`);
    }
    }

function maxiShuffle() {
    let bet = 400;
    if(dance(bet) === false) {
        return;
    }
    startingFunds = startingFunds - bet;
    balance.innerText = startingFunds;

    if(startingFunds<=0) {
      document.querySelector("#hereWeGo1").innerText = "MOVE OUT THE WAY, Brokie!";
      miniButton.disabled = true;
      return;
    }
 
    let hereWeGo1 = Math.floor(Math.random()* 5);
    document.querySelector("#hereWeGo1").innerText = hereWeGo1;

    let hereWeGo2 = Math.floor(Math.random()* 5);
    document.querySelector("#hereWeGo2").innerText = hereWeGo2;

    let hereWeGo3 = Math.floor(Math.random()* 5);
    document.querySelector("#hereWeGo3").innerText = hereWeGo3;

    if(hereWeGo1 === hereWeGo2 && hereWeGo2 === hereWeGo3) {
        let winningTotal = bet * 40;
        startingFunds +=winningTotal;
        balance.innerText = startingFunds;
        alert(`THIQUE MONEY WON $${winningTotal}!`);

    }
}





//  above code inspired by @leonnoel class color picker template, @ozazeez @xsarayu, @CodingWCal, @henryamatsu, @jorge0510  @TheophilusNdukwe 
//  All had different js and I used google and gemini to explain what was what. For the functionality of this project I used the mixture for the structure.