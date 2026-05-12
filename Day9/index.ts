let name: string = "Aaryan";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);

function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}

console.log(add(5, 10));

interface Person {
    id: number;
    name: string;
    age: number;
    role: Role; // using enum for role
    isAdmin?: boolean; // optional property ?
}

interface Person {
    email: string; // merge interface to add email property
}

enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
} // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

const user: Person = {
    id: 1,
    name: "Aaryan",
    age: 25,
    role: Role.User,
    email: "aaryan@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Arush",
    age: 30,
    email: "arush@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

let coordinates: [number, string] = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);

let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr);

// function identity<T>(arg: T): T {
//     return arg;
// }

// let output = identity<number>(10);
// let outpu1 = identity<string>("Aaryan");
// let outpu2 = identity<boolean>(true);

// console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }

// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};

// console.log(stringBag, numberBag);

class Storage<T> {
    private items: T[] = [];

    addItems(item: T): void { // no return type
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    }
}

const names = new Storage<string>();
names.addItems("Aaryan");
names.addItems("Arush");
names.addItems("Rohan");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3

interface HasLength {
    length: number;
}

// generics with contraints | extends keyword
function logLength<T extends HasLength>(arg: T): void { // T -> property .length --> string, arrays
    console.log(arg.length);
}

logLength("Aaryan Kumar"); // string --> length
logLength([1, 2, 3, 0]); // array --> length
// logLength(10); // number --> X

