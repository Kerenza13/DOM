// Importamos los componentes
import Carrito from "./Carrito.js";
import Producto from "./Producto.js";

// Instancia del carrito
const carrito = new Carrito();

const opcionesProducto = (event) =>{
    if(event.target.classList.contains("btn-eliminar")){
        const index = Number(event.target.dataset.index);
        carrito.borrarProducto(index);
        pintarCarrito();
    }
}

carrito.cargarLocalStorage();

if (event.target.classList.contains("btn-editar")){
    const newCantidad = prompt("Introduzca la nueva cantidad", carrito.productos[indice].cantidad);
    if(newCantidad && Number(newCantidad > 0)){
        carrito.actualizarProducto(indice, newCantidad);
        editarProducto(indice, Number(newCantidad));
    }
};
// Función para pintar la interfaz
function pintarInterfazWeb() {
    const handlerSubmit = (event) => {
        event.preventDefault();
        const nombre = document.getElementById("nombre-producto").value;
        const cantidad = Number(document.getElementById("#cantidad-producto").value, 10);
        const precio = Number(document.getElementById("#precio-producto").value);

        // Validación básica
        if (!nombre || isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio <= 0) {
            alert("Todos los campos son obligatorios y deben tener valores positivos.");
            return;
        }

        // Agregamos producto al carrito
        carrito.agregarProducto(new Producto(nombre, cantidad, precio));
        pintarCarrito();
    };

        document.getElementById("form-producto").reset();

    const pintarCarrito = () => {
        const lista = document.getElementById("lista-productos");
        lista.innerHTML = carrito.productos
            .map((producto, index) => 
                `<li>${producto.obtenerInfo()} <button class="btn-eliminar" data-index="${index}">Eliminar</button></li>`)
            .join("");
    };

    const app = document.getElementById("app");
    app.innerHTML = `
        <h1>Carrito de la Compra</h1>
        <form id="form-producto">
            <input id="nombre-producto" type="text" placeholder="Nombre del producto">
            <input id="cantidad-producto" type="number" placeholder="Cantidad del producto">
            <input id="precio-producto" type="number" placeholder="Precio del producto">
            <button type="submit">Agregar Producto</button>
        </form>
        <div id="lista-productos"></div>
    `;

    document
    .getElementById("form-producto")
    .addEventListener("submit", handlerSubmit);

    document
    .getElementById("lista-productos")
    .addEventListener("click", opcionesProducto);
}

// Ejecutamos la función principal
pintarInterfazWeb();