//Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await haciendo el código más limpio y mantenible.
//lo mismo pero con las operaciones aritmeticas
const sumar = (a, b) => Promise.resolve(a + b);
const multiplicar = (a, b) => Promise.resolve(a * b);
const restar = (a, b) => Promise.resolve(a - b);
const dividir = (a, b) => Promise.resolve(a / b);
const calcularOperacionCompleja = async (a, b, c, d) => {
    try {
        const suma = await sumar(a, b);
        console.log(`Resultado 1: ${a} + ${b} = ${suma}`);
        
        const producto = await multiplicar(suma, c);
        console.log(`Resultado 2: ${suma} * ${c} = ${producto}`);
        
        const resta = await restar(producto, d);
        console.log(`Resultado 3: ${producto} - ${d} = ${resta}`);
        
        const resultado = await dividir(resta, 2);
        console.log(`Resultado 4: ${resta} ÷ 2 = ${resultado}`);
        
        console.log('Resultado final:', resultado);
        return resultado;
        
    } catch (error) {
        console.error('Error en cálculo:', error);
    }
};
calcularOperacionCompleja(5, 3, 4, 6); // ((5+3)*4-6)/2 = 13