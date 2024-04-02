function optimizeIntervals(intervals) {
  if (intervals.length === 0) {
      return [];
  }

  // Paso 1: Ordenar los intervalos según su hora de inicio
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  // Paso 2: Fusionar los intervalos superpuestos
  for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = result[result.length - 1];

      // Si el intervalo actual comienza después del final del último intervalo fusionado,
      // simplemente lo agregamos a la lista de intervalos fusionados
      if (currentInterval[0] > lastMergedInterval[1]) {
          result.push(currentInterval);
      } else {
          // Si hay superposición, fusionamos los intervalos actualizando el final del último intervalo fusionado
          lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      }
  }

  return result;
}

// Ejemplos de uso
console.log(optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
])); // [[2, 8]]

console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])); // [[1, 6], [8, 10]]

console.log(optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
])); // [[1, 2], [3, 4], [5, 6]]