//Import Modules
let file = require("./file.js");
let express = require('express');
let menu = true;

//Set Variables
let dateTime = new Date();
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




//Add Date and Time for Bootup
file.passWrite("passes.txt", "~DATE: " + dateTime + " ~");

console.log("PassTrack Started");

//Menu
while (menu) {
    console.log("~~Menu~~");
    console.log("1. Start Match ");
    console.log("2. List Stats");
    console.log("3. List Players");
    console.log("4. Add Players");
    console.log("5. Save");
    console.log("6. Exit");

    switch (input) {

    }

}