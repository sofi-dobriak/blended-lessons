'use strict';

//!======================================================================================================

// Якщо змінна number дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

function getRightNum(number) {
    return number === 10 ? 'Вірно' : 'Невірно';
}

// console.log(getRightNum(10));
// console.log(getRightNum(20));

//!======================================================================================================

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі.

function getSeason(number) {
    switch (number) {
        case 1:
            return 'Зима';
            break;
        case 2:
            return 'Весна';
            break;
        case 3:
            return 'Літо';
            break;
        case 4:
            return 'Осінь';
            break;
        default:
            return 'Невідома пора року';
    }
}

// console.log(getSeason(1));
// console.log(getSeason(2));
// console.log(getSeason(3));
// console.log(getSeason(4));
// console.log(getSeason(5));

//!======================================================================================================

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10

function convertMinutesToTime(minutes) {
    const hours = Math.round(minutes / 60);
    const ramainingMinutes = minutes % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(ramainingMinutes).padStart(2, '0');

    console.log(`${formattedHours}:${formattedMinutes}`);
}

convertMinutesToTime(80);

//!======================================================================================================

//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

function getMinMax(min, max) {
    console.log(`min: ${min}, max: ${max}`);

    for (let i = max; i >= min; i--) {
        console.log(i);
    }
}

function getTotalMinMax(min, max) {
    let sum = 0;

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }

    console.log(`Сума чисел від ${min} до ${max} становить ${sum}`);
    return sum;
}

// getMinMax(10, 20);
// getTotalMinMax(10, 20);

//!======================================================================================================

// Напишіть if..else, що відповідає наступному switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

function reWriteSwitch(browser) {
    if (browser === 'Edge') {
        console.log("You've got the Edge!");
    } else if (
        browser === 'Chrome' ||
        browser === 'Firefox' ||
        browser === 'Safari' ||
        browser === 'Opera'
    ) {
        console.log('Okay we support these browsers too');
    } else {
        console.log('We hope that this page looks ok!');
    }
}

// reWriteSwitch('Edge');
// reWriteSwitch('Chrome');
// reWriteSwitch('OperaOperaOpera');
