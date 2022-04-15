//Solicitud de datos por Prompt que se muestran por HTML


// Constructor de nuevo Usuario con método PUSH
class AltaUsuario {
    constructor(nombreUsuario, mailUsuario, categoriaUsuario) {
        this.nombreUsuario = nombreUsuario;
        this.mailUsuario = mailUsuario;
        this.categoriaUsuario = categoriaUsuario;
        this.nuevoUsuario = [];
    }
    agregaUsuario(AltaUsuario) {
        this.nuevoUsuario.push(AltaUsuario);
    }
}

//  Creación del usuario solicitando datos por prompt

const nombreUsuario = prompt("Ingrese un nombre de usuario");
const mailUsuario = prompt("Ingrese una dirección de correo válida");
const categoriaUsuario = prompt("Ingrese el número según se trate: 1-Particular 2-Profesional 3-Docente según se trate");


const agregaUsuario = new AltaUsuario(nombreUsuario, mailUsuario, categoriaUsuario);

//Muestro nuevo usuario por consola con console.log
console.log(agregaUsuario)

// Muestro los datos concatenados en HTML

document.write("Su nombre de usuario es " + nombreUsuario);

document.write(", su dirección de correo es " + mailUsuario);

document.write(" y la categoría de usuario es " + categoriaUsuario);

alert("Gracias por su registrarse")
alert("Los datos ingresados se muestran a continuación")