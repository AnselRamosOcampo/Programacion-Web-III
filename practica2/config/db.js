import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "mi_tienda",
    waitForConnections: true,
    connectionLimit: 10, //Limite de conexiones simultaneas
    queueLimit: 0
});

//Funcion para probar la conexion
export const testConnection = async () => {
    try {
        const connection = await db.getConnection();
        console.log(`Conectado a la base de datos`);
        connection.release(); //importante: liberar la conexion 
        return true;
    } catch (error) {
        console.log(`Error conectando a la base de datos`, error.message);
        return false;
    }
};