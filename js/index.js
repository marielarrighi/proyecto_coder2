//1º Trabajo Complementario

//let condicion = true
//do {
//    let adivinanza = prompt("¿Que tiene agujas y no sabe coser, tiene numeros y no sabe leer?")
//    if (adivinanza.toLowerCase() == "reloj") {
//    console.log("Su respuesta es correcta")
//    condicion = false
//}else{
//    console.log("Respuesta incorrecta, vuelva a intentarlo")
//}
//}while (condicion)


//2º Trabajo Complementario
//simulador de seguro de caucion para alquiler
function pedirCantidad(){
    let cantNotas = parseInt(prompt("Ingrese el valor del alquiler"))
    return cantNotas
}
let nota = 0;
let acum = 0;
let prom = 0;

let cantNotas = pedirCantidad()
for (let i=0; i<cantNotas; i++){
    nota = parseInt(prompt(`Ingrese la cantidad de meses del contrato ${i+1}`))
    acum = acum + nota
    console.log("acumulador parcial " + acum)
}
prom = acum + cantNotas;
console.log("La suma total es " + acum);
console.log("El valor de su garantia es " + prom);


//3º Trabajo Complementario

//Declaración de la clase
class Propiedades{constructor(id, propiedades, ambientes, operacion, precio){
    //propiedades o atributos de nuestra clase
    this.id = id,
    this.propiedades = propiedades,
    this.ambientes = ambientes,
    this.operacion = operacion,
    this.precio = precio}
//Declaración de un método
mostrarDatos(){
    console.log(`Tipo de Propiedad ${this.propiedades} Tipo de Operacion ${this.operacion} Precio Estimado ${this.precio}`)}}


//orden y cantidad de atributosPropiedades
let biblioteca = []
const Propiedad1 = new Propiedades(1,"Chalet",3, "Venta", 75000)
const Propiedad2 = new Propiedades(2,"Departamento", 2, "Alquiler", 9500)
const Propiedad3 = new Propiedades(3,"Casa", 4, "Venta", 80000)
const Propiedad4 = new Propiedades(4,"PH", 2, "Alquiler", 9000)
const Propiedad5 = new Propiedades(5,"Duplex", 3, "Venta", 55000)



//Array forma directa
const estanteria = [Propiedad1, Propiedad2, Propiedad3, Propiedad4, Propiedad5]
console.log (estanteria)
