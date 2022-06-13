/* function имя(параметры) {
  ...тело...
} */

//--------------------------------------------------------------------------------

// function showMessage(text) {
//   console.log(text);
// }
// showMessage("Всем привет!");
// showMessage("Всем салют!");
// showMessage("Всем салам алейкум!");
// showMessage("Hello");
// showMessage("Bye!");
//--------------------------------------------------------------------------------

// function sayHello() {
//   console.log("Hello, Welcome to My Webpage!");
// }
// sayHello();
//--------------------------------------------------------------------------------

// let sum = (num1, num2) => {
//   return num1 + num2;
// };

//--------------------------------------------------------------------------------

// let message = (sum) => {
//   console.log(`Сумма: ${sum}`);
// };

// message(sum(40, 50));

//--------------------------------------------------------------------------------

// let fruits = 15;

// function peelFruits(fruits) {
//   if (fruits >= 0) {
//     console.log(`Осталось ${fruits}`);
//     fruits--;
//     peelFruits(fruits);
//   }
// }
// peelFruits(fruits);

//--------------------------------------------------------------------------------

// function checkNumber(num) {
//   if (num === 0) {
//     return 0;
//   } else if (num < 0) {
//     return -1;
//   } else {
//     return 1;
//   }
// }

// console.log(checkNumber(600));

//--------------------------------------------------------------------------------

function calc(a, b) {
  // return a + b;
  // return a - b;
  // return a * b;
  // return a / b;
  return a ** b;
}
console.log(calc(6, 2));
