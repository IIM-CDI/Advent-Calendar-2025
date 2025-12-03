function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {
  return giftsToProduce.reduce(function(r: string[], e) {
    if(typeof e.quantity == "number")
    for(let i = 0; i < e.quantity; i++){
     r.push(e.toy);
    }
  return r;
}, [] as string[])
}