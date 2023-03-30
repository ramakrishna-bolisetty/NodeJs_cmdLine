/*Problem statement.

1. Create a node.js command line program which reads operation(add, subtract, multiply, division) and values as arguments and returns the appropriate output onto console as in below criteria

a. node app.js --operation addition 1 2 3 4 => 1+2+3+4 = 10

b. node app.js --operation multiply 1 2 3 4 => 1*2*3*4 = 24

c. node app.js --operation subtraction 2 1 => 2 - 1 = 1

d. node app.js --operation division 4 2 => 4/2 = 2

2. All the invalid cases need to be handled for all the operations

3. Include validations for unsupported operations, number of inputs

*/

const args = process.argv.slice(2); 

if (args.length < 2){
    console.log('Invalid number of arguments');
    return;
}

const operationIndex = args.findIndex(arg => arg === '--operation');
if(operationIndex === -1 || operationIndex === args.length - 1){
    console.log('Invalid operation');
    return;
}

const operation = args[operationIndex + 1].toLowerCase();
let values = args.slice(2);
values = values.map((ele)=>Number(ele));

if(values.some(isNaN)){
    console.log('Invalid value');
    return;
}

let result;
switch (operation){
    case 'addition':
        result = values.reduce((acc, curr) => acc + curr, 0);
        console.log(`${values.join(' + ')} = ${result}`);
        break;

    case 'subtraction':
        if (values.length !== 2){
            console.log('Subtraction takes exactly 2 values');
            return;
        }    
        result = values[0] - values[1];
        console.log(`${values[0]} - ${values[1]} = ${result}`);
        break;

    case 'multiplication':
        result = values.reduce((acc, curr) => acc * curr, 1);
        console.log(`${values.join(' * ')} = ${result}`);
        break;

    case 'division':
        if (values.length !== 2){
            console.log('Division takes exactly 2 values');
            return;
        }
        if (values[1] == 0){
            console.log('Cannot divide by zero');
        }    
        result = values[0] / values[1];
        console.log(`${values[0]} / ${values[1]} = ${result}`);
        break; 

    default:
        console.log('Unsupported operation');       

}

/*input node app.js --operation addition 1 2 3 4 
output 1+2+3+4 = 10
*/
