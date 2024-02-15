
let arrayLength = 10

let arrayInputs = []

let value

const arrayFill = (arrayLength) =>
{
  for (let i = 0; i < arrayLength; i++) 
  {
    while (!parseInt(value))  
    {
      value = parseInt(prompt("Enter a value"))
    }
    arrayInputs.push(value)
    console.log(arrayInputs)
    value = null
  }
}

const arraySearch = (arrayInputs) =>
{
  let searchValue
  while (!parseInt(searchValue) || !arrayInputs.includes(searchValue)) 
  {
    searchValue = parseInt(prompt("Enter a value to search for"))
  }
  let searchResult = arrayInputs.indexOf(searchValue)
  console.log(searchValue + " is at index " + searchResult)
  
}

arrayFill(arrayLength)
arraySearch(arrayInputs)
