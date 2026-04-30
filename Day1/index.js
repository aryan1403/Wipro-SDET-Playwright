let a = 5;
let b = 10;

let str = "Hello, World!";

// String operations
console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-5):", str.substring(0, 5)); // 0 - first character, 5 - up to but not including the 5th character

// Mathematical operations
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b); // Remainder (Modulo)

// Logical operations --> bool
console.log("a > b:", a > b); // F
console.log("a < b:", a < b); // T
console.log("a == b:", a == b); // F === Strict equality (checks value and type)
console.log("a != b:", a != b); // T
console.log("a >= b:", a >= b); // F
console.log("a <= b:", a <= b); // T

let obj = {
    name: "Alice",
    age: 30,
    city: "New York"
}
console.log("Object:", obj);
console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("City:", obj.city);

// String str = "Aryan"; int a = 5; boolean b = true;
let str2 = "Aryan";
let a2 = 5;
let b2 = true;

str2 = 23;
console.log("str2:", str2); // str2 is now a number, demonstrating dynamic typing in JavaScript`

function add(a, b) {
    return a + b;
}

console.log("Function add(5, 10):", add(5, 10)); // 15

const c = 5; // final value, cannot be reassigned
// c = 6; // This would cause an error
console.log(c);

let l = 5;
var v = 6;

{
    let l = 10; // This l is block-scoped, different from the global l
    var v = 20; // This v is function-scoped, it will overwrite the global v
    console.log("Inside block, l:", l); // 10
    console.log("Inside block, v:", v); // 20
}

console.log("Outside block, l:", l); // 5
console.log("Outside block, v:", v); // 20

let arr = [1, "Aaryan", 3, true, 5];
let arr2 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr2.length; i++) {  
//     console.log("Element at index after * 2 ", i, ":", arr2[i] * 2);
// }
// let count = arr2.length - 1;
// while (count >= 0) {
//     console.log("Element at index after * 2 ", count, ":", arr2[count] * 2);
//     count--;
// }

// arr2.forEach(function(x) {
//     console.log("Element after * 2 ", x, ":", x * 2);
// });
// arr2.map(function(x) {
//     console.log("Element after * 2 ", x, ":", x * 2);
// });

let i = 0;
let j = 10;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

// Calendar --> Week --> final (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)

let choice = "a";

switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}

console.log(typeof choice, typeof a, typeof b, typeof str, typeof obj, typeof arr); // typeof operator to check the type of variables
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(typeof element === "number") {
        console.log(element, "is a number");
    }
    // console.log(element, typeof element); 
}