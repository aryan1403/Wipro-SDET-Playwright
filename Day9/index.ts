let name: string = "Aaryan";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);

function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}

console.log(add(5, 10));