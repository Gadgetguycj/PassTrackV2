module.exports.compile = function(file) {
    var fs = require('fs');
    fs.readFile(file, function(err, buf) {
        console.log(buf.toString());
    });
    let result;
    return result;
}

module.exports.passWrite = function(textfile, text) {
    var fs = require('fs');
    fs.appendFile("./" + textfile, text + "\n", function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}

module.exports.passRead = function(textfile) {
    var fs = require('fs');

    fs.readFile(textfile, function(err, buf) {
        console.log(buf.toString());
    });

    let result;
    return result;
}