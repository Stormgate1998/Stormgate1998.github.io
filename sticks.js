//the following is the stick game
/*Explain the rules of the game of sticks to the user: players will take turns choosing at least 1 and no more than 3 of the remaining sticks until the sticks are gone.  The player that takes the last stick loses.

If the number of sticks left is less than 3, then set the maximum number of sticks that can be taken to be equal to the number of sticks left.
Ask the current player to choose a number of sticks between 1 and the maximum number of sticks that can be taken on this turn.
If the current player is player 1, set current player to be player 2; otherwise set current player to be player 1.
If the number of sticks left is equal to 0, then print that the current player won; otherwise, go back to step 4.*/
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
        p1 = prompt(sticks, "Player 1, choose a number between 1 and 3");
        if (p1 <= 3 && p1 > 0 ){
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
            p2 = prompt(sticks, "Player 2, choose a number between 1 and 3");
            if (p1 <= 3 && p1 > 0) {
                wronginfo = true;
                userinput = !userinput;
            }
        }
        sticks = sticks - p2;
        player = true;
    }
}
if (player) {
    alert("Player 1 wins!");
} else {
    alert("Player 2 wins!");
}