import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(import.meta.dirname, 'input.txt'), 'utf-8');
const list = input.trim().split('\n');

let currentNumber = 50;
let timeAtZero = 0;

list.forEach((line) => {
    const direction = line[0];
    const amount = Number(line.slice(1));

    if (direction === 'L') {
        if (currentNumber > 0 && amount >= currentNumber) {
            timeAtZero += 1 + Math.floor((amount - currentNumber) / 100);
        } else if (currentNumber === 0 && amount >= 100) {
            timeAtZero += Math.floor(amount / 100);
        }
        currentNumber = ((currentNumber - amount) % 100 + 100) % 100;
        
    } else if (direction === 'R') {
        if (currentNumber === 0 && amount >= 100) {
            timeAtZero += Math.floor(amount / 100);
        } else if (currentNumber > 0) {
            timeAtZero += Math.floor((currentNumber + amount) / 100);
        }
        currentNumber = (currentNumber + amount) % 100;
    }
});

console.log(timeAtZero);
