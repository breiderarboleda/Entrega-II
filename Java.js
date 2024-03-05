let Array1 = [];
let Array2 = [];
let Array3 = [];
let Array4 = [];

const llenarArreglo = (arreglo, valores) => {
    valores.forEach(valor => arreglo.push(valor));
};

llenarArreglo(Array1, [1, 2, 3, 4, 5]);
llenarArreglo(Array2, [6, 7, 8, 9, 10]);
llenarArreglo(Array3, [11, 12, 13, 14, 15]);
llenarArreglo(Array4, [16, 17, 18, 19, 20]);

console.log("Arreglo 1: ", Array1);
console.log("Arreglo 2: ", Array2);
console.log("Arreglo 3: ", Array3);
console.log("Arreglo 4: ", Array4);

console.log("");

let sumReduce = Array1.reduce((acumulador, valor) => { 
    return acumulador + valor;
});

let parFilter = Array2.filter(valor => { 
    return valor % 2 === 0;
})

let dupMap = Array3.map(valor => { 
    return valor * 2;
})


console.log("Resultado de sumar todos los elementos del arreglo 1:", sumReduce);
console.log("Arreglo 2 con los números pares:", parFilter);
console.log("Arreglo 3 con todos sus elementos duplicados:", dupMap);

console.log("Imprimir cada elemento del arreglo 4:");

let imprimirForEach = Array4.forEach(valor => { 
    console.log(valor);
})
