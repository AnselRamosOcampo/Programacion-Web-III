//Proporcione un ejemplo para convertir una promesa en un callback.
// Promesa con múltiples parámetros
const calcularOperacion = (a,b,operacion) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let resultado;
            switch(operacion) {
                case 'suma': resultado = a+b; break;
                case 'resta': resultado = a-b; break;
                case 'multiplicacion': resultado = a*b; break;
                default: resultado = a/b;
            }
            resolve(resultado);
        }, 500);
    });
};
//conversion
const calcularOperacionCallback = (a,b,operacion,callback) => {
    calcularOperacion(a,b,operacion)
        .then(resultado => callback(null,resultado))
        .catch(error => callback(error,null));
};
calcularOperacionCallback(10,5,'suma',(error,resultado) => {
    if (error) {
        console.error(error);
    } else {
        console.log(resultado); 
    }
});