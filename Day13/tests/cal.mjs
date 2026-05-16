// const { sum, sub } = require('./op.mjs')

import sum from "./op.mjs";
import path from "path";


function calculator(a, b) {
    const s = sum(a, b);
    // const su = sub(a, b);

    console.log(s);
    
}

calculator(2, 3)

console.log(path.resolve(process.cwd()));


// require(''), module.exports
// .mjs -> import, export 