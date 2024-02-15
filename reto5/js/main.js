
let inputNumber
let integer
let decimal
let precision

while(isNaN(inputNumber))
{
    inputNumber = parseFloat(prompt("Introduce un número entero para convertirlo a binario"));
}

function decimalToBinary(number) {
    let binary = "";
    let numberString = number.toString();
    integer = parseInt(numberString.split(".")[0]);
    decimal = parseFloat("0." + (numberString.split(".")[1] || "0"));
    precision = 21 - integer.toString().length; // cambiar el por el numero total a mostar

    while(integer > 0) {
        binary = (integer % 2) + binary;
        integer = Math.floor(integer / 2);
    }

    binary += ".";

    for(let i = 0; i < precision; i++) {
        decimal *= 2;
        let decimalSpot = Math.floor(decimal);
        binary += decimalSpot;
        decimal -= decimalSpot;
        if(decimal === 0) break;
    }

    return binary;
}

console.log(decimalToBinary(inputNumber));