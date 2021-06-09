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


// lo del profe
function saludar() {
    console.log("Hola mundo");
  }
  saludar();
  
  function saludarPorNombre(nombre) {
    console.log("Hola " + nombre);
  }
  saludarPorNombre("Alberto");
  let amigo = "Miguel";
  saludarPorNombre(amigo);
  
  function saludarElaborado(nombre, saludo = "Hola") {
    console.log(saludo + ", " + nombre);
  }
  saludarElaborado("Sergio", "Buenos días");
  saludarElaborado("Dosil");
  
  function calcularCircunferencia(r) {
    // 2 * PI * r
    const PI = 3.14;
    return 2 * PI * r;
  }
  let circunferencia = calcularCircunferencia(10);
  console.log(circunferencia);
  let radio = 20;
  circunferencia = calcularCircunferencia(radio);
  console.log(circunferencia);
  let r = 30;
  circunferencia = calcularCircunferencia(r);
  console.log(circunferencia);
  const PI = 9;
  circunferencia = calcularCircunferencia(100);
  console.log(circunferencia);
  
  let lado = 10;
  function calcularSuperficie(lado) {
    return lado * lado;
  }
  console.log(calcularSuperficie(9));
  
  const lados = 9;
  function calcularPerimetro(lado) {
    const lados = 4;
    console.log("lados local: " + lados);
    return lado * lados;
  }
  console.log(calcularPerimetro(5));
  console.log("lados global: " + lados);