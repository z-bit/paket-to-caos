var pt = require('pdf-text');
var pdf = 'P:/_SPPS_PDF/pakete.pdf';

pt(pdf, function(err, chunks) {
	console.log(chunks);				// sehr gut !!
})

var chunks =							// ohne Positionspreise

[ 
  'Kundendaten',
  'Fahrzeugdaten',
  'Titel',
  '______________________________',
  'Fahrzeug',
  'A 170 L CDI',
  'Vorname',
  '______________________________',
  'FIN',
  'WDB1681091J989989',
  'Name',
  '______________________________',
  'Kilometerstand',
  '______________________________',
  'Straße /',
  'Hausnummer',
  '______________________________',
  'PLZ / Ort',
  '______________________________',
  'Serviceberater',
  'Datum',
  'Günther Zoppelt',
  '27.04.2016',
  'Angebot',
  'Pos.',
  'Paketnummer',
  'Beschreibung',
  'Preis Netto',
  '1',
  '1002080001',
  'Motorölservice',
  '75,42 ?',
  'Arbeit',
  '00 2080',
  '5.0',
  'Ölservice Motoröl- und Filterwechsel',
  'durchführen',
  'Teil',
  'N 007603 014106',
  '1.0',
  'DICHTRING',
  'A   640 180 01 09',
  '1.0',
  'FILTEREINSATZ',
  'Q 207 0406',
  '4.5',
  'MOBIL SU.X1-5W40-229.3',
  '2',
  '5422731001',
  'Ebay-Bremsklötze und -scheiben vorn erneuern',
  '214,29 ?',
  'Arbeit',
  '40 1590',
  '4.0',
  '2 Kompletträder ab-, anmontieren',
  '42 2731',
  '8.0',
  'Bremsscheiben der Vorderachse aus-,',
  'einbauen, n. B. erneuern',
  '(Bremsklötze ausgebaut)',
  '42 2706',
  '5.0',
  '4 Bremsbeläge der Vorderachse aus-,',
  'einbauen, n. B. erneuern',
  '(Kompletträder abmontiert)',
  'Teil',
  'A   126 540 20 17',
  '1.0',
  'GEBER',
  'A   001 989 94 51',
  '1.0',
  'BREMSENPASTE',
  'A   168 420 13 20',
  '1.0',
  'TS BREMSKLOTZ',
  'A   220 421 01 71',
  '2.0',
  'SCHRAUBE',
  'A   168 421 08 12',
  '2.0',
  'BREMSSCHEIBE',
  'A   168 421 00 71',
  '4.0',
  'SCHRAUBE',
  '3',
  '1251000003',
  'Kupplung erneuern',
  '1.376,65 ?',
  'Arbeit',
  '94 5305',
  '5.0',
  'Alle Baueile der Geräuschkapselung',
  'an Motor unten aus-, einbauen',
  '25 1010',
  '17.0',
  'Kupplungsdruckplatte und',
  'Mitnehmerscheibe aus-, einbauen, n.',
  'B. erneuern (Motor mit Getriebe',
  'ausgebaut)',
  '01 3971',
  '7.0',
  'Zusatz zum Motor aus-, einbauen bei',
  'Fzg. mit Klimaanlage',
  '01 2400',
  '89.0',
  'Motor mit Schaltgetriebe aus-,',
  'einbauen',
  'Teil',
  'A   000 989 08 07',
  '0.25',
  'BREMSFLUESSIGK.',
  'A   168 990 00 91',
  '1.0',
  'MUTTERHALTER',
  'A   019 250 08 01',
  '1.0',
  'KUPPLUNG',
  'A   000 295 11 73',
  '1.0',
  'SICHERUNG',
  'A   017 997 99 48',
  '2.0',
  'DICHTRING',
  'A   002 997 24 90',
  '3.0',
  'KABELBINDER',
  'A   168 421 00 71',
  '4.0',
  'SCHRAUBE',
  'A   168 984 04 29',
  '8.0',
  'SCHRAUBE',
  'Gesamt netto:',
  '1.666,36 ?',
  'zzgl. 19,00% MwSt.:',
  '316,60 ?',
  'MwSt. Tausch:',
  '6,01 ?',
  'Gesamt brutto:',
  '1.988,97 ?',
  'Dieses Angebot wurde maschinell für Sie erstellt und ist ab dem Ausstellungsdatum ____ Tage ohne Unterschrift gültig.',
  'Schmolck GmbH & Co. KG',
  'Günther Zoppelt',
  'Am Elzdamm 2',
  'Serviceberater',
  '79312 Emmendingen',
  'Telefon +49 7641 4602 0',
  'Fax +49 7641 4602 80' 
];
