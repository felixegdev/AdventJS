function maxDistance(movements) {
  let maxDistance = 0;
  let currentPosition = 0;
  let stack = 0 ;
  
  //we start the loop to determine the movement. 
  movements.split('').forEach(move => {
      //if the character is '>' we move forward (meaning we add a step in currentPosition.)
      //if the character is '<' we move backwards (meaning we substract a step in currentPosition.)
      //if the character is '*' we stack in the variable stack to later on add to the result of currentposition.
      if (move === '>') {
          currentPosition++;
      } else if (move === '<') {
          currentPosition--;
      } else if (move === '*') {
          stack++;
      }

      // Update maxDistance with the absolute value of currentPosition
      maxDistance = (Math.abs(currentPosition) + stack);
  });
  
  return maxDistance;
}

// Ejemplos de uso
const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5

const movements4 = '*><<<';
const result4 = maxDistance(movements4);
console.log(result4); 
