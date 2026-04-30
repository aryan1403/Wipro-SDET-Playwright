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