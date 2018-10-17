var net, num;

net = document.getElementById('net');

net.onsubmit = function(){
    // event.preventDefault();

    var fed, num, state, fica, answer;

    num = net.answer.value
    fed = .15 * num
    state = .05 * num
    fica = .0762 * num

    num = num - fed - state - fica

    answer1 = prompt('Other than Fed, State, and FICA, are there any additional deductions taken out of your gross pay? (If yes, enter the total deduction amount. If no, enter \'no\'.')

    if (answer1.toLowerCase() == 'no'){
        alert('Perfect! Your net pay is: ' + num)
    } else if (parseFloat(answer1) >= 0){
        num = num - parseFloat(answer1)
        alert(num)
    } 

}