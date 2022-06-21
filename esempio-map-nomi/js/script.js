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
        name: 'Paolo',
        lastname: 'Bianchi'
    },
];

const names = people.map((element) => {
    // concateno nome e cognome
    const finalName = element.name + ' ' + element.lastname;
    // e lo metto nel return cosi che venga salvato nell'array risultato (names)
    return finalName;
});
console.log(people);
console.log(names);