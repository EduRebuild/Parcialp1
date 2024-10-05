class ListaDeCompraCTRL {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        this.vista.vincularAgregarArticulo(this.manejarAgregarArticulo.bind(this));
        this.vista.vincularEliminarArticulo(this.manejarEliminarArticulo.bind(this));
        this.vista.vincularEditarArticulo(this.manejarEditarArticulo.bind(this));

        this.alCambiarListaDeCompras(this.modelo.obtenerArticulos());
    }

    alCambiarListaDeCompras(articulos) {
        this.vista.mostrarArticulos(articulos);
    }

    manejarAgregarArticulo(nombre, cantidad, descripcion, imagen) {
        if (nombre && cantidad && descripcion && imagen) {
            this.modelo.agregarArticulo(nombre, cantidad, descripcion, imagen);
            this.alCambiarListaDeCompras(this.modelo.obtenerArticulos());
        }
    }

    manejarEditarArticulo(id, nombre, cantidad, descripcion, imagen) {
        this.modelo.editarArticulo(id, nombre, cantidad, descripcion, imagen);
        this.alCambiarListaDeCompras(this.modelo.obtenerArticulos());
    }

    manejarEliminarArticulo(id) {
        this.modelo.eliminarArticulo(id);
        this.alCambiarListaDeCompras(this.modelo.obtenerArticulos());
    }
}