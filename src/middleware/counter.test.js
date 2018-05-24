
import counterMiddleware from './counter';
import { START_GAME, STOP_GAME } from '../actions/types';

describe('middleware', () => {
    describe('counter', () => {
        jest.useFakeTimers();

        let store;
        let next;

        beforeEach(() => {
            store = {
                getState: jest.fn(() => ({})),
                dispatch: jest.fn()
            };
            next = jest.fn();
        });

        it('should start game counter', () => {

            counterMiddleware(store)(next)({ type: START_GAME });
            
            expect(setInterval).toHaveBeenCalledTimes(1);
            expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 300);
            expect(next).toHaveBeenCalledTimes(1);
        });

        it('should start game counter once', () => {

            counterMiddleware(store)(next)({ type: START_GAME });
            counterMiddleware(store)(next)({ type: START_GAME });
            
            expect(setInterval).toHaveBeenCalledTimes(1);
            expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 300);
            expect(next).toHaveBeenCalledTimes(2);
        });

        it('should stop game counter', () => {

            counterMiddleware(store)(next)({ type: START_GAME });
            counterMiddleware(store)(next)({ type: STOP_GAME });
            
            expect(clearInterval).toHaveBeenCalledTimes(1);
            expect(next).toHaveBeenCalledTimes(2);
        });

    });
});