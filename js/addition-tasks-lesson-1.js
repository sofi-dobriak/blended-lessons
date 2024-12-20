'use strict';

//================== ПРОСТІ ЗАДАЧІ ==================

console.log('================== ПРОСТІ ЗАДАЧІ ==================');

//Task 1
// Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

console.log('Task #1');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printArrayElements(array) {
    for (let item of array) {
        console.log(item);
    }
}

printArrayElements(array);

//Task 2
// Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль

console.log(' ');
console.log('Task #2');

const NewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenElements(array) {
    for (const item of array) {
        if (item % 2 === 0) {
            console.log(item);
        }
    }
}

printEvenElements(NewArray);

//Task 3
// Напиши функцію, яка приймає масив чисел та виводить лише парні числа у консоль

console.log(' ');
console.log('Task #3');

console.log('У попередій задачі функція виконує цю саму дію');

//Task 4
// Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив чисел. Потрібно вивести лише ті елементи масиву які більші за max.

console.log(' ');
console.log('Task #4');

const randomArray = [12, 45, 67, 23, 89, 34, 56, 78, 91, 10];

function getMaxNumbers(arr, max) {
    for (const item of arr) {
        if (item > max) {
            console.log(item);
        }
    }
}

getMaxNumbers(randomArray, 20);

//Task 5
// Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві

console.log(' ');
console.log('Task #5');

const sumArray = [12, 45, 67, 23, 89, 34, 56, 78, 91, 10];
let sum = 0;

function getSumOfArray(arr) {
    for (const item of arr) {
        sum += item;
    }

    return sum;
}

let result = getSumOfArray(sumArray);
console.log(result);

//Task 6
// Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна порахувати скільки разів шуканий елемент зустрічається у масиві.

console.log(' ');
console.log('Task #6');

const numbersArray = [3, 7, 3, 1, 3, 9, 5, 3, 8, 3];

function getCountOfElement(arr, elem) {
    const findArray = [];

    for (const item of arr) {
        if (item === elem) {
            findArray.push(item);
        }
    }

    return findArray.length;
}

let resultArray = getCountOfElement(numbersArray, 7);
console.log(resultArray);

//Task 7
// Напиши функцію яка приймає масив чисел. Функція повинна видалити усі негативні(відємні числа) з масиву та повернути новий масив.

console.log(' ');
console.log('Task #7');

const numberArray = [4, -3, 7, -1, 0, 5, -8, 9, -6, 2];
console.log(numberArray);

function getPositiveNumbers(array) {
    let positiveArraay = [];

    for (const item of array) {
        if (item >= 0) {
            positiveArraay.push(item);
        }
    }

    return positiveArraay;
}

let positiveResult = getPositiveNumbers(numberArray);
console.log(positiveResult);

//Task 8
// Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до нижнього регістру, в іншому випадку привести до верхнього регістру.

console.log(' ');
console.log('Task #8');

const stringsArray = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

function getModString(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length < 6) {
            array[i] = array[i].toLowerCase();
        } else {
            array[i] = array[i].toUpperCase();
        }
    }
    return array;
}

let finalResult = getModString(stringsArray);
console.log(finalResult);

//Task 9
// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише непарні числа.

console.log(' ');
console.log('Task #9');

const arrayNumbers = [12, 45, 67, 23, 89, 34, 56, 78, 91, 10];
console.log(arrayNumbers);

function getOddNumbers(arr) {
    const oddArray = [];

    for (let item of arr) {
        if (item % 2 === 1) {
            oddArray.push(item);
        }
    }

    return oddArray;
}

console.log(getOddNumbers(arrayNumbers));

//Task 10
// Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне число помножене на індекс, за яким воно знаходиться в масиві.

console.log(' ');
console.log('Task #10');

const arrayNumber = [12, 45, 67, 23, 89, 34, 56, 78, 91, 10];
console.log(arrayNumber);

function getMultArray(array) {
    const multiplyArray = [];

    for (let i = 0; i < array.length; i++) {
        let result = array[i] * i;
        multiplyArray.push(result);
    }

    return multiplyArray;
}

console.log(getMultArray(arrayNumber));

//Task 11
// Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які діляться на 3.

console.log(' ');
console.log('Task #11');

