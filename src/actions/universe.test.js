import { toggleCell } from './universe';
import { TOGGLE_CELL } from './types';

describe('actions', () => {
    it('toggleCell should create an action to toggle cell', () => {
        const expectedAction = {
            type: TOGGLE_CELL,
            payload: 1
        };
        expect(toggleCell(1)).toEqual(expectedAction);
    });
});

