// read environment variables
require('dotenv').config();

// read environment variables
const first = parseInt(process.env.FIRST);
const second = parseInt(process.env.SECOND);

// perform business logic
const sum = first + second;

// return value
console.log(`${first} + ${second} = ${sum}`);
