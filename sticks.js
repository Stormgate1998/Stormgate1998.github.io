function sticks() {
    var player = false;
    var sticks = prompt("What is the number of sticks you want to play with?");
    while (sticks > 0) {
        let p1 = 4;
        let p2 = 4;
        let wronginfo = false;
        let userinput = false;
        while (!userinput) {
            if (wronginfo) {
                alert("This is an invalid input. Please choose a number between 1 and 3");
            }
            p1 = prompt(`${sticks} Player 1, choose a number between 1 and 3`);
            if (p1 <= 3 && p1 > 0) {
                wronginfo = true;
                userinput = !userinput;
            }
        }
        wronginfo = false;
        sticks = sticks - p1;
        player = false;
        userinput = false;
        if (sticks > 0) {
            while (!userinput) {
                if (wronginfo) {
                    alert("This is an invalid input. Please choose a number between 1 and 3");
                }
                p2 = prompt(`${sticks} Player 2, choose a number between 1 and 3`);
                if (p2 <= 3 && p2 > 0) {
                    wronginfo = true;
                    userinput = !userinput;

                }

            }
            sticks = sticks - p2;
            player = !player;
        }
    }
    if (player) {
        alert("Player 1 wins!");
    } else {
        alert("Player 2 wins!");
    }
}

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game of Sticks</title>
    <script src="sticks.js"></script>
  </head>
  <body>
    <main>
      <p>This will be instructions:</p>
      <p>Player <span id="currentPlayer">1</span>'s Turn</p>
      <div id="stickPile"></div>
      <ol id="stickTakeLog"></ol>
      <form id="buttons">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
      </form>
    </main>
  </body>
</html>

 * 
 * window.addEventListener("load", function () {
  //   let nextTurnButton = this.document.querySelector("button");
  this.document.body.addEventListener("click", function (event) {
    let clickedOnButton = event.target;
    let sticksChosen = Number(clickedOnButton.innerText);
    let playerNode = document.querySelector("#currentPlayer");
    let currentPlayer = Number(playerNode.innerText);
    alert(`Player ${currentPlayer} chose ${sticksChosen} sticks.`);
    let nextPlayer = 3 - currentPlayer;
    document.querySelector("#currentPlayer").innerText = nextPlayer;
    console.log(event);
  });
});

// }

 */