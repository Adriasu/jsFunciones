// Ej 1: Escribe una función que muestre por consola "Hello World".

function sayHello() {
  return console.log("Hello World!");
}
sayHello();

// Ej 2: Escribe una función que devuelva el cuadrado de un número.

function squareNumber(num) {
  return console.log(num ** 2);
}
squareNumber(5);

// Ej 3: Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona. Ejemplo: "Hi, Anna".

function sayName(name) {
  return console.log(`Hi, ${name}.`);
}
sayName("Adriana");

// Ej 4: Escribe una función que reciba dos parámetros, el nombre y el apellido, y devuelva el nombre completo.

function fullName(firstName, lastName) {
  return console.log(`El nombre completo es: ${firstName} ${lastName}.`);
}
fullName("Adriana", "Suárez");

// Ej 5: Escribe una función que acepte la medida de los dos lados de un rectángulo y
//devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.

function rectangleArea(a = 5, b = 3) {
  return console.log(a * b);
}
rectangleArea();

// Ej 6: Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit.

function celsiusToFahrenheit(celsius) {
  return console.log((celsius * 9) / 5 + 32);
}
celsiusToFahrenheit(25);

// Ej 7: Escribe una función que acepte dos números, un mínimo y un máximo,
// y devuelva un número aleatorio entre dichos números. Para ello, tendrás que descubrir cómo funciona el método Math.random().

function randomNumber(min, max) {
  return console.log(parseInt(Math.random() * (max - min + 1) + min));
}
randomNumber(5, 20);

// Ej 8: Escribe una función que calcule el área de un círculo si se le proporciona el radio.

function circleArea(r) {
  return console.log((Math.PI * r ** 2).toFixed(2));
}
circleArea(20);

// Ej 9: El Índice de Masa Corporal (IMC) se calcula del siguiente modo: peso (en kilogramos) / altura al cuadrado (en metros).
// Escribe una función que acepte ambos datos y calcule el IMC. A countinuación, deberá devolver un log con lo recibido.

function calculateBMI(weight, height) {
  return console.log((weight / height ** 2).toFixed(2));
}
calculateBMI(85, 1.82);

// Ej 10: Escribe una función que acepte un dato y compruebe qué tipo de dato es. Tienes que usar un prompt para pedir dichio dato.

const inputData = prompt("Ingrese algun dato:");
function checkData(data) {
  return console.log(typeof data);
}
checkData(inputData);

// Ej 11: Escribe una función que te adivine el futuro. Recibirá como parámetros:

const city = prompt("Ingrese una ciudad");
const job = prompt("ingrese un trabajo");
const sons = prompt("ingrese número de hijos que quiere tener");
const couple = prompt("ingrese el nombre de su pareja");
function fortuneTeller(city, job, sons, couple) {
  return console.log(`Trabajaras en ${city}, trabajando como ${job}, y tendrás ${sons} hijos con ${couple}.`);
}
fortuneTeller(city, job, sons, couple);
