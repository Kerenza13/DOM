//funciones constructoras
export function Empleado(nombre, edad, puesto) {
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;

    //metodo compartido
    Empleado.prototype.calcularSalario = function () {
        const salarioBase = {
            senior: 5000,
            semisenior: 4000,
            junior: 3000,
        };
        return salarioBase[this.puesto] || 0;
    };

    Empleado.prototype.info = function () {
        console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Puesto: ${this.puesto}
        Salario: ${this.calcularSalario()}
        `);
    };
}

//clase hija de empleado
/**
 * Clase EmpleadoFreelance
 * @param {String} nombre 
 * @param {Number} edad 
 * @param {Number} precioHora 
 */
export function EmpleadoFreelance(nombre, edad, precioHora) {
    Empleado.call(this, nombre, edad, "freelance");
    this.precioHora = precioHora;
    this.horasTrabajadas = 0;

    EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;

    EmpleadoFreelance.prototype.calcularSalario = function () {
        return this.horasTrabajadas * this.precioHora;
    };

    EmpleadoFreelance.prototype.info = function (horasTrabajadas) {
        this.horasTrabajadas = horasTrabajadas;
        console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Puesto: ${this.puesto}
        Precio por hora: ${this.precioHora}
        Horas trabajadas: ${this.horasTrabajadas}
        Salario: ${this.calcularSalario()}
        `);
    };
}

export class EmpleadoClases {
    constructor(nombre, edad, puesto) {
        this.nombre = nombre;
        this.edad = edad;
        this.puesto = puesto;
    }
    calcularSalario() {
        const salarioBase = {
            senior: 5000,
            semisenior: 4000,
            junior: 3000

        };
        return salarioBase[this.puesto] || 0;
    }
}

export class EmpleadoFreelanceClases extends EmpleadoClases {
    constructor(nombre, edad, precioHora) {
        super(nombre, edad, "freelance");
        this.precioHora = precioHora;
    }
    info(horasTrabajadas) {
        console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Puesto: ${this.puesto}
        Horas trabajadas: ${horasTrabajadas}
        Salario: ${this.calcularSalario(horasTrabajadas)}
        `);
    }
    calcularSalario(horasTrabajadas) {
        return this.precioHora * horasTrabajadas;
    }
}
