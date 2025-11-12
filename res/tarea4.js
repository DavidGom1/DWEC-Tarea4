import { articulos } from './script.js';

// ----------- Ejercicio 1 Punto 1 -----------
function Ejercicio1Punto1(arrayArticulos, tipo, precioMaximo) {
    return arrayArticulos.filter(elemento => {
        return elemento.tipo == tipo && elemento.precio < precioMaximo;
    }
    )
};


// ----------- Ejercicio 1 Punto 2 -----------
function Ejercicio1Punto2(arrayArticulos) {
    arrayArticulos.forEach(elemento => {
        let descripcion = elemento.descripcion;
        elemento.descripcion =
            descripcion.charAt(0).toUpperCase() +
            descripcion.slice(1).toLowerCase();
    });
    return arrayArticulos;
};

// ----------- Ejercicio 1 Punto 3 -----------
function Ejercicio1Punto3(arrayArticulos, cadenaBusqueda) {
    return arrayArticulos.filter(elemento => {
        return elemento.descripcion.toLowerCase().includes(cadenaBusqueda);
    });
};


// ----------- Ejercicio 1 Punto 4 -----------
function Ejercicio1Punto4(arrayArticulos, tipo) {
    let objetoSalida = {};
    const resultado = arrayArticulos.filter(e => e.tipo === tipo);
    let precioTotal = resultado.reduce((acc, e) => acc + e.precio, 0);
    objetoSalida.cantidad = resultado.length;
    objetoSalida.precioMedio = precioTotal / objetoSalida.cantidad;
    return objetoSalida;
};

// ----------- Ejercicio 1 Punto 5 -----------
function Ejercicio1Punto5(arrayArticulos, orden) {
    if (orden == "asc") {
        return arrayArticulos.sort((a, b) => a.precio - b.precio);
    } else if (orden == "desc") {
        return arrayArticulos.sort((a, b) => b.precio - a.precio);
    }
}

// ----------- Ejercicio 2 -----------
class CuentaBancaria{
    constructor(numero){
        this.numero = numero;
        this.saldo = 0;
    }

    actualizarSaldo(cantidad) {
        if(cantidad < 0){
            this.saldo -= Math.abs(cantidad);
        } else {
            this.saldo += cantidad;
        }
    }
}
class Banco {       // Punto 6
    constructor(nombre) {
        this.nombre = nombre;
        this.cuentas = [];
    }

    crearCuenta(numero, saldoInicial) {   // Punto 7
        if(numero > 0 && numero < 600000){
            const nuevaCuenta = new CuentaBancaria(numero, saldoInicial);
            this.cuentas.push(nuevaCuenta);
            console.log(`cuenta ${numero} creada`);
        } else {
            throw new Error("Número inválido para la cuenta.")
        }
    }

    actualizarCuenta(numero, cantidad){     // Punto 8
        try{
            const cuenta = this.cuentas.find(a => a.numero == numero);
            cuenta.actualizarSaldo(cantidad);
            console.log(`cuenta ${numero} actualizada con ${cantidad} €`);
        } catch (e){
            console.error(e);
        }
    }

    eliminarCuenta(numero) {        // Punto 9
        try{
            const cuenta = this.cuentas.find(a => a.numero == numero);
            this.cuentas.pop(cuenta);
            console.log(`cuenta ${numero} eliminada`);
        } catch (e){
            console.error(e);
        }
    }

    listarCuentas(){        // Punto 10
        const contenedor = document.createElement("div");
        contenedor.className = "contenedorBancoLista";
        const nombreBanco = document.createElement("h1");
        nombreBanco.textContent = this.nombre;
        contenedor.appendChild(nombreBanco);
        contenedor.appendChild(document.createElement("hr"));
        this.cuentas.forEach((cuenta) => {
            const textoCuenta = document.createElement("p");
            textoCuenta.textContent = `${cuenta.numero} - ${cuenta.saldo} €`;
            contenedor.appendChild(textoCuenta);
        });
        return contenedor;
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
    console.log(Ejercicio1Punto1(articulos, textoTipo, parseFloat(rangeValue.value)));
});


botonEj1P2.addEventListener("click", () => {
    console.clear();
    console.log("Ejercicio 2 -  Capitalizar descripciones ");
    console.log(Ejercicio1Punto2(articulos));
});

botonEj1P3.addEventListener("click", () => {
    const busqueda = document.getElementById("busquedaEj1P3").value.toLowerCase();
    console.clear();
    console.log("Ejercicio 3 -  Búsqueda por cadena en la descripción de los artículos");
    console.log(Ejercicio1Punto3(articulos, busqueda));
});

botonEj1P4.addEventListener("click", () => {
    const tipoSeleccionado = document.getElementById("tipoSelectorEj1P4").value;
    const textoTipo = document.querySelector(`#tipoSelectorEj1P4 option[value="${tipoSeleccionado}"]`).textContent;
    console.clear();
    console.log("Ejercicio 4 -  Resumen por tipo: cantidad y precio medio");
    console.log(Ejercicio1Punto4(articulos, textoTipo))
});

botonEj1P5.addEventListener("click", () => {
    const selectorEj1P5 = document.getElementById("selectorEj1P5").value;
    console.clear();
    console.log(Ejercicio1Punto5(articulos, selectorEj1P5));
});


// Comprobacion Ejercicio 2


    const acordeonEj2 = document.getElementById("Ejercicio2Item");
    acordeonEj2.addEventListener("show.bs.collapse", () => {
        console.clear();
        let miBanco = new Banco("bancoDavid");
        miBanco.crearCuenta(11111);
        miBanco.crearCuenta(22222);
        miBanco.crearCuenta(33333);
        miBanco.actualizarCuenta(11111, 55);
        miBanco.actualizarCuenta(33333, 66);
        const contenedorEj2 = document.getElementById("resultadoEj2");
        contenedorEj2.innerHTML = "";
        contenedorEj2.appendChild(miBanco.listarCuentas());
    });