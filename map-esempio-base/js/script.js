const originalNumbers = [56, 2, 58, 23, 5];

// const increasedNumbers = [];
// originalNumbers.forEach((element) => {
//     console.log(element);
//     const increasedNumber = element + 1;
//     increasedNumbers.push(increasedNumber);
// });

// console.log(increasedNumbers);

const increasedNumbers = originalNumbers.map((element) => {
    const increasedNumber = element + 1;
    return increasedNumber;
});

console.log(originalNumbers);
console.log(increasedNumbers);