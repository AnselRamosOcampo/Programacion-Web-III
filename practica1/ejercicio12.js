//Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.
const esperar = (ms, dato) => new Promise(resolve => 
    setTimeout(() => resolve(dato), ms)
);
const main = async () => {
    const usuario = await esperar(1000, {nombre: 'Ana'});
    const posts = await esperar(800, ['Post 1','Post 2']);
    const comentarios = await esperar(600, ['👍', '❤️']);  
    console.log({usuario,posts,comentarios});
};
main();