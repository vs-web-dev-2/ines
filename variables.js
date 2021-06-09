const PI = 3.1416;
let marca = "BH";
let radio = 30 ;
let rueda = 2 * PI * radio;
let esDeCarretera = true;
console.log("marca: "+marca+" radio: "+radio+" rueda: "+rueda+" Es de carretera: "+esDeCarretera);
//console.log(marca);
//console.log(rueda);
//console.log(radio);
marca = "Orbea";
radio = 40;
rueda = 2 * PI * radio;
esDeCarretera = false;
//console.log(marca);
//console.log(rueda);
//console.log(radio);
console.log("marca: "+marca+" radio: "+radio+" rueda: "+rueda+" Es de carretera: "+esDeCarretera);

//tipos compuestos
//Objeto

let bici = {
    marca: "BH",
    radio: 30,
    esDeCarreter : true,
    precio: 300,
    color: "rojo",
};

bici.color = "azul";
console.log(bici);
console.log(bici.precio);

// Array numeran desde 0

let colores = ["rojo","azul","amarillo","verde","gris","negro","blanco"];
console.log(colores);
console.log(colores[1]);
console.log(colores[3]);
colores[2] = "violeta";
console.log(colores);


// Otras asignaciones

bici.marca = marca;
console.log(bici);
bici.color = colores[0];

//trabajar con boolenas, peso compara con expresiones
//si el radio es mayor que 25 es grande, sino es pequeño,
//pone el valor de evalar ala segunde expresion

let esGrande = bici.radio >25;
console.log(esGrande);
let meGusta = bici.color == "azul";
console.log(meGusta);
meGusta = bici.color != "azul";
console.log(meGusta);

