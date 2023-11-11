function getNeighbors(row, col, matrix) {

  let neighbors = [];
  let [ x, y ] = [row, col];
  if(matrix[x-1]){
      if(matrix[x-1][y-1] && matrix[x-1][y-1] === 1) neighbors.push([x-1, y-1])
      if(matrix[x-1][y] && matrix[x-1][y] === 1) neighbors.push([x-1, y])
      if(matrix[x-1][y+1] && matrix[x-1][y+1] === 1) neighbors.push([x-1, y+1])
  }
  if(matrix[x+1]){
      if(matrix[x+1][y-1] && matrix[x+1][y-1] === 1) neighbors.push([x+1, y-1])
      if(matrix[x+1][y] && matrix[x+1][y] === 1) neighbors.push([x+1, y])
      if(matrix[x+1][y+1] && matrix[x+1][y+1] === 1) neighbors.push([x+1, y+1])
  }

  if(matrix[x][y-1] && matrix[x][y-1] === 1) neighbors.push([x, y-1])
  if(matrix[x][y+1] && matrix[x][y+1] === 1) neighbors.push([x, y+1])

  return neighbors;

}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set();

  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
    // If an index contains a 1 and has not been visited,
      if(matrix[i][j] === 1 && !visited.has(String([i, j]))){
        console.log(visited)
      // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        let stack = [[i, j]]
        // Add stringified version of current index to the visited set
        visited.add(String([i, j]));
        // While stack contains elements
        while(stack.length){
          // Pop element from stack
          let curr = stack.pop();

          // Get valid neighbors of current element
          let neighbors = getNeighbors(curr[0], curr[1], matrix);
          // console.log("NEIGHBORS", neighbors)
          // Iterate over neigbors
          for(let i = 0; i < neighbors.length; i++){
            // If neighbor has not been visited
            if(!visited.has(String(neighbors[i]))){
              // Mark neighbor as visited
              visited.add(String(neighbors[i]));
              // Add neighbor to stack
              stack.push(neighbors[i])
            }
          }
        }
      }
    }
  }

  // Return island count
  return count
}

  // Your code here

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
