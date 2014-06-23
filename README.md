Web-løsning til at vise historiske matrikelkort
=======================

Se demo her: [Historiske matrikelkort fra Frederiksberg](http://kosgis.github.io/Historiske-matrikelkort-webgis/matrikelkort.html "Historiske matrikelkort")

###Funktioner###

1. Dynamisk lagkontrol - viser kun de kort der er synlige i det aktuelle kortvindue
2. Matrikelsøg - en widget som zoomer til matrikel. Benytter geokey fra gst.dk

###Leaflet.js til visning af historiske matrikelkort###
Denne løsning er bygget på [Leafletjs.com](http://leafletjs.com) og [Tilestream](https://github.com/mapbox/tilestream) fra MapBox.com.

Da der er over 100 kort i løsning, er lagkontrollen lavet til kun at vise  de kort der dækker det aktuelle kortudsnit og zoom niveau. Sagt med andre ord, lagkontrollen ændrer sig når man zoomer eller panorerer i kortet.

Bounds og zoomniveauer fra de enkeltekort hentes dynamisk fra Tilestream og benyttes til at filtrerer lagkontrollen.

###Beskrivelse af de data som indgår i løsningen###

Alle Matrikelplaner er scannet som jpg filer, derefter georefereret i [QGIS](http://www.qgis.org/en/site/) og exporteret som geotiff.
Derefter er alle kort tilet i [Tilemill](https://www.mapbox.com/tilemill/) fra MapBox.com og exproteret som MBTiles.

MBTiles filerne er derefter uploadet til en [Amazon server EC2](http://aws.amazon.com/ec2/) micro Instance hvor der er installeret [Tilestream](https://github.com/mapbox/tilestream).  *"TileStream is a high-performance map tile server powered by MBTiles files."*


----------


Hvis der er spørgsmål eller kommentar kontakt venligst Hasse Hauch fra Frederiksberg Kommune.
