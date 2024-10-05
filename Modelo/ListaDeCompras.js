class ListaDeCompras {
    constructor(id, nombre, cantidad, descripcion, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

class ListaDeComprasModelo {
    constructor() {
        this.articulos = [];
        this.idActual = 0;
    }

    agregarArticulo(nombre, cantidad, descripcion, imagen) {
        const nuevoArticulo = new ListaDeCompras(this.idActual++, nombre, cantidad, descripcion, imagen);
        this.articulos.push(nuevoArticulo);
    }

    editarArticulo(id, nombre, cantidad, descripcion, imagen) {
        const articulo = this.articulos.find(articulo => articulo.id === id);
        if (articulo) {
            articulo.nombre = nombre;
            articulo.cantidad = cantidad;
            articulo.descripcion = descripcion;
            articulo.imagen = imagen;
        }
    }

    eliminarArticulo(id) {
        this.articulos = this.articulos.filter(articulo => articulo.id !== id);
    }

    obtenerArticulos() {
        return this.articulos;
    }
}