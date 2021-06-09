function calcularIva(importe){
    return importe * 21 /100
}
function calcularPago(importe,iva){
    return importe +iva
}
let importe = 1000;
let iva = calcularIva(importe);
console.log(calcularPago(importe,iva));
