const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa','bbb',5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

function getMails(arguments){

    const table=[];
    let z=0;

    for(i=0;i<arguments.length;i++){
        if(arguments[i] == null || arguments[i] === undefined){
            continue;
        }
        for(j=0;j<arguments[i].length;j++){
            if(arguments[i][j] === '@' && arguments[i].length >=6){
                    table[z] = arguments[i];
                    z++;

            }
        }
    }

    return table.sort();
}

console.log(getMails(collections));