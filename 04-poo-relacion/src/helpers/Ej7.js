// Gestion de usuarios desde una API
const url = import.meta.env.VITE_URL;

// ---------- FUNCIONES CONSTRUCTORAS -----------------
export function Usuario(id, nombre, email, rol) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;

    Usuario.prototype.info = function () {
        console.log(`
            ID: ${this.id}
            Nombre: ${this.nombre}
            Email: ${this.email}
            Rol: ${this.rol}
            `);
    };

}

function GestionUsuarios() {
    this.usuarios = [];
}

GestionUsuarios.prototype.fetchUsuarios = async function () {
    //ir a jsonPlaceHolder y trar los users
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw "Error en la petición";
        }

        const data = await response.json();
        //cosntruyo los objetos Usuario
        this.usuarios = data.map((user) => {
            const { id, name, email } = user;
            return new Usuario(id, name, email, "usuario");
        })
        return this.usuarios;
    } catch (error) {
        console.log("Error en la petición", error);
    }
};

GestionUsuarios.prototype.guardarLocalStorage = function () {
    localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
}

GestionUsuarios.prototype.cargarLocalStorage = function () {
    const usuariosLocalStorage = JSONparse(localStorage.getItem("usuarios"));
    if (usuarios) {
        this.usuarios = usuariosLocalStorage.map((user) =>
            new Usuario(user.id, user.nombre, user.email, user.rol)
        );
    }
}


export class UsuarioClase {
    constructor(id, nombre, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }
    info() {
        return `
        ID: ${this.id}
        Nombre: ${this.nombre}
        Email: ${this.email}
        Rol: ${this.rol}
        `;
    }
}

export class GestionUsuariosClase {
    constructor() {
        this.usuarios = [];
    }
    async fetchUsuarios() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw "Error en la peticion"
            }
            const data = await response.json();
            this.usuarios = data.map((user) => {
                const { id, nombre, email } = user;
                return new UsuarioClase(id, nombre, email, "usuario");
            });
            return this.usuarios;

        } catch (error) {

        }
    }
    guardarLocalStorage() {
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
    }
    cargarLocalStorage() {
        const usuariosLocalStorage = JSONparse(localStorage.getItem("usuarios"));
        if (usuarios) {
            this.usuarios = usuariosLocalStorage.map((user) =>
                new Usuario(user.id, user.nombre, user.email, user.rol)
            );
        }
    }
}