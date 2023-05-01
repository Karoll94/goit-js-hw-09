
//Acceder al elemento DOM
const buttonStar = document.querySelector('button[data-start]');
console.log(buttonStar);

const buttonStop = document.querySelector('button[data-stop]');
console.log(buttonStop);

//Acceder al body
const body = document.querySelector('body');
console.log(body);

let timerId = null;

//Funcion para crear un color aleatorio
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

//Funcion para activar el cambio de color del body
buttonStar.addEventListener("click", () => {
    timerId = setInterval(() =>{
        body.style.background = getRandomHexColor()}, 1000)
})

//Funcion para detener el color
buttonStop.addEventListener("click", ()=>{
    clearInterval(timerId);
})



// const startBtn = document.querySelector('button[data-start]');
// const stopBtn = document.querySelector('button[data-stop]');
// const body = document.querySelector('body');

// startBtn.addEventListener('click', () => {
//     const timer = setInterval(() => { body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}` },1000);
//     stopBtn.addEventListener('click', () => clearInterval(timer));
// });


