
let originalArray = []
let alteredArray = []
let finalArray = []

let size 
let minNum = 1
let maxNum = 10

while (!parseInt(size)) 
{
  size = parseInt(prompt("Enter the size of the array: "))
}

for (let i = 0; i < size; i++) 
{
  originalArray.push(Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum)
}
console.log("Original Array: ", originalArray)

alteredArray = originalArray.map((num) => 
{
  num = (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum)
  return num
})
console.log("Altered Array: ", alteredArray)

const fillFinalArray = (originalArray, alteredArray) => 
{
  for (let i = 0; i < originalArray.length; i++) 
  {
    finalArray.push(originalArray[i]*alteredArray[i])
  }
  return finalArray
}
console.log("Final Array: ", fillFinalArray(originalArray, alteredArray))
