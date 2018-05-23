import rootReducer from './index';
import { STOP_GAME, START_GAME } from '../actions/types';

describe('reducers', () => {
  it('should start game', () => {
    let state = rootReducer({isGameStarted:false}, {type: START_GAME});
    expect(state).toEqual({isGameStarted:true});
  });
  it('should stop game', () => {
    let state = rootReducer({isGameStarted:true}, {type: STOP_GAME});
    expect(state).toEqual({isGameStarted:false});
  });
  it('should do nothing when unknown action is performed', () => {
    let state = rootReducer({isGameStarted:true}, {type: 'UNKNOWN_ACTION'});
    expect(state).toEqual({isGameStarted:true});
  });
});
