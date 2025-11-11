import { articulos } from './script.js';

// ----------- Ejercicio 1 -----------
function Ejercicio1 (arrayArticulos, tipo, precioMaximo){
    return arrayArticulos.filter( elemento => {
        return elemento.tipo == tipo && elemento.precio < precioMaximo;
    }
)};


// ----------- Ejercicio 2 -----------
function Ejercicio2 (arrayArticulos){
    arrayArticulos.forEach( elemento => {
        let descripcion = elemento.descripcion;
        elemento.descripcion = 
            descripcion.charAt(0).toUpperCase() +
            descripcion.slice(1).toLowerCase();
    })
    return arrayArticulos
};

// Botones de los ejercicios
// Ejercicio 1
const botonEj1P1 = document.getElementById("Ej1P1");
const botonEj1P2 = document.getElementById("Ej1P2");
const botonEj1P3 = document.getElementById("Ej1P3");
const botonEj1P4 = document.getElementById("Ej1P4");
const botonEj1P5 = document.getElementById("Ej1P5");

botonEj1P1.addEventListener("click", () => {
    console.clear();
    console.log("Ejercicio 1 -  Electronica, 100€ máximo ");
    console.log(Ejercicio1(articulos, "Electrónica", 100.0));
});