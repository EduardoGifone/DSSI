// Forma convencional ============================================

// document.getElementById('app').innerHTML = '<h1 id="title">Hola mundo</h1>'

// const el = document.createElement('h1');
// const child = document.createElement('span');
// el.setAttribute('id','title');
// el.textContent = 'Hola ';
// child.textContent = 'mundo';
// el.appendChild(child);
// document.getElementById('app').appendChild(el);

// Con React =====================================================

// const el = React.createElement(
//   'h1', 
//   {id:'title'}, 
//   'Hola mundo'
// );

// const el = React.createElement(
//   'h1', 
//   {id:'title'}, 
//   'Hola ',
//   React.createElement(
//     'spam',
//     null,
//     'mundo'
//   )
// );

// ReactDOM.render(el,document.getElementById('app'));

// Con React y JSX ===========================================

// const el = (
//   <h1 id="title" className="title">
//     Hola {2+5}
//     <span> Mundo</span>
//   </h1>
// );
// ReactDOM.render(el,document.getElementById('app'));

// Reloj con vanilla JS ======================================

// const app = document.getElementById('app');

// function reloj() {
//   app.textContent = new Date().toLocaleTimeString();
// }

// setInterval(reloj,1000);

// Reloj con React y JSX =======================================

const app = document.getElementById('app');

function reloj() {
  let now = new Date().toLocaleTimeString();
  const el = <span>{now}</span> 
  ReactDOM.render(el,app);
}

setInterval(reloj,1000);