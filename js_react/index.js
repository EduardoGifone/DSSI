// FUNCIONES EN JS ================================================

function hello() {
  console.log('Hola mundooooo!');
  console.log('Trabajando con JS');
}
hello();

function hello2() {
  return 'Hola mundooooooooo 2!';
}
console.log(hello2());

// --- Programacion funcional (paradigma de react)
function hello3() {
  return function() {
    return 'Hola mundo 3!';
  }
}
console.log(hello3()());

// PARAMETROS EN FUNCIONES =======================================

function hello4(name) {
  return 'hola ' + name;
}
console.log(hello4('Eduardo'));

function add(x,y) {
  return x + y;
}
console.log(add(10,20));

function add2(x,y) {
  if (y === undefined){ 
    y = 0;
  }
  return x + y;
}
console.log(add2(10));

// PARAMETROS POR DEFECTO =======================================

function add3(x=0,y=0) {
  return x + y;
}
console.log(add3());

// OBJETOS EN JS ================================================

const user = {
  // --- Propiedades
  name: 'Eduardo',
  lastname: 'Gifone',
  age: '21',
  address: {
    country: 'Peru',
    city: 'Cusco',
    street: 'Ayacucho'
  },
  friends: ['Alexis', 'Brayam'],
  active: true,
  
  // --- Metodos
  sendMail(){
    return 'sending mail...';
  },
  // sendMail: function() {
    // return 'sending email...';
    // }
};
console.log(user)
console.log(user.sendMail());
  
// SHORTHAND PROPERTY NAMES =====================================

const name = 'laptop';
const price = 3000;

const newProduct = {
  // name: name,
  // price: price
  // Forma abreviada
  name,
  price
}
console.log(newProduct)

// MANIPULACION DEL DOM (document object model) ==================

const title = document.createElement('h1');
title.innerText = 'Hola mundo desde JS!';
document.body.append(title);

const button = document.createElement('button');
button.innerText = 'click';
document.body.append(button);

// --- Manejadores de eventos
// button.addEventListener('click', function() {
//   hello();
// });
button.addEventListener('click', function() {
  title.innerText = 'Texto actualizado con JS';
  alert('Se realizo un click');
})

// DESESTRUCTURAR (destructuring) ================================

const usuario = {
  name: 'Luciana',
  age: '7'
}
console.log(usuario);

function printInfo(user) {
  // return '<h1>Hola ' + usuario.name + '</h1>';
  return '<h1>Hola ' + usuario['name'] + '</h1>';
}

function printName({name}) {
  return '<h1>Hola ' + name + '</h1>';
}

function printAge({age}) {
  return '<h1>Hola ' + age + '</h1>';
}

function printInfo2(user) {
  const {name, age} = user;
  
  console.log(name,age);
  return '<h1>Hola ' + name + ' ' + age + '</h1>';
}

console.log(printInfo(usuario))

document.body.innerHTML = printInfo(usuario);
document.body.innerHTML = printName(usuario);
document.body.innerHTML = printAge(usuario);
document.body.innerHTML = printInfo2(usuario);

// FUNCIONES ANONIMAS ==============================================

// function start() {
  // return 'Starting...';
// }

console.log(function start() {
  return 'Starting...';
});

console.log(function start() {
  return 'Starting...';
}());

// Funcion sin nombre (Funcion anonima)
console.log(function () {
  return 'Starting...';
}());

const button2 = document.createElement('button');
button2.innerText = 'click me';

// function handleClick(){
//   alert('clicked');
// }
// button2.addEventListener('click', handleClick);

button2.addEventListener('click', function() {
  alert('clicked');
});

document.body.append(button2);

// ARROW FUNCTIONS (funciones flecha) ==========================

function add4(x,y) {
  return x+y;
}

const add5 = (x,y) => {
  return x+y;
}

// INLINE ARROW FUNCTIONS (funciones flecha en linea) ==========
// const showText = () => {
  // return 'Hola Eduardolol'
// }

