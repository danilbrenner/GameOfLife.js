import { START_GAME, STOP_GAME } from "./types";

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