// Global object

// console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);  // cancels out the repetitive 1 second
}, 3000)    // runs after every 3 seconds

const int = setInterval(() =>{
    console.log('in the interval');
}, 1000)    // continously runs every second

console.log('__dirname'); // gets us the absolute path the current folder the file is in
console.log('__filename');  // gets the absolute path of the filename added on aswell

console.log(document.querySelector);
