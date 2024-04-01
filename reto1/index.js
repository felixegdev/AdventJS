const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

function findFirstRepeated(gifts) {
    // Code here
    const seen = {};
    //we create an array that will store the numbers in order of reading.
  
    for (let i = 0; i < gifts.length; i++) {
        const num = gifts[i];
        //here we create the const with the number´s in turn.

        //If the number exists already in the array that we created, means the number is duplicated, so we return that number already.
        //else the number doesn´t exists, so we keep going with the loop.
        if (seen[num]) {
          return num;
        } else {
          seen[num] = true;
        }
    }
  
  //If we didn´t find any duplicated number, we return -1. 
  return -1;
  }
  