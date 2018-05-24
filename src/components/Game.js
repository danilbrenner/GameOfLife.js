import React from 'react';
import { connect } from 'react-redux';

import Universe from './Universe';

import InGameControls from './InGameControls';
import OutGameControls from './OutGameControls';

const Game = (props) => {
    return (
        <div className="game-container">
            <div className="game-space">
                <Universe />
                { props.isGameStarted ? <InGameControls /> : <OutGameControls /> }
            </div>
        </div>
    );
};

const stateToProps = state => {
    return {
        isGameStarted: state.isGameStarted
    };
};

export default connect(stateToProps, { })(Game);
