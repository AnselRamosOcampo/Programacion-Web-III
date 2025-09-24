//Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares
const separarParesImpares = (num) => {
    const resultado = {
        par: [], impar: []
    };
    let j=0; let k=0;
    for (i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            resultado.par[j] = num[i];
            j++;
        } else {
            resultado.impar[k] = num[i];
            k++;
        }
    }
    return resultado;
};
let obj = separarParesImpares([3, 2, 8, 12, 25]);
console.log(obj); 