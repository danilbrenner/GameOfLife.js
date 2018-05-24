import { START_GAME, STOP_GAME, MAKE_STEP } from '../actions/types';

let counter;

export default store => next => action => {
    switch (action.type) {
    case START_GAME:
        if(counter) break;
        counter = setInterval(() => {
            store.dispatch({ type: MAKE_STEP });
        }, 300);
        break;
    case STOP_GAME:
        if(!counter) break;
        clearInterval(counter);
        counter = undefined;
        break;
    }
    return next(action);
};