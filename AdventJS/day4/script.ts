function decodeSantaPin(code:string):string|null {
  let result = code.replaceAll("[", "").split("]")
  result.pop()

  if(result.length != 4){
    return null
  }

  let stringFinal = ""
  result.forEach(el => {

    if(el[0] == "<"){
      stringFinal += stringFinal.slice(-1)
    }

    else{

      let value = Number(el[0])

      for(let i = 1; i < el.length; i++){
        el[i] == "+" ? value++ : value--

        if(value < 0){
          value = 9
        }
      }

      value = value % 10

      stringFinal += value.toString()

    }
  })

  return stringFinal
}
