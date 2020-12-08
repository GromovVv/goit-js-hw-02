// let input;
// const numbers = [];
// let total = 0;


// while (true) {
//      input = prompt('Введите число!');

//     if (input === null) {
//         break;
//     }

//     input = Number(input);
//     const notANumber = Number.isNaN(input);
//     if (notANumber) {
//         alert ('Было введено не число, попробуйте еще раз.');
//         continue;
//     }

//     if (input !== notANumber){
//         numbers.push(input);
//     }

//     total += input;
//   } 

// console.log(`Общая сумма чисел равна - ${total}.`);
// console.log(`Массив введенных чисел = [${numbers}]`);
  
'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число!');

    if (input === null) {
        for (const number of numbers){
            total += number;
        }
        alert (`Общая сумма чисел равна - ${total}`);
        break;
    } else if (Number.isNaN(Number(input))) {
        alert ('Было введено не число, попробуйте еще раз.');
        continue;
    } else {
        numbers.push(Number(input));
    }


}