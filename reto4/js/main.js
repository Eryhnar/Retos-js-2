
let number

while (!parseInt(number)) 
{
    number = prompt('Introduce un número')
}

function factorial(number) 
{
    let result = number
    for (let i = number-1; i > 0; i--) 
    {
        result = result * i
    }
    return result
}

console.log(factorial(number))