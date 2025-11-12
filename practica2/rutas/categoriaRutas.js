import express from "express";
import categoriaControlador from "../controladores/categoriaControlador.js";

const rutas = express.Router();
//1.
rutas.post(`/`,categoriaControlador.crearCategoria);
//2.
rutas.get(`/`,categoriaControlador.obtTodasLasCategorias);
//3.
rutas.get(`/:id`,categoriaControlador.obtCategoriasPorId);
//4.
rutas.put(`/:id`,categoriaControlador.actualizarCategorias);
//5.
rutas.delete(`/:id`,categoriaControlador.eliminarCategoria);

export default rutas;

