// import { Empleado, EmpleadoClases, EmpleadoFreelance, EmpleadoFreelanceClases } from "./helpers/Ej3";
import { GestionUsuariosClase } from "./helpers/Ej7";

// // ------Ejercicio 3 ------
// console.log("----Ejercicio 3----")
// const empleado1 = new Empleado("Juan", 25, "junior");
// const empleado2 = new Empleado("Ana", 30, "semiSenior");
// empleado1.info();
// empleado2.info();

// // ------ Ejercicio 4 ------
// console.log("----Ejercicio 4----")
// const freelance1 = new EmpleadoFreelance("Pedro", 35, 50);
// const freelance2 = new EmpleadoFreelance("Maria", 40, 60);
// freelance1.info(24);
// freelance2.info(32);

// // -----Ejercico 3 con clases --------
// console.log("----Ejercicio 3 con clases----")
// const empleadoClase1 = new EmpleadoClases("Mario", 25, "junior");
// const empleadoClase2 = new EmpleadoClases("Luis", 30, "semiSenior");
// empleadoClase1.info();
// empleadoClase2.info();
// const freelanceClase3 = new EmpleadoFreelanceClases("Rodolfo", 35, 50);
// const freelanceClase4 = new EmpleadoFreelanceClases("Isabella", 40, 60);
// freelanceClase3.info(24);
// freelanceClase4.info(32);

// ------ Ejercicio 7 ------
console.log("----Ejercicio 7----");

(async function () {
  const gestionUsuarios = new GestionUsuariosClase();
  await gestionUsuarios.fetchUsuarios();

  const app = document.getElementById("app");

  const h1Element = document.createElement("h1");
  h1Element.textContent = "Gestión de Usuarios";
  app.appendChild(h1Element);

  const divListUsuarios = document.createElement("div");
  divListUsuarios.id = "lista-usuarios";
  app.appendChild(divListUsuarios);

  divListUsuarios.innerHTML = `
    <form id="form-busqueda">
        <input id="nombre-buscar" type="text" placeholder="Buscar por nombre" />
        <button type="submit">Buscar</button>
    </form>
    `;

  divListUsuarios.innerHTML += gestionUsuarios.usuarios
    .map((user) => {
      return `
            <li>
                ${user.info()}
                <button class="borrar-btn" data-id="${user.id}">Borrar</button>
            </li>
            `;
    })
    .join("");

  document.querySelectorAll(".borrar-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const userId = this.getAttribute("data-id");
      gestionUsuarios.usuarios = gestionUsuarios.usuarios.filter((user) => user.id != userId);
      divListUsuarios.innerHTML = ''; 
      divListUsuarios.innerHTML += gestionUsuarios.usuarios
        .map((user) => {
          return `
                    <li>
                        ${user.info()}
                        <button class="borrar-btn" data-id="${user.id}">Borrar</button>
                    </li>
                    `;
        })
        .join(""); 
    });
  });
})();
