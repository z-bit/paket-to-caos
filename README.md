# paket-to-caos
Ueberwacht das Verzeichnis P:\\_SPPS_PDF


## Idee

* SPPS => Warenkorb => Drucken => oeffent eine PDF im Standard-PDF-Viewer (vorzugsweise Foxit)
* PDF Viewer => Speichern unter => P:\\_SPPS_PDF
* ***paket-to-caos*** -> ueberwacht P:\\_SPPS_PDF -> erkennt gespeicherte PDF -> started Verarbeitung
	* einlesen 
	* in Text umwandeln
	* PDF loeschen
	* Daten extrahieren
	* ?? woher kommt die Firma
		* aus der VPNR in der parallel gespeicherten paket.txt 
		* aus dem Firmannamen in der PDF
	* Aufruf CareAPI, um dieses Paket fuer diese FIN upzudaten