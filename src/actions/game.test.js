import { MAKE_STEP, START_GAME, STOP_GAME, CLEAR_UNIVERSE } from './types';
import { makeStep, startGame, stopGame, clearUniverse } from './game';

describe('actions', () => {
  it('makeStep should create an action to make one step', () => {
    const expectedAction = {
      type: MAKE_STEP
    };
    expect(makeStep()).toEqual(expectedAction);
  });
  it('startGame should create an action to start game', () => {
    const expectedAction = {
      type: START_GAME
    };
    expect(startGame()).toEqual(expectedAction);
  }); 
  it('stopGame should create an action to stop game', () => {
    const expectedAction = {
      type: STOP_GAME
    };
    expect(stopGame()).toEqual(expectedAction);
  });  
  it('clearUniverse should create an action to clear universe', () => {
    const expectedAction = {
      type: CLEAR_UNIVERSE
    };
    expect(clearUniverse()).toEqual(expectedAction);
  });  
});

