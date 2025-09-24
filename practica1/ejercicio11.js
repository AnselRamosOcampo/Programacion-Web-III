//Proporcione un ejemplo concreto de encadenamiento de promesas.
const sumar = (a,b) => Promise.resolve(a+b);
const multiplicar = (a,b) => Promise.resolve(a*b);
const restar = (a,b) => Promise.resolve(a-b);
sumar(5,3).then(resultado => multiplicar(resultado, 2))
.then(resultado => restar(resultado, 4))
.then(resultado => {
    console.log('Resultado: ', resultado); 
});