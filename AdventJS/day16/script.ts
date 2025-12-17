type Gifts = number[]
type MaxWeight = number
type Result3 = number | null

function packGifts(gifts: Gifts, maxWeight: MaxWeight): Result3 {
  if(gifts.length == 0){return 0}
  if(Math.max(...gifts)>maxWeight){return null}
  
  let sleighCount = 1
  let currentWeight = 0
  
  for (const gift of gifts) {
    if (currentWeight + gift <= maxWeight) {
      currentWeight += gift
    } else {
      sleighCount++
      currentWeight = gift
    }
  }
  
  return sleighCount
}
