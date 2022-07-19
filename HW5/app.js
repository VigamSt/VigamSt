function reverseNumber(num) {
    const radix = 10;
    let numbers = new Array();
    let is_negative = num < 0;
    if (is_negative) {
      num = -num;
    }
    
    while (num !== 0) {
      numbers.push(num % radix);
      num = Math.floor(num / radix);
    }
    
    let result = 0;
    
    for (let i = 0; i < numbers.length; ++i) {
      result += numbers[numbers.length - i - 1] * radix ** i;
    }
    
    if (is_negative) {
      result = -result;
    }
    
    return result;
}

function forEach(arr, func) {
    for (let i = 0; i < arr.length; ++i) {
        func(arr[i]);
    }
}

function map(arr, func) {
    let new_array = new Array();

    forEach(arr, (element) => {
        new_array.push(func(element));
    });

    return new_array;
}

function filter(arr, func) {
    let new_array = new Array();
    
    forEach(arr, (element) => {
        if (func(element)) {
            new_array.push(element);
        }
    });

    return new_array;
}

function getAdultAppleLovers(data) {
    let filtered_data = filter(data, (element) => {
        const minimum_age = 18;
        const favorite_fruit = 'apple';
        return element['age'] > minimum_age && element['favoriteFruit'] === favorite_fruit;
    });

    let names = map(filtered_data, (element) => {
        return element['name'];
    })

    return names;
}

function getKeys(obj) {
    let keys = new Array();

    for (let key in obj) {
        if (key) {
            keys.push(key);
        }
    }

    return keys;
}

function getValues(obj) {
    let values = new Array();

    for (let key in obj) {
        if (key) {
            values.push(obj[key]);
        }
    }

    return values;
}

function showFormattedDate(dateObj) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let formattedDate = `It is ${dateObj.getDate().toString()} of ${months[dateObj.getMonth()]}` + 
        `, ${dateObj.getFullYear()}`;

    return formattedDate;
}
