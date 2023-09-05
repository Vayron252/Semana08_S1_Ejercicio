// console.log('Hola Mundo');


// let number1 = 30;

// console.log(number1);

// number1 = 50;

// console.log(number1);

// let lastName = 'Diego';
// let age = 30;

// console.log(lastName / age);

//VAR NO RESPETA EL AMBITO DE BLOQUE

// const mayorEdad = true;

// if (mayorEdad) {
//     let credito = true;
//     console.log(credito);
// }

// let minombre;

// console.log(minombre);

let botonVerRepuesta = document.querySelectorAll(".boton1"),
    botonOcultarRespuesta = document.querySelectorAll(".boton2");

botonVerRepuesta.forEach(item => {
    item.addEventListener('click', event => {
        let numRespuesta = item.getAttribute("data-respuesta");
        let contenedorRespuesta = document.getElementById(`respuesta-${numRespuesta}`);
        contenedorRespuesta.classList.remove("visually-hidden");
    })
})

// botonVerRepuesta.addEventListener("click", function(){
//     let numRespuesta = this.getAttribute("data-respuesta");
    
//     let contenedorRespuesta = document.getElementById(`respuesta-${numRespuesta}`);
//     contenedorRespuesta.classList.remove("visually-hidden");
//     //contenedorRespuesta.style.display = "block";
//     //contenedorRespuesta.style.transform = "translateY(50px)";
// });

botonOcultarRespuesta.forEach(item => {
    item.addEventListener('click', event => {
        let numRespuesta = item.getAttribute("data-respuesta");
        let contenedorRespuesta = document.getElementById(`respuesta-${numRespuesta}`);
        contenedorRespuesta.classList.add("visually-hidden");
    })
})

// botonOcultarRespuesta.addEventListener("click", function(){
//     let numRespuesta = this.getAttribute("data-respuesta");
    
//     let contenedorRespuesta = document.getElementById(`respuesta-${numRespuesta}`);
//     contenedorRespuesta.classList.add("visually-hidden");
// });