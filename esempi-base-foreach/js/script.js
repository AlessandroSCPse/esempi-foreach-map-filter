const students = ['Camilla', 'Antonio', 'Filippo', 'Maria'];

// for(let i = 0; i < students.length; i++) {
//     const element = students[i];
//     console.log(element);
// }

students.forEach((thisStudent, index) => {
    console.log(index + ': ' + thisStudent);
});

