function getInput(p1, player) {
    let wronginfo = false;
    let userinput = false;
    while (!userinput) {
        if (wronginfo) {
            alert("This is an invalid input. Please choose a number between 1 and 3");
        }
        if (!player) {
            p1 = prompt(sticks, "Player 1, choose a number between 1 and 3");
        } else {//changes from player 1 to player 2
            p1 = prompt(sticks, "Player 2, choose a number between 1 and 3");
        }
        
        if (p1 <= 3 && p1 > 0) {
            wronginfo = true;
            userinput = !userinput;

        }
    }
    return p1;
}
var player = false;
var sticks = prompt("What is the number of sticks you want to play with?");
while (sticks > 0) {
    let p1 = 4;
    let p2 = 4;
    p1 = getInput(p1, player);
    sticks = sticks - p1;
    player = true;

    if (sticks > 0) {
        p2 = getInput(p2, player);
        sticks = sticks - p2;
        player = false;
    }
}
if (player) {
    alert("Player 1 wins!");
} else {
    alert("Player 2 wins!");
}
//put it into the html file
//extract stuff to methods to remove repeating