// Your code goes here

const minimum_amount_of_money = 1000;
const minimum_number_of_years = 1;
const maximum_percentage_of_year = 100;
const number_of_digits_after_comma = 2;

let amount_of_money = prompt('Enter the amount of money');
let number_of_years = prompt('Enter number of years');
let percentage_of_year = prompt('Enter percentage of year');

if (isNaN(amount_of_money) || 
isNaN(number_of_years) || 
isNaN(percentage_of_year)
) {
    alert('Invalid input data');
} else {
    amount_of_money = parseFloat(amount_of_money);
    number_of_years = parseFloat(number_of_years);
    percentage_of_year = parseFloat(percentage_of_year);
    
    if (
        amount_of_money < minimum_amount_of_money || 
        number_of_years < minimum_number_of_years || 
        percentage_of_year > maximum_percentage_of_year || 
        !Number.isInteger(number_of_years)
    ) {
        alert('Invalid input data');
    } else {
        let total_amount = (
            amount_of_money * 
            (1 + percentage_of_year / maximum_percentage_of_year) ** 
            number_of_years).toFixed(number_of_digits_after_comma
        );
    
        let total_profit = (total_amount - amount_of_money).toFixed(number_of_digits_after_comma);
        
        alert(`Initial amount: ${amount_of_money}\n` + 
        `Number of years: ${number_of_years}\n` + 
        `Percentage of year: ${percentage_of_year}\n` + 
        `\n` + 
        `Total profit: ${total_profit}\n` + 
        `Total amount: ${total_amount}`);
    }
}
