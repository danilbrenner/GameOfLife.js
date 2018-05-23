import { START_GAME, STOP_GAME, MAKE_STEP, CLEAR_UNIVERSE } from "./types";

export const startGame = () => {
    return {
        type: START_GAME
    };
};

export const stopGame = () => {
    return {
        type: STOP_GAME
    };
};

export const makeStep = () => {
    return {
        type: MAKE_STEP
    };
};

export const clearUniverse = () => {
    return {
        type: CLEAR_UNIVERSE
    };
};