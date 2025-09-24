//Crear una funcion que cuente cuantas veces aparece cada vocal en un texto y devuelva el resultado en un objeto.
const contarVocales = (cad) => {
    const vocales  = [`a`, `e`, `i` ,`o`, `u`];
    const resultado = {a: 0, e: 0, i: 0, o: 0, u: 0};
    cad = cad.toLowerCase();
    for (let i=0; i<cad.length; i++)
    {
        const letra = cad[i];
        if (vocales.includes(letra))
        {
            resultado[letra]++;
        }
    }
    return resultado;
}
let obj = contarVocales("javascript");
console.log(contarVocales("javascript es un buen lenguaje"));