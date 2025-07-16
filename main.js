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