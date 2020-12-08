let input;
const numbers = [];
let total = 0;


while (true) {
     input = prompt('Введите число!');
    

    if (input === null) {
        break;
    }

    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        alert ('Было введено не число, попробуйте еще раз.');
        continue;
    }
    if (input !== notANumber){
        numbers.push(input);
    }
    

    for (const number of numbers) {
    }

    total += input;

  } 

console.log(`Общая сумма чисел равна - ${total}.`);

console.log(`Массив введенных чисел = [${numbers}]`);
  
