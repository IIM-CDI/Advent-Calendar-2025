function hasFourLights(board: string[][]): boolean {
  
  function checkLine(line: string[]): boolean {
    let consecutiveCount = 0
    let previousColor = "."
    
    for (const cell of line) {
      if (cell === "." || cell !== previousColor) {
        consecutiveCount = cell === "." ? 0 : 1
        previousColor = cell
      } else {
        consecutiveCount++
      }
      
      if (consecutiveCount === 4) return true
    }
    
    return false
  }
  
  for (let i = 0; i < board.length; i++) {
    if (checkLine(board[i])) return true
  }
  
  for (let i = 0; i < board[0].length; i++) {
    const column = board.map(row => row[i])
    if (checkLine(column)) return true
  }
  
  return false
}
