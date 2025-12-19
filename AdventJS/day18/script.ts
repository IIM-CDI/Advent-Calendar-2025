function hasFourInARow(board: string[][]): boolean {
  const target = 4

  if (board.length === 0) return false

  const rows = board.length
  const cols = board.reduce((max, row) => Math.max(max, row.length), 0)
  if (rows < target && cols < target) return false

  const directions: Array<[dr: number, dc: number]> = [
    [0, 1], // →
    [1, 0], // ↓
    [1, 1], // ↘
    [1, -1], // ↙
  ]

  const get = (r: number, c: number): string | undefined => board[r]?.[c]

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = get(r, c)
      if (cell !== 'R' && cell !== 'G') continue

      for (const [dr, dc] of directions) {
        let count = 0
        let rr = r
        let cc = c

        while (get(rr, cc) === cell) {
          count++
          if (count >= target) return true
          rr += dr
          cc += dc
        }
      }
    }
  }

  return false
}
