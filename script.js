// var vs let vs const

var edad = 10;
var edad = 20;
console.log(edad);

//

    20;

//

let edad = 10;
let edad = 20;
console.log(edad);

//

SyntaxError
/src/index.js: Identifier 'edad' has already been declared (6:4)

//

let edad = 10;
edad = 20;
console.log(edad);

//

20

//

const edad = 10;
edad = 20;
console.log(edad);

//

TypeError
"edad" is read-only

//

var edad = 10;

if (true) {
  var edad = 20;
  console.log(edad);
}

console.log(edad);

//

20

//

let edad = 10;

if (true) {
  let edad = 20;
  console.log(edad);
}

console.log(edad);

//

    20

    10

//

let edad = 10;

if (true) {
  let edad2 = 20;
  console.log(edad);
}

console.log(edad);
console.log(edad2);

//

    10
    ReferenceError
edad2 is not defined

//

const edad = 10;

if (true) {
  const edad = 20;
  console.log(edad);
}

console.log(edad);

//

    20

    10

//

const edad = 10;
const edad = 20;

//

SyntaxError
/src/index.js: Identifier 'edad' has already been declared (6:6)

//

let edad = 10;
let edad = 20;

//

SyntaxError
/src/index.js: Identifier 'edad' has already been declared (6:4)

//

let edad = 10;
edad = 20;

console.log(edad);

//

    20

const edad = 10;
edad = 20;

console.log(edad);

//

TypeError
"edad" is read-only

//

const arrayNumero = [10,20,30]

//

var arrayNumero = [10,20,30]
var arrayNumero = [10,20,30,40]
console.log(arrayNumero)

//

(4) [10, 20, 30, 40]

//

let arrayNumero = [10,20,30]
arrayNumero = [10,20,30,40]
console.log(arrayNumero)

//

(4) [10, 20, 30, 40]

//

const arrayNumero = [10,20,30]
arrayNumero = [10,20,30,40]
console.log(arrayNumero)

//

TypeError
"arrayNumero" is read-only

//

const arrayNumero = [10,20,30]
arrayNumero.push(40)
console.log(arrayNumero)

//

(4) [10, 20, 30, 40]

//

const persona = {
  nombre: 'Juanito',
  edad: 20
}

console.log(persona)

//

{nombre: "Juanito", edad: 20}

//

const persona = {
  nombre: "Juanito",
  edad: 20
};

persona.edad = 21;

console.log(persona);

//

const persona = {
  nombre: "Juanito",
  edad: 20
};

persona.edad = 21;

console.log(persona);

//

const persona = {
  nombre: "Juanito",
  edad: 20
};

persona.edad = 21;
persona.pais = 'Mexico'

console.log(persona);

//

const persona = {
  nombre: "Juanito",
  edad: 20
};

persona.edad = 21;
persona.pais = 'Mexico'

console.log(persona);

//

{nombre: "Juanito", edad: 21, pais: "Mexico"}

//



