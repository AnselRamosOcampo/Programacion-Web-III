import express from "express";
import cors from "cors";
import { testConnection } from "./config/db.js";
import categoriaRutas from "./rutas/categoriaRutas.js";
import productoRutas from "./rutas/productoRutas.js";
import producto from "./modelos/productoModelo.js";

const app = express();
app.use(cors());
app.use(express.json());
testConnection();
app.use(`/api/categorias`, categoriaRutas);
app.use(`/api/productos`, productoRutas);

const puerto = 3001;
app.listen(puerto,
    () => {console.log(`Servidor en http://localhost:${puerto}`);
});