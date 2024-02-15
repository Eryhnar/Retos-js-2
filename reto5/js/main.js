// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un String
// con el número convertido a binario. Para convertir un número decimal a binario, debemos
// dividir entre 2 el número y el resultado de esa división se divide entre 2 de nuevo hasta que
// no se pueda dividir más, el resto que obtengamos de cada división formará el número
// binario, de abajo a arriba.


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
    precision = 21 - integer.toString().length; // changes precision

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