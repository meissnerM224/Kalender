 //Ich hole mir Infos über das Datum aus der Libery
 let aktuellerTag = new Date();
 let heuteTag = aktuellerTag.getDate();
 let heuteMonat = aktuellerTag.getMonth() + 1;
 let heuteJahr = aktuellerTag.getFullYear();
 let heuteString = heuteTag + '.' + heuteMonat + '.'+ heuteJahr;
 let heutigesDatum = heuteTag + '.' + heuteMonat;
console.log(heuteString);
 let listeMitAllenDatumLang =  document.body.getElementsByClassName('datumLang');
 for(let i = 0; i < listeMitAllenDatumLang.length; i++)
 {  listeMitAllenDatumLang[i].innerHTML = heuteString;}
// let weekDay = heuteTag ;
//Ich lasse mir den Nummerrischen Wochentag in JS als Wort (String) ausgeben
 let wochenTagAusgabe = aktuellerTag.getDay();
    if (wochenTagAusgabe === 1) {
        wochenTagAusgabe = "Montag";
    } else if ( wochenTagAusgabe === 2) {
        wochenTagAusgabe = "Dienstag";
    } else if ( wochenTagAusgabe === 3) { 
        wochenTagAusgabe = "Mittwoch";
    } else if ( wochenTagAusgabe === 4) { 
        wochenTagAusgabe = "Donnerstag";
    } else if ( wochenTagAusgabe === 5 ) { 
        wochenTagAusgabe = "Freitag";
    }  else if ( wochenTagAusgabe === 6)   { 
        wochenTagAusgabe = "Samstag";
    }  else if ( wochenTagAusgabe === 0)  { 
        wochenTagAusgabe = "Sonntag";
    }
    document.getElementById('Wochentag').innerHTML = wochenTagAusgabe;

    //Ich frage den Computer nach der Anzahl des Wochentag in diesem Monat
    let wievielteWochenTagImMonat = aktuellerTag.getDate()
    if(wievielteWochenTagImMonat <= 7) {
        wievielteWochenTagImMonat = 'erste'
    }  else if(wievielteWochenTagImMonat <= 14){ 
        wievielteWochenTagImMonat = 'zweite'
    }  else if(wievielteWochenTagImMonat <= 21){    
        wievielteWochenTagImMonat = 'dritte'
    }   else if(wievielteWochenTagImMonat <= 28){
        wievielteWochenTagImMonat = 'vierte'
    } else if(wievielteWochenTagImMonat > 28) {
        wievielteWochenTagImMonat = 'fünte'
    }
    document.getElementById('xteWoche').innerHTML = wievielteWochenTagImMonat;
                
                console.log(wievielteWochenTagImMonat)
                console.log(wochenTagAusgabe)

//Monatsabfrage und die Zahlenausgabe als String (Wort) ausgeben
let germanMonthname = aktuellerTag.getMonth()+1;
        if      (germanMonthname === 1)  {germanMonthname = 'Januar';}
        else if (germanMonthname === 2)  {germanMonthname = 'Februar';}
        else if (germanMonthname === 3)  {germanMonthname = 'März';}
        else if (germanMonthname === 4)  {germanMonthname = 'April';}
        else if (germanMonthname === 5)  {germanMonthname = 'Mai';}
        else if (germanMonthname === 6)  {germanMonthname = 'Juni'}
        else if (germanMonthname === 7)  {germanMonthname = 'Juli'}
        else if (germanMonthname === 8)  {germanMonthname = 'August';}
        else if (germanMonthname === 9)  {germanMonthname = 'September';}
        else if (germanMonthname === 10) {germanMonthname = 'Oktober';}
        else if (germanMonthname === 11) {germanMonthname = 'November';}
        else if (germanMonthname === 12) {germanMonthname = 'Dezember';}
document.getElementById('Monatsname').innerHTML = germanMonthname;
console.log(germanMonthname)

let germanYear = aktuellerTag.getFullYear();
document.getElementById("JahrInfo").innerHTML = germanYear;
document.getElementById('Monat').innerHTML = germanMonthname;
document.getElementById('Jahr').innerHTML = germanYear;
console.log(heuteJahr)

