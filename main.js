// main.js
console.log("I am happy!");

function formatPreis(preis) {
	preis = preis.replace(' ?', '');	// Euro
	preis = preis.replace('.', '');		// tausender
	preis = preis.replace(',', '.'); 	// Decimal
	return preis;
}

function formatTnr(tnr) {
	return tnr.replace(/\s/g, '');
}

var pdf_dir = 'P:\\_SPPS_PDF\\';
var chokidar = require('chokidar');
var pdfText = require('pdf-text');
var pdf = false;

var pakete = [];
var paket = {
	fin: '',
	opnr: '',
	pakBez: '',
	pakPreis: '',
	arbeiten: [],
	teile: []
};
var arbeit = {
	arbNr: '',
	aw: '',
	arbBez: [],
	arbPreis: ''
};
var teil = {
	teilNr: '',
	teilBez: '',
	teilPreis: ''	
};



var watcher = chokidar.watch(pdf_dir, {	
	//ignored: /[\/\\]\./,
	persistent: true
});

var log = console.log.bind(console);
var line = '';
var lfd = 0;



log(pdf_dir);

watcher.on('add', function(pdf) {
	log('File', pdf, 'has been added.');	
	pdfText(pdf, function(err, chunks) {
		line = chunks.shift();
		while (line != 'FIN') line = chunks.shift();
		paket.fin = chunks.shift();
		
		while (line != 'Preis Netto') line = chunks.shift();
		lfd = chunks.shift(); // lfd Nr. Pakets im Angebot
		paket.opnr = chunks.shift();
		paket.pakBez = chunks.shift();
		paket.pakPreis = formatPreis(chunks.shift()):

		console.log(JSON.stringify(paket));
	});
});
