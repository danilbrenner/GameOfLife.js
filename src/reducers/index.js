import { START_GAME, STOP_GAME, TOGGLE_CELL, MAKE_STEP, CLEAR_UNIVERSE } from '../actions/types';
import processCell from './universeprocessor';

export default function(state = {}, action) {
    switch (action.type) {
    case START_GAME:
        return { ...state, isGameStarted: true };
    case STOP_GAME:
        return { ...state, isGameStarted: false };
    case TOGGLE_CELL:
        return { ...state, cells: state.cells.map((v, ix) => action.payload === ix ? !v : v ) };
    case MAKE_STEP:
        return { ...state, generation: state.generation + 1, cells: processCell({ width: 132, cells: state.cells }).cells };
    case CLEAR_UNIVERSE:
        return { ...state, cells: state.cells.map(v => false ) };
    default:
        return state;
    }
}