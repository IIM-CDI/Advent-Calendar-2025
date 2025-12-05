import * as fs from 'fs';
import * as path from 'path';

const input = fs.readFileSync(path.join(import.meta.dirname, 'input.txt'), 'utf-8');
const sections = input.trim().split('\n\n');

const ranges = sections[0].split('\n');

const numbers = sections[1].split('\n');

let totalFresh = 0;

const parsedRanges = ranges.map(line => {
    const parts = line.split('-');
    return {
        start: Number(parts[0]),
        end: Number(parts[1])
    };
});

function isNumberInRanges(num: number): boolean {
    return parsedRanges.some(range => num >= range.start && num <= range.end);
}

numbers.forEach(numberStr => {
    const number = Number(numberStr);
    if (isNumberInRanges(number)) {
        totalFresh++;
    }
});

console.log('Part 1 - Numbers within ranges:', totalFresh);

function mergeRanges(ranges: {start: number, end: number}[]): {start: number, end: number}[] {
    if (ranges.length === 0) return [];

    const sorted = [...ranges].sort((a, b) => a.start - b.start);
    const merged: {start: number, end: number}[] = [sorted[0]];

    for (let i = 1; i < sorted.length; i++) {
        const current = sorted[i];
        const lastMerged = merged[merged.length - 1];

        if (current.start <= lastMerged.end + 1) {
            lastMerged.end = Math.max(lastMerged.end, current.end);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

const mergedRanges = mergeRanges(parsedRanges);

let totalCoverage = 0;
mergedRanges.forEach(range => {
    totalCoverage += range.end - range.start + 1;
});

console.log('Part 2 - Total fresh ingredient IDs:', totalCoverage);
