function cyberReindeer(road, time) {
  const roadArray = road.split('');
  const result = [road]; // Agregamos el estado inicial de la carretera al resultado
  let barrierOpened = false;
  let barrierPosition1 = road.indexOf('|');
  let barrierPosition2 = road.indexOf('|',barrierPosition1 + 1);

  for (let i = 1; i <= time; i++) {
    // Avanzar el trineo una posición a la derecha en cada unidad de tiempo
    const currentPosition = ((i * time) / road.length);

    // Verificar si la barrera debe abrirse después de cierto tiempo
    if (i > 5 && !barrierOpened) {
      roadArray[barrierPosition1] = '*'; // Abrir la barrera
      roadArray[barrierPosition2] = '*'; // Abrir la barrera
      barrierOpened = true; // Marcamos que la barrera está abierta
    }

    // Actualizar el estado del trineo en la carretera
    if(barrierOpened){
      console.log(currentPosition)
      roadArray[currentPosition] = 'S';
    }else{
      console.log(currentPosition,barrierOpened);
      if(roadArray[currentPosition] === '|'){
        console.log("barrera");
      }
    }

    // Agregar el estado actualizado de la carretera al resultado
    result.push(roadArray.join(''));
    console.log(roadArray.join(''));
  }

  return result;
}

// Ejemplo de uso
const road = 'S..|...|..';
const time = 10;
const result = cyberReindeer(road, time);
// console.log(result);
