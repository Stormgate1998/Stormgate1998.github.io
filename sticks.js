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
            if (p1 <= 3 && p1 > 0) {
                wronginfo = true;
                userinput = !userinput;
                if (player) {
                    alert("Player 1 wins!");
                } else {
                    alert("Player 2 wins!");
                }