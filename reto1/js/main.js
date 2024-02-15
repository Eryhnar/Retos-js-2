
let figura;
while (figura != "circulo" && figura != "triangulo" && figura != "cuadrado") 
{
    figura = prompt("Introduce la figura para calcular su área (circulo, triangulo, cuadrado)");
}
switch (figura) 
{
    case "circulo":
        let radio = prompt("Introduce el radio del círculo");
        let areaCirculo = (radio**2) * Math.PI;
        console.log(`El área del círculo es: ${areaCirculo}`);
        break;
    case "triangulo":
        let base = prompt("Introduce la base del triángulo");
        let altura = prompt("Introduce la altura del triángulo");
        let areaTriangulo = (base * altura) / 2;
        console.log(`El área del triángulo es: ${areaTriangulo}`);
        break;
    case "cuadrado":
        let lado = prompt("Introduce el lado del cuadrado");
        let areaCuadrado = (lado **2);
        console.log(`El área del cuadrado es: ${areaCuadrado}`);
        break;
}