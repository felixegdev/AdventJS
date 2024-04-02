function travelDistance(map) {
  // Convertir el mapa en un array de filas
  const rows = map.trim().split('\n');
  
  // Encontrar la posición de Santa Claus (S) y las posiciones de los niños (1 al 9)
  let santaPosition, childrenPositions = [];
  for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < rows[y].length; x++) {
          const cell = rows[y][x];
          if (cell === 'S') {
              santaPosition = { x, y };
          } else if (/[1-9]/.test(cell)) {
              const childNumber = parseInt(cell);
              childrenPositions[childNumber] = { x, y };
          }
      }
  }
  
  // Calcular la distancia total
  let totalDistance = 0;
  for (let i = 1; i < childrenPositions.length; i++) {
      const childPosition = childrenPositions[i];
      const distance = Math.abs(santaPosition.x - childPosition.x) + Math.abs(santaPosition.y - childPosition.y);
      totalDistance += distance;
      santaPosition = childPosition; // Actualizar la posición de Santa Claus
  }
  
  return totalDistance;
}

// Ejemplos de uso:
const map = `.....1....
..S.......
..........
....3.....
......2...`;
console.log(travelDistance(map)); // Salida esperada: 12

const map2 = `..S.1...`;
console.log(travelDistance(map2)); // Salida esperada: 2
