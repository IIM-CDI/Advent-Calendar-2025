type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
  if (data.length === 0) return ''
  
  const columns = Object.keys(data[0])
  
  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return aVal - bVal
    }
    
    return String(aVal).localeCompare(String(bVal))
  })
  
  const columnWidths = columns.map((col, index) => {
    const headerLetter = String.fromCharCode(65 + index)
    const maxValueWidth = Math.max(
      ...sortedData.map(row => String(row[col]).length)
    )
    return Math.max(headerLetter.length, maxValueWidth)
  })
  
  const separator = '+' + columnWidths.map(width => '-'.repeat(width + 2)).join('+') + '+'
  
  const headerLetters = '|' + columnWidths.map((width, index) => {
    const letter = String.fromCharCode(65 + index)
    return ' ' + letter.padEnd(width) + ' '
  }).join('|') + '|'
  
  const dataRows = sortedData.map(row => {
    return '|' + columns.map((col, index) => {
      const value = String(row[col])
      return ' ' + value.padEnd(columnWidths[index]) + ' '
    }).join('|') + '|'
  })
  
  return [
    separator,
    headerLetters,
    separator,
    ...dataRows,
    separator
  ].join('\n')
}