// Ausgabe des Letzen Feiertag
//let lastholydayingerman = heute.getDate();
//  if   (heute > 12,31)  {  lastholydayingerman = '2. Weihnachtsfeiertag';}     
//    else if (heute > 01,01)  {lastholydayingerman = 'Neujahr';}
//  else if (heute > 05,01)  {lastholydayingerman = 'Tag d. Arbeit';}
//    else if (heute > 10,03)  {lastholydayingerman = 'Tag d. Deutschen Einheit';}
//    else if (heute > 12,25)  {lastholydayingerman = '1.Weihnachtsfeiertag';}
//     else if (heute > 12,26)  {lastholydayingerman = '2.Weihnachtsfeiertag';}
//console.log(lastholydayingerman)

let firstOfMonth = new Date(aktuellerTag.getFullYear(),aktuellerTag.getMonth(),1);
let firstWeekDayMonth = firstOfMonth.getDay(); 

let lastOfMonth = new Date(firstOfMonth.getFullYear(),firstOfMonth.getMonth()+1,0);
let lastWeekdayMonth = lastOfMonth.getDay();

let howManydaysMonth = lastOfMonth.getDate();

console.log(howManydaysMonth);
let daysToDrawBefore 
 if(firstWeekDayMonth == 0){ // 0 ist Sonntag
    daysToDrawBefore = 6; // Beim Sonntag 6 tage vorher Zeichnen
} else {
    daysToDrawBefore = firstWeekDayMonth -1; // Ansonsten alle Tage von Montag an Zeichnen
}
if (lastWeekdayMonth == 0){ //0 ist Sonntag
    dayToDrawAfter = 0;  // Beim Sonntag kein weiteren Tag danach Zeichnen
} else {
    dayToDrawAfter = 7- lastWeekdayMonth // Ansonsten alle Tage bis zum Sonntag zeichnen
}

console.log("firstWeekDayMonth:"+firstWeekDayMonth);
console.log("dayToDrawBefore:"+daysToDrawBefore);
console.log("lastWeekdayMonth:"+lastWeekdayMonth)
console.log("dayToDrawAfter:"+dayToDrawAfter);

let daysToDraw = daysToDrawBefore + howManydaysMonth + dayToDrawAfter;
let firstDayOfCalendar = new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(), 1 - daysToDrawBefore);

let tablehtml= '';
tablehtml += '<tr>';
tablehtml += '<th class="kopfzeile">KW</th>';
tablehtml += '<th class="kopfzeile">Mon</th>';
tablehtml += '<th class="kopfzeile">Die</th>';
tablehtml += '<th class="kopfzeile">Mit</th>';
tablehtml += '<th class="kopfzeile">Don</th>';
tablehtml += '<th class="kopfzeile">Fre</th>';
tablehtml += '<th class="Samstag">Sam</th>';
tablehtml += '<th class="Sonntag">Son</th>';
tablehtml += '</tr>';


for (var i = 0; i < daysToDraw; i++) {
    let cellDate = new Date(firstDayOfCalendar.getFullYear(), firstDayOfCalendar.getMonth(), firstDayOfCalendar.getDate() + i);
    // console.log(cellDate);
    if(cellDate.getDay() == 1) {
        tablehtml = tablehtml + '<tr>';
        tablehtml += '<td>' + getCalendarWeek(cellDate) + '</td>';
    }
    let cellClass = '';
    if (cellDate.getDay() == 6) {
        cellClass = 'Samstag';
    } else if (cellDate.getDay() == 0) {
        cellClass = 'Sonntag';
    }
    if(
        cellDate.getFullYear() == aktuellerTag.getFullYear() 
        && cellDate.getMonth() == aktuellerTag.getMonth() 
        && cellDate.getDate() == aktuellerTag.getDate()
    ){console.log('heute ist '+ cellDate+' / ' +aktuellerTag );
        cellClass += ' heute';     
    }
    tablehtml = tablehtml + '<td class="' + cellClass + '">' + cellDate.getDate() + '</td>';
    
    if(cellDate.getDay() == 0) {
        tablehtml += '</tr>';
    }
    document.getElementById('kalenderBody').innerHTML =tablehtml;

}  

