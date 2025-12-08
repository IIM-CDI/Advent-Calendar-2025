function drawTree(height: number, ornament: string, frequency: number): string {
  let result: string[] = [];
  let position = 1;
  
  for (let row = 1; row <= height; row++) {
    const numChars = 2 * row - 1;
    const numSpaces = height - row;
    
    let line = '';
    
    line += ' '.repeat(numSpaces);

    for (let i = 0; i < numChars; i++) {
      if (position % frequency === 0) {
        line += ornament;
      } else {
        line += '*';
      }
      position++;
    }
    
    result.push(line);
  }
  
  const trunkSpaces = ' '.repeat(height - 1);
  result.push(trunkSpaces + '#');
  
  return result.join('\n');
}
