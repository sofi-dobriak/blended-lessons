'use strict';

//Task 1
// Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.

console.log('Task #1');

function getSum(a, b) {
    return a + b;
}

console.log(getSum(50, 8));

//Task 2
// Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з них.

console.log('Task #2');

function getMax(a, b, c) {
    return Math.max(a, b, c);
}

console.log(getMax(50, 8, 12));

//Task 3
// Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і false, якщо ні.

console.log('Task #3');

function getValidNumber(number, min, max) {
    return number >= min && number <= max ? true : false;
}

console.log(getValidNumber(50, 8, 12));

//Task 4
// Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.

console.log('Task #4');

function getFirstSymbol(string) {
    return string[0];
}

console.log(getFirstSymbol('Hello'));

//Task 5
// Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

console.log('Task #5');

function getLastSymbol(string) {
    return string[string.length - 1];
}

console.log(getLastSymbol('Hello'));

//Task 6
// Напиши функцію, яка приймає число і повертає true, якщо число парне, і false, якщо ні.

console.log('Task #6');

function checkEvenNumber(number) {
    return number % 2 === 0 ? true : false;
}

console.log(checkEvenNumber(8));

//Task 7
// Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то повернути null, в іншому випадку повернути добуток цих двох чисел.

console.log('Task #7');

function getMultiplyNumber(num1, num2) {
    return num1 === 0 || num2 === 0 ? null : num1 * num2;
}

console.log(getMultiplyNumber(8, 8));

//Task 8
// Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у тег div. Приклад: на вході був рядок "Hello world" а на виході рядок "<div>Hello world</div>"

console.log('Task #8');

function addDivBox(string) {
    return `<div>${string}</div>`;
}

console.log(addDivBox('JavaScript'));

//Task 9
// Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова розділені пробілами).

console.log('Task #9');

function getWordCount(string) {
    return string.split(' ').length;
}

console.log(getWordCount('I love JavaScript so much'));

//Task 10
// Напиши функцію, яка приймає рядок і повертає його довжину помножену на кількість слів в цьому рядку.

console.log('Task #10');

function getMultypliString(string) {
    const wordCount = string.split(' ').length;
    return wordCount * string.length;
}

console.log(getMultypliString('I love'));

//Task 11
// Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому (a, e, i, o, u). Використовуйте метод includes та цикл.

console.log('Task #11');

function getCountVowelLetters(string) {
    let countVowelLetters = 0;
    const vowelLettersArray = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < string.length; i++) {
        if (vowelLettersArray.includes(string[i].toLowerCase())) {
            countVowelLetters++;
        }
    }

    return countVowelLetters;
}

console.log(getCountVowelLetters('I love JavaScript'));

//Task 12
// Напиши функцію, яка приймає рядок і повертає новий рядок, де слова розташовані у зворотному порядку.

console.log('Task #12');

function getReverseString(string) {
    return string.split(' ').reverse().join(' ');
}

console.log(getReverseString('I love JavaScript'));

//Task 13
// Напиши функцію, яка приймає довільну кількість аргументів і повертає true, якщо всі аргументи є числами, і false, якщо ні.

console.log('Task #13');

function checkValidArrg(...args) {
    for (const arg of args) {
        if (typeof arg !== 'number' || isNaN(arg)) {
            return false;
        }
    }

    return true;
}

console.log(checkValidArrg(1, 2, 3, 4)); // Виведе: true
console.log(checkValidArrg(1, 'text', 3)); // Виведе: false
console.log(checkValidArrg(1, NaN, 3)); // Виведе: false

//Task 14
// Напиши функцію, яка приймає довільну кількість аргументів і повертає їх об'єднаними в один рядок, розділений комами.

console.log('Task #14');

function getString(...args) {
    return args.join(', ');
}

console.log(getString('I love JavaScript', 'Sun is shining', 'I can do it'));

//Task 15
// Напиши функцію, яка приймає довільну кількість чисел і повертає їхній добуток.

console.log('Task #15');

function getMultiply(...args) {
    let mult = 1;

    for (const arg of args) {
        mult *= arg;
    }

    return mult;
}

console.log(getMultiply(10, 2, 2, 3));

//Task 16
// Напиши функцію, яка приймає довільну кількість чисел і повертає кількість непарних чисел серед них.

console.log('Task #16');

function getConutOddDigits(...args) {
    let count = 0;

    for (const arg of args) {
        if (arg % 2 === 1) {
            count++;
        }
    }

    return count;
}

console.log(getConutOddDigits(12));

//Task 17
// Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок що є найдовшим

console.log('Task #17');

function getLongestString(...args) {
    let longestString = args[0];

    if (args.length === 0) {
        return '';
    }

    for (const arg of args) {
        if (arg.length > longestString.length) {
            longestString = arg;
        }
    }

    return longestString;
}

console.log(getLongestString('I love JavaScript', 'Sun is shining', 'I can do it'));

//Task 18
// Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один цілий рядок.

console.log('Task #18');

function getOneString(...args) {
    return args.join(' ');
}

console.log(getOneString('I', 'can', 'do', 'it', '!'));
