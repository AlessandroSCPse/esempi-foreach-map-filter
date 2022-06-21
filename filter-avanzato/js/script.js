const dinnerPeople = [
    {
        name: 'Maria Bianchi',
        table: 1,
        allergy: ['fragole', 'farina']
    },
    {
        name: 'Franco Verdi',
        table: 3,
        allergy: []
    },
    {
        name: 'Ernesto Rossi',
        table: 1,
        allergy: ['arachidi']
    },
    {
        name: 'Pino Blu',
        table: 1,
        allergy: []
    }
];

const allergicPeople = dinnerPeople.filter((element) => {
    return element.allergy.length > 0;
});

console.log(allergicPeople);