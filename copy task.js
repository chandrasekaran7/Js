/ // // ---------------one---------------------------
// let firstNumber = prompt("enter first number");
// let secondNumber = prompt("enter second number");
// let change;

// change = firstNumber;
// firstNumber = secondNumber;
// secondNumber = change;

// console.log("second number" + firstNumber);
// console.log("first number" + secondNumber);

// // // // // // ----------------two-----------------------------------------------------------------

// // let firstNumber = 100;
// // let secondNumber = 11;
// // let thirdNumber = 12;

// let firstNumber = prompt("Enter a number");
// let secondNumber = prompt("Enter a number");
// let thirdNumber = prompt("Enter a number");

// console.log(firstNumber, secondNumber, thirdNumber);

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//   console.log(`The largest number is ${firstNumber}`);
// } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//   console.log(`The largest number is ${secondNumber}`);
// } else {
//   console.log(`The largest number is ${thirdNumber}`);
// }

// // // // // ------------------three---------------------------------------------------
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// --------------------four--------------------------------------------------
// function palindrome(str) {
//   const len = name.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (name[i] !== name[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }
// const name = prompt("Enter a string: ");
// const answer = palindrome(name);
// console.log(answer);
// // // // -------------------------five----------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, "selva", "kanna"];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// // // // --------------------------six---------------------------------------------------

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

// for (i = 1; i < arr.length; i = i + 2) {
//   console.log(arr[i]);
// }

// // // --------------------seven-----------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = 0;
// let odd = 0;
// let evennum = [];
// let oddnum = [];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     even = even + arr[i];
//     evennum.push(i);
//     // console.log(`Even number ${arr[i]}`);
//   } else {
//     odd = odd + arr[i];
//     oddnum.push(i);
//     // console.log(`Odd number ${arr[i]}`);
//   }
// }
// console.log(`Even number is ${evennum}`);
// console.log("Even number total is :" + even);
// console.log(`Odd number is ${oddnum}`);
// console.log("Odd number total is :" + odd);

// // -----------------eight--------------------
// var sumPrime = 0;

// for (let i = 2; i <= 100; i++) {
//   let num = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       num = 1;
//       break;
//     }
//   }

//   if (i > 1 && num == 0) {
//     sumPrime = sumPrime + i;
//     console.log(i);
//   }
// }
// console.log(`Sum of prime numbers between  1 to 100 is : ${sumPrime}`);
// // -------------------------------------------------------------------------------
// var sum = 0;
// for (let i = 2; i <= 100; i++) {
//   var x = false;
//   for (j = 2; j < i; j++) {
//     if (i % j == 0 && j !== i) {
//       x = true;
//     }

//   if ((x = false)) {
//     sum.push(i);
//     console.log(i);
//   }
// }
// console.log("Total", sum);
// // --------------------------nine----------------------------------------------

// let arr = [2, 3, 1, 5, 6, 79, 4, 3, 55, 6, 64, 4, 3, 3];
// let reverse = arr.sort(function (b, a) {
//   return a - b;
// });
// console.log(reverse);

// ------------------------------------------------------------------------------
// let arrr = [2, 3, 1, 5, 6, 79, 4, 3, 55, 6, 64, 4, 3, 3];
// var accend = arrr.sort(function arrr(a, b) {
//   return a - b;
// });
// --------------------------------------------------------------------
// let arrr = [2, 3, 1, 5, 6, 79, 4, 3, 55, 6, 64, 4, 3, 3];
// var data = arrr.sort((a, b) => a - b);
// console.log(data);
// ---------------------------------ten---------------------------
// callback function

// function myfun(a, b, c) {
//   var d = a + b;
//   c(d);
// }
// function sec(e) {
//   console.log(e);
// }

// myfun(10, 20, sec);