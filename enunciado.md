# 📘 Tarea DWEC04

## 🧾 Detalles
Unidad: DWEC04  
Descripción: Implementación de funciones sobre un array de artículos y una clase para gestión de cuentas de un banco.  
Entrega máxima: 16/11/25

---

## 🧩 Enunciado

### EJERCICIO 1 — Funciones sobre el array "articulos"
El archivo "script.js" contiene un array de objetos. Añade las siguientes funciones y, al finalizar, envía a consola una llamada a cada una para comprobar su funcionamiento (por ejemplo: console.log(miFuncion(...))).

(1) Filtro por tipo y precio máximo  
Escribe una función que reciba el array, un tipo (por ejemplo, "Electrónica") y un precio máximo, y devuelva un array con los artículos de ese tipo cuyo precio sea menor o igual al valor indicado.  
Firma sugerida: filtrarPorTipoYPrecio(articulos, tipo, maxPrecio)

(2) Normalizar descripciones (Mayúscula inicial)  
Escribe una función que reciba el array y modifique las descripciones para que empiecen en mayúscula y el resto de letras estén en minúsculas. Debe devolver el array modificado.  
Firma sugerida: normalizarDescripciones(articulos)

(3) Búsqueda por cadena en la descripción  
Escribe una función que reciba el array y una cadena; debe devolver un nuevo array con los artículos cuya descripción contenga esa cadena (sin distinguir mayúsculas/minúsculas).  
Firma sugerida: buscarPorDescripcion(articulos, cadena)

(4) Resumen por tipo: cantidad y precio medio  
Escribe una función que reciba el array y un tipo, y devuelva un objeto con dos atributos: "cantidad" y "preciomedio", que contendrán la cantidad y el precio medio de los artículos de ese tipo.  
Ejemplo de parámetro: "Electrónica"  
Ejemplo de salida: { "cantidad": 8, "preciomedio": 113.74 }  
Firma sugerida: resumenPorTipo(articulos, tipo)

(5) Reordenar por precio  
Escribe una función que reorganice el array de artículos por precio en orden ascendente o descendente según un parámetro de entrada ("asc" | "desc").  
Firma sugerida: ordenarPorPrecio(articulos, orden)

---

### EJERCICIO 2 — Clase "Banco"
Define una clase que permita crear objetos de tipo banco.

(6) Atributo "nombre"  
Al crear el objeto banco, se pasará un nombre por parámetro. (0,25 puntos)

Gestión de cuentas (códigos de 6 dígitos, del 000001 al 599999):
- (7) Crear cuenta: Recibe código de cuenta y saldo inicial (por defecto 0 si no se pasa).  
  Firma: crearCuenta(codigo, saldoInicial = 0)
- (8) Actualizar cuenta: Recibe código y un importe (positivo = ingreso, negativo = extracción) y actualiza el saldo. Debe mostrar error si la cuenta no existe.  
  Firma: actualizarCuenta(codigo, importe)
- (9) Eliminar cuenta: Recibe el código y elimina la cuenta. Debe mostrar error si la cuenta no existe o si el saldo no es 0, indicando cada caso.  
  Firma: eliminarCuenta(codigo)
- (10) Listar cuentas: Escribe en el documento el nombre del banco y la lista de cuentas con sus saldos de forma similar a la imagen facilitada.  
  Firma: listarCuentas()

Demostración mínima: realiza 3 llamadas a "crearCuenta" y una llamada a cada uno de los otros métodos para demostrar su funcionamiento.

(Imagen de referencia: image.png)

---

## ✅ Criterios de puntuación (Total 10 puntos)
Son 10 apartados, cada uno vale 1 punto.  
Escala por apartado:
- 0 puntos: no se realiza el ejercicio.
- 0,5 puntos: se realiza pero no se obtiene el resultado esperado.
- 1 punto: cumple exactamente lo solicitado.

---

## 🛠️ Recursos necesarios
- Editor web para teclear el código.
- Navegador web para ejecutar y probar.

---

## 💡 Consejos
- Comenta las partes del código donde haya validaciones, bucles u ordenaciones.
- Usa console.table para revisar arrays/objetos de forma clara.
- Intenta que las funciones no muten el array original cuando no sea necesario (puedes trabajar con copias).

---

## 📤 Indicaciones de entrega
- Fecha límite: 16/11/25.  
- Tras la entrega, habrá un periodo de una semana para corregir 2 tareas de compañeros; lee y entiende atentamente sus respuestas para ver las diferencias con la tuya.
- Publica el resultado también en Netlify (o similar) siguiendo las instrucciones del profesor. La URL debe incluir el patrón "RA4XXX" (siendo XXX tus iniciales) y se entregará la URL en el apartado “texto en línea”.

---

## 🔴 Notas importantes
1) El incumplimiento de las condiciones de entrega conllevará la no evaluación de la tarea.  
2) Los apartados que no cumplan estrictamente con lo solicitado serán calificados con 0.  
3) Esta tarea no admite entregas pasado el 16 de noviembre.

---

## 🗂️ Checklist rápido
- [ ] (1) Filtro tipo + precio  
- [ ] (2) Normalizar descripciones  
- [ ] (3) Buscar por cadena  
- [ ] (4) Resumen { cantidad, preciomedio }  
- [ ] (5) Ordenar por precio asc/desc  
- [ ] (6) Clase Banco con "nombre"  
- [ ] (7) crearCuenta  
- [ ] (8) actualizarCuenta  
- [ ] (9) eliminarCuenta  
- [ ] (10) listarCuentas
