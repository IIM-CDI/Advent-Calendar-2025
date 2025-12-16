type Factory = string[]
type Result2 = 'completed' | 'broken' | 'loop'
      
function runFactory(factory: Factory): Result2 {
  // Direction mappings
  const directions: { [key: string]: [number, number] } = {
    '>': [0, 1],   // right
    '<': [0, -1],  // left
    'v': [1, 0],   // down
    '^': [-1, 0]   // up
  }
  
  // Track visited positions with their directions to detect loops
  const visited = new Set<string>()
  
  let row = 0
  let col = 0
  
  while (true) {
    // Check if we're outside the board
    if (row < 0 || row >= factory.length || col < 0 || col >= factory[0].length) {
      return 'broken'
    }
    
    const currentCell = factory[row][col]
    
    // Check if we reached the exit
    if (currentCell === '.') {
      return 'completed'
    }
    
    // Create a unique key for current position and direction
    const positionKey = `${row},${col},${currentCell}`
    
    // Check if we've been in this exact state before (loop detection)
    if (visited.has(positionKey)) {
      return 'loop'
    }
    
    visited.add(positionKey)
    
    // Get the direction and move
    const direction = directions[currentCell]
    if (direction) {
      row += direction[0]
      col += direction[1]
    } else {
      // If we encounter an unknown symbol (shouldn't happen based on problem)
      return 'broken'
    }
  }
}