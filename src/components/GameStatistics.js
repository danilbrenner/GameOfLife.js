import React from 'react';
import { connect } from 'react-redux';

const GameStatistics = ({ generation, cells }) => {
    return (
        <span>
            Generation: {generation} Cells: {cells}
        </span>
    );
};

const stateToProps = state => {
    return {
        generation: state.generation, 
        cells: state.cells.filter(i => i).length
    };
};

export default connect(stateToProps, {})(GameStatistics);