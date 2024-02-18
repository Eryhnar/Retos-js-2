

let randomArray = []

let minNum = 0
let maxNum = 0
let size 

while (!parseInt(size)) 
{
  size = parseInt(prompt("Enter the size of the array: "))
}

while (!parseInt(minNum)) 
{
  minNum = parseInt(prompt("Enter the starting value: "))
}
while (!parseInt(maxNum)) 
{
  maxNum = parseInt(prompt("Enter the ending value: "))
}

const fillArray = (minNum, maxNum, size) => 
{
  for (let i = 0; i < size; i++) 
  {
    let tempNum = 0
    while (!isPrime(tempNum)) 
    {
      tempNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
    }
    randomArray.push(tempNum)
  }
}

const isPrime = (num) =>
{
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  for (let i = 3; i*i <=num; i+=2) 
  {
    if (num % i === 0) return false
  }
  return true
}

fillArray(minNum, maxNum, size)
console.log(randomArray, " The highest prime number in the array is: ", Math.max(...randomArray))
