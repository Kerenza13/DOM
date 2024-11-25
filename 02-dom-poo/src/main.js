// // Crear una clase para modular unu sistema de usuarios que puedan iniciar sesio y cerrarla, y actualizar su perfil
// function usuario(nombre, email, password) {
//     /* Variables */
//     this.nombre = nombre; //variables de instancia publica
//     this.email = email;
//     let _password = password; //variable de instancia privada
//     /* Metodos publicos */
//     this.login = function (email, password) {
//         //No usar = function A NO SER QUE LO DOMINEMOS EL CONTEXTO DE THIS
//         //quiero evaluar si nombre y password son correctos
//         if (this.email === email && this._password === password) {
//             return `Bienvenido ${this.nombre}`;
//         } else { return "Error de inicio de sesion"; }
//     };
//     this.updateEmail = function (newEmail) {
//         //quiero actualizar el email a otro
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     };
// }

import { Producto } from "./components/Producto";

// //crear usuario
// const usuario1 = new usuario("Claudia", "montecatine@gmail.com", "123456789");

// //Mostramos en dom
// const app = document.getElementById("app");

// function renderUsiario() {
//     //funcion que pinta en el app el usuario
//     app.innerHTML = `
//     <h2>USUARIO: ${usuario1.nombre}</h2>
//     <p>Email: ${usuario1.email}</p>
//     <button id="btnlogin">Login</button>
//     `;
//     //añadir evento del boton
//     const btnlogin = document.getElementById("btnlogin");
//     btnlogin.addEventListener("click", () => {
//         alert(usuario1.login("paco@gmail.com", "1234556789"));
//     });
// }

// /* -------------------Solución con clases------------------- */
// class Usuario {
//     //las variables privadas se declaran anteponiendo una # al nombre
//     #password;
//     constructor(nombre, email, password) {
//         this.nombre = nombre;
//         this.email = email;
//         this.#password = password;
//     }

//     login(email, password) {
//         if (this.email === email && this.#password === password) {
//             return `Bienvenido ${this.nombre}`;
//         } else {
//             return "Error de inicio de sesion";
//         }
//     }

//     updateEmail(newEmail) {
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     }
// }

// const usuario2 = new Usuario("Paco", "paco@gmail.com", "123456789");

// implementar un modelo de producto con funciones constructoras y clases que permita obtener informacion del producto, actualizar el stock, deviendo registrar guardar o almacenar el nombre preci y stock.



// Array de productos
const productos = [
    new Producto("Protatil", 500, 10),
    new Producto("Movil", 1200, 20),
    new Producto("Tablet", 300, 5)
]
app.innerHTML = `
<h2>Gestion de Productos</h2>
${productos.map(productos, index => {
    return `<li> ${productos.obtenerInfo()} 
    <button class="btn-actualizar-stock" data-index="${index}">Atualizar stock</button>
        </li>`;
})
.join("")}
`;

//escuchamos eventos del click en los botones actualizar stock
document.querySelectorAll(".btn-actualizar-stock")
    .forEach((btn)=>{
        btn.addEventListener("click",()=>{
            alert("actualizar stock ")
        });
    });