//Import Modules
let file = require("./file.js");
var options = require("./options.js");
let readline = require('readline-sync');


//Set Variables
let menu = true;
let dateTime = new Date();

//Add Date and Time for Bootup
file.passWrite("passes.txt", "~START - DATE: " + dateTime + " ~");
console.log("PassTrack Started");

//Menu
while (menu) {

    //Menu Options
    console.log("~~Menu~~");
    console.log("1. Start Match ");
    console.log("2. List Stats");
    console.log("3. List Players");
    console.log("4. Add Players");
    console.log("5. Save");
    console.log("6. Exit");
    input = readline.question(": ");

    //Selector
    switch (input) {

        case 1:
            options.startGame();
            break;

        case 2:
            console.log(file.passRead("./passes.txt"));
            break;
        case 3:
        file.passWrite("SHHHHHH");
        console.log("WEEE")
        break;
        case 4:
        break;
        case 5:
        break;
        case 6:
            console.log("Exiting...");
            process.exit(0);
            break;

    }

}