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

function zad4(arguments){

    let object_name = "";

    object_name = _.find(arguments.allGrades, {weight: 1}).subjectName;
    return object_name;
}
console.log(zad4(user));