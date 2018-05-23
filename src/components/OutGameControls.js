import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import DeleteIcon from '@material-ui/icons/Delete';

import { startGame, makeStep, clearUniverse } from '../actions/game';

const OutGameControls = (props) => {
  return (
    <ul className="game-controlls">
      <li>
        <Button id="clear-button" variant="fab" color="secondary" onClick={ props.clearUniverse }>
          <DeleteIcon />
        </Button>
      </li>
      <li>
        <Button id="play-button" variant="fab" color="primary" onClick={ props.startGame }>
          <PlayArrowIcon />
        </Button>
      </li>
      <li>
        <Button id="step-button" variant="fab" color="default" onClick={ props.makeStep }>
          <SkipNextIcon />
        </Button>
      </li>
    </ul>
  );
};

const stateToProps = state => {
  return {
  };
};

export default connect(stateToProps, { startGame, makeStep, clearUniverse })(OutGameControls);