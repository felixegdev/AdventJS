function organizeChristmasDinner(dishes) {
  // Creamos un objeto para almacenar los platos por ingredientes
  const ingredientes = {};

  // Iteramos sobre cada plato en la lista de platos
  for (const dish of dishes) {
    // Extraemos el nombre del plato
    const nombrePlato = dish[0];
    
    // Iteramos sobre los ingredientes a partir del segundo elemento del plato
    for (let i = 1; i < dish.length; i++) {
      const ingrediente = dish[i]; // Extraemos el nombre del ingrediente
      
      // Si el ingrediente aún no está en el objeto de ingredientes, lo inicializamos como un array vacío
      if (!ingredientes[ingrediente]) {
        ingredientes[ingrediente] = [];
      }
      
      // Agregamos el plato al array de platos asociado al ingrediente
      ingredientes[ingrediente].push(nombrePlato);
    }
  }
  
  // Filtramos los ingredientes que tienen al menos 2 platos asociados
  const ingredientesRepetidos = Object.entries(ingredientes).filter(([ingrediente, platos]) => platos.length >= 2);
  
  // Ordenamos alfabéticamente los ingredientes repetidos
  ingredientesRepetidos.sort(([ingredienteA], [ingredienteB]) => ingredienteA.localeCompare(ingredienteB));
  
  // Creamos el resultado final
  const resultado = ingredientesRepetidos.map(([ingrediente, platos]) => [ingrediente, ...platos.sort()]);
  
  return resultado;
}

// Ejemplo de uso
const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
];

console.log(organizeChristmasDinner(dishes));
