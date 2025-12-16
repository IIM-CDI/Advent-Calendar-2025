type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  // Helper function to recursively search for the gift
  function search(obj: any, currentPath: Path): Path | null {
    // Check each key-value pair in the current object
    for (const [key, value] of Object.entries(obj)) {
      // If we found the gift, return the path
      if (value === gift) {
        return [...currentPath, key]
      }
      
      // If the value is an object, search recursively
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const result = search(value, [...currentPath, key])
        if (result !== null) {
          return result
        }
      }
    }
    
    // Gift not found in this branch
    return null
  }
  
  // Start the search from the root
  const result = search(workshop, [])
  return result !== null ? result : []
}
