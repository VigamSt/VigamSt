// Your code goes here

const minimum_generated_number = 0;
let initial_maximum_generated_number = 8;
let maximum_generated_number = initial_maximum_generated_number;
const maximum_number_of_attempts = 3;
const initial_reward_for_the_first_attempt = 100;
const initial_reward_for_the_second_attempt = 50;
const initial_reward_for_the_third_attempt = 25;
let initial_reward_sums = [
    initial_reward_for_the_first_attempt, 
    initial_reward_for_the_second_attempt, 
    initial_reward_for_the_third_attempt
];
let reward_sums = JSON.parse(JSON.stringify(initial_reward_sums));
const range_increment = 4;
const reward_sums_increase = 2;


if (confirm('Do you want to play a game?')) {
    let total_prize_sum = 0;
    while (true) {
        let generated_pocket_number = getRandomInt(minimum_generated_number, maximum_generated_number);

        let current_attempt_number = 0;
        for (; current_attempt_number < maximum_number_of_attempts; ++current_attempt_number) {
            let supposed_pocket_number = parseInt(prompt(
                `Range of cells: [${minimum_generated_number}, ${maximum_generated_number}].\n` + 
                `Attempts left: ${maximum_number_of_attempts - current_attempt_number}.\n` + 
                `Total prize: ${total_prize_sum}.\n` + 
                `Possible prize on current attempt: ${reward_sums[current_attempt_number]}.` + 
                '\n' + 
                'Enter a number of pocket on which the ball could land.\n'
            ));
            if (supposed_pocket_number === generated_pocket_number) {
                break;
            }
        }

        if (current_attempt_number === maximum_number_of_attempts) {
            alert(`Thank you for your participation. Your prize is: ${total_prize_sum}$`);
            if (confirm('Do you want to play again?')) {
                total_prize_sum = 0;
                maximum_generated_number = initial_maximum_generated_number;
                reward_sums = JSON.parse(JSON.stringify(initial_reward_sums));
                continue;
            }
        } else {
            alert(`Congratulation, you won!. Your prize is: ${reward_sums[current_attempt_number]}$.`);
            total_prize_sum += reward_sums[current_attempt_number];
            if (confirm('Do you want to continue?')) {
                maximum_generated_number += range_increment;
                for (let i = 0; i < reward_sums.length; ++i) {
                    reward_sums[i] *= reward_sums_increase;
                }
                continue;
            } else {
                alert(`Thank you for your participation. Your prize is: ${total_prize_sum}$`);
                if (confirm('Do you want to play again?')) {
                    total_prize_sum = 0;
                    maximum_generated_number = initial_maximum_generated_number;
                    reward_sums = JSON.parse(JSON.stringify(initial_reward_sums));
                    continue;
                }
            }
        }
        break;
    }
} else {
    alert('You did not become a billionaire, but can.');
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
