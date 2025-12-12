function maxDepth (s: string): number {
  let depth = 0
  let currentDepth = 0

  for (const bracket of s) {
    if(bracket == "["){
      currentDepth++
    }
    else if(bracket == "]"){
      currentDepth--
    }

    if(currentDepth < 0){
      return -1
    }

    if(depth < currentDepth){
      depth = currentDepth
    }
  }

  if(currentDepth != 0){
    return -1
  }
  
  return depth
}