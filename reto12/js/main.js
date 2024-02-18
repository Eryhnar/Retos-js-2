
let arrayLength
let finalArray = []

while (!parseInt(arrayLength))
{
    arrayLength = parseInt(prompt("Introduce el tamaño del array"))
}

let marker
while (!parseInt(marker))
{
    marker = parseInt(prompt("Introduce el número que quieres que acaben los números del array"))
}

let newArray = []

for (let i = 0; i< arrayLength; i++)
{
    newArray.push(Math.floor((Math.random() * 300)+1))
}

finalArray = newArray.filter((number) => 
{
    number = number.toString();
    return number[number.length - 1] == marker.toString();
});
// console.log(newArray)
// keep in mind that since the values in newArray are random, the amount of numbers that end with the marker number will vary and might even be 0
console.log(finalArray)