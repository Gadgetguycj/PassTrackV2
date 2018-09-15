var file = require("./file.js");
let readline = require('readline-sync');

module.exports.startGame = function() {
    file.passWrite("passes.txt", "~GAME - DATE: " + dateTime + " ~");
}