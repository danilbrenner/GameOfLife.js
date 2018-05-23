import { START_GAME, STOP_GAME } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
  case START_GAME:
    return { ...state, isGameStarted: true };
  case STOP_GAME:
    return { ...state, isGameStarted: false };
  default:
    return state;
  }
}