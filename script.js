

 //Ich hole mir Infos über das Datum aus der Libery
 let heute = new Date();
 let heuteTag = heute.getDate();
 let heuteMonat = heute.getMonth() + 1;
 let heuteJahr = heute.getFullYear();
 let heuteString = heuteTag + '.' + heuteMonat + '.'+ heuteJahr;
 let heutigesDatum = heuteTag + '.' + heuteMonat;
//Ich lasse mir den Nummerrischen Wochentag in JS als Wort (String) ausgeben
 let wochenTagAusgabe = heute.getDay();
    if (wochenTagAusgabe === 1) {
        wochenTagAusgabe = "Montag";} 
    else if ( wochenTagAusgabe === 2) 
    {    wochenTagAusgabe = "Dienstag";}
    else if ( wochenTagAusgabe === 3) 
    {    wochenTagAusgabe = "Mittwoch";}
    else if ( wochenTagAusgabe === 4) 
    {    wochenTagAusgabe = "Donnerstag";}
    else if ( wochenTagAusgabe === 5 ) 
    {    wochenTagAusgabe = "Freitag";}
    else if ( wochenTagAusgabe === 6) 
    {    wochenTagAusgabe = "Samstag";}
    else if ( wochenTagAusgabe === 0) 
    {    wochenTagAusgabe = "Sonntag";}
    console.log(wochenTagAusgabe)
document.getElementById('Wochentag').innerHTML = wochenTagAusgabe;
//Ich frage den Computer nach der Anzahl des Wochentag in diesem Monat
let wievielteWochenTagImMonat = heute.getDate()
    if(wievielteWochenTagImMonat <= 7)
    {wievielteWochenTagImMonat = 'erste'}
    else if(wievielteWochenTagImMonat <= 14){
        wievielteWochenTagImMonat = 'zweite'}
    else if(wievielteWochenTagImMonat <= 21){
        wievielteWochenTagImMonat = 'dritte'}
    else if(wievielteWochenTagImMonat <= 28){
        wievielteWochenTagImMonat = 'vierte'}
    else if(wievielteWochenTagImMonat > 28) 
    { wievielteWochenTagImMonat = 'fünte'}
    console.log(wievielteWochenTagImMonat)
document.getElementById('xteWoche').innerHTML = wievielteWochenTagImMonat;
    
//Monatsabfrage und die Zahlenausgabe als String (Wort) ausgeben
let germanMonthname = heute.getMonth()+1;
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
let germanYear = heute.getFullYear();
document.getElementById("JahrInfo").innerHTML = germanYear;
console.log(heuteJahr)

// Ausgabe des Letzen Feiertag
let lastholydayingerman = heute.getDate();
  //  if      (heute > 12,31){lastholydayingerman = '2. Weihnachtsfeiertag';}     
     if     (heute === 01,01) {lastholydayingerman = 'Neujahr';}
    else if (heute > 05,01) {lastholydayingerman = 'Tag d. Arbeit';}
    else if (heute > 10,03) {lastholydayingerman = 'Tag d. Deutschen Einheit';}
    else if (heute > 12,25) {lastholydayingerman = '1.Weihnachtsfeiertag'}
    else if (heute > 12,26) {lastholydayingerman = '2.Weihnachtsfeiertag'}
console.log(lastholydayingerman)
// let listeMitAllenDatumLang =  document.body.getElementsByClassName('datumLang');
// for(let i = 0; i < listeMitAllenDatumLang.length; i++)
// {
//    listeMitAllenDatumLang[i].innerHTML = heuteString;}
//let weekDay = heuteTag ;
//if (heuteTag = 5){}  
//console.log(weekDayMontag);
// document.getElementById('datum01').innerHTML = heuteString;
// document.getElementById('datum02').innerHTML = heuteString;
// document.getElementById('datum03').innerHTML = heuteString;
// document.getElementById('datum04').innerHTML = heuteString;
// document.getElementById('datumKurz').innerHTML = heutigesDatum;
//console.log('datumKurz: ' + heutigesDatum );
//console.log('heute: ' + heute);
// console.log('heuteTag: ' + heuteTag);





// 1
//getDate(bekommen wir von außen)

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
// 3
// getWievielteWochentagImMonat(Datum bekommen wir von außen)
// SETZE monatstag = Berechne Monatstag vom Datum (also zB 23.03.2022 -> 23)
// WENN monatstag <= 7 DANN Ergebnis = 1
// ANSONSTEN WENN monatstag <= 14 DANN Ergebnis = 2
// ANSONSTEN WENN monatstag <= 21 DANN Ergebnis = 3
// ANSONSTEN WENN monatstag <= 28 DANN Ergebnis = 4
// ANSONSTEN Ergebnis = 5

// 5
// getGermanMonthNameFromDate(Datum bekommen wir von außen)
// SETZE monatZahl = Berechne Monatszahl vom Datum (also zB 23.03.2022 -> 3)
// WENN monatZahl = 1 DANN Ergebnis = Januar
// WENN monatZahl = 2 DANN Ergebnis = Februar
// WENN monatZahl = 3 DANN Ergebnis = März
// WENN monatZahl = 4 DANN Ergebnis = April
// WENN monatZahl = 5 DANN Ergebnis = Mai
// WENN monatZahl = 6 DANN Ergebnis = Juni
// WENN monatZahl = 7 DANN Ergebnis = Juli
// WENN monatZahl = 8 DANN Ergebnis = August
// WENN monatZahl = 9 DANN Ergebnis = September
// WENN monatZahl = 10 DANN Ergebnis = Oktober
// WENN monatZahl = 11 DANN Ergebnis = November
// WENN monatZahl = 12 DANN Ergebnis = Dezember

// 6
// getYearFromDate(Datum bekommen wir von außen)
// SETZE jahreszahl = Berechne Jahr vom Datum (also zB 23.03.2022 -> 2022)
// Ergebnis = jahreszahl

// 10
// getIsLeapYear(Datum bekommen wir von außen)
// SETZE jahreszahl = Berechne Jahr vom Datum (also zB 23.03.2022 -> 2022)
// 

//

//  console.log('Hallo Welt');
//  var datum = new Date(2022,7,25);
//  console.log('datum = ' + datum);
//  var wochentag = datum.getDay();
//  console.log('wochentag = ' + wochentag);

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
