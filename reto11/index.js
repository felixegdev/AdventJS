function getIndexsForPalindrome(word) {

  //we check if each letters equivalent in the other position is the same. 
  const index = word.split('').findIndex((letter,i)=>letter != word.at(-i-1))
  const index2 = word.length-1-index
  //if index = -1 then is a palindrome. 
  if(index == -1) return []
  //if not, we iterate from the letter at position index to its equivalent position. 
  for(let i = index+1; i<index2; i++){
    //we copy the word array so we can manipulate.
    const arr = word.split('')
    //we modify the new array to try to do the palindrome. And then we check in diferent modifications if we have done a palindrome.
    arr[index] = word.at(i)
    arr[i] = word.at(index)
    if(arr.every((l,i)=>l == arr.at(arr.length-1-i))) return [index,i]

    arr[index] = word.at(index)
    arr[i] = word.at(index2)
    arr[index2] = word.at(i)
    if(arr.every((l,i)=>l == arr.at(arr.length-1-i))) return [index+i,index2]

  }
  //If we havent found any palindrome then we return null. 
  return null
}

getIndexsForPalindrome('anna') // []
console.log(getIndexsForPalindrome('anna'))

getIndexsForPalindrome('abab') // [0, 1]
console.log(getIndexsForPalindrome('abab'))

getIndexsForPalindrome('abac') // null
console.log(getIndexsForPalindrome('abac'))

getIndexsForPalindrome('aaaaaaaa') // []
console.log(getIndexsForPalindrome('aaaaaaaa'))

getIndexsForPalindrome('aaababa') // [1, 3]
console.log(getIndexsForPalindrome('aaababa'))

getIndexsForPalindrome('caababa') // null
console.log(getIndexsForPalindrome('caababa'))