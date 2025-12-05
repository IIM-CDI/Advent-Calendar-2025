import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(import.meta.dirname, 'input.txt'), 'utf-8');
const list = input.trim().split(',');

let invalidSum = 0;

function isRepeatedPattern(str: string): boolean {
    const len = str.length;

    for (let patternLen = 1; patternLen <= Math.floor(len / 2); patternLen++) {
        if (len % patternLen === 0) {
            const pattern = str.slice(0, patternLen);
            const repeatCount = len / patternLen;

            if (repeatCount >= 2 && pattern.repeat(repeatCount) === str) {
                return true;
            }
        }
    }

    return false;
}

list.forEach((line) => {
    const parts = line.split('-');

    for (let i = Number(parts[0]); i <= Number(parts[1]); i++) {
        const str = i.toString();

        // if(str.length % 2 == 0) {
        //     let lengthDividedBy2 = Math.floor(str.length / 2);
        //     let firstHalf = str.slice(0, lengthDividedBy2);
        //     let secondHalf = str.slice(str.length - lengthDividedBy2);

        //     if(firstHalf === secondHalf) {
        //         invalidSum += i;
        //     }
        // }


        if (isRepeatedPattern(str)) {
            invalidSum += i;
        }
    }
});

console.log(invalidSum);