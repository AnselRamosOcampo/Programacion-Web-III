import categoria from "../modelos/categoriaModelo.js";

const categoriaControlador = {
    //endpoint para crear la categoria
    //1.
    crearCategoria: async (req, res) => {
        try {
            const {nombre, descripcion} = req.body;
            //validamos los datos necesarios
            if (!nombre) {
                return res.status(400).json({success: false, message: "el nombre es obligatorio"});
            }
            
            const resultado = await categoria.crear(nombre, descripcion);
            res.status(201).json({success: true, message: "creado exitosamente",
                data: {
                    id: resultado.insertId,
                    nombre,
                    descripcion
                }
            });
        } catch (error) {
            console.error(`Error en crearCategoria `,error);
            res.status(500).json({success: false, message: "error al crear la categoria", error: error.message});
        }
    },
    //2.
    obtTodasLasCategorias: async (req, res) => {
        try {
            const categorias = await categoria.obtTodas();
            res.status(200).json({
                success: true,
                message: "categorias obtenidas",
                count: categorias.length,
                data: categorias
            });
        } catch (error) {
            console.error("error al obtener las categorias", error);
            res.status(500).json({
                success: false,
                message: "error al obtener las categorias",
                error: error.message
            });
        }
    },
    //3.
    obtCategoriasPorId: async (req, res) => {
        try {
            const {id} = req.params;
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: "id invalido"
                });
            }
            const resultado = await categoria.obtPorId(id);
            //verificamos si existe
            if (!resultado) {
                return res.status(404).json({
                    success: false,
                    message: "categoria no encontrada"
                });
            }
            //sino, obtenemos los productos de esa categoria
            const productos = await categoria.obtProductosPorCategoria(id);
            res.status(200).json({
                success: true,
                message: "productos obetenidos correctamente",
                data: {
                    ...resultado,
                    productos: productos,
                    totalProductos: productos.length
                }
            });
        } catch (error) {
            console.error("error en obtCategorias...", error);
            res.status(500).json({
                succes: false,
                message: "error al obtener la categoria",
                error: error.message
            });
        }
    },
    //4.
    actualizarCategorias: async (req, res) => {
        try {
            const {id} = req.params;
            const {nombre, descripcion} = req.body;

            const categoriaExistente = await categoria.obtPorId(id);
            if (!categoriaExistente) {
                return res.status(404).json({
                    success: false,
                    message: "categoria no encontrada"
                });
            }
            const resultado = await categoria.actualizar(id, nombre, descripcion);
            const categoriaActualizada = await categoria.obtPorId(id);
            res.status(200).json({
                success: true,
                message: "categoria actualizada",
                data: categoriaActualizada
            });
        } catch (error) {
            console.error(`error en actualizarCategorias, `,error);
            res.status(500).json({
                success: false,
                message: "error al actualizar la categoria",
                error: error.message
            });
        }
    },
    //5.
    eliminarCategoria: async (req, res) => {
        try {
            const {id} = req.params;
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: "id invalido"
                });
            }
            const categoriaExistente = await categoria.obtPorId(id);
            if (!categoriaExistente) {
                return res.status(404).json({
                    success: false,
                    message: "categoria no encontrada"
                });
            }
            const productos = await categoria.obtProductosPorCategoria(id);
            const resultado = await categoria.eliminar(id);
            res.status(200).json({
                success: true,
                message: "categoria y productos eliminados respectivamente",
                data: {
                    categoriaEliminada: categoriaExistente,
                    productosEliminados: productos.length,
                    detallesProductos: productos
                }
            });
        } catch (error) {
            console.error("error en eliminarCategoria:",error);
            res.status(500).json({
                success: false,
                message: "error al eliminar la categoria",
                error: error.message
            });
        }
    }
};

export default categoriaControlador;