const newArrayNumber = [12, 45, 67, 23, 89, 34, 56, 78, 91, 10];
console.log(newArrayNumber);

function getNumbersThreeMultiples(array) {
    const threeMultiplesArray = [];

    for (const item of array) {
        if (item % 3 === 0) {
            threeMultiplesArray.push(item);
        }
    }

    return threeMultiplesArray;
}

console.log(getNumbersThreeMultiples(newArrayNumber));

//================== СЕРЕДНІ ЗАДАЧІ ==================

console.log(' ');
console.log('================== СЕРЕДНІ ЗАДАЧІ ==================');

//Task 1
// Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

console.log('Task #1');

const firstArray = [1, 2, 3, 4, 5, 6];
const secondArray = [4, 5, 6, 7, 8, 9];

function getSameItems(arr1, arr2) {
    const sameArray = [];

    for (const item of arr1) {
        if (arr2.includes(item)) {
            sameArray.push(item);
        }
    }

    return sameArray;
}

console.log(getSameItems(firstArray, secondArray));

//Task 2
// Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив де будуть лише елементи масиву arr1 яких не має у масиві arr2.

console.log(' ');
console.log('Task #2');

const firsNewArray = [1, 2, 3, 4, 5, 6];
const secondNewArray = [4, 5, 6, 7, 8, 9];

function getDifferentItems(arr1, arr2) {
    const diffArray = [];

    for (const item of arr1) {
        if (arr2.includes(item) === false) {
            diffArray.push(item);
        }
    }

    return diffArray;
}

console.log(getDifferentItems(firsNewArray, secondNewArray));

//Task 3
// Напиши функцію яка приймає масив та знаходить мінімальний елемент.

console.log(' ');
console.log('Task #3');

const arrayWithNumbers = [12, 45, 67, 23, 89, 5, 34, 56, 78, 91, 10];

function getMinElement(array) {
    let minElement = array[0];

    for (const item of array) {
        minElement = Math.min(minElement, item);
    }

    return minElement;
    // return maxElement = Math.min(...array); альтернативне рішення в один рядок
}

console.log(getMinElement(arrayWithNumbers));

//Task 4
// Напиши функцію яка приймає масив та знаходить максимальний елемент.

console.log(' ');
console.log('Task #4');

const arrayWithNumber = [12, 45, 67, 23, 350, 89, 5, 34, 56, 78, 91, 10];

function getMaxElement(array) {
    let maxElement = array[0];

    for (const item of array) {
        maxElement = Math.max(maxElement, item);
    }

    return maxElement;
    // return maxElement = Math.max(...array); альтернативне рішення в один рядок
}

console.log(getMaxElement(arrayWithNumber));

//Task 5
// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за середнє значення всіх елементів масиву.

console.log(' ');
console.log('Task #5');

const arrayTaskFive = [12, 45, 67, 23, 350, 89, 5, 34, 56, 78, 91, 10];

function getMaxArray(array) {
    let sum = 0;

    for (const item of array) {
        sum += item;
    }

    let averageValue = sum / array.length;

    const maxArray = [];

    for (const item of array) {
        if (item > averageValue) {
            maxArray.push(item);
        }
    }

    return maxArray;
}

console.log(getMaxArray(arrayTaskFive));

//Task 6
// Напиши функцію яка приймає масив та повертає масив лише з тих елементів які більші за власний індекс.

console.log(' ');
console.log('Task #6');

const arrayTaskSix = [0, 1, 2, 4, 1, 3, 10, 2, 9, 5];

function getMaxDigit(array) {
    const maxDigitArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > i) {
            maxDigitArray.push(array[i]);
        }
    }

    return maxDigitArray;
}

console.log(getMaxDigit(arrayTaskSix));

//Task 7
// Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний елемент та видалити його з масиву.

console.log(' ');
console.log('Task #7');

const arrayTaskSeven = [12, 45, 67, 23, 350, 89, 5, 34, 56, 78, 91, 10];
console.log(arrayTaskSeven);

function removeMinItem(array) {
    let minItem = Math.min(...array);

    let minIndex = array.indexOf(minItem);
    array.splice(minIndex, 1);

    return array;
}

console.log(removeMinItem(arrayTaskSeven));

