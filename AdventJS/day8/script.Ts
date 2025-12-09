function findUniqueToy(toy: string): string {
  // Build frequency map - O(n)
  const charCount = new Map<string, number>()
  const lowerToy = toy.toLowerCase()
  
  for (const char of lowerToy) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }
  
  // Find first character with count of 1 - O(n)
  for (let i = 0; i < lowerToy.length; i++) {
    if (charCount.get(lowerToy[i]) === 1) {
      return toy[i]
    }
  }
  
  return ''
}