// computer's choice randomizer
let choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log('The Computer has chosen: ' + computerChoice);
    return computerChoice;

};

