function transformTree(tree) {
  // Función recursiva para construir el árbol
  function buildTree(index) {
    // Si el índice está fuera de los límites del tree o el valor es null, retornamos null
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    // Creamos el nodo actual
    const node = {
      value: tree[index],
      left: buildTree(2 * index + 1), // Calculamos el índice del hijo izquierdo
      right: buildTree(2 * index + 2) // Calculamos el índice del hijo derecho
    };

    return node;
  }

  // Construimos el árbol a partir del nodo raíz en el índice 0
  return buildTree(0);
}

// Ejemplo de uso
const array = [3, 1, 0, 8, 12, null, 1];
const tree = transformTree(array);
console.log(tree);
