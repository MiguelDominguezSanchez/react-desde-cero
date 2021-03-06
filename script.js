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

// 

// 2 – - 11. Fetch API
// fetch
fetch('https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

//   

{count: 1118, next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20", previous: null, results: Array(20)}

// 

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(data => {
    console.log(data.results)
  })

// 

(20) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]

// 

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element);
    });
  });

// 

    (20) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]

    {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}

    {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"}

    {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"}

    {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"}

    {name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/"}

    {name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/"}

    {name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/"}

    {name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/"}

    {name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/"}

    {name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/"}

    {name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/"}

    {name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/"}

    {name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/"}

    {name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/"}

    {name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/"}

    {name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/"}

    {name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/"}

    {name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/"}

    {name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/"}

    {name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/"}

​

139d99747
Ln 6, Col 1 (204 selected)Spaces: 2UTF-8LFJavaScript

// 

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  });

//   

    (20) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]

bulbasaur 
ivysaur 
venusaur 
charmander 
charmeleon 
charizard 
squirtle 
wartortle 
blastoise 
caterpie 
metapod 
butterfree 
weedle 
kakuna 
beedrill 
pidgey 
pidgeotto 
pidgeot 
rattata 
raticate 

​

139d99747
Ln 6, Col 1 (209 selected)Spaces: 2UTF-8LFJavaScript

// 

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      console.log(element.name);
    });
  });
.catch(error => console.log(error))

// 

// 2 – 12. Async Await

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

(20) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]

0: Object

1: Object

2: Object

3: Object

4: Object

5: Object

6: Object

7: Object

8: Object

9: Object

10: Object

11: Object

12: Object

13: Object

14: Object

15: Object

16: Object

17: Object

18: Object

19: Object

// 

// 2 – 13. Map

// fetch
fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.results);
    let arrayNombres = []
    data.results.forEach((element) => {
      // console.log(element.name);
      arrayNombres.push(element.name)
    });
    console.log(arrayNombres)
  });

// 

20) ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", …]

0: "bulbasaur"

1: "ivysaur"

2: "venusaur"

3: "charmander"

4: "charmeleon"

5: "charizard"

6: "squirtle"

7: "wartortle"

8: "blastoise"

9: "caterpie"

10: "metapod"

11: "butterfree"

12: "weedle"

13: "kakuna"

14: "beedrill"

15: "pidgey"

16: "pidgeotto"

17: "pidgeot"

18: "rattata"

19: "raticate"

// 

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    console.log(data.results);
    data.results.map(poke => console.log(poke))
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

    (20) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]

    {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}

    {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"}

    {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"}

    {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"}

    {name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/"}

    {name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/"}

    {name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/"}

    {name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/"}

    {name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/"}

    {name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/"}

    {name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/"}

    {name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/"}

    {name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/"}

    {name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/"}

    {name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/"}

    {name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/"}

    {name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/"}

    {name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/"}

    {name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/"}

{name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/"}

// 

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    // console.log(data.results);
    const arrayNombres = data.results.map(poke => poke.name)
    console.log(arrayNombres)
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

(20) ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", …]

0: "bulbasaur"

1: "ivysaur"

2: "venusaur"

3: "charmander"

4: "charmeleon"

5: "charizard"

6: "squirtle"

7: "wartortle"

8: "blastoise"

9: "caterpie"

10: "metapod"

11: "butterfree"

12: "weedle"

13: "kakuna"

14: "beedrill"

15: "pidgey"

16: "pidgeotto"

17: "pidgeot"

18: "rattata"

19: "raticate"

// 

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    // console.log(data.results);
    const arrayNombres = data.results.map((poke) => poke.url);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

(20) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]

// 

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    // console.log(data.results);
    const arrayNombres = data.results.map((poke) => poke.url);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

(20) ["https://pokeapi.co/api/v2/pokemon/1/", "https://pokeapi.co/api/v2/pokemon/2/", "https://pokeapi.co/api/v2/pokemon/3/", "https://pokeapi.co/api/v2/pokemon/4/", "https://pokeapi.co/api/v2/pokemon/5/", "https://pokeapi.co/api/v2/pokemon/6/", "https://pokeapi.co/api/v2/pokemon/7/", "https://pokeapi.co/api/v2/pokemon/8/", "https://pokeapi.co/api/v2/pokemon/9/", "https://pokeapi.co/api/v2/pokemon/10/", …]

//

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    // console.log(data.results);
    const arrayNombres = data.results.filter(
      (poke) => poke.name === `bulbasaur`
    );
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

(1) [Object]

0: Object

name: "bulbasaur"

url: "https://pokeapi.co/api/v2/pokemon/1/"

// 

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    // console.log(data.results);
    const arrayNombres = data.results.filter(
      (poke) => poke.poder > 5
    );
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

// async await
const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    // console.log(data.results);
    const arrayNombres = data.results.filter(
      (poke) => poke.name !== "bulbasaur"
    );
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

// 

(19) [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, …]

// 