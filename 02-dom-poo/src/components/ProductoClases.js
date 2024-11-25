export class ProductoClases {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setPrecio(precio) {
        this.#precio = precio;
    }

    setStock(stock) {
        this.#stock = stock;
    }

    getNombre() {
        return this.#nombre;
    }

    getPrecio() {
        return this.#precio;
    }

    getStock() {
        return this.#stock;
    }

    // 
    actualizarStock(cantidad) {
        if (typeof cantidad !== "number" || cantidad < 0) {
            throw new Error("La cantidad debe ser un número positivo.");
        }
        this.#stock += cantidad;
    }

    // Devuelve información del producto
    obtenerInfo() {
        return `Producto: ${this.#nombre}, Precio: ${this.#precio}€, Stock: ${this.#stock}`;
    }
}
