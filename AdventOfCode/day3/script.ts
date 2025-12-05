import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(import.meta.dirname, 'input.txt'), 'utf-8');
const list = input.trim().split('\n');

function findMaxJoltage(bank: string, numBatteries: number): string {
    const batteries = bank.split('').map(Number);
    const result: number[] = [];
    
    let availableStart = 0;
    
    for (let pos = 0; pos < numBatteries; pos++) {
        const remaining = numBatteries - pos - 1;
        const maxLookAhead = batteries.length - availableStart - remaining;
        
        // Find the largest digit in the next maxLookAhead positions
        let maxDigit = -1;
        let maxDigitIndex = -1;
        
        for (let i = availableStart; i < availableStart + maxLookAhead; i++) {
            if (batteries[i] > maxDigit) {
                maxDigit = batteries[i];
                maxDigitIndex = i;
            }
        }
        
        result.push(maxDigit);
        availableStart = maxDigitIndex + 1;
    }
    
    return result.join('');
}

// Part 1 solution (commented out)
/*
let batteryOutput = 0;

list.forEach((line) => {
    let maxValue = Number(line[0])*10 + Number(line[1]);

    for(let i = 0; i < line.length - 1; i++) {
        for(let j = i + 1; j < line.length; j++) {
            const value = Number(line[i]) * 10 + Number(line[j]);
            if(value > maxValue) {
                maxValue = value;
            }
        }
    }
    console.log(maxValue);
    batteryOutput += maxValue;
});

console.log("Part 1:", batteryOutput);
*/

// Part 2 solution
let totalOutput = BigInt(0);

list.forEach((line, index) => {
    const maxJoltage = findMaxJoltage(line, 12);
    console.log(`Bank ${index + 1}: ${maxJoltage}`);
    totalOutput += BigInt(maxJoltage);
});

console.log("Part 2:", totalOutput.toString());