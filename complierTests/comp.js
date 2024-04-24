
const fs = require('fs');

const text = fs.readFileSync('../easyjavascript/mockups/mock1.txt', 'utf8');

console.log(text);


let split = text.split('\r');
console.log(split);


// '''complied output:
//     for (let i = 0; i <= 5; i++){
//     let num = 0;
//     num = num + (15 + i);
//     if (i == 5) {
//             console.log(num);}}

//     for (let i = 0; i <= 5; i++){
//         num = num + (15 + i);
//         if (i == 5) {
//             console.log(num);}}
// '''











