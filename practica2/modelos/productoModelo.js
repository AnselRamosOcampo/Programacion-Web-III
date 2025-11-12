import { db } from '../config/db.js';

const producto = {
    //6.
    crear: async (nombre, precio, stock, categoria_id) => {
        try {
            const [resultado] = await db.execute('INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)'
                , [nombre, precio, stock, categoria_id]);
            return resultado;
        } catch (error) {
            throw new Error(`error creando producto: ${error.message}`);
        }
    },
    verificarCategoria: async (categoriaID) => {
        try {
            const [rows] = await db.execute('SELECT id FROM categorias WHERE id = ?', [categoriaID]);
            return rows.length > 0;
        } catch (error) {
            throw new Error(`error verificando categoria: ${error.message}`);
        }
    },
    //para obtener producto por ID
    obtPorId: async (id) => {
        try {
            const [rows] = await db.execute(`SELECT p.*, c.nombre as categoria_nombre FROM productos p
                 JOIN categorias c ON p.categoria_id = c.id WHERE p.id = ?`, [id]);
            return rows[0];
        } catch (error) {
            throw new Error(`Error obteniendo producto: ${error.message}`);
        }
    },
    //7.
    obtTodos: async () => {
        try {
            const [rows] = await db.execute(
                `SELECT 
                    p.id,
                    p.nombre,
                    p.precio,
                    p.stock,
                    p.categoria_id,
                    c.nombre as categoria_nombre,
                    p.fecha_alta,
                    p.fecha_act
                 FROM productos p
                 JOIN categorias c ON p.categoria_id = c.id
                 ORDER BY p.fecha_alta DESC`);
            return rows;
        } catch (error) {
            throw new Error(`Error obteniendo productos: ${error.message}`);
        }
    },
    //8.
    obtPorId: async (id) => {
        try {
            const [rows] = await db.execute(
                `SELECT 
                    p.id,
                    p.nombre,
                    p.precio,
                    p.stock,
                    p.categoria_id,
                    c.nombre as categoria_nombre,
                    c.descripcion as categoria_descripcion,
                    p.fecha_alta,
                    p.fecha_act
                 FROM productos p
                 JOIN categorias c ON p.categoria_id = c.id
                 WHERE p.id = ?`, [id]);
            return rows[0]; //para que devuelva el primero que encuentre
        } catch (error) {
            throw new Error(`Error obteniendo producto: ${error.message}`);
        }
    },
    //9.
    actualizar: async (id, nombre, precio, stock, categoriaID) => {
        try {
            const [resultado] = await db.execute(
                `UPDATE productos 
                 SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = CURRENT_TIMESTAMP 
                 WHERE id = ?`, [nombre, precio, stock, categoriaID, id]);
            return resultado;
        } catch (error) {
            throw new Error(`Error actualizando producto: ${error.message}`);
        }
    },
    //10.
    actualizarStock: async (id, cantidad) => {
        try {
            const [resultado] = await db.execute(
                `UPDATE productos 
                 SET stock = stock + ?, fecha_act = CURRENT_TIMESTAMP 
                 WHERE id = ?`, [cantidad, id]);
            return resultado;
        } catch (error) {
            throw new Error(`Error actualizando stock: ${error.message}`);
        }
    }
};

export default producto;