let dice = ["/images/dice1.jpg","/images/dice2.jpg","/images/dice3.jpg","/images/dice4.jpg","/images/dice5.jpg","/images/dice6.jpg"]

function rollDice () {
    let randomNum = dice[Math.floor(Math.random() * 6)];
    let randomNum2 = dice[Math.floor(Math.random() * 6)] ;

    // let result1 = dice[randomNum];
    document.querySelector("#player-1-die").setAttribute("src",randomNum);

    // let result2 = dice[randomNum2];

    document.querySelector("#player-2-die").setAttribute("src",randomNum2);

    if (randomNum > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNum < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "TIE!";
    }
}



