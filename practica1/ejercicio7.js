//Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros elementos de un arreglo, mediante desestructuración.
const array = [1,12,45,89,5];
const [a,b,...c] = array;
console.log(c);