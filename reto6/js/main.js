
let inputNumber

while (!parseInt(inputNumber) || inputNumber < 0) 
{
    inputNumber = prompt('Enter a number')
}

const calcLength = (inputNumber) => 
{
    return inputNumber.toString().length
}

console.log(calcLength(inputNumber))