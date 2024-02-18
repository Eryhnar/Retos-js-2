
let size

let randomArray = []

let total = 0

minNum = 0
maxNum = 9

while (!parseInt(size)) 
{
  size = prompt("Enter the size of the array: ")
}

const fillArray = (minNum, maxNum, size) => 
{
  for (let i = 0; i < size; i++) 
  {
    randomArray.push(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum)
  }
}

const printArray = (array) =>
{
  randomArray.map(item => //should use .reduce
  {
    total += item
  })
  console.log(randomArray, " total: ", total)
}

fillArray(minNum, maxNum, size)
printArray(randomArray)