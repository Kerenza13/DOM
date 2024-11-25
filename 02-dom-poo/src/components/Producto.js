export function Producto(nombre, precio, stock) {
    let _nombre = nombre;
    let _precio = precio;
    let _stock = stock; //privada
    //metdos publicos
    //setter y getter
    this.getNombre = function () {
        return _nombre;
    };
    this.getPrecio = function () {
        return _precio;
    };
    this.getStock = function () {
        return _stock;
    };
    this.actStock = function (cantidad) {
        _stock += cantidad;
        return `Stock actualizado a ${this.getStock}`
    }
    this.obtenerInfo = function () {
        return `Nombre: ${this.getNombre()}} Precio: ${this.getPrecio()} Stock: ${this.getStock}}`;
    };

}