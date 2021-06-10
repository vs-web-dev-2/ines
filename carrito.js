// un array de productos
// cada producto debe tener un tipo de iva (normal, reducido o exento)
// { nombre: 'libreta', precio: 1.80, iva: normal }

// carrito es un array (subconjunto de los productos escogidos)
// criterio => precio <10

// calcular subtotal sin iva

// un array de tipos de iva { nombre:'normal', tipo: 21 }

// calcular el total con iva

let tienda = [
    {nombre: 'libreta', precio: 1.00, iva: 'normal'},
    {nombre: 'boli', precio: 2.00, iva: 'exento'},
    {nombre: 'goma', precio: 3.00, iva: 'reducido'},
    {nombre: 'lapiz', precio: 4.00, iva: 'normal'},
    {nombre: 'libro', precio: 5.00, iva: 'exento'},
    {nombre: 'grapadora', precio: 6.00, iva: 'normal'}
];

let tipoIva = [
    {nombre:'normal', tipo: 21},
    {nombre:'reducido', tipo: 4}
]

let carrito = [];
tienda.forEach(function (articulo) {
  if (articulo.precio < 10) {
    carrito.push(articulo);
  }
});

// calcular subtotal sin iva

let subtotal = 0;
carrito.forEach((articulo) => (subtotal += articulo.precio));

// un array de tipos de iva { nombre:'normal', tipo: 21 }

// calcular el total con iva