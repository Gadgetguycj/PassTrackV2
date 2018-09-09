var file = require("./file.js");
file.passRead("passes.txt");
file.passWrite("passes.txt", "test3");
file.passRead("passes.txt");