const people = [
    {
        name: 'Alessandro',
        lastname: 'Verdi'
    },
    {
        name: 'Maria',
        lastname: 'Rossi'
    },
    {
        name: 'Camilla',
        lastname: 'Bianchi'
    }
];

const peopleList = document.getElementById('people-list');

const advancedPeopleArray = [];
people.forEach((element) => {
    // Creiamo un numero random da 20 a 90
    const randomAge = getRndInteger(20, 90);

    // // Copio elemento in una nuova variabile
    // const elementCopy = {...element};
    // // aggiungo age a element
    // elementCopy.age = randomAge;
    
    // Copio in una nuova variabile e aggiungo age
    elementCopy = {
        ...element,
        age: randomAge
    };
    
    // poi element lo pusho dentro advancedPeopleArray
    advancedPeopleArray.push(elementCopy);
});

console.log(people);
console.log(advancedPeopleArray);

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}