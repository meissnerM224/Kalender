let today = new Date();
let selectedDate = today;

let year = today.getFullYear();
// console.log(year);

buildCalender();
 
function buildCalender(){
    //Draw Calender
    let firstOfMonth = new Date(selectedDate.getFullYear(),selectedDate.getMonth(), 1);
    let firstWeekDayMonth = firstOfMonth.getDay(); 
    let lastOfMonth = new Date(firstOfMonth.getFullYear(),firstOfMonth.getMonth() +1 , 0);
    let lastWeekdayMonth = lastOfMonth.getDay();
    let howManydaysMonth = lastOfMonth.getDate();
    if(firstWeekDayMonth == 0){ // 0 is Sunday
        daysToDrawBefore = 6; // for the Sunday 6 days to draw
    } else {
        daysToDrawBefore = firstWeekDayMonth -1; // else days to draw before Monday
    }
    if (lastWeekdayMonth == 0){ //0 is Sunday
        dayToDrawAfter = 0;  // for Sunday no Days to draw
    } else {
        dayToDrawAfter = 7 - lastWeekdayMonth // else days to draw to Sunday
    }
    let daysToDraw = daysToDrawBefore + howManydaysMonth + dayToDrawAfter;
    let firstDayOfCalendar = new Date(firstOfMonth.getFullYear(), firstOfMonth.getMonth(),1 - daysToDrawBefore);
    let tablehtml= '';
    tablehtml += '<tr>';
    tablehtml += '<th class="headTable">KW</th>';
    tablehtml += '<th class="headTable">Mon</th>';
    tablehtml += '<th class="headTable">Die</th>';
    tablehtml += '<th class="headTable">Mit</th>';
    tablehtml += '<th class="headTable">Don</th>';
    tablehtml += '<th class="headTable">Fre</th>';
    tablehtml += '<th class="Saturday">Sam</th>';
    tablehtml += '<th class="Sunday">Son</th>';
    tablehtml += '</tr>';
    for (var i = 0; i < daysToDraw; i++) {
        let cellDate = new Date(firstDayOfCalendar.getFullYear(), firstDayOfCalendar.getMonth(), firstDayOfCalendar.getDate() + i);
        if(cellDate.getDay() == 1) {
            tablehtml = tablehtml + '<tr>';
            tablehtml = tablehtml + '<td class="kW">' + getCalendarWeek(cellDate) + '</td>';
        }
        let cellClass ='';
        if (cellDate.getDay() == 6) { 
            cellClass = 'Saturday ';
        } else if (cellDate.getDay() == 0) {
            cellClass = 'Sunday ';
        }
        if(cellDate.getMonth() != selectedDate.getMonth())
        {
            cellClass += 'otherMonth ';
        }
        if(
            cellDate.getFullYear() == today.getFullYear() 
            && cellDate.getMonth() == today.getMonth() 
            && cellDate.getDate() == today.getDate()
            ){  cellClass +='todayCl ';     
        }
        if(
            cellDate.getFullYear() == selectedDate.getFullYear() 
            && cellDate.getMonth() == selectedDate.getMonth() 
            && cellDate.getDate() == selectedDate.getDate()
            ){  cellClass +='selected ';     
        }
        
        if(isHoliday(cellDate)){ 
            cellClass += ' restDay';
        }//create the cell in the table
        tablehtml = tablehtml + '<td class="' + cellClass + '" onclick="setDate(new Date('+cellDate.getFullYear()+','+cellDate.getMonth()+','+cellDate.getDate()+'))">' + cellDate.getDate() + '</td>';    
        if(cellDate.getDay() == 0) {
            tablehtml += '</tr>';
        }
        document.getElementById('calenderBody').innerHTML =tablehtml;
    }  
        /*'Kalenderwoche ausrechnen'um die Kalenderwoche zuermitterln müssen wir den 1.1.xxxx definieren und mit einer schleife abfragen bis wir den ersten Montag im Jahre gefunden haben.das entspricht dann KW1. 
        In einer weiteren berechnung ermitterln wir den wert von Kw1 bis heute und rechnen diesen von millisekunden runter bis auf Tage oder Wochen (1000/60/60/24/7)
        Dann müssen wir das Zeitformat auf UTC stellen, wegen der Zeitumstellung in der GMT Zetiform.*/
        //Feiertag bestimmt und in einer funktion verglichen ob das aktuelle datum mit dem Feiertag übereinstimmt
        buildInfoText();
    }
    function setDate(newDate){
        selectedDate = newDate;
        buildCalender();
    }  
    document.getElementById('back_m').onclick = function(){
        setDate(new Date(selectedDate.getFullYear(),(selectedDate.getMonth()-1),selectedDate.getDate()));
    }     
    document.getElementById('forward_m').onclick = function(){
        setDate(new Date(selectedDate.getFullYear(),(selectedDate.getMonth()+1),selectedDate.getDate()));
    }
    document.getElementById('back_y').onclick = function(){
        setDate(new Date((selectedDate.getFullYear()-1), selectedDate.getMonth()));
    }  
    document.getElementById('forward_y').onclick = function(){
        setDate(new Date((selectedDate.getFullYear()+1),selectedDate.getMonth()));
    }  
    function getCalendarWeek(date) {
        let differenceTo = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12));//today
        let theFirstJanuar =  new Date(Date.UTC(date.getFullYear(),0,1,12));// Set the 1.january
        let firstMonday = theFirstJanuar; 
        while( firstMonday.getDay() != 1) { //Runs until the first Monday is reached
            firstMonday = new Date(Date.UTC(firstMonday.getFullYear(),firstMonday.getMonth(),firstMonday.getDate() + 1,12));
        }
        kwBasic= differenceTo - firstMonday; //Calculates the difference from 1.January to today
        kw = kwBasic/1000/60/60/24/7+1
        let kwRounded = Math.floor(kw);
        return kwRounded;
    }
    function isHoliday(cellDate){
        let newYear = new Date (2022, 0,1);
    let holyThreeKings = new Date(2022,0,6);
    let dayOfWork = new Date(2022,4,1);
    let dayOfGermanUnion = new Date(2022,9,3);
    let firstChristmasday = new Date(2022,11,25);
    let secondChristmasday = new Date(2022,11,26);
    let holyDay = false;
    if ( cellDate.getMonth() == newYear.getMonth() && cellDate.getDate() == newYear.getDate() ||
    cellDate.getMonth() == holyThreeKings.getMonth() && cellDate.getDate() == holyThreeKings.getDate() || 
    cellDate.getMonth() == dayOfWork.getMonth() && cellDate.getDate() == dayOfWork.getDate() ||
    cellDate.getMonth() == dayOfGermanUnion.getMonth() && cellDate.getDate() == dayOfGermanUnion.getDate() ||
    cellDate.getMonth() == firstChristmasday.getMonth() && cellDate.getDate() ==firstChristmasday.getDate() ||
    cellDate.getMonth() == secondChristmasday.getMonth() && cellDate.getDate() == secondChristmasday.getDate()){
        holyDay = true;
        return holyDay; 
    }
    let freeDay;
    if (selectedDate.getMonth() == newYear.getMonth() && selectedDate.getDate() ==newYear.getDate() ){
        freeDasy = ' Neujahrs Tag ';
    } else if (selectedDate.getMonth() == holyThreeKings.getMonth() && selectedDate.getDate() == holyThreeKings.getDate()){
        freeDay = ' Heilige drei Könige Tag ';
    } else if (selectedDate.getMonth() == dayOfWork.getMonth() && selectedDate.getDate() == dayOfWork.getDate()){
        freeDay = ' den Tag der Arbeit ';
    } else if (selectedDate.getMonth() == dayOfGermanUnion.getMonth()  && selectedDate.getDate() == dayOfGermanUnion.getDate()){
        freeDay = 'den Tag der Deutsche Einheit';
    } else if (selectedDate.getMonth() == firstChristmasday.getMonth() && selectedDate.getDate() == firstChristmasday.getDate()){
        freeDay = 'den 1. Weihnachtsfeiertag';
    } else if (selectedDate.getMonth() == secondChristmasday.getMonth() && selectedDate.getDate() == secondChristmasday.getDate()){
        freeDay = 'den 2. Weihnachtsfeiertag';
    } else (freeDay = ' kein Gesetzlicher Feiertag')
    document.getElementById('freeDay').innerHTML = freeDay;
}
function buildInfoText(){
    let dayToday = selectedDate.getDate();
    let MonthToday = selectedDate.getMonth() + 1;
    let yearToday = selectedDate.getFullYear();
    let todayString = dayToday + '.' + MonthToday + '.'+ yearToday;
    let weekDayInputt = selectedDate.getDay();  // definition of Weekday name in a Array.
    let weekD = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
    let weekDayOutput = weekD[weekDayInputt];
    if(weekDayInputt == selectedDate) {
        weekDayOutput = weekD[weekDayInputt];
    }
    let listOFAllWeekDAys= document.body.getElementsByClassName('WeekDAys');// Output weekday for Infotext
    for(let i = 0; i < listOFAllWeekDAys.length; i++)
    {  listOFAllWeekDAys[i].innerHTML = weekDayOutput;}
    // definition the Monthname in Array
    let getMonthNumber = selectedDate.getMonth();
    let monthNameArray = ['Januar','Februar','März','April','Mai','Juni','Juli',
    'August','September','Oktober','November','Dezember'];
    let monthNameOutput = monthNameArray[getMonthNumber];
    if(getMonthNumber == today){
        monthNameOutput = monthNameArray[getMonthNumber];
    }
    //definition the number of weekday
    let HowManyWeekItIs = selectedDate.getDate()
    if(HowManyWeekItIs <= 7) {
        HowManyWeekItIs = '1.';
    } else if (HowManyWeekItIs <= 14){ 
        HowManyWeekItIs = '2.';
    } else if (HowManyWeekItIs <= 21){    
        HowManyWeekItIs = '3.';
    } else if (HowManyWeekItIs <= 28){
        HowManyWeekItIs = '4.';
    } else if (HowManyWeekItIs > 28) {
        HowManyWeekItIs = '5.';
    }
    let year = selectedDate.getFullYear();
    document.getElementById('xteWeek').innerHTML = HowManyWeekItIs;
    document.getElementById('MonthName').innerHTML = monthNameOutput;
    document.getElementById("yearInfo").innerHTML = year;
    document.getElementById('Month').innerHTML = monthNameOutput;
    document.getElementById('year').innerHTML = year;
    // the next holyday?
    let nextHolyDayInGerman; 
    if (selectedDate < new Date(selectedDate.getFullYear(),0,6)) {
        nextHolyDayInGerman = ' Heilige Drei Könige am 6.1. ';
    } else if (selectedDate < new Date(selectedDate.getFullYear(),4,1))  {
        nextHolyDayInGerman = ' ist der Tag der Arbeit am 1.5. ';
    } else if (selectedDate < new Date(selectedDate.getFullYear(),9,3))  {
        nextHolyDayInGerman = ' ist der Tag d. Deutschen Einheit am 3.10 ';
    } else if (selectedDate < new Date(selectedDate.getFullYear(),11,24)) {
        nextHolyDayInGerman = ' ist Heiligabend am 24.12 ';
    } else if (selectedDate < new Date(selectedDate.getFullYear(),11,25))  {
        nextHolyDayInGerman = ' ist der 1.Weihnachtsfeiertag am 25.12 ';
    } else if (selectedDate < new Date(selectedDate.getFullYear(),11,26))  {
        nextHolyDayInGerman = ' ist der 2.Weihnachtsfeiertag am 26.12. ';
    } else if (selectedDate<= new Date(selectedDate.getFullYear(),11,31))  {
        nextHolyDayInGerman = '  Neujahr am 1.1. ';
    }
    document.getElementById('nextHolyday').innerHTML = nextHolyDayInGerman;
    // the last holyday?
    let lastHolydayInGerman; 
    if(selectedDate > new Date(selectedDate.getFullYear(),11,26))  {
        lastHolydayInGerman = '2 .Weihnachtsfeiertag am 26.12. ';
    } else if (selectedDate > new Date(selectedDate.getFullYear(),11,25))  {
        lastHolydayInGerman = '1.Weihnachtsfeiertag am 25.12. ';
    } else if (selectedDate > new Date(selectedDate.getFullYear(),11,24)) {
        lastHolydayInGerman = ' Heiligabend am 24.12 ';
    } else if (selectedDate > new Date(selectedDate.getFullYear(),9,3))  {
        lastHolydayInGerman = 'Tag  Deutschen Einheit am 3.10.';
    } else if (selectedDate > new Date(selectedDate.getFullYear(),4,1))  {
        lastHolydayInGerman = 'Tag der Arbeit am 1.5.';
    } else if (selectedDate > new Date(selectedDate.getFullYear(),0,6))  {
        lastHolydayInGerman = 'Heilige drei Könige am 6.1.';
    } else if (selectedDate > new Date(selectedDate.getFullYear(),0,1))  {
        lastHolydayInGerman = 'Neujahr am 1.1. ';
    } else if (selectedDate = new Date(selectedDate.getFullYear(),0,1)){
        lastHolydayInGerman = '2. Weihnachtsfeiertag am 26.12. '
    }
    document.getElementById('lastHolyday').innerHTML =lastHolydayInGerman;
    // Date in the Calender
    let listOfDateLong =  document.body.getElementsByClassName('dateLong');
    for(let i = 0; i < listOfDateLong.length; i++) {
        listOfDateLong[i].innerHTML = todayString;
    }
}