//Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto.
const encontrarMayorMenor = (num) => {
    const resultado = {
        mayor: null, menor: null
    };
    for (let i=0; i<num.length; i++) {
        if (num[i] > resultado.mayor || resultado.mayor === null)
        {
            resultado.mayor = num[i];
        }
        if (num[i] < resultado.menor || resultado.menor === null)
        {
            resultado.menor = num[i];
        }
    };
    return resultado;
}
let obj = encontrarMayorMenor([14,56,23,5,9,2,3]);
console.log(obj);