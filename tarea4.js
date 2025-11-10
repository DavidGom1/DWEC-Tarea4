import { articulos } from './script.js';

// ----------- Ejercicio 1 -----------
console.log("Ejercicio 1 -  Electronica, 100€ máximo ");
function Ejercicio1 (arrayArticulos, tipo, precioMaximo){
    return arrayArticulos.filter( elemento => {
        return elemento.tipo == tipo && elemento.precio < precioMaximo;
    }
)};

console.log(Ejercicio1(articulos, "Electrónica", 100.0));

// ----------- Ejercicio 2 -----------
console.log("Ejercicio 2 -  Modificar descripciones");
function Ejercicio2 (arrayArticulos){
    arrayArticulos.forEach( elemento => {
        let viejaDescripcion = elemento.descripcion;
        let nuevaDescripcion = "";
        for(let [i, letra] of Array.from(viejaDescripcion).entries()){
            if(i==0){
                nuevaDescripcion += letra.toUpperCase();
            } else {
                nuevaDescripcion += letra.toLowerCase();
            }
        }
        elemento.descripcion = nuevaDescripcion;
    })
    return arrayArticulos
};

console.log(Ejercicio2(articulos));