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
    },
];

const peopleList = document.getElementById('people-list');

people.forEach((element) => {
    const newLi = `<li>${element.name} ${element.lastname}</li>`;
    peopleList.innerHTML += newLi;
});