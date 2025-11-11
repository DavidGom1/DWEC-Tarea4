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
    });
    return arrayArticulos;
};

// ----------- Ejercicio 3 -----------
function Ejercicio3 (arrayArticulos, cadenaBusqueda){
    return arrayArticulos.filter( elemento => {
        return elemento.descripcion.toLowerCase().includes(cadenaBusqueda);
    });
};


// ----------- Ejercicio 4 -----------
function Ejercicio4(arrayArticulos, tipo) {
    let objetoSalida = {};
    const resultado = arrayArticulos.filter(e =>  e.tipo===tipo );
    let precioTotal = resultado.reduce((acc, e) =>  acc + e.precio, 0 );
    objetoSalida.cantidad = resultado.length;
    objetoSalida.precioMedio = precioTotal / objetoSalida.cantidad;
    return objetoSalida;
};

// ----------- Ejercicio 5 -----------
function Ejercicio5(arrayArticulos, orden) {
    if(orden == "asc") {
        return arrayArticulos.sort((a, b) => a.precio - b.precio);
    } else if (orden == "desc") {
        return arrayArticulos.sort((a, b) => b.precio - a.precio);
    }
}


// Botones de los ejercicios
// Ejercicio 1
// Punto 1
const botonEj1P1 = document.getElementById("Ej1P1Run");
// Punto 2
const botonEj1P2 = document.getElementById("Ej1P2Run");
// Punto 3
const botonEj1P3 = document.getElementById("Ej1P3Run");
// Punto 4
const botonEj1P4 = document.getElementById("Ej1P4Run");
// Punto 5
const botonEj1P5 = document.getElementById("Ej1P5Run");

// Control de range de Ej1P1
const rangeInput = document.getElementById("rangePrecio");
const rangeValue = document.getElementById("rangeValue");
rangeValue.value = rangeInput.value;
rangeInput.addEventListener("input", () => {
    rangeValue.value = rangeInput.value;
});
// Evento click del botón de Ejercicio 1 Punto 1
botonEj1P1.addEventListener("click", () => {
    const tipoSeleccionado = document.getElementById("tipoSelector").value;
    const textoTipo = document.querySelector(`#tipoSelector option[value="${tipoSeleccionado}"]`).textContent;
    console.clear();
    console.log("Ejercicio 1 -  " + textoTipo + ", " + rangeValue.value + "€ máximo ");
    console.log(Ejercicio1(articulos, textoTipo, parseFloat(rangeValue.value)));
});


botonEj1P2.addEventListener("click", () => {
    console.clear();
    console.log("Ejercicio 2 -  Capitalizar descripciones ");
    console.log(Ejercicio2(articulos));
});

botonEj1P3.addEventListener("click", () => {
    const busqueda = document.getElementById("busquedaEj1P3").value.toLowerCase();
    console.clear();
    console.log("Ejercicio 3 -  Búsqueda por cadena en la descripción de los artículos");
    console.log(Ejercicio3(articulos, busqueda));
});

botonEj1P4.addEventListener("click", () => {
    const tipoSeleccionado = document.getElementById("tipoSelectorEj1P4").value;
    const textoTipo = document.querySelector(`#tipoSelectorEj1P4 option[value="${tipoSeleccionado}"]`).textContent;
    console.clear();
    console.log("Ejercicio 4 -  Resumen por tipo: cantidad y precio medio");
    console.log(Ejercicio4(articulos, textoTipo))
});

botonEj1P5.addEventListener("click", () => {
    const selectorEj1P5 = document.getElementById("selectorEj1P5").value;
    console.clear();
    console.log(Ejercicio5(articulos, selectorEj1P5));
});