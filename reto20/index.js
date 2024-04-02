/**
 * @param {number[][]} weights - Matriz de números representando la cantidad de juguetes en el trineo.
 * @return {number[][]} - Matriz con el mismo tamaño y número de elementos pero donde cada elemento es el promedio de su valor original y los valores de sus vecinos.
 */
function distributeGifts(weights) {
  const res = []; // Matriz de salida
  let topRow = []; // Fila superior inicializada vacía
  let bottomRow = []; // Fila inferior inicializada vacía

  // Iterar sobre cada fila de la matriz de pesos
  for (const [y, weight] of weights.entries()) {
    topRow = weights[y - 1]; // Obtener fila superior
    bottomRow = weights[y + 1]; // Obtener fila inferior
    res[y] = []; // Inicializar fila en la matriz de salida

    // Iterar sobre cada elemento de la fila actual
    for (const [x, w] of weight.entries()) {
      // Obtener valores de los vecinos (arriba, abajo, izquierda, derecha)
      let top = topRow?.[x], bottom = bottomRow?.[x];
      let left = weight?.[x - 1], right = weight?.[x + 1];

      // Calcular el divisor (número de vecinos válidos)
      const divisor = !!w + !!top + !!bottom + !!left + !!right;

      // Inicializar valores nulos en caso de que no existan vecinos
      top ??= 0;
      bottom ??= 0;
      left ??= 0;
      right ??= 0;

      // Calcular nuevo valor promediando los valores de la celda actual y sus vecinos
      const newValue = Math.round((w + top + bottom + left + right) / divisor);

      // Almacenar el nuevo valor en la posición correspondiente de la matriz de salida
      res[y][x] = newValue;
    }
  }
  
  // Devolver la matriz de salida
  return res;
}


const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

console.log(distributeGifts(input));

// Resultado paso a paso de los primeros cálculos:

// En la posición [0][0] tenemos el valor 4
// Sus vecinos son los valores 5 y 6
// (4 + 5 + 6) / 3 = 5

// En la posición [0][1] tenemos el valor 5
// Sus vecinos son los valores 4 y 1
// (5 + 4 + 1) / 3 = 3.33
// Math.round(3.33) = 3

// En la posición [0][2] tenemos el valor 1
// Sus vecinos son los valores 5 y 3
// (1 + 5 + 3) / 3 = 3

// En la posición [1][0] tenemos el valor 6
// Sus vecinos son los valores 4, 8
// (6 + 4 + 8 ) / 3 = 6

// En la posición [1][1] tenemos el valor null
// Sus vecinos son los valores 5, 6 y 3
// (5 + 6 + 3) / 3 = 4.66
// Math.round(4.66) = 5
// ... y así con el resto de posiciones
/*[
  [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],
  [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],
  [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]
]*/

// Resultado final tras redondear con Math.round()
/*[
  [5, 3, 3],
  [6, 5, 3],
  [7, 6, 4]
]*/
