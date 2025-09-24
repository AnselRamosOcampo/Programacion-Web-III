//¿Cuando es conveniente utilizar un callback, y cuando es necesario utilizar una promesa?
/*Un callback puede ser muy util para realizar operaciones sincronas simples, manejar eventos y demas */
setTimeout(() => {
    console.log("Hola mundo") //esto se ejecutara despues de 4 segundos
},4000);
const num = [1,2,3,4,5];
num.forEach((n) => {
    console.log(n); //se ejecutra por cada elemento del arreglo
})
//Ahora para las promesas, es bueno usarlos para operaciones asincronas, realizar tareas en paralelo, tambien para asegurarnos si una promesa puede fallar o tener exito
const miPromesa = new Promise((resolve,reject) => {
    let exito = true;
    if (exito)
    {
        resolve("Se cumplio con exito")
    }
    else
    {
        reject("No se cumplio con exito")        
    }
}); 