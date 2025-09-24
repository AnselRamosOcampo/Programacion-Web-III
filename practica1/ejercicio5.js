//Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés).
const palindromo = (cad) => {
    let cad2 = ""; let tam = cad.length;
    for (let i=0; i<cad.length; i++) {
        if (cad[i] !== " ")
        {
            cad2 = cad2 + cad[i].toLowerCase(); //sirve para tomar en cuenta a las cadenas que tienen espacios
        }
    }
    for (let i=0; i<tam/2; i++) {
        if (cad2[i] !== cad2[tam-1-i])
        {
            return false;
        }
    }
    return true;
};
let res = palindromo("Oruro");
console.log(res);
let res2 = palindromo("hola mundo");
console.log(res2);
let res3 = palindromo("tenet");
console.log(res3);