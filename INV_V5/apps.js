var answer, invest; 

invest = document.getElementById('invest');
answer = document.getElementById('answer');

invest.onsubmit = function(){
    event.preventDefault();

    var princ, int, periods, periods1, answer1, amount, investment, time;

    princ = invest.princ.value
    int = invest.int.value
    periods = invest.periods.value
    amount = invest.amount.value
    time = invest.time.value

    periods1 = periods / 12;

    int = int / 100;

    answer1 = princ * int * periods1;

    periods = Math.floor(12 / periods);

    console.log(periods)

    investment = parseFloat(princ) + (parseFloat(time) * parseFloat(periods)) * (parseFloat(amount) + parseFloat(answer1))

    answer.textContent = 'Your interest rate is: $' + answer1.toFixed(2) + ' per period. And your total return on investment is: $' + investment.toFixed(2) + '.'

}
