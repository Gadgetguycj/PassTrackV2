const fs = require('fs');

//let rawdata = fs.readFileSync('student.json');  
//let student = JSON.parse(rawdata);  


module.exports.passWrite = function(textfile, text) {
    var fs = require('fs');
    fs.appendFile(textfile, text + "\n", function(err) {
        if (err) {
            return console.log(err);
        }
    });
}


module.exports.passRead = function(textfile) {
    let text;
    fs.readFile(textfile, function(err, buf) {
        text = buf.toString();
    });
    return text;
}

module.exports.passSave = function(textfile) {
    fs.readFile(textfile, function(err, buf) {
        console.log(buf.toString());
    });

    let result;
    return result;
}