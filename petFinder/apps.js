console.log('ready!');

var answer1, answer2, answer3, answer4, button

button = document.getElementById('button');

button.onsubmit = function(){
    answer1 = prompt('When it comes to pets, are you traditional or non-traditional? (answer \'traditional\' or \'non-traditional\'). ')

    if (answer1.toLowerCase() == 'traditional') {

        answer2 = prompt('Got it! Traditional. Next question: do you prefer a small pet or one that can be virtually independent? (answer \'small\' or \'independent\'). ')
    
        if (answer2.toLowerCase() == 'small') {
            
            answer3 = prompt('Gotcha! You\'d like something small. Based on your responses, here are the two best pet choices for your lifestyle: Hamster and Rabbit. Which would you prefer? ')
    
            if (answer3.toLowerCase() == 'hamster'){
                answer4 = alert('Hamster it is! We\'ve got those in every color! ')
            }
    
            else if (answer3.toLowerCase() == 'rabbit') {
                answer4 = alert('Rabbit it is! We\'ve got those in every color! ')
            }
    
        } else if (answer2.toLowerCase() == 'independent') {
    
            answer3 = prompt('Gotcha! You\'d like something independent. Based on your responses, here are the two best pet choices for your lifestyle: Dog and Cat. Which would you prefer? ')
    
            if (answer3.toLowerCase() == 'dog'){
                answer4 = alert('Dog it is! We\'ve got those in every color! ')
            }
    
            else if (answer3.toLowerCase() == 'cat') {
                answer4 = alert('Cat it is! We\'ve got those in every color! ')
            }
    
        }
    
    }
    
    else if (answer1.toLowerCase() == 'non-traditional') { 
        
        answer2 = prompt('Got it! Non-traditional. Next question: do you prefer a pet with scales or something different? (answer \'scales\' or \'different\'). ')
    
        if (answer2.toLowerCase() == 'scales') {
            
            answer3 = prompt('Gotcha! You\'d like something with scales. Based on your responses, here are the two best pet choices for your lifestyle: Snake and Fish. Which would you prefer? ')
    
            if (answer3.toLowerCase() == 'snake'){
                answer4 = alert('Snake it is! We\'ve got those in every color! ')
            }
    
            else if (answer3.toLowerCase() == 'fish') {
                answer4 = alert('Fish it is! We\'ve got those in every color! ')
            }
    
        } else if (answer2 == 'different') {
    
            answer3 = prompt('Gotcha! You\'d like something different. Based on your responses, here are the two best pet choices for your lifestyle: Spider and Parrot. Which would you prefer? ')
    
            if (answer3.toLowerCase() == 'spider'){
    
                answer4 = alert('Spider it is! We\'ve got those in every color! ')
    
            }
            
            else if (answer3.toLowerCase() == 'parrot') {
    
                answer4 = alert('Parrot it is! We\'ve got those in every color! ')
    
            }
    
        }
    
    }
}




// if (answer1.toLowerCase() == 'traditional') {

//     answer2 = prompt('Got it! Traditional. Next question: do you prefer a small pet or one that can be virtually independent? (answer \'small\' or \'independent\'). ')

//     if (answer2.toLowerCase() == 'small') {
        
//         answer3 = prompt('Gotcha! You\'d like something small. Based on your responses, here are the two best pet choices for your lifestyle: Hamster and Rabbit. Which would you prefer? ')

//         if (answer3.toLowerCase() == 'hamster'){
//             answer4 = prompt('Hamster it is! We\'ve got those in every color! ')
//         }

//         else if (answer3.toLowerCase() == 'rabbit') {
//             answer4 = prompt('Rabbit it is! We\'ve got those in every color! ')
//         }

//     } else if (answer2.toLowerCase() == 'independent') {

//         answer3 = prompt('Gotcha! You\'d like something independent. Based on your responses, here are the two best pet choices for your lifestyle: Dog and Cat. Which would you prefer? ')

//         if (answer3.toLowerCase() == 'dog'){
//             answer4 = prompt('Dog it is! We\'ve got those in every color! ')
//         }

//         else if (answer3.toLowerCase() == 'cat') {
//             answer4 = prompt('Cat it is! We\'ve got those in every color! ')
//         }

//     }

// }

// else if (answer1.toLowerCase() == 'non-traditional') { 
    
//     answer2 = prompt('Got it! Non-traditional. Next question: do you prefer a pet with scales or something different? (answer \'scales\' or \'different\'). ')

//     if (answer2.toLowerCase() == 'scales') {
        
//         answer3 = prompt('Gotcha! You\'d like something with scales. Based on your responses, here are the two best pet choices for your lifestyle: Snake and Fish. Which would you prefer? ')

//         if (answer3.toLowerCase() == 'snake'){
//             answer4 = prompt('Snake it is! We\'ve got those in every color! ')
//         }

//         else if (answer3.toLowerCase() == 'fish') {
//             answer4 = prompt('Fish it is! We\'ve got those in every color! ')
//         }

//     } else if (answer3 == 'different') {

//         answer3 = prompt('Gotcha! You\'d like something different. Based on your responses, here are the two best pet choices for your lifestyle: Spider and Parrot. Which would you prefer? ')

//         if (answer3.toLowerCase() == 'spider'){

//             answer4 = prompt('Spider it is! We\'ve got those in every color! ')

//         }
        
//         else if (answer3.toLowerCase() == 'parrot') {

//             answer4 = prompt('Parrot it is! We\'ve got those in every color! ')

//         }

//     }

// }





