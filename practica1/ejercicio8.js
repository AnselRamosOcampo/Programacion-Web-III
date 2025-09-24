//Realizar un código para ejecutar una función callback después 2 segundos.
const miFuncion = () => {
    console.log("Hola mUndo, despues de 2 segundos");
}
setTimeout(() => {
    miFuncion();
},2000);