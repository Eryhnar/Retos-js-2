
let nums
let min
let max
let arrayNums = []

while (!parseInt(nums)) 
{
  nums = parseInt(prompt('¿Cuántos números quieres generar?'))
}

while (!parseInt(min)) 
{
  min = parseInt(prompt('¿Número mínimo?'))
}
while (!parseInt(max)) 
{
  max = parseInt(prompt('¿Número máximo?'))
}
const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

for (let i = 0; i < nums; i++) 
{
  arrayNums.push(generateRandom(min, max))
}

console.log(arrayNums)