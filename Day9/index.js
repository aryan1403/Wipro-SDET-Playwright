function welcome(name = "Guest") { // default params
    console.log(`Welcome ${name}!`);
}

welcome("Aaryan")
welcome("Arush")
welcome()

const nums = [1, 2, 3, 4, 5]; // spread operator
const newNums = [...nums, 6, 7, 8];
console.log(newNums);

const obj = {name: "aryan"};
const updatedObj = {...obj, age: 25};
console.log(updatedObj);

const cal = { // rest operator
    sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
}

console.log(cal.sum(1, 2, 43, 4))

// destructuring
// const arr = ["Aryan", "Arush", "Vivek", "Rohit"];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];

const [first, second, third, fourth, fifth] = ["Aryan", "Arush", "Vivek", "Rohit"]; // pos-based extraction
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

const { name, age } = {name: "aryan", age: 25}; // key-based extracted
console.log(name, age);

