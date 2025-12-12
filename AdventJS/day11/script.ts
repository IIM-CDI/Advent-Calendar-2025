function findUnsafeGifts(warehouse: string[]): number {
    const uCam = (row: number, col: number): boolean => {
      const directions = [
        [row - 1, col],
        [row + 1, col],     
        [row, col - 1],     
        [row, col + 1]      
      ]
      
      return directions.some(([r, c]) => {
        const inRow = r >= 0 && r < warehouse.length
        if (!inRow) return false
        const inCol = c >= 0 && c < warehouse[r].length
        return inCol && warehouse[r][c] === "#"
      })
    }
    
    let result = 0
    
    for (let i = 0; i < warehouse.length; i++) {
      for (let j = 0; j < warehouse[i].length; j++) {
        if (warehouse[i][j] === "*" && !uCam(i, j)) {
          result++
        }
      }
    }
    
    return result
  }