const showText = () => 'Hola Eduardolol';
const showNumber = () => 22;
const showBoolean = () => true;
const showArray = () => [1,2,3];
const showObject = () => ({name: 'Eduardo', age: 21})

console.log(showText());
console.log(showNumber());
console.log(showBoolean());
console.log(showArray());
console.log(showObject())

// RETURN EN FUNCIONES =========================================

const isAuthorized = true;

// button2.addEventListener('click', () => {
//   if (isAuthorized) {
//     alert('Esta autorizado');
//   } else {
//     alert('No esta autorizado')
//   }
// });

button2.addEventListener('click', () => {
  if (isAuthorized) {
    return(alert('Esta autorizado'));
  }
  alert('No esta autorizado');
});

// STRING LITERALS (interpolacion) =============================

const background = "purple";
const color = "white";

const button3 = document.createElement("button");
button3.innerText = "click me";
button3.style = `background: ${background}; color: ${color};`;

document.body.append(button3);

// --- Operador ternario
button3.style = `background: ${isAuthorized ? 'blue' : 'red'}; color: ${color};`;

// ARRAY METHODS ==============================================

const names = ['eduardo', 'juareis', 'licelith', 'licelith'];

// --- Forma convencional
// for (let i = 0; i < names.length; i++){
//   const element = names[i];
//   console.log(element);
// }

// --- Metodo forEach
names.forEach((name) => {
  console.log(name);
});

// --- Metodo map (devuelve un nuevo array) 
const newNames = names.map((name) => {
  return `Hola ${name}`;
});
console.log(names);
console.log(newNames);

// --- Metodo find (podemos colocar una condicion dentro)
const nameFound = names.find((name) => {
  if (name === 'licelith') {
    return name
  }
});
console.log(nameFound);

// --- Metodo filter (filtrar elementos en un nuevo array)
const newNames2 = names.filter((name) => {
  if (name === 'licelith'){
    return name
  }
});
console.log(newNames2);

// --- Metodo concat (concatenar listas, strings)
const names2 = ['marcos', 'leslie', 'amaru', 'leslie'];

const concatNames = names.concat(names2);
console.log(concatNames);

// --- Mas metodos 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// --- Pagina de fazt
// https://faztweb.com/

// SPREAD OPERATOR ===========================================

// --- otra forma de concatenar
console.log([...names, ...names2]);

const user2 = {
  name: 'eduardo',
  lastname: 'gifone'
};

const address = {
  street: '28 de julio',
  ciudad: 'cusco'
};

const userInfo = {
  ...user2,
  ...address
};
console.log(userInfo);

// ECMASCRIPT MODULES (dividir una apliacion en multiples archivos) ===

import {add6, multiply, active, points, title2} from './add.js' // Estandar para importar es utilizar .js
console.log(add6(23,2));
console.log(multiply(23,2));
console.log(active, points, title2);

import addModule from './add.js'
console.log(addModule());

// OPTIONAL CHANINING ============================  

const person = {
  name: 'eduardo',
  address: {
    city: 'cusco'
  },
  location: {}
};

console.log(person);

// if (person.location) {
  // console.log(person.location.city);
// }
// Same
console.log(person.location?.city);

// ASYNC AWAIT ==================================== 

// Promesas -------------------------------------- 
// Sincronia
// let data = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(data);

// Asincrono
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(() => {
//     console.log('finalizo la carga');
//   });
// console.log('linea 2');

const ul = document.createElement('ul');


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     return response.json();
//   }).then ((data) => {
//     console.log(data);
//     data.forEach((post) => {
//       const li = document.createElement('li');
//       li.innerText = post.title;
//       ul.append(li);
//     })
//     document.body.append(ul);
//   });

// console.log('linea 2');

// Async await ---------------------------------------
async function loadData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  data.forEach((post) => {
    const li = document.createElement('li');
    li.innerText = post.title;
    ul.append(li);
  })
  document.body.append(ul);
}
loadData()
console.log('linea 2');