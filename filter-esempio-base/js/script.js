const numbers = [10, 13, 45, 20, 50];

// const evenNumbers = [];
// numbers.forEach((element) => {
//     if(element % 2 === 0) {
//         evenNumbers.push(element);
//     }
// });
// console.log(evenNumbers);

const evenNumbers = numbers.filter((element) => {
    return element % 2 === 0;
});
console.log(evenNumbers);