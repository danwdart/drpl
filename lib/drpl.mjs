import fs from 'fs';
import { parse } from './parser';

const filename = process.argv[2],
    string = fs.readFileSync(filename).toString(),
    stack = [];

console.debug(`Starting stack:`, stack, `\n<<< Start program ${filename} >>>`);
parse(stack, string);
console.debug(`<<< End program ${filename} >>>\nFinal stack:`, stack);
