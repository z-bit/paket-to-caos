// main.js

console.log("I am happy!");

var ptt = require('pdf-to-text');
var doc = process.argv[2];

var option = {from: 0, to: 10}; // from page 0 to 10

ptt.pdfToText(doc, option, function(err, data) {
	if (err) throw(err);
	console.log(data);
};

/*
ptt.info(doc, function (err, info) {
	if (err) throw(err);
	console.log(info)
};
*/
  
/*
//var program = process.argv[0] // C:\Program Files\nodejs\node.exe
//var script  = process.argv[1] // C:\inetpub\wwwroot\node\read_pdf\readText -- this file
//var title   = process.argv[2] // text.txt -- the actual parameter to readText.js

//fs = require('fs')
//fs.readFile(title, 'utf8', function (err, data) {
//  if (err) {
//    return console.log(err);
//  }
//  console.log(program +'\n'+ script +'\n'+ title +'\n'+ data);
//});
*/
