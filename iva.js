function calcularIva(importe){
    return importe * 21 /100
}
function calcularPago(importe,iva){
    return importe +iva
}
let importe = 1000;
let articulo = "Bicicleta";
let iva = calcularIva(importe);
console.log("Articulo: "+ articulo+ " -> A pagar "+calcularPago(importe,iva));
