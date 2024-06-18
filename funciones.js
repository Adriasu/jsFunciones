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