//Task 8
// Напиши функцію яка приймає два параметри start та end. Функія повина повернути масив де будуть числа з діапазону але лише ті у яких не має цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5" у собі.

console.log(' ');
console.log('Task #8');

function createArrayWithoutFive(start, end) {
    const filterArray = [];

    for (let i = start; i <= end; i++) {
        if (!i.toString().includes('5')) {
            filterArray.push(i);
        }
    }

    return filterArray;
}

console.log(createArrayWithoutFive(12, 20));

//================== СКЛАДНІ ЗАДАЧІ ==================

console.log(' ');
console.log('================== СКЛАДНІ ЗАДАЧІ ==================');

//Task 1
// Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні числа переміщені в початок, а всі непарні - в кінець.

const arrayTaskOne = [12, 45, 67, 23, 350, 89, 5, 34, 56, 78, 91, 10];

function getFilterArray(array) {
    const newFilterArray = [];

    for (const item of array) {
        if (item % 2 === 0) {
            newFilterArray.unshift(item);
        } else {
            newFilterArray.push(item);
        }
    }

    return newFilterArray;
}

console.log(getFilterArray(arrayTaskOne));

//Task 2
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є сумою усіх попередніх елементів.

console.log(' ');
console.log('Task #2');

const arrayTaskTwo = [12, 45, 67, 23, 350, 89, 5, 34, 56, 78, 91, 10];

function getSumArrayItem(array) {
    const sumArrayItem = [];

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        sumArrayItem.push(sum);
    }

    return sumArrayItem;
}

console.log(getSumArrayItem(arrayTaskTwo));

//Task 3
// Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить лише унікальні числа.

console.log(' ');
console.log('Task #3');

const arrayTaskUnique = [12, 45, 67, 12, 23, 45, 89, 5, 34, 56, 89, 10];

function getUnuqieDigits(array) {
    const uniqueDigitArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!uniqueDigitArray.includes(array[i])) {
            uniqueDigitArray.push(array[i]);
        }
    }

    return uniqueDigitArray;
}

console.log(getUnuqieDigits(arrayTaskUnique));

//Task 4
// Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без дублювання елементів.

console.log(' ');
console.log('Task #4');

const arrayOne = [12, 45, 67, 23, 89, 5, 34, 56];
const arrayTwo = [78, 45, 23, 91, 10, 34, 67, 100];

function getConcatArray(arr1, arr2) {
    const concatArray = [];

    for (const item of arr1) {
        if (!concatArray.includes(item)) {
            concatArray.push(item);
        }
    }

    for (const item of arr2) {
        if (!concatArray.includes(item)) {
            concatArray.push(item);
        }
    }

    return concatArray;
}

console.log(getConcatArray(arrayOne, arrayTwo));

//Task 5
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен елемент є середньоарифметичним всіх сусідніх елементів.

console.log(' ');
console.log('Task #5');

const arrayFive = [12, 45, 67, 23, 89, 5, 34, 56];

function getAverageArray(array) {
    const averageArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            averageArray.push(array[i + 1]);
        } else if (i === array.length - 1) {
            averageArray.push(array[i - 1]);
        } else {
            averageArray.push((array[i - 1] + array[i + 1]) / 2);
        }
    }

    return averageArray;
}

console.log(getAverageArray(arrayFive));

//Task 6
// Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи відсортовані в порядку збільшення або зменшення.

console.log(' ');
console.log('Task #6');

const arraySix = [12, 45, 67, 23, 89, 5, 34, 56];

function getAscendingArray(array, order = 'asc') {
    return array.toSorted((a, b) => (order === 'asc' ? a - b : b - a));

    // return array.slice().sort((a, b) => (order === 'asc' ? a - b : b - a)); //це для старіших браузерів
}

console.log(getAscendingArray(arraySix, 'asc'));

//Task 7
// Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною елементів.

console.log(' ');
console.log('Task #7');

const stringArray = [
    'apple',
    'banana',
    'cherry',
    'date',
    'elderberry',
    'fig',
    'grape',
    'honeydew',
    'kiwi',
    'lemon',
];

function getFilterLengthArray(array) {
    return array.sort((a, b) => a.length - b.length);
}

console.log(getFilterLengthArray(stringArray));
