function manufacture(gifts, materials) {
  //Generate an array where we will store the gifts that are craftable.
  const result = [];

  //First we iterate the gift array so we can examinate each gift. 
  for (const gift of gifts) {
    const giftChars = new Set(gift);
    //We generate a constant where we add the chars of the gift.

    let canManufacture = true;
    //A boolean that will tell us if is craftable or not.

    //we iterate the chars of the gift. 
    for (const char of giftChars) {

      //if the char is not in the materials chars, we break the loop, and the object is not craftable.
      if (!materials.includes(char)) {
        canManufacture = false;
        break;
      }
    }
    //if the gift is craftable, we insert it inside the result arrray. 
    if (canManufacture) {
      result.push(gift);
    }
  }

  return result;
}

const gifts1 = ['tren', 'oso', 'pelota'];
const materials1 = 'tronesa';
console.log(manufacture(gifts1, materials1)); // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';
console.log(manufacture(gifts2, materials2)); // ["puzzle"]

const gifts3 = ['libro', 'ps5'];
const materials3 = 'psli';
console.log(manufacture(gifts3, materials3)); // []
