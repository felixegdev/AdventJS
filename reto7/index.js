function drawGift(size, symbol) {

  //if the size of the gift is 1, is only going to be a #.
  if (size === 1) return '#\n'

  let gift = ''
  const maxLength = size * 2 - 1
  const upperBorder = ' '.repeat(maxLength - size) + '#'.repeat(size)
  let upperPlane = ''
  const middleBorder = '#'.repeat(size) + symbol.repeat(size - 2) + '#'
  let lowerPlane = ''
  const lowerBorder = '#'.repeat(size)

  for(let i = 1, j = size - 2; i <= size - 2; i++, j--) {
    const repBlanks = ' '.repeat(maxLength - size - i)
    const edge1 = '#'
    const leftRepSymbol = symbol.repeat(size - 2)
    const edge2 = '#'
    const upperRightRepSymbol = symbol.repeat(i - 1)
    const lowerRightRepSymbol = symbol.repeat(j - 1)
    const edge3 = '#\n'
    const currentLine = repBlanks + edge1 + leftRepSymbol + edge2
    upperPlane += currentLine + upperRightRepSymbol + edge3
    lowerPlane += currentLine.trim() + lowerRightRepSymbol + edge3
  }

  gift += upperBorder + '\n'
  gift += upperPlane
  gift += middleBorder + '\n'
  gift += lowerPlane
  gift += lowerBorder + '\n'

  return gift
}
// Ejemplos de uso
console.log("Dibujo 1:\n", drawGift(4, '+'));
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log("Dibujo 2:\n",drawGift(5, '*'));
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log("Dibujo 3:\n",drawGift(1, '^'));
/*
#
*/