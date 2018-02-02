import { fds } from './fds';
import * as errors from './errors';

export const CMD_WRITE = `w`,
    CMD_READ = `r`,
    CMD_BLOCKING_READ = `b`,
    CMD_COPY = `c`,
    CMD_ADD = `+`,
    CMD_SUB = `-`,
    CMD_MUL = `*`,
    CMD_DIV = `/`,
    CMD_SWAP = `s`;
export default {
    [CMD_WRITE]:
        stack => fds[stack.pop()](stack.pop()),
    [CMD_READ]:
        stack => console.log(`read: ${stack.pop()}:${stack.pop()}`),
    [CMD_BLOCKING_READ]:
        stack => console.log(`bread: ${stack.pop()}:${stack.pop()}`),
    [CMD_COPY]:
        stack => { const v = stack.pop(); stack.push(v); stack.push(v); },
    [CMD_ADD]:
        stack => stack.push(stack.pop() + stack.pop()),
    [CMD_SUB]:
        stack => stack.push(stack.pop() - stack.pop()),
    [CMD_MUL]:
        stack => stack.push(stack.pop() * stack.pop()),
    [CMD_DIV]:
        stack => { const a1 = stack.pop(), a2 = stack.pop(); if (0 == a2) { throw new Error(errors.ERR_DIV_ZERO); } else { stack.push(a1 / a2); }},
    [CMD_SWAP]:
        stack => { const a1 = stack.pop(), a2 = stack.pop(); stack.push(a1); stack.push(a2);}
};
