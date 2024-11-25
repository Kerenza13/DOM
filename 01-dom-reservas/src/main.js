/**
 * @author Carlos Morillas Delgado
 * @description
 */


document.addEventListener('DOMContentLoaded', ()=>{

    // elemento de entrada a mi applicacion
    const app = document.getElementById('app');
    // creo elemento h1
    const h1 = document.createElement("h1");
    h1.textContent = "Hello World!";
    app.appendChild(h1);
    // creo un div

    // divCard.appendChild(mensajeBtn);

    app.appendChild(divCard)

});
const divCard = documen.createElement("div");
divCard.id = "card";
divCard.classList.add("principal card");
// creo un parrafo
const p = document.createElement("p");
p.textContent = "Hola soy un parrafo";
divCard.appendChild(p);
// creo un boton
const mensajeBtn = document.createElement("button");
mensajeBtn.textContent = "Mostrar Mensaje";