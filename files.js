// we import the fs module built-in in node
const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data)=> {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());  //logs out 'buffer' which is a package of data
// })  // takes in a string(file path)


//writing files
// fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//     console.log("File written successfully");
// });

// fs.writeFile('./docs/blog12.txt', 'hello world again', () => {
//     console.log("File written successfully");
// });    // if you add a not existing file, it instead creates it.

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
    }
    console.log('Folder deleted');
})
}


//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
