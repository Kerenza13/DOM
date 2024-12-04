import { Producto } from "./Producto";

export default class Carrito {
    constructor() {
        // creamos un array de productos
        this.carrito = [];
    }
    // metodos
    agregarProducto(nombre, cantidad, precio) {
        this.productos.push(new Producto(nombre, cantidad, precio))
        // lo guardamos tb en el local storage    
        this.guardarLocalStorage();  
    }
    borrarProducto(index) {
        this.productos.splice(index, 1)
        //lo actualio o modifico del localstorage
        this.guardarLocalStorage();
    }
    actualizarProducto(index, newCantidad) {
        if (newCantidad > 0) {
            this.productos[index].cantidad = newCantidad;
            //lo actualizo o modifico del localstorage
        } else {
            throw new Error("La cantidad no puede ser menor a 0")
        }
        this.guardarLocalStorage();
    }
    calculartotalCarrito() {
        return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0)
    }
    guardarLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }   
    cargarLocalStorage() {
    //    localStorage.hasOwnProperty("carrito")
    const carrito = localStorage.getItem(localStorage.getItem("carrito"))
    if (carrito) {
            this.productos = carrito;
        }
    }
}
