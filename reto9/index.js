function decode(message) {

  //we create an array that will store the result as we are creating it.
  const stack = [];

  //we create an array that will be the expected result.
  let result = '';

  //we iterate the message to go char by char.
  for (const char of message) {
    //if the char is a '(' that means that all the chars that we have stored in resultwe need to move them into the stack array.
    if (char === '(') {
      //we push all we have stored in stack result into stack.
      stack.push(result);
      //here we need to restart the result array to start storing the new part of the encrypted message.
      result = '';
    } else if (char === ')') {
      //with the char ')' that means that the encrypted part has ended, and all the chars we have in the 
      //result array needs to be reversed. 
      result = stack.pop() + result.split('').reverse().join('');
    } else {
      //if we have no parenthesis, we store the chars into the result waiting either way to finish the message, or for the next parenthesis.
      result += char;
    }
  }
  //after the loop, we have the whole message decrypted into the array result, that is what we are returning.
  return result;
}

// Ejemplos de uso
const a = decode('hola (odnum)');
console.log(a); // hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus
