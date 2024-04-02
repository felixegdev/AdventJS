function checkIsValidCopy(original, copy){

  //we first check if the copy is same length than the original
  //if its not the same legnth its not a valid copy.
  if(original.length != copy.length) return false;
  
  //We create a string chain and store the characters that the copy can degrade to.
  const deg = '#+:. ';
  
  for(let i = 0; i < original.length; i++){

    //We store the characters of the original and the copy into new const
    const co = original[i];
    const cc = copy[i];

    //We check if the original has a blank space and the copy doesnt, then is not a valid copy.
    if(co === ' ' && cc !== ' ')return false;

    /*here we check different posibilities
    1. if original lower case equals copy lower case, not valid.
    2. if the original is lower case and copy is upper case, not valid.
    3. if the original is lower case and copy´s character not a letter and is not in the degradation string, not valid.
    */
    if(cc !== ' ' &&
       co.toLowerCase() === cc.toLowerCase() &&
       co === co.toLowerCase() &&
       cc === cc.toUpperCase() &&
       !deg.includes(cc) &&
       !/\d/.test(cc) ){
          return false;
    }
    //If original not equal copy in lowecase, and not included in the degradation string, not valid.
    if(co.toLowerCase() !== cc.toLowerCase() && !deg.includes(cc))return false;
    
    //if original degradation is greater than the copy´s degradation, not valid.
    if(deg.includes(co, cc)){
      if(deg.indexOf(co) > deg.indexOf(cc)){
        return false;
      }
    }
  }

  //if everything is valid, then we return true.
  return true;
}

checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
) // true
console.log(checkIsValidCopy('Santa Claus is coming','sa#ta Cl#us i+ comin#'));

checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
) // false (por la p inicial)
console.log(checkIsValidCopy('s#nta Cla#s is coming','p#nt: cla#s #s c+min#'));

checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
console.log(checkIsValidCopy('Santa Claus','s#+:. c:. s'));

checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (hay un # donde no debería)
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s'));