type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

function moveReno(board: Board, moves: Moves): Result {
  
  const boardList = board.split("\n").slice(1, -1)

  const rowIndex = boardList.findIndex(row => row.includes("@"))
  const colIndex = boardList[rowIndex].indexOf("@")
  let atLocation = [rowIndex, colIndex]

  const moveDirections: Record<string, [number, number]> = {
    'U': [-1, 0],
    'D': [1, 0],
    'R': [0, 1],
    'L': [0, -1]
  }

  const incrementLocation = (location: number[], move: string): number[] => {
    const [deltaRow, deltaCol] = moveDirections[move] || [0, -1]
    return [location[0] + deltaRow, location[1] + deltaCol]
  }

  const isOutOfBounds = (location: number[]): boolean => {
    const [row, col] = location
    return row < 0 || row >= boardList.length || 
           col < 0 || col >= boardList[0].length
  }

  const cellResults: Record<string, Result> = {
    '*': 'success',
    '#': 'crash'
  }

  const checkCell = (location: number[]): Result | null => {
    const [row, col] = location
    const cell = boardList[row][col]
    return cellResults[cell] || null
  }

  for (const move of moves) {
    atLocation = incrementLocation(atLocation, move)

    if (isOutOfBounds(atLocation)) {
      return 'crash'
    }
    
    const result = checkCell(atLocation)
    if (result) {
      return result
    }
  }

  return 'fail';
}
