const CONSOLE_COLOUR_RESET = `\x1b[0m`,
    CONSOLE_COLOUR_BRIGHT = `\x1b[1m`,
    CONSOLE_COLOUR_DIM = `\x1b[2m`,
    CONSOLE_COLOUR_UNDERSCORE = `\x1b[4m`,
    CONSOLE_COLOUR_BLINK = `\x1b[5m`,
    CONSOLE_COLOUR_REVERSE = `\x1b[7m`,
    CONSOLE_COLOUR_HIDDEN = `\x1b[8m`,

    CONSOLE_COLOUR_FG_BLACK = `\x1b[30m`,
    CONSOLE_COLOUR_FG_RED = `\x1b[31m`,
    CONSOLE_COLOUR_FG_GREEN = `\x1b[32m`,
    CONSOLE_COLOUR_FG_YELLOW = `\x1b[33m`,
    CONSOLE_COLOUR_FG_BLUE = `\x1b[34m`,
    CONSOLE_COLOUR_FG_MAGENTA = `\x1b[35m`,
    CONSOLE_COLOUR_FG_CYAN = `\x1b[36m`,
    CONSOLE_COLOUR_FG_WHITE = `\x1b[37m`,

    CONSOLE_COLOUR_BG_BLACK = `\x1b[40m`,
    CONSOLE_COLOUR_BG_RED = `\x1b[41m`,
    CONSOLE_COLOUR_BG_GREEN = `\x1b[42m`,
    CONSOLE_COLOUR_BG_YELLOW = `\x1b[43m`,
    CONSOLE_COLOUR_BG_BLUE = `\x1b[44m`,
    CONSOLE_COLOUR_BG_MAGENTA = `\x1b[45m`,
    CONSOLE_COLOUR_BG_CYAN = `\x1b[46m`,
    CONSOLE_COLOUR_BG_WHITE = `\x1b[47m`,

    COLOUR_SETTING_RESET = `rst`,
    COLOUR_SETTING_BRIGHT = `brt`,
    COLOUR_SETTING_DIM = `dim`,
    COLOUR_SETTING_UNDERSCORE = `usc`,
    COLOUR_SETTING_BLINK = `bln`,
    COLOUR_SETTING_REVERSE = `rev`,
    COLOUR_SETTING_HIDDEN = `hdn`,

    COLOUR_BLACK = `black`,
    COLOUR_RED = `red`,
    COLOUR_GREEN = `green`,
    COLOUR_YELLOW = `yellow`,
    COLOUR_BLUE = `blue`,
    COLOUR_MAGENTA = `magenta`,
    COLOUR_CYAN = `cyan`,
    COLOUR_WHITE = `white`,

    COLOUR_TYPE_BG = `bg`,
    COLOUR_TYPE_FG = `fg`,

    TYPE_SETTING = `set`,

    COLOURS = {
        [TYPE_SETTING]: {
            [COLOUR_SETTING_RESET]      : CONSOLE_COLOUR_RESET,
            [COLOUR_SETTING_BRIGHT]     : CONSOLE_COLOUR_BRIGHT,
            [COLOUR_SETTING_DIM]        : CONSOLE_COLOUR_DIM,
            [COLOUR_SETTING_UNDERSCORE] : CONSOLE_COLOUR_UNDERSCORE,
            [COLOUR_SETTING_BLINK]      : CONSOLE_COLOUR_BLINK,
            [COLOUR_SETTING_REVERSE]    : CONSOLE_COLOUR_REVERSE,
            [COLOUR_SETTING_HIDDEN]     : CONSOLE_COLOUR_HIDDEN
        },
        [COLOUR_TYPE_BG]: {
            [COLOUR_BLACK]              : CONSOLE_COLOUR_BG_BLACK,
            [COLOUR_RED]                : CONSOLE_COLOUR_BG_RED,
            [COLOUR_GREEN]              : CONSOLE_COLOUR_BG_GREEN,
            [COLOUR_YELLOW]             : CONSOLE_COLOUR_BG_YELLOW,
            [COLOUR_BLUE]               : CONSOLE_COLOUR_BG_BLUE,
            [COLOUR_MAGENTA]            : CONSOLE_COLOUR_BG_MAGENTA,
            [COLOUR_CYAN]               : CONSOLE_COLOUR_BG_CYAN,
            [COLOUR_WHITE]              : CONSOLE_COLOUR_BG_WHITE
        },
        [COLOUR_TYPE_FG]: {
            [COLOUR_BLACK]              : CONSOLE_COLOUR_FG_BLACK,
            [COLOUR_RED]                : CONSOLE_COLOUR_FG_RED,
            [COLOUR_GREEN]              : CONSOLE_COLOUR_FG_GREEN,
            [COLOUR_YELLOW]             : CONSOLE_COLOUR_FG_YELLOW,
            [COLOUR_BLUE]               : CONSOLE_COLOUR_FG_BLUE,
            [COLOUR_MAGENTA]            : CONSOLE_COLOUR_FG_MAGENTA,
            [COLOUR_CYAN]               : CONSOLE_COLOUR_FG_CYAN,
            [COLOUR_WHITE]              : CONSOLE_COLOUR_FG_WHITE
        }
    };

export const col = (stack) => stack.push(COLOURS[stack.pop()][stack.pop()]);
