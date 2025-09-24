//Crear una función que invierta el orden de las palabras en una frase.
const invertirFrase = (cad) => {
    let resultado = "";
    for (let i=cad.length-1; i>=0 ; i--) {
        resultado = resultado + cad[i];
    }
    return resultado; //La funcion .trim sirve para eliminar los espacion en blanco al inicio y al final de una cadena, asi que es opcional por el momento
};
console.log(invertirFrase("abcde"));
console.log(invertirFrase("tenet"));
