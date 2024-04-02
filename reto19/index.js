function revealSabotage(store) {
  const rows = store.length;
  const cols = store[0].length;
  const result = [];

  // Iterar sobre cada fila de la matriz
  for (let i = 0; i < rows; i++) {
    const row = [];
    // Iterar sobre cada columna de la fila actual
    for (let j = 0; j < cols; j++) {
      // Si la celda actual contiene un juguete saboteado (*), agregarlo directamente al resultado
      if (store[i][j] === '*') {
        row.push('*');
      } else {
        let count = 0;
        // Contar el número de juguetes saboteados en las celdas adyacentes
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const ni = i + dx;
            const nj = j + dy;
            // Verificar si la celda adyacente está dentro de los límites de la matriz y contiene un juguete saboteado
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && store[ni][nj] === '*') {
              count++;
            }
          }
        }
        // Si no hay juguetes saboteados en las celdas adyacentes, agregar un espacio en blanco en lugar de '0'
        row.push(count === 0 ? ' ' : count.toString());
      }
    }
    // Agregar la fila actual al resultado
    result.push(row);
  }

  return result;
}



const store1 = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
];

console.log(revealSabotage(store1));
/* Debería mostrar:
[
  ['*', '2', '1', '1'],
  ['1', '2', '*', '1'],
  ['1', '2', '1', '1'],
  ['*', '1', ' ', ' ']
]
*/

const store2 = [
  ['*', '*', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', '*', ' ', ' '],
  [' ', '*', '*', '*']
];

console.log(revealSabotage(store2));
/* Debería mostrar:
[
  ['*', '*', '*', '2'],
  ['2', '4', '2', '2'],
  ['2', '*', '3', '3'],
  ['1', '*', '*', '*']
]
*/

const store3 = [
  [' ', ' ', '*', ' ', '*', ' '],
  [' ', ' ', '*', '*', '*', ' '],
  ['*', ' ', ' ', '*', '*', '*'],
  ['*', '*', ' ', '*', '*', '*']
];

console.log(revealSabotage(store3));
/* Debería mostrar:
[
  ['1', '2', '*', '5', '*', '2'],
  ['3', '5', '*', '*', '*', '4'],
  ['*', '6', '5', '*', '*', '*'],
  ['*', '*', '6', '*', '*', '*']
]
*/
