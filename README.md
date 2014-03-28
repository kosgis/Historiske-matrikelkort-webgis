Leaflet.js løsning til at vise historiske matrikelkort
=======================
###Beskrivelse af de data som indgår i denne løsning###

Alle planer er scannet som jpg filer, derefter georeferet i QGIS og exporteret som geotiff.
Derefter er alle kort tilet i tilemill og exproteret som MBTiles.

MBTiles filerne er derefter uploadet til en Amazon server hvor der er installeret tilestreem (webtile service fra MapBox) og udstillet som en TMS service.

###Leaflet.js til visning af historiske matrikelplaner###
Denne Leaflet.js løsning viser så alle kortene i en samlet løsning.

Da der er ca. 100 kort er denne løsning lavet til at filtrere lagkontrollen så den kun viser de kort der dækker det aktuelle kortudsnit. Sagt med andre ord, lagkontrollen ændrer sig når man zoomer eller panorerer i kortet.