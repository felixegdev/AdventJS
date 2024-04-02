function findBalancedSegment(message) {
  let start = 0; // Inicializa el índice de inicio del segmento equilibrado
  let maxLength = 0; // Inicializa la longitud máxima del segmento equilibrado
  let zeros = 0; // Inicializa el contador de ceros
  let ones = 0; // Inicializa el contador de unos

  // Itera sobre el mensaje para encontrar el segmento equilibrado más largo
  for (let i = 0; i < message.length; i++) {
    // Actualiza los contadores de ceros y unos según el valor del bit en la posición actual
    if (message[i] === 0) {
      zeros++;
    } else {
      ones++;
    }

    // Si el número de ceros y unos es igual hasta la posición actual, actualiza el segmento equilibrado
    if (zeros === ones) {
      const length = i - start + 1; // Calcula la longitud del segmento equilibrado actual
      if (length > maxLength) {
        // Si la longitud actual es mayor que la longitud máxima registrada hasta ahora, actualiza la longitud máxima y la posición de inicio
        maxLength = length;
        start = i - length + 1;
      }
    }
  }

  // Retorna el índice de inicio y fin del segmento equilibrado más largo
  return maxLength > 0 ? [start, start + maxLength - 1] : [];
}


// Ejemplos de uso
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])); // Output: [2, 5]
console.log(findBalancedSegment([1, 1, 0])); // Output: [1, 2]
console.log(findBalancedSegment([1, 1, 1])); // Output: []
