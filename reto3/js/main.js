
let number

while (!parseInt(number)) 
{
    number = prompt('Introduce un número')
}

function isPrime(number) 
{
    for (let i = 2; i < number; i++) 
    {
        if (number % i === 0) 
        {
            return false
        }
    }
    return true
}

console.log(isPrime(number))