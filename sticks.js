//the following is the stick game
var player = false;
var p1;
var p2;
var sticks = prompt("What is the number of sticks?");
while (sticks > 0) {
    p1 = 4;
    p2 = 4;
    while (p1 > 3 || p1 <= 0 || p1 === "Player 1, choose a number between 1 and 3" || p1 === undefined) {
        p1 = prompt(sticks, "Player 1, choose a number between 1 and 3");
    }
    sticks = sticks - p1;
    player = false;
    if (sticks > 0) {
        while (p2 > 3 || p2 <= 0 || p2 === "Player 2, choose a number between 1 and 3" || p2 === undefined) {
            p2 = prompt(sticks, "Player 2, choose a number between 1 and 3");
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