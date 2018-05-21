import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import DeleteIcon from '@material-ui/icons/Delete';

import { startGame } from '../actions/game'

const OutGameControls = (props) => {
  return (
    <ul className="game-controlls">
      <li>
        <Button variant="fab" color="secondary">
            <DeleteIcon />
        </Button>
      </li>  
      <li>
        <Button variant="fab" color="primary" onClick={ props.startGame }>
          <PlayArrowIcon />
        </Button>
      </li>
    </ul>
  )
};

const stateToProps = state => {
    return {
    };
};

export default connect(stateToProps, { startGame })(OutGameControls);