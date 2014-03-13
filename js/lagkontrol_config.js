    
    var graymap =  L.mapbox.tileLayer('examples.map-20v6611k')
    
    var baseLayers = {
        'Grundkort': graymap
    };
    
    var overlay = {
        'Bygninger d.d.': bygning,
        'Matrikler d.d.': matrikeler,
        'Matrikelplan 1-I 1921': matrikelplan_01I_800_1921,
        'Matrikelplan 1-II 1932': matrikelplan_01II_800_1932,
        'Matrikelplan 2-I 1921': matrikelplan_02I_800_1921,
        'Matrikelplan 2-II 1921': matrikelplan_02II_800_1921,
        'Matrikelplan 3 1921': matrikelplan_03_800_1921,
        'Matrikelplan 4 1921': matrikelplan_04_800_1921,
        'Matrikelplan 5-I 1921': matrikelplan_05I_800_1921,
        'Matrikelplan 5-II 1921': matrikelplan_05II_800_1921,
        'Matrikelplan 6-I 1921': matrikelplan_06I_800_1921,
        'Matrikelplan 6-II 1921': matrikelplan_06II_800_1921,
        'Matrikelplan 6-III 1921': matrikelplan_06III_800_1921,
        'Matrikelplan 7 1921': matrikelplan_07_800_1921,
        'Matrikelplan 8 1921': matrikelplan_08_800_1921,
        'Matrikelplan 9 1921': matrikelplan_09_800_1921,
        'Matrikelplan 9-I 1921': matrikelplan_09I_800_1921,
        'Matrikelplan 10 1921': matrikelplan_10_800_1921,
        'Matrikelplan 11 1921': matrikelplan_11_800_1921,
        'Matrikelplan 13-I 1921': matrikelplan_13I_800_1921,
        'Matrikelplan 13-II 1921': matrikelplan_13II_800_1921,
        'Matrikelplan 16-II 1921': matrikelplan_16II_800_1921,
        'Matrikelplan 17-I 1921': matrikelplan_17I_800_1921,
        'Matrikelplan 18-I 1921': matrikelplan_18I_800_1921,
        'Matrikelplan 19-I 1921': matrikelplan_19I_800_1921,
        'Matrikelplan 20-I 1921': matrikelplan_20I_800_1921,        
        'Matrikelplan 20-II 1921': matrikelplan_20II_800_1921,
        'Matrikelplan 21-I 1921': matrikelplan_21I_800_1921,
        'Matrikelplan 21-II 1921': matrikelplan_21II_800_1921,
        'Matrikelplan 22-I 1921': matrikelplan_22I_800_1921,
        'Matrikelplan 23-I 1921': matrikelplan_23I_800_1921,
        'Matrikelplan 23-II 1921': matrikelplan_23II_800_1921,
        'Matrikelplan 23-III 1921': matrikelplan_23III_800_1921,
        'Matrikelplan 24-I 1921': matrikelplan_24I_800_1921,
        'Matrikelplan 24-II 1921': matrikelplan_24II_800_1921,
       
        'Historiskkort 1932': kort_1932
    };      