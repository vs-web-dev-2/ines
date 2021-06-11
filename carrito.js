// un array de productos
// cada producto debe tener un tipo de iva (normal, reducido o exento)
// { nombre: 'libreta', precio: 1.80, iva: normal }

// carrito es un array (subconjunto de los productos escogidos)
// criterio => precio <10

// calcular subtotal sin iva

// un array de tipos de iva { nombre:'normal', tipo: 21 }

// calcular el total con iva

// let tienda = [
//     {nombre: 'libreta', precio: 1.00, iva: 'normal'},
//     {nombre: 'boli', precio: 2.00, iva: 'exento'},
//     {nombre: 'goma', precio: 3.00, iva: 'reducido'},
//     {nombre: 'lapiz', precio: 4.00, iva: 'normal'},
//     {nombre: 'libro', precio: 5.00, iva: 'exento'},
//     {nombre: 'grapadora', precio: 6.00, iva: 'normal'}
// ];

// let tipoIva = [
//     {nombre:'normal', tipo: 21},
//     {nombre:'reducido', tipo: 4}
// ]

// un array de productos
// cada producto debe tener un tipo de iva (normal, reducido o exento)
// { nombre: 'libreta', precio: 1.80, iva: normal }


// //La del profe
// let productos = [
//     { nombre: "libreta", precio: 1.8, iva: "normal" },
//     { nombre: "lapiz", precio: 0.5, iva: "normal" },
//     { nombre: "libro", precio: 19.9, iva: "reducido" },
//   ];
//   console.log("Nos ofrecen:");
//   console.log(productos);
//   // carrito es un array (subconjunto de los productos escogidos)
//   // criterio => precio <10
//   let carrito = [];
//   productos.forEach(function (producto) {
//     if (producto.precio < 10) {
//       carrito.push(producto);
//     }
//   });
//   console.log("Hemos comprado:");
//   console.log(carrito);
//   // calcular subtotal sin iva
//   let subtotal = 0;
//   carrito.forEach((producto) => (subtotal += producto.precio));
//   console.log("Hemos gastado:" + subtotal);
//   // un array de tipos de iva { nombre:'normal', tipo: 21 }
//   let tiposIva = [
//     { nombre: "normal", tipo: 21 },
//     { nombre: "reducido", tipo: 4 },
//   ];
//   console.log("Las tablas de IVA: ");
//   console.log(tiposIva);
//   // calcular el total con iva
//   let cuotaCarritoIVA = 0;
//   carrito.forEach(function (producto) {
//     let tipoIvaProducto = tiposIva.find((tipoIva) => tipoIva.nombre === producto.iva);
//     let cuotaIVA = producto.precio * (tipoIvaProducto.tipo / 100);
//     cuotaCarritoIVA += cuotaIVA;
//   });
//   console.log("Y el IVA es de: " + cuotaCarritoIVA);
//   console.log("Y el importe a pagar será de: " + (subtotal + cuotaCarritoIVA));

  //  La forma de Fernando
  let productos = [
    {name:"raton",     precio:100,  iva : 'normal' },
    {name:"boligrafo", precio:200,  iva : 'reducido' },
    {name:"tv",        precio:50,   iva : 'exento' },
    {name:"movil",     precio:400,  iva : 'exento' },
    {name:"mesa",      precio:250,  iva : 'normal' },
    {name:"movil",     precio:400,  iva : 'exento' },
    {name:"coche",     precio:250,  iva : 'reducido' },
    {name:"ventana",   precio:600,  iva : 'exento' },
    {name:"pc",        precio:122,  iva : 'reducido' }
  ]
  let totalIva = 0;
  let sinlIva = 0;
  let carrito = [];
  let arrIva = [ 
    {nombre : 'normal',tipo:21},
    {nombre : 'reducido',tipo:14},
    {nombre : 'exento',tipo:0}
   ]
  
   const calIva =  (prod) =>  {
    let prodIva = prod.iva;
    let numIva = arrIva.find( iva => {  
      return iva.nombre === prodIva  
    });
    
    if(!numIva.tipo==0){    
      return prod.precio * ( numIva.tipo / 100 ) + prod.precio;
    }else{
       return prod.precio ;
    }
  
  }
  
  const calcularTotales =  (prod) =>  {
   
    sinlIva = sinlIva + prod.precio;
    totalIva = totalIva + calIva(prod); 
  }
  
  
   productos.forEach( producto =>{
      if(producto.precio < 200){
        carrito.push(producto);
        calcularTotales(producto);
      }
   })
  
   console.log(carrito)
  
   console.log( `
    productos del carrito es : ${carrito.length}
    El total sin Iva es : ${sinlIva}
    El total con Iva es : ${totalIva}
   `  )