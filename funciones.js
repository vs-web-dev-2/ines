function saludar(){
    console.log("hola mundo");

}

saludar();

function saludarPorNombre(nombre){
    console.log("hola "+ nombre);

}
saludarPorNombre("Ines");

let amigo = "Juanito";
saludarPorNombre(amigo);

function saludarElaborado(nombre,saludo){
    console.log("¡"+saludo + " " + nombre + "!");

}

// Hola sera el valor por defecto si no paso ningun valor
saludarElaborado("Lola","Buenos días");

function saludarElaborado(nombre,saludo = "Hola"){
    console.log("¡"+saludo + " " + nombre + "!");

}

saludarElaborado("Lola","Buenos días");
saludarElaborado("Lola");


function calcularCircunferencia(r){
    // 2 * PI * r
    const PI = 3.14;
    return 2 * PI * r;

}

let circunferencia = calcularCircunferencia(5);
console.log(circunferencia);


