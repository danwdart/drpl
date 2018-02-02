import * as errors from './errors';

export const fds = new Proxy([
    arg => console.log(errors.ERR_WRITE_TO_STDIN, arg),
    console.log,
    console.error
], {
    get(on, what) {
        if (`undefined` === typeof on[what]) {
            throw new Error(`Tried to access nonexistent fds[${what}]`);
        }
        return on[what];
    }
});
