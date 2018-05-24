import rootReducer from './index';
import { STOP_GAME, START_GAME, TOGGLE_CELL, MAKE_STEP } from '../actions/types';

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
  it('should toggle cells value false -> true', () => {
    let state = rootReducer({isGameStarted:true, cells: [ false, false, false, false ]}, {type: TOGGLE_CELL, payload: 2});
    expect(state).toEqual({isGameStarted:true, cells: [ false, false, true, false ]});
  });
  it('should toggle cells value true -> false', () => {
    let state = rootReducer({isGameStarted:true, cells: [ false, true, false, false ]}, {type: TOGGLE_CELL, payload: 1});
    expect(state).toEqual({isGameStarted:true, cells: [ false, false, false, false ]});
  });
  // it('should make step', () => {
  //   let state = rootReducer({isGameStarted:true, cells: [ false, true, false, false ]}, {type: MAKE_STEP });
  //   expect(state).toEqual({isGameStarted:true, cells: [ false, false, false, false ]});
  // });
});
