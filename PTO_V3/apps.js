var pto3 = document.getElementById('pto3');
var answer = document.getElementById('answer');

pto3.onsubmit = function paidTimeOff(){
    event.preventDefault();
    var years, pay_periods, hour_rate, pto, worked_weeks, taken_hours, ptotime, format;

    years = pto3.years.value

    if (years <= 4) {
        hour_rate = 5;
    } 
    
    if (years >= 5) {
        hour_rate = 6;
    } 
    
    if (years >= 10) {
        hour_rate = 7;
    }

    // Get the number of weeks worked
    worked_weeks = document.getElementById('worked_weeks').value;
    
    // Get the number of pay periods
    pay_periods = worked_weeks / 2
    
    // Get the current earned PTO in hours
    pto_hours = hour_rate * pay_periods;

    taken_hours = document.getElementById('taken_hours').value

    // Subtract the used PTO hours
    ptotime = pto_hours - taken_hours

    // Return PTO
    format = document.getElementById('format').value
    if ((format == 'weeks') || (format == 'Weeks')){
        pto = ptotime / 40;
    }
    
    if ((format == 'days') || (format == 'Days')) {
        pto = ptotime / 8;
    } 

    if ((format == 'hours') || (format == 'Hours')) {
        pto = ptotime
    } 

    
    answer.innerHTML = pto;    
}


