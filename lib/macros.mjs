const MACRO_FUNC = `f`,
    MACRO_JUMP = `j`,
    MACRO_LOOP = `l`;

export default {
    [MACRO_FUNC]: stack => stack,
    [MACRO_JUMP]: stack => stack,
    [MACRO_LOOP]: stack => stack
};
