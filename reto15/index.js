function autonomousDrive(store, movements) {

  //we generate an object that allows us to determine the horizontal movement Right and Left.
  //We generate an object that allows us to determine the vertical movement Up and Down
  const movsRL = {'R': 1, 'L': -1, 'U':0, 'D': 0};
  const movsUD = {'R': 0, 'L': 0, 'U':-1, 'D': 1};

  //we create the variable grid that will tell us the actual state of the store. 
  let grid = store; 

  //we create variable row and column that will be the actuals robot position. We start it at 0 to start at the beginning.
  let row = 0;
  let column = 0;

  //we iterate through the rows of the store.
  for(row = 0; row < grid.length; row++){
    //we look for the actual position of the robot in the column
    column = grid[row].indexOf('!');
    //if the robots is not in the actual column, break.
    if(column > -1){
      break;
    }
  }

  //once we have the robots position, we replace to indicate that the robot has been there.
  grid[row] = grid[row].replace('!', '.');

  //we iterate the movement of the robot.
  for(let movement of movements){
    //we need to relocate the new position of the robot adding the movement of the robot.
    let r = row + movsUD[movement];
    let c = column + movsRL[movement];
    
    //we check if the position is valid and not blocked by *.
    if(grid[r] && c < grid[r].length && grid[r][c] != '*'){
      //if its valid, then we change new position.
      [row, column] = [r, c];
    }
  }

  //we divide the row, so we can modify.
  //we modify the new position
  //we add the modify row.
  grid[row] = grid[row].split('');
  grid[row][column] = '!';
  grid[row] = grid[row].join('');

  //we return the position of the robot.
  return grid
}

const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']

const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/


const store2 = ['***', '.!.', '***']
const movements2 = ['D', 'U', 'R', 'R', 'R']

const result2 = autonomousDrive(store2, movements2)
console.log(result2)
/*
[
  "***",
  "..!",
  "***"
]
*/


const store3 = ['*..!..*', '*.....*']
const movements3 = ['R', 'R', 'D', 'D']

const result3 = autonomousDrive(store3, movements3)
console.log(result3)
/*
[
  "*.....*",
  "*....!*"
]
*/


const store4 = ['***', '.!.', '***']
const movements4 = ['D', 'U', 'R', 'R', 'R']

const result4 = autonomousDrive(store4, movements4)
console.log(result4)
/*
[
  "***",
  "..!",
  "***"
]
*/




// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.