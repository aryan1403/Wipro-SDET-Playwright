let a = "Aaryan";
let b = "Arush";
let c = "Arushi"; // 3rd variable

let d = "Hello " + a + ", " + b + " and " + c + "!"; // Concatenation
// console.log(d);
let e = `Hello ${a}, ${b} and ${c}!`; // Template literals
let f = `The length of a is ${a.length * 2}`; // Using template literals to get length
// console.log(e);
// console.log(f);

function table(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + (num * i)); // Using string concatenation
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}
// console.log(table(5)); // Displays the multiplication table for 5
// function sum(a, b) {
//     return a + b;
// }

// let sum1 = sum(5, 10);
let sum = (x, y) => x + y; // Arrow function for addition
console.log("Sum of 5 and 10:", sum(5, 10)); // 15

let arr = [1, 2, 3, 4, 5, "Aaryan"];

// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });

arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));
// console.log(arr.find(x => x === "Aaryan1")); 
// Arrow function is represented by =>

console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100
// floor -> rounds down to the nearest integer 0.9 --> 0
// 0 --> 99.999 -> 99 [0 - 99]

// Math.random --> 0 - 1 * 10 --> 0 - 10
// Math.floor(x) --> 0.3 (0, 1) = 0, 1.6 (1, 2) = 1, 3.998 (3, 4) = 3
// floor(0.1, 9.999) -> [0, 9]

// == / ===
// console.log(5 == "5"); 
// console.log(5 === "5");

let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

let val = "0.6";
console.log(parseInt(val)); // 0
console.log(parseFloat(val)); // 0.6

// floor [int] -> Low int, parseInt -> type conversion (string -> int)
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("yellow")); // -1
console.log(colors.includes("yellow")); // false
console.log(colors.length); // 3
console.log(colors[3]); // undefined
console.log(colors[colors.length - 1]); // "blue"
colors.push("yellow"); // Adds "yellow" to the end of the array
console.log(colors); // ["red", "green", "blue", "yellow"]
colors.pop(); // Removes the last element ("yellow")
console.log(colors); // ["red", "green", "blue"]
colors.unshift("purple"); // Adds "purple" to the beginning of the array
console.log(colors); // ["purple", "red", "green", "blue"]
colors.shift(); // Removes the first element ("purple")
console.log(colors); // ["red", "green", "blue"]
// [red] [green] [blue] --> undefined

// let indexOf = "yellow";
// for (let i = 0; i < colors.length; i++) {
//     if(colors[i] === indexOf) {
//         return i;
//     } if(i == colors.length - 1) {
//         return -1;
//     }
// }

// remove by index, obj, [1, length - 2] --> math.random() * (length - 2)
console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));
// console.log(colors.splice(Math.floor(Math.random() * (colors.length - 2)), 1));
// let str = "Hello World";
// console.log(str.slice(0, 5)); // "Hello"

const prices = [10, 20, 30, 40]; // tasks: find the total of all elements
// let s = 0;
// for (let i = 0; i < prices.length; i++) {
//     s += prices[i]; // s = s + prices[i]
// }

const total = prices.reduce((acc, curr) => { return acc + curr }, 0);
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60
// 60 + 40 = 100
console.log(total);
// console.log("Sum:", s);

const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'apple', 'banana', 'pineapple']; // apple: 3, banana: 3, cherry: 1, pineapple: 1
const tally = fruitBasket.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); // intial value of acc is an empty object
console.log(tally);
// {}
// {apple: 3, banana: 2, cherry: 1, pineapple: 1}

// function b(a, c) {
//     return a * c * 2;
// }
// function a(b, c) {
//     return b(a(1, 2), c);
// }

// arr -> 1, 3, 4, 5, 6
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months.splice(2, 3, 'Aaryan')); // Removes "February" and "March"
console.log(months);