function getCalendarWeek(date) {
    let differenzZu = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12));
    console.log('getCalendarWeek: differenzZu: ' + differenzZu);
    let ersteErste =  new Date(Date.UTC(2022,00,01,12));// bestimme den 1.1.xxxx
    let firstMonday = ersteErste; 
    while( firstMonday.getDay() != 1) { //läuft solange bis Montag ist
        firstMonday = new Date(Date.UTC(firstMonday.getFullYear(),firstMonday.getMonth(),firstMonday.getDate() + 1,12));
    }
    kwBasis= differenzZu - firstMonday; //Berechne die differenz vom ersten Montag zu today.
    kw = kwBasis/1000/60/60/24/7+1
    let kwRounded = Math.floor(kw);
    console.log('getCalendarWeek: firstMonday: ' + firstMonday);
    console.log('getCalendarWeek: kw: ' + kw);
    console.log('getCalendarWeek: kwRounded ' + kwRounded);
    return kwRounded;
}

/*''Kalenderwoche ausrechnen''  um die Kalenderwoche zuermitterln müssen wir den 1.1.xxxx definieren und mit einer schleife abfragen bis wir den ersten Montag im Jahre gefunden haben.das entspricht dann KW1. 
In einer weiteren funktion ermitterln wir den wert von Kw1 bis heute und rechnen diesen von millisekunden runter bis auf Tage oder Wochen (1000/60/60/24/7)*/





 // 2 / 4
 // getGermanWeekdayFromDate(Datum bekommen wir von außen)
 // SETZE weekdayZahl = "Berechne Wochentag als Zahl von Datum"
 // WENN weekdayZahl = 1
 //   DANN Ergebnis = Montag
 // ANSONSTEN WENN weekdayZahl = 2
 //   DANN Ergebnis = Dienstag
 // ANSONSTEN WENN weekdayZahl = 3
 //   DANN Ergebnis = Mittwoch
 // ANSONSTEN WENN weekdayZahl = 4
 //   DANN Ergebnis = Donnerstag
 // ANSONSTEN WENN weekdayZahl = 5
 //   DANN Ergebnis = Freitag
 // ANSONSTEN WENN weekdayZahl = 6
 //   DANN Ergebnis = Samstag
 // ANSONSTEN WENN weekdayZahl = 7
 //   DANN Ergebnis = Sonntag


// 10
// getIsLeapYear(Datum bekommen wir von außen)
// SETZE jahreszahl = Berechne Jahr vom Datum (also zB 23.03.2022 -> 2022)

//getGermanHolydayFromeDate(Datum kommt von außen)
//Wenn Datum = 1.1.XXXX
//  Dann Ergebnis = Neujahr
//Sonst Wenn Datum = 1.5.XXXX 
//  Dann Ergebnis = Tag der Arbeit
// Sonst Wenn Datum = 3.10.XXXX 
//  Dann Ergebnis = Tag der Deutschen Einehit
//Sonst Wenn Datum = 25.12.XXXX 
//  Dann Ergebnis =1.Weihnachtfeiertag 
//Sonst Wenn Datum = 26.12.XXXX 
//Dann Ergebnis = 2.Weihnachtfeiertag
//  Ansonsten Ergebniss kein Feiertag

//getNextGermanHolyday(Datum kommt von außen)
//Wenn Datum kleiner = 1.1.XXXX 
// Dann Ergebnis = Nächste Feiertag : Neujahr
//Sonst Wenn Datum kleiner 1.5.XXXX
// Dann Ergebnis = Nächste Feiertag : Tag der Arbeit
//Sonst Wenn Datum kleiner 3.10.XXXX
// Dann Ergebnis = Nächste Feiertag : Tag der Deutschen Einheit
//Sonst Wenn Datum kleiner 25.12.XXXX
// Dann Ergebnis = Nächste Feiertag : 1.Weihnachtstag
//Sonst Wenn Datum kleiner 26.12.XXXX
// Dann Ergebnis = Nächste Feiertag : 2. Weihnachtstag
// Ansonsten Nächster Feiertag ist NeuJahr

//getGermanHolydayBefore(Datum kommt von außen)
//Wenn Datum größer = 1.1.XXXX 
// Dann Ergebnis = Letzter Feiertag : Neujahr
//Sonst Wenn Datum größer 1.5.XXXX
// Dann Ergebnis = Letzter Feiertag : Tag der Arbeit
//Sonst Wenn Datum größer 3.10.XXXX
// Dann Ergebnis = Letzter Feiertag : Tag der Deutschen Einheit
//Sonst Wenn Datum größer 25.12.XXXX
// Dann Ergebnis = Letzter Feiertag : 1.Weihnachtstag
//Sonst Wenn Datum größer 26.12.XXXX
// Dann Ergebnis = Letzter Feiertag : 2. Weihnachtstag
