/*
Vamos a modelar una clase Persona que tenga propiedades
 básicas como nombre, edad y correo electrónico. Además, 
 tendrá métodos para saludar, actualizar el correo 
 y mostrar un resumen de la persona.*/

 class Persona {
    nombre: string;
    edad: number;
    correo: string;

    constructor(nombre: string, edad: number, correo:string){
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }

    saludar(): string {
        return `Hola, mi nombre es ${this.nombre}`;
    }

    actualizarCorreo(nuevoCorreo: string): void {
        this.correo = nuevoCorreo;
    }

    mostrarResumen(): string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Correo: ${this.correo}`;
    }

 }

 const objetoUno = new Persona("Edgardo", 39, "edgardo@uleam.edu.ec");
 console.log (objetoUno.mostrarResumen());
 objetoUno.actualizarCorreo("nuevocorreo@uleam.edu");
console.log (objetoUno.mostrarResumen());

const objetoDos = new Persona("Juanito", 43, "juanito@uleam.edu.ec");
console.log (objetoDos.mostrarResumen()); 