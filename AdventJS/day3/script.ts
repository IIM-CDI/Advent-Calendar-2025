function drawGift(size: number, symbol: string): string {

  if(size<2){
    return ""
  }

  let result:string = ""

  for(let i = 0; i < size; i++){
    result += symbol
  }

  result += "\n"

  for(let i = 0; i < size-2; i++){
    result += symbol

    for(let j = 0; j < size-2; j++){
      result += " "
    }


    result += symbol
    result += "\n"
  }

  for(let i = 0; i < size; i++){
    result += symbol
  }

  return result
}

