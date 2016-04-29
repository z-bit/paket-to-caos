
function getPdf(listOfFiles) {
	for (var i=0; i<listOfFiles.length; i++) {
		if (listOfFiles[i].match(/pdf$/)) {
			return listOfFiles[i];
		} 
	}	
	return false;		
}

//todo: doc should be loaded without a name, the only pdf in folder 
//var doc = process.argv[2];
//var doc = 'no doc';
var fs = require('fs');
fs.readdir(process.cwd(), function(err, files) {
	if (err) throw(err);
	var doc = getPdf(files);
	
	var ptt = require('pdf-to-text');
	var option = {from: 0, to: 10}; // from page 0 to 10
	
	ptt.pdfToText(doc, option, function(err, pdf) {
		if (err) throw(err);
	  var base = pdf.indexOf('\n');
		var fin = pdf.substr(base+64, 17);
		
		base = pdf.indexOf('\n1');
		nr = pdf.substr(base+3, 10);
		bez = pdf.substr(base+14, 50).trim();
		for (var i=0; i<bez.length; i++) {
			if (bez.charCodeAt(i) == 65533) {
				bez = bez.substr(0, i) +'ö'+  bez.substr(i+1);
			}	
		}
		console.log(bez);
		//chr = pdf.substr(base+19, 1);
		//console.log(chr.charCodeAt(0));
	});
	
});



/*

var ptt = require('pdf-to-text');
var doc = process.argv[2];

var option = {from: 0, to: 10}; // from page 0 to 10


ptt.pdfToText(doc, option, function(err, data) {
	if (err) throw(err);
	console.log(data);
)};
*/

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
