import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import StopIcon from '@material-ui/icons/Stop';

import { stopGame } from '../actions/game'

const InGameControls = (props) => {
  return (
    <ul className="game-controlls">
      <li>
        <Button variant="fab" color="primary" onClick={ props.stopGame }>
          <StopIcon />
        </Button>
      </li>
    </ul>
  )
};

export default connect(state => {}, { stopGame })(InGameControls);