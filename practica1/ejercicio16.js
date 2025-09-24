//Proporcione un ejemplo para migrar una función con promesas a async/await.
const sumar = (a,b) => Promise.resolve(a+b);
const multiplicar = (a,b) => Promise.resolve(a*b);
const restar = (a,b) => Promise.resolve(a-b);
//promesa
/*const calcular = (a, b) => {
    return sumar(a, b)
        .then(resultado => multiplicar(resultado, 2))
        .then(resultado => restar(resultado, 5));
};*/
//async/await
const calcular = async (a, b) => {
    const suma = await sumar(a, b);
    const multiplicacion = await multiplicar(suma, 2);
    const resultado = await restar(multiplicacion, 5);
    return resultado;
};
calcular(7,9).then(resultado => {
    console.log("resultado: ", resultado);
})