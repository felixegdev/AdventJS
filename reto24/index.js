function getStaircasePaths(steps, maxJump) {
  const paths = [];
  
  // Función recursiva para generar todas las posibles secuencias de saltos
  function generatePaths(currentPath, remainingSteps) {
    // Si no quedan peldaños, añadimos la secuencia actual a la lista de caminos
    if (remainingSteps === 0) {
      paths.push(currentPath.slice());
      return;
    }

    // Iteramos sobre los posibles saltos, desde 1 hasta el máximo que puede dar un elfo
    for (let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++) {
      // Añadimos el salto actual a la secuencia
      currentPath.push(jump);
      // Llamamos recursivamente a la función con los peldaños restantes
      generatePaths(currentPath, remainingSteps - jump);
      // Retiramos el último salto para probar con el siguiente
      currentPath.pop();
    }
  }
  
  // Llamamos a la función recursiva para generar las secuencias de saltos
  generatePaths([], steps);
  
  return paths;
}

// Ejemplos de uso
console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2)); // [[1, 1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 2, 1], [1, 2, 1, 1], [1, 2, 2], [2, 1, 1, 1], [2, 1, 2], [2, 2, 1]]
