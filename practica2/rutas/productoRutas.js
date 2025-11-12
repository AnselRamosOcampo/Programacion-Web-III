import express from 'express';
import productoControlador from '../controladores/productoControlador.js';
import producto from '../modelos/productoModelo.js';

const rutas = express.Router();
//6.
rutas.post('/', productoControlador.crearProducto);
//7.
rutas.get('/', productoControlador.obtTodosLosProductos);
//8.
rutas.get(`/:id`, productoControlador.obtProductoPorId);
//9.
rutas.put(`/:id`, productoControlador.actualizarProducto);
//10.
rutas.patch(`/:id/stock`, productoControlador.actualizarStockProducto);

export default rutas;