type Glove = { hand: 'L' | 'R'; color: string }

function matchGloves(gloves: Glove[]): string[] {
  const result: Array<{ color: string; firstIndex: number }> = []
  const leftGloves: Map<string, number[]> = new Map()
  const rightGloves: Map<string, number[]> = new Map()
  
  for (let i = 0; i < gloves.length; i++) {
    const { hand, color } = gloves[i]
    
    if (hand === 'L') {
      const rightIndices = rightGloves.get(color)
      if (rightIndices && rightIndices.length > 0) {
        const firstIndex = rightIndices.shift()!
        result.push({ color, firstIndex })
      } else {
        const leftIndices = leftGloves.get(color) || []
        leftIndices.push(i)
        leftGloves.set(color, leftIndices)
      }
    } else {
      const leftIndices = leftGloves.get(color)
      if (leftIndices && leftIndices.length > 0) {
        const firstIndex = leftIndices.shift()!
        result.push({ color, firstIndex })
      } else {
        const rightIndices = rightGloves.get(color) || []
        rightIndices.push(i)
        rightGloves.set(color, rightIndices)
      }
    }
  }
  
  return result.sort((a, b) => a.firstIndex - b.firstIndex).map(item => item.color)
}
