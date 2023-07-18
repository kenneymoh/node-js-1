// modules and require
// importing people.js to modules
// const xyz = require('./people')

// console.log(xyz.people, xyz.ages);  // inmporting different multiple things from a different file

// destructuring imported objects
const { people, ages } = require('./people')
console.log(people, ages);


const os = require('os');

console.log(os.platform(), os.homedir());
