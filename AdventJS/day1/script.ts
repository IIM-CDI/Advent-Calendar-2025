function filterGifts(gifts: string[]): string[] {
  return gifts.filter(el => !el.includes("#"))
}