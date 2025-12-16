type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  function search(obj: any, currentPath: Path): Path | null {
    for (const [key, value] of Object.entries(obj)) {
      if (value === gift) {
        return [...currentPath, key]
      }
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const result = search(value, [...currentPath, key])
        if (result !== null) {
          return result
        }
      }
    }
    
    return null
  }
  
  const result = search(workshop, [])
  return result !== null ? result : []
}
