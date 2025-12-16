function elfBattle(elf1: string, elf2: string): number {
  let elf1Life = 3
  let elf2Life = 3
  
  const maxRounds = Math.max(elf1.length, elf2.length)
  
  for (let i = 0; i < maxRounds; i++) {
    const elf1Move = elf1.charAt(i)
    const elf2Move = elf2.charAt(i)
    
    if (elf1Move === "A" && elf2Move !== "B") {
      elf2Life--
    } else if (elf1Move === "F") {
      elf2Life -= 2
    }
    
    if (elf2Move === "A" && elf1Move !== "B") {
      elf1Life--
    } else if (elf2Move === "F") {
      elf1Life -= 2
    }
    
    if (elf1Life <= 0 || elf2Life <= 0) {
      break
    }
  }
  
  if (elf1Life > elf2Life) {
    return 1
  } else if (elf2Life > elf1Life) {
    return 2
  } else {
    return 0
  }
}
