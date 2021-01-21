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

// 2 – 6. Funciones de Flecha (Arrow Functions)

function sumar() {
    console.log(10)
}
sumar(10)

//

10

// 

const sumarDos = () => {
  console.log(10);
};
sumarDos();

//

    10

// 

const sumarDos = () => {
  console.log(20);
};
sumarDos();

// 

20

// 

function sumar(num) {
  console.log(num);
}
sumar(10);

const sumarDos = (num) => {
  console.log(num);
};
sumarDos(20);

// 

    10

    20

// 

const sumarDos = num => {
  console.log(num);
};
sumarDos(20);

// 

    20

// 

const sumarDos = (num1, num2) => {
  return (num1 + num2);
};
sumarDos(20, 30);

// 

50

// 

const sumarDos = (num1, num2) => {
  return (num1 + num2);
};
const resultado = sumarDos(20, 30);
console.log(resultado);

// 

50

// Arrow Functions

const sumarDos = (num1, num2) => (num1 + num2);

const resultado = sumarDos(20, 30);
console.log(resultado);

//

50

//

const sumarDos = (num1, num2) => num1 + num2;

const resultado = sumarDos(20, 30);
console.log(resultado);

// 

50

// 

const mensaje = () => {
  return "hola soy Ignacio";
};

const resultadoDos = mensaje();
console.log(resultadoDos);

// 

hola soy Ignacio 

// 

const mensaje = nombre => {
  return "hola soy " + nombre;
};

const resultadoDos = mensaje('Juanito');
console.log(resultadoDos);

// 

hola soy Juanito 

// 

const mensaje = (nombre) => "hola soy " + nombre;

const resultadoDos = mensaje("Juanito");
console.log(resultadoDos);

// 

hola soy Juanito 

// 

const mensaje = (nombre) => ("hola soy " + nombre);

const resultadoDos = mensaje("Juanito");
console.log(resultadoDos);

// 

hola soy Juanito

//

const sumaTres = (num) => {
  console.log(num + 3)
}

sumaTres(9)

// 

12

// 

const sumaTres = (num) => {
  console.log(num + 3)
}

sumaTres()

// 

    NaN

// 

const sumaTres = (num = 0) => {
  console.log(num + 3);
};

sumaTres();

// 

    3

// 

const sumaTres = (num = 1) => {
  console.log(num + 3);
};

sumaTres();

// 

    4

// 

const sumaTres = (num = 1) => {
  console.log(num + 3);
};

sumaTres(10);

// 

    13

// 2 – 7. Template String
// template string
const numero = () => {
  console.log(10)
}
numero()

// 

10

// 

const numero = (num) => {
  return "el numero es:" + num;
};
const resultado = numero(10);
console.log(resultado);

// 

el numero es:10 

// 

const numero = (num) => {
  return `el numero es: ${num}`
};
const resultado = numero(10);
console.log(resultado);

// 

el numero es: 10 

// 

const numero = (num1, num2) => {
  return `el numero es: ${num1 + num2}`
};
const resultado = numero(10, 20);
console.log(resultado);

// 

el numero es: 30 

// 

const numero = (num1, num2) => (
  `el numero es: ${num1 + num2}`
)

const resultado = numero(10, 20);
console.log(resultado);

// 

el numero es: 30 

// 

// 2 – 8. Objetos
// objetos
const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true
};
console.log(mascota);

// 

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true
};

console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

// 

    {nombre: "Tom", edad: 10, vivo: true}

Tom 

    10

    true

//

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true
};
console.log(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.vivo);

mascota.id = 1;

console.log(mascota.id);

// 

    {nombre: "Tom", edad: 10, vivo: true, id: 1}

Tom 

    10

    true

    1

//

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro']
};

console.log(mascota);

{nombre: "Tom", edad: 10, vivo: true, razas: Array(2), id: 1}

nombre: "Tom"

edad: 10

vivo: true

razas: Array(2)

0: "peludo"

    1: "negro"

id: 1

// 

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ['peludo', 'negro']
};
console.log(mascota.razas);

// 

(2) ["peludo", "negro"]

// 

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};
console.log(mascota.razas[0]);

// 

peludo 

// 

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};
console.log(mascota.razas[1]);

// 

negro

// 

// 2 – 9. Destructuring JavaScript Objects

// objetos
const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};

console.log(mascota.nombre);

// 

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};

const nombreMascota = mascota.nombre;
console.log(nombreMascota);

// 

Tom 

// 

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};

const nombreMascota = mascota.nombre;

const {edad} = mascota
console.log(edad);

// 

10

// 

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
  razas: ["peludo", "negro"]
};

const nombreMascota = mascota.nombre;

const {edad, nombre} = mascota
console.log(nombre);

// 

Tom 

// 

const web = {
  nombre: 'www.bluuweb.cl',
  link: {
    enace: 'www.bluuweb.cl'
  },
  redesSociales:{
    youtube: {
      enlace: 'youtube.com/bluuweb',
      nombre: 'bluuweb yt'
    }
  }
}
console.log(web.redesSociales.youtube.enlace)

// 

youtube.com/bluuweb 

// 

const web = {
  nombre: "www.bluuweb.cl",
  link: {
    enace: "www.bluuweb.cl"
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/bluuweb",
      nombre: "bluuweb yt"
    },
    facebook: {
      enlace: "facebook.com/bluuweb",
      nombre: "bluuweb yt"
    }
  }
};

const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

// 

const web = {
  nombre: "www.bluuweb.cl",
  link: {
    enace: "www.bluuweb.cl"
  },
  redesSociales: {
    youtube: {
      enlace: "youtube.com/bluuweb",
      nombre: "bluuweb yt"
    },
    facebook: {
      enlace: "facebook.com/bluuweb",
      nombre: "bluuweb yt"
    }
  }
};

const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace)
console.log(nombre)