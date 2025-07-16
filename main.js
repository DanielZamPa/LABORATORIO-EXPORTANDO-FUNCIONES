import {PI, IVA, DIAS_SEMANA} from './constantes.js'

//Ejercicio 1.1
function areaCirculoMain(PI, radio){    
    return PI*(radio*radio);
}
console.log("Area del circulo: ",areaCirculoMain(PI,31));

//Ejercicio 1.2
function precioIva(IVA, precio) {
    return IVA*precio
}
console.log("Precio IVA de 100:",precioIva(IVA, 100));

//Ejercicio 1.3
console.log(DIAS_SEMANA[2]);

/*EJERCICIO 2 */
import {sumar, restar, multiplicar, areaCirculo} from './operaciones_matematicas.js'
console.log("Suma: ",sumar(12,-6));
console.log("Restar: ",restar(9,5));
console.log("Multiplicar: ",multiplicar(2,5));
console.log("Area del circulo: ",areaCirculo(PI, 31));

/*EJERCICIO 3 */
import {DESCUENTO} from './constantes.js'
import {calcularTotal, aplicarImpuestos, aplicarDescuento} from './operaciones_matematicas.js'

class Producto{
    contructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

let producto1 = new Producto("Caja de plastilina", 9000);
let producto2 = new Producto("Cuaderno", 5000);
let producto3 = new Producto("Esfero", 1000);
console.log();