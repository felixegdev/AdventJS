function findNaughtyStep(original, modified) {
  //We generate a variable to now how far we need to iterate.
  let minLength;

  //Depending which string array is longer, we get the longest length.
  if (original.length > modified.length) {
    minLength = original.length;
  }else{
    minLength = modified.length;
  }

  //we iterate as far as the biggest string array.
  for (let i = 0; i < minLength; i++) {
    //if the characters on the string arrays are different, we get the diferent char.
    if (original[i] !== modified[i]) {
      //the longest string array will have the diferent char, so that will be the one that we return.
      if (original.length < modified.length) {
        return modified[i];
      } else if (original.length > modified.length) {
        return original[i];
      }
    }
  }
  //If there are no diferences in the arrays, then we return blank.
  return '';
}

// Ejemplos de uso
const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''
