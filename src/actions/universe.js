import { TOGGLE_CELL } from './types';

export const toggleCell = cellIx => {
    return {
        type: TOGGLE_CELL,
        payload: cellIx
    };
};