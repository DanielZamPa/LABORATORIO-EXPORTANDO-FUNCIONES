import { DESCUENTO } from "./constantes";

export function sumar(a,b){
    return a+b
}

export function restar(a,b){
    return a-b
}

export function multiplicar(a,b){
    return a*b
}

export function areaCirculo(PI, radio){    
    return PI*(radio*radio);
}

export function calcularTotal(precio, cantidad){
    return total=precio+cantidad
}

export function aplicarImpuestos(IVA,total){
    return total*=IVA
}

export function aplicarDescuento(total,DESCUENTO){
    return total*DESCUENTO
}