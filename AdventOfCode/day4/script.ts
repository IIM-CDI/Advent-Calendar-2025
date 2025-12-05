import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(import.meta.dirname, 'input.txt'), 'utf-8');
let grid = input.trim().split('\n').map(row => row.split(''));

const rows = grid.length;
const cols = grid[0].length;

const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1],  [1, 0],  [1, 1]
];

function countAdjacentRolls(row: number, col: number): number {
    let count = 0;
    
    for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        
        if (newRow >= 0 && newRow < rows && 
            newCol >= 0 && newCol < cols && 
            grid[newRow][newCol] === '@') {
            count++;
        }
    }
    
    return count;
}

let totalRemoved = 0;

while (true) {
    const accessiblePositions: [number, number][] = [];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '@') {
                const adjacentCount = countAdjacentRolls(i, j);
                if (adjacentCount < 4) {
                    accessiblePositions.push([i, j]);
                }
            }
        }
    }
    
    if (accessiblePositions.length === 0) {
        break;
    }
    
    for (const [row, col] of accessiblePositions) {
        grid[row][col] = '.';
        totalRemoved++;
    }
    
    console.log(`Removed ${accessiblePositions.length} rolls (total: ${totalRemoved})`);
}

console.log(`Total rolls removed: ${totalRemoved}`);