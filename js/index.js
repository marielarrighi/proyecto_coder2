//1º Entrega del Proyecto Final

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
let propiedades = []
const Propiedad1 = new Propiedades(1,"Chalet",3, "Venta", 75000)
const Propiedad2 = new Propiedades(2,"Departamento", 2, "Alquiler", 9500)
const Propiedad3 = new Propiedades(3,"Casa", 4, "Venta", 80000)
const Propiedad4 = new Propiedades(4,"PH", 2, "Alquiler", 9000)
const Propiedad5 = new Propiedades(5,"Duplex", 3, "Venta", 55000)

//Array forma directa
const archivo = [Propiedad1, Propiedad2, Propiedad3, Propiedad4, Propiedad5]
console.log (archivo)


function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el numero de la opcion que desea realizar:
    1 - Ver Propiedades En Venta y Alquiler
    2 - Solicitar una tasacion
    3 - Enviar una consulta
    4 - Cotizar un seguro de caucion
    0 - Para salir `))
    menu (opcion)
}

function menu (opcionSeleccionada){
        swich (opcionSeleccionada){
            case 0:
                salir = true
                alert (`Gracias por visitarnos, vuelva pronto:`)
            break
            case 1: alert (`Podra ver nuestras propiedades en la consola:`)
            for (let propiedades of archivo){
            console.log (propiedades + ambientes + operacion + precio)
        }
            break
            case 2: tasacion = prompt (`
            Podra solicitar una tasacion:
            1- por mail: info@arrighipropiedades.com
            2- por telefono: 2009-7487`)
            
            break
            case 3: Enviarconsulta = prompt (`
            Podra realizar su consulta:
            1- escribiendo al mail: info@arrighipropiedades.com
            2- o llamandonos al telefono: 2009-7487`)

            break
            case 4: coticeSuSeguro = prompt (`
            Para cotizar su seguro de alquiler seleccione:
            1- Vivienda
            2- Comercial`)
            
            const cotizador = (ValorAlquiler, MesesDeContrato, Comision) => {
                return (ValorAlquiler * MesesDeContrato) / 12 +;
            }

            break
            default:
                alert (`Ingrese una opcion correcta`)
}
}
