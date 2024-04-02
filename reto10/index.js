function createChristmasTree (ornaments, height) {
  let value = 0

  const tree = []
 
  //With this for we will set the height of the tree.
  for (let i = 1; i <= height; i++) {
    let line = ''
    //In this for we set the lines of the trees.
    for (let j = 0; j < i; j++) {
      //if the value equals the length of the line, we set the value again to 0 to start a new line.
      if (value === ornaments.length) value = 0
      //Here we set the line of the tree, adding the next value of the "ornament"
      line = line + ornaments[value]
      value++
    }

    tree.push(
      ' '.repeat(height - line.length),
      line.split('').join(' '),
      '\n'
    )
  }

  //here we add the log of the tree with the function padStart, that adds blank spaces as the height of the tree, so it can be in the middle.
  tree.push('|'.padStart(height))
  return tree.join('') + '\n'
}

// Ejemplo de uso
const christmasTree = createChristmasTree('123', 4);
console.log(christmasTree);