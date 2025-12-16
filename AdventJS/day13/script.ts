type Factory = string[]
type Result2 = 'completed' | 'broken' | 'loop'
      
function runFactory(factory: Factory): Result2 {
  const directions: { [key: string]: [number, number] } = {
    '>': [0, 1],
    '<': [0, -1],
    'v': [1, 0],
    '^': [-1, 0]
  }
  
  const visited = new Set<string>()
  
  let row = 0
  let col = 0
  
  while (true) {
    if (row < 0 || row >= factory.length || col < 0 || col >= factory[0].length) {
      return 'broken'
    }
    
    const currentCell = factory[row][col]
    
    if (currentCell === '.') {
      return 'completed'
    }
    
    const positionKey = `${row},${col},${currentCell}`
    
    if (visited.has(positionKey)) {
      return 'loop'
    }
    
    visited.add(positionKey)
    
    const direction = directions[currentCell]
    if (direction) {
      row += direction[0]
      col += direction[1]
    } else {
      return 'broken'
    }
  }
}