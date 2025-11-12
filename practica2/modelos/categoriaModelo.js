import {db} from "../config/db.js";

const categoria = {
    //asi obtenemos todas las categorias
    //2.
    obtTodas: async () => {
        try {
            const [rows] = await db.execute(`SELECT * FROM categorias ORDER BY id ASC`);
            return rows;
        } catch (error) {
            throw new Error(`Error al obtener categorias ${error.message}`);
        }
    },
    //1.
    crear: async (nombre, descripcion) => {
        try {
            const [resultado] = await db.execute(`INSERT INTO categorias (nombre, descripcion) VALUES (?,?)`, [nombre, descripcion]);
            return resultado;
        } catch (error) {
            throw new Error(`Error al crear una nueva categoria ${error.message}`);
        }
    },
    //3.
    obtPorId: async (id) => {
        try {
            const [rows] = await db.execute("SELECT * FROM categorias WHERE id = ?", [id]);
            return rows[0]; //para que devuelva solo la categoria encontrada
        } catch (error) {
            throw new Error(`error al obtener la categoria por ID, ${error.message}`);
        }
    },
    obtProductosPorCategoria: async (categoriaID) => {
        try {
            const [rows] = await db.execute("SELECT * FROM productos WHERE categoria_id = ? ORDER BY nombre ASC", [categoriaID]);
            return rows;
        } catch (error) {
            throw new Error(`error al obtener los productos por categoria ${error.message}`);
        }
    },
    //4.
    actualizar: async (id, nombre, descripcion) => {
        try {
            const [resultado] = await db.execute(`UPDATE categorias SET nombre = ?, descripcion = ?, 
                fecha_act = CURRENT_TIMESTAMP WHERE id = ?`, [nombre, descripcion, id]);
            return resultado;
        } catch (error) {
            throw new Error(`error al actualizar la categoria, ${error.message}`);
        }
    },
    //5.
    eliminar: async (id) => {
        try {
            const [resultado] = await db.execute(
                'DELETE FROM categorias WHERE id = ?',[id]);
            return resultado;
        } catch (error) {
            throw new Error(`error eliminando categoria: ${error.message}`);
        }
    }
};

export default categoria;