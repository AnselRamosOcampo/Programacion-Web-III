import producto from "../modelos/productoModelo.js";

const productoControlador = {
    //6.
    crearProducto: async (req, res) => {
        try {
            const {nombre, precio, stock, categoria_id} = req.body;
            if (!nombre) {
                return res.status(400).json({
                    success: false,
                    message: "El nombre es obligatorio"
                });
            }
            if (!precio || precio <= 0) {
                return res.status(400).json({
                    success: false,
                    message: "El precio debe ser mayor a 0"
                });
            }
            if (!stock || stock < 0) {
                return res.status(400).json({
                    success: false,
                    message: "El stock no puede ser negativo"
                });
            }
            if (!categoria_id) {
                return res.status(400).json({
                    success: false,
                    message: "La categoria es obligatoria"
                });
            }
            const categoriaExistente = await producto.verificarCategoria(categoria_id);
            if (!categoriaExistente) {
                return res.status(404).json({
                    success: false,
                    message: "La categoria especificada no existe"
                });
            }
            const resultado = await producto.crear(nombre, precio, stock, categoria_id);
            const productoNuevo = await producto.obtPorId(resultado.insertId);
            res.status(201).json({
                success: true,
                message: "producto creado exitosamente",
                data: productoNuevo
            });
        } catch (error) {
            console.error("error en crearProducto:", error);
            res.status(500).json({
                success: false,
                message: "Error al crear el producto",
                error: error.message
            });
        }
    },
    //7.
    obtTodosLosProductos: async (req, res) => {
        try {
            const productos = await producto.obtTodos();
            res.status(200).json({
                success: true,
                message: "productos obtenidos exitosamente",
                count: productos.length,
                data: productos
            });
        } catch (error) {
            console.error("Error en obtenerTodosLosProductos... :", error);
            res.status(500).json({
                success: false,
                message: "error al obtener los productos",
                error: error.message
            });
        }
    },
    //8.
     obtProductoPorId: async (req, res) => {
        try {
            const {id} = req.params;
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: "el id es invalido"
                });
            }
            const productoEncontrado = await producto.obtPorId(id);
            if (!productoEncontrado) {
                return res.status(404).json({
                    success: false,
                    message: "producto no encontrado"
                });
            }
            res.status(200).json({
                success: true,
                message: "producto obtenido exitosamente",
                data: productoEncontrado
            });
        } catch (error) {
            console.error("Error en obtenerProductoPorId...:", error);
            res.status(500).json({
                success: false,
                message: "error al obtener el producto",
                error: error.message
            });
        }
    },
    //9.
     actualizarProducto: async (req, res) => {
        try {
            const {id} = req.params;
            const {nombre, precio, stock, categoria_id} = req.body;
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: "El id es invalido"
                });
            }
            if (!nombre) {
                return res.status(400).json({
                    success: false,
                    message: "El nombre es obligatorio"
                });
            }
            if (!precio || precio <= 0) {
                return res.status(400).json({
                    success: false,
                    message: "El precio debe ser mayor a 0"
                });
            }
            if (!stock || stock < 0) {
                return res.status(400).json({
                    success: false,
                    message: "El stock no puede ser negativo"
                });
            }
            if (!categoria_id) {
                return res.status(400).json({
                    success: false,
                    message: "La categoría es obligatoria"
                });
            }
            const productoExistente = await producto.obtPorId(id);
            if (!productoExistente) {
                return res.status(404).json({
                    success: false,
                    message: "Producto no encontrado"
                });
            }
            //verificamos que la categoria exista
            const categoriaExiste = await producto.verificarCategoria(categoria_id);
            if (!categoriaExiste) {
                return res.status(404).json({
                    success: false,
                    message: "La categoría especificada no existe"
                });
            }
            const resultado = await producto.actualizar(id, nombre, precio, stock, categoria_id);
            const productoActualizado = await producto.obtPorId(id);
            res.status(200).json({
                success: true,
                message: "producto actualizado exitosamente",
                data: productoActualizado
            });
        } catch (error) {
            console.error("Error en actualizarProducto:", error);
            res.status(500).json({
                success: false,
                message: "error al actualizar el producto",
                error: error.message
            });
        }
    },
    //10.
    actualizarStockProducto: async (req, res) => {
        try {
            const {id} = req.params;
            const {cantidad} = req.body;
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: "El id es invalido"
                });
            }
            if (cantidad === null) {
                return res.status(400).json({
                    success: false,
                    message: "La cantidad es obligatoria"
                });
            }
            const productoExistente = await producto.obtPorId(id);
            if (!productoExistente) {
                return res.status(404).json({
                    success: false,
                    message: "Producto no encontrado"
                });
            }
            //suma
            const nuevoStock = productoExistente.stock + cantidad;
            if (nuevoStock < 0) {
                return res.status(400).json({
                    success: false,
                    message: `No hay suficiente stock`
                });
            }
            const resultado = await producto.actualizarStock(id, cantidad);
            const productoActualizado = await producto.obtPorId(id);
            res.status(200).json({
                success: true,
                message: "producto actualizado correctamente",
                data: {
                    producto: productoActualizado,
                    verificacion: {
                        tipoOperacion: cantidad > 0? "Incrementa": cantidad < 0? "Decrementa": "No se hizo ninguna operacion",
                        cantidad: cantidad,
                        stock_anterior: productoExistente.stock,
                        stock_actual: productoActualizado.stock,
                        diferencia: cantidad
                    }
                }
            });  
        } catch (error) {
            console.error("Error en actualizarStock... :", error);
            res.status(500).json({
                success: false,
                message: "error al actualizar el stock",
                error: error.message
            });
        }
    }
};

export default productoControlador;