const _ = require('lodash');
const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades: [
        {
            subjectName: 'Name1',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Name2',
            grades: [3, 3.5, 2],
            weight: 1
        },
        {
            subjectName: 'Name3',
            grades: [4, 3, 3.5],
            weight: 5
        }
    ]
}

function average(arguments){
    let average = 0;
    let weight = 0;

    for(i=0; i<arguments.allGrades.length; i++){
        average += _.sum(arguments.allGrades[i].grades);
        weight += arguments.allGrades[i].weight;
    }

    average /= weight;
    return arguments.name + " " + arguments.surname + " Average: " + average ;
}

console.log(average(user));