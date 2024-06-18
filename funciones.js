// Ej 1: Escribe una función que muestre por consola "Hello World".

function sayHello() {
	return console.log("Hello World!");
}
sayHello();

// Ej 2: Escribe una función que devuelva el cuadrado de un número.

function squareNumber(num) {
    return console.log(num**2);    
}
squareNumber(5)

// Ej 3: Escribe una función que acepte un nombre como parámetro y salude específicamente a esa persona. Ejemplo: "Hi, Anna".

function sayName(name) {
    return console.log(`Hi, ${name}.`);    
}
sayName("Adriana")

// Ej 4: Escribe una función que reciba dos parámetros, el nombre y el apellido, y devuelva el nombre completo.

function fullName(firstName, lastName) {
    return console.log(`El nombre completo es: ${firstName} ${lastName}.`);    
}
fullName("Adriana", "Suárez")

//Ej 5: Escribe una función que acepte la medida de los dos lados de un rectángulo y 
//devuelva el área de dicho rectángulo. Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.

function rectangleArea(a = 5, b = 3) {
    return console.log(a*b);
}
rectangleArea()