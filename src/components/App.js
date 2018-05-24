import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import rootReducer from '../reducers';
import Game from './Game';

import counterMw from '../middleware/counter';
const initialState = { 
    isGameStarted: false,
    cells: (new Array(10906)).fill(false) 
};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(counterMw),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
              Game of life
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Game />  
            </div>
        </Provider>
    );
};

export default App;
