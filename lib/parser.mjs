import macros from './macros';
import stdlib from './stdlib';
import * as colours from './colours';

const MATCH_DELIM = /[ \n]/,
    MATCH_IGNORE_DELIM = /[`"']/,
    COMMANDS = {
        ...stdlib,
        ...macros,
        ...colours
    };

export const parse = (stack, string) => {
    const len = string.length;

    let currentCommandOrStackEntry = ``,
        currentlyIgnoringDelim = false;

    for (let at = 0; at < len; at++) {
        const char = string.charAt(at);
        if (MATCH_IGNORE_DELIM.test(char)) {
            currentlyIgnoringDelim = !currentlyIgnoringDelim;
            continue;
        }

        if (!currentlyIgnoringDelim && MATCH_DELIM.test(char)) {
            const f = parseFloat(currentCommandOrStackEntry);
            if (!Number.isNaN(f) && Number.isFinite(f)) {
                currentCommandOrStackEntry = Number(currentCommandOrStackEntry);
            }
            // do something
            if (`undefined` === typeof COMMANDS[currentCommandOrStackEntry]) {
                // push it
                stack.push(currentCommandOrStackEntry);
            } else {
                // it's a command
                const fn = COMMANDS[currentCommandOrStackEntry];
                fn(stack);
            }
            // Clear it!
            currentCommandOrStackEntry = ``;
            continue;
        }

        currentCommandOrStackEntry += String(char);
    }
};
