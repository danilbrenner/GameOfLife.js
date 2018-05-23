import { START_GAME, STOP_GAME } from "../actions/types";

export default store => next => action => {
    switch (action.type) {
        case START_GAME:
            break;
        case STOP_GAME:
            break;
    }
    return next(action);
};