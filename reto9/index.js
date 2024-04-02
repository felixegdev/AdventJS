function adjustLights(lights) {
  //we generate the object that we will use later to alternate the colors. 
  let opposite = {
    '🔴' : '🟢',
    '🟢' : '🔴'
  }

  let count = 0;
  for(let i = lights.length; i>0; i--){
    //we verify that the actual light is the same as the previous one. 
    //If it is the same, that means it is wrong and we need to change it, adding one to the count and changing the colors with the object previously created.
    if(lights[i] === lights[i-1]){
      lights[i-1] = opposite[lights[i-1]]
      count++
    }
  }
  return count;
}

// Ejemplos de uso
console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])); // 1
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])); // 1
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])); // 2
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])); // 0
console.log(adjustLights(['🔴', '🔴', '🔴'])); // 1
