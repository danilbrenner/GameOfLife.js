import { START_GAME, STOP_GAME, TOGGLE_CELL } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
    case START_GAME:
        return { ...state, isGameStarted: true };
    case STOP_GAME:
        return { ...state, isGameStarted: false };
    case TOGGLE_CELL:
        return { ...state, cells: state.cells.map((v, ix) => action.payload === ix ? !v : v ) };
    default:
        return state;
    }
}