// Your code goes here

function isEquals(value1, value2) {
    return value1 === value2;
}

function isBigger(value1, value2) {
    return value1 > value2;
}

function storeNames(...names) {
    let array = new Array();

    for (let i = 0; i < names.length; ++i) {
        array.push(names[i]);
    }

    return array;
}

function getDifference(value1, value2) {
    return value1 >= value2 ? value1 - value2 : value2 - value1;
}

function negativeCount(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] < 0) {
            ++count;
        }
    }

    return count;
}

function letterCount(string, letter) {
    let count = 0;

    for (let i = 0; i < string.length; ++i) {
        if (string.charAt(i) === letter) {
            ++count;
        }
    }

    return count;
}

function countPoints(scores) {
    const number_of_points_for_win = 3;
    const number_of_points_for_draw = 1;
    let count = 0;

    for (let i = 0; i < scores.length; ++i) {
        let x = parseInt(scores[i]);
        let y = parseInt(scores[i].slice(scores[i].indexOf(':') + 1, scores[i].length));
        if (x > y) {
            count += number_of_points_for_win;
        } else if (x === y) {
            count += number_of_points_for_draw;
        }
    }

    return count;
}
