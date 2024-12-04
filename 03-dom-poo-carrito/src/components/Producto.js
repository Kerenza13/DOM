
export class Producto {
    // privadas/publicas
    #precio;

    // constructor
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.#precio = precio;
    }
    //metodos
    getPrecio() {
        return this.#precio;
    }
    setPrecio(newPrecio) {
        this.#precio = newPrecio;

    }
    calcularTotal() {
        return this.#precio * this.cantidad;
    }
    obtenerInfo() {
        return `Nombre: ${this.nombre} ---- Cantidad: ${this.cantidad} ---- ${this.#precio} ---- Total: ${this.calcularTotal()}`;
    }

}