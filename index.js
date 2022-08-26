let today= new Date();
let selectedDate = today;

function drawCalender(){
    var firstofMonth= new Date(selectedDate.getFullYear(),selectedDate.getMonth,1);
    let firstWeekdayMonth = firstofMonth.getDay();
    var lastOfMonth = new Date(firstofMonth.getFullYear(),firstofMonth.getMonth()+1,0);
    let lastWeekdayMonth = lastOfMonth.getDay();
    if(firstWeekdayMonth == 0){
        daysToDrawBefore = 6;
    }else{
        daysToDrawBefore = firstWeekdayMonth -1;
    }if(lastWeekdayMonth == 0){
        daysToDrawAfter = 0;
    }else{
        daysToDrawAfter == 7- lastWeekdayMonth;
    }
        let firstofMonth =new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
        let lastOfMonth = new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1,0);
        let howManydaysInMonth =lastOfMonth.getDate();
        let daysToDraw = daysToDrawBefore + howManydaysInMonth + daysToDrawAfter;
        firstDayToDraw = new Date(firstofMonth.getFullYear(),firstofMonth.getMonth(),firstofMonth.getDate(),1-daysToDrawBefore);
        let tablehtml='';
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
        for (var i=0; i < daysToDraw; i++);
            let cellDate = new Date(FirstDayOfCalendar.getFullYear(),FirstDayOfCalendar.getMonth(),FirstDayOfCalendar.getDate() + i)
            if(cellDate.getDay() == 1){
                tablehtml = tablehtml +'<tr>';
                tablehtml += '<td>'+/* Kalenderwoche*/'</td>';
            }
            let cellClass='';
            if(cellDate.getDay()== 0){
                tablehtml+= '</tr>';
            }
            document.getElementById('calendar').innerHTML = tablehtml;
}
