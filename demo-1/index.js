// read environment variables
require('dotenv').config();

console.log(process.env);

// read environment variables
const first = parseInt(process.env.FIRST) | 2;
const second = parseInt(process.env.SECOND) | 2;

// perform business logic
const sum = first + second;

// return value
console.log(`${first} + ${second} = ${sum}`);
