function calcularIva(importe,tipo){
    return importe * tipo /100
}
function calcularPago(importe,iva){
    return importe + iva
}
let importe = 1000;
let articulo = "Bicicleta";
let tipo = 21;
let iva = calcularIva(importe,tipo);
console.log("Articulo: "+ articulo+ " -> A pagar "+calcularPago(importe,iva));

// Lo del profe
function calcularIva(base, tipoIva = 21) {
    return (base * tipoIva) / 100;
  }
  
  function imprimir(iva, tipoIva, base, valor) {
    // console.log("El IVA" + iva + " al tipo" + tipoIva + " de " + base + " es " + valor);
    console.log(
      `El IVA ${iva} al tipo ${tipoIva}
          de ${base}
          es ${valor}`
    );
  }
  
  // console.log("El IVA normla de 10 es " + calcularIva(10));
  // console.log("El IVA reducido de 10 es " + calcularIva(10, 4));
  // imprimir("El IVA normal de 10 es", calcularIva(10));
  // imprimir("El IVA reducido de 10 es", calcularIva(10, 4));
  // imprimir("normal", 21, 10, calcularIva(10));
  // imprimir("reducido", 4, 10, calcularIva(10, 4));
  let precio = 10;
  let iva = "reducido";
  let tipoIva = 4;
  let cuota = calcularIva(precio, tipoIva);
  imprimir(iva, tipoIva, precio, cuota);