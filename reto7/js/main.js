
let inputAmmount
let inputCurrency
let currencyList = ["dolares", "yenes", "libras"]

while (!parseFloat(inputAmmount) || inputAmmount <= 0) 
{
  inputAmmount = parseFloat(prompt("Ingrese la cantidad a convertir"))
}

while (!currencyList.includes(inputCurrency)) 
{
  inputCurrency = prompt("Ingrese la moneda a la que desea convertir (dolares, yenes, libras)").toLowerCase()
}

const convertCurrency = (ammount, currency) => 
{
  switch (currency) 
  {
    case "dolares":
        console.log(`Su dinero ha sido convertido a ${inputCurrency}`)
        break;
    case "yenes":
        console.log(`Su dinero ha sido convertido a ${inputCurrency}`)
        break;
    case "libras":
        console.log(`Su dinero ha sido convertido a ${inputCurrency}`)
        break;
    default:
        console.log("No se ha podido convertir el dinero")
        break;
  }
}

convertCurrency(inputAmmount, inputCurrency)