/*
Vamos a modelar una clase Persona que tenga propiedades
 básicas como nombre, edad y correo electrónico. Además,
 tendrá métodos para saludar, actualizar el correo
 y mostrar un resumen de la persona.*/
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, correo) {
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    Persona.prototype.saludar = function () {
        return "Hola, mi nombre es ".concat(this.nombre);
    };
    Persona.prototype.actualizarCorreo = function (nuevoCorreo) {
        this.correo = nuevoCorreo;
    };
    Persona.prototype.mostrarResumen = function () {
        return "Nombre: ".concat(this.nombre, ", Edad: ").concat(this.edad, ", Correo: ").concat(this.correo);
    };
    return Persona;
}());
var objetoUno = new Persona("Edgardo", 39, "edgardo@uleam.edu.ec");
console.log(objetoUno.mostrarResumen());
objetoUno.actualizarCorreo("nuevocorreo@uleam.edu");
console.log(objetoUno.mostrarResumen());
var objetoDos = new Persona("Juanito", 43, "juanito@uleam.edu.ec");
console.log(objetoDos.mostrarResumen());
