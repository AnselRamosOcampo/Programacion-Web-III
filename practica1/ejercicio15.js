//Proporcione un ejemplo para convertir un callback en una promesa.
//callback
const saludarCallback = (nombre, callback) => {
    setTimeout(() => callback(`Hola ${nombre}`), 300);
};
//conversion
const saludarPromise = (nombre) => new Promise(resolve => {
    saludarCallback(nombre, resolve);
});
saludarPromise('Ana').then(mensaje => console.log(mensaje));