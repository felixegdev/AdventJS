function compile(code) {
  // Definimos un objeto que asigna valores numéricos a cada operador del lenguaje Elfiano
  const operador = {
    '+': 1,  // Incrementa en 1 el contador
    '-': -1, // Decrementa en 1 el contador
    '?': 0,  // Inicia un bloque condicional
    '¿': 0,  // Inicia un bloque condicional
    '%': 0,  // Marca un punto de retorno
    '<': 0,  // Vuelve atrás a la última instrucción con el símbolo % que se haya visto
  };

  // Inicializamos variables para almacenar el resultado, el punto de retorno y la condición de bloque condicional
  let result = 0,
      retorno = null,
      cond = 0;

  // Iteramos sobre cada carácter del código de instrucciones
  for (let i = 0; i < code.length; i++) {
    // Verificamos si el carácter actual indica la presencia de un bloque condicional
    // y si la condición para ejecutarlo es verdadera
    cond = ((code[i] == '¿') + (result <= 0)) > 1;

    // Si se cumple la condición del bloque condicional, saltamos al carácter después del bloque condicional
    i = i + (code.indexOf('?') * cond) - (i * cond);

    // Manejamos la instrucción de punto de retorno (%)
    if (code[i] == '%') {
      retorno = i + 1; // Actualizamos el punto de retorno
    }

    // Manejamos la instrucción de retroceso (<)
    if (code[i] == '<') {
      retorno ||= i; // Si retorno es null, asignamos i como valor de retorno
      i = retorno;   // Actualizamos el índice para apuntar al siguiente carácter al de retorno
      retorno = null; // Reseteamos el punto de retorno
    }

    // Actualizamos el valor del operador multiplicativo (*) para reflejar el valor actual de result
    operador['*'] = result;

    // Actualizamos el valor de result sumando el valor correspondiente del operador actual
    result += operador[code.at(i)];
  }

  // Devolvemos el valor final de result
  return result;
}


// Ejemplos de uso
console.log(compile('++*-')); // 3
console.log(compile('++%++<')); // 6
console.log(compile('++<--')); // 0
console.log(compile('++¿+?')); // 3
console.log(compile('--¿+++?')); // -2
console.log(compile('%¿+++?+<+¿++--+?')); // 7
