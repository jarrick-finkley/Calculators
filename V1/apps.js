

// years = document.getElementById('years');
// weeks = years / 7;
// hours = (weeks / 2) * 5

// function paidTimeOff(){
//     var weeks, hours, years, days;

//     years = document.getElementById('years').value;
//     days = years * 365;
//     weeks = days / 7;
//     hours = (weeks / 2) * 5;
//     return hours

//     answer = document.getElementById('answer');
//     answer.innerHTML = hours;
// }


var pto = document.getElementById('pto');
var answer = document.getElementById('answer');

pto.onsubmit = function paidTimeOff(){
    event.preventDefault();
    var weeks, hours, years, days;

    years = pto.years.value
    days = years * 365;
    weeks = days / 7;
    hours = (weeks / 2) * 5;
    
    answer.innerHTML = hours; 
}









