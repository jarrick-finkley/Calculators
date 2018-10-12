var pto2 = document.getElementById('pto2');
var answer = document.getElementById('answer');

pto2.onsubmit = function paidTimeOff(){
    event.preventDefault();
    var years, days, time, hours, pto;

    years = pto2.years.value

    if (years <= 4) {
        hours = 5;
    } 
    
    if (years >= 5) {
        hours = 6;
    } 
    
    if (years >= 10) {
        hours = 7;
    }

    time = hours * 26;
    pto = time / 40; 

    answer.innerHTML = pto;    
}
