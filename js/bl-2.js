'use strict';

// Task 1
//Напиши скрипт, який для об'єкта user,
//Послідовно:
//1 - додати поле mood зі значенням 'happy'
//2 - замінити hobby на 'skydiving'
//3 - замінити значення premium на false
//4 - виводити вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() і for...of

console.log('Task #1');

const user = {
    name: 'John',
    age: 20,
    hobby: 'tenis',
    premium: true,
};

// console.log(user);

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }

// Task 2
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

console.log(' ');
console.log('Task #2');

function caclculateAverage(...params) {
    let sum = 0;
    let paramsLength = 0;

    for (const param of params) {
        if (typeof param === 'number') {
            sum += param;
            paramsLength++;
        }
    }

    const average = sum / paramsLength;

    return average;
}

// console.log(caclculateAverage(5, 10, 15, 'Hello', true));

// Task 3
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
//const numbers = [2, 5, 35, 56, 12, 1, 24, 7, 80, 3];

console.log(' ');
console.log('Task #3');

const numbers = [2, 5, 35, 56, 12, 24, 1, 7, 80, 3];

function findSmallerNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return 'Wrong a type of data';
    }

    let smallerNumber = numbers[0];

    for (const number of numbers) {
        if (number < smallerNumber) {
            smallerNumber = number;
        }
    }

    return smallerNumber;
}

// console.log(findSmallerNumber(numbers));

// Task 4
//Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти чи зняти гроші з рахунку

//Кожна транзакція це об'єкт з властивостями id, type, amount

console.log(' ');
console.log('Task #4');

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

const account = {
    //поточний баланс рахунку
    balance: 0,

    //Історія транзакцій
    transactions: [],

    //Метод створює та повертає об'єкт транзакцій
    //Приймає суму та тип транзакцій
    createTransaction: function (amount, type) {
        return {
            id: this.transactions.length,
            amount,
            type,
        };
    },

    //Викликає createTransaction для створення об'єкта транзакції
    //після чого додає їх у історію транзакцій
    deposit: function (amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
    },

    //Метод відповідає за зняття суми з балансу.
    //Приймає суму транцякції.
    //Викликає createTransaction для створення об'єкта транзакції
    //після чого додає їх у історію транзакцій
    //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
    //що недостатньо коштів на рахунку
    withDraw: function (amount) {
        if (this.balance < amount) {
            console.log('Недостатньо коштів на рахунку');
            return;
        }

        this.balance -= amount;
        const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
        this.transactions.push(transaction);
    },

    //Метод повертає поточний баланс
    getBalance: function () {
        return this.balance;
    },

    //Метод шукає та повертає об'єкт транзакції по id
    getTransactionDetails: function (id) {
        return this.transactions[id];
    },

    //Метод повертає кількість транзакцій певного типу
    //з усієї історії транзакцій
    getTransactionByType: function (type) {
        let count = 0;

        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                count++;
            }
        }

        return count;
    },
};

account.deposit(500);
account.withDraw(600);
account.withDraw(400);
account.withDraw(50);
account.deposit(950);
account.deposit(950);

console.log(`Current Balance: ${account.getBalance()}`);
console.log(account.transactions);
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionByType('deposit'));
