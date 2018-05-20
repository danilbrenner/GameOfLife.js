import React from 'react'
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DeleteIcon from '@material-ui/icons/Delete';


import './Game.css';

import Universe from '../universe/Universe'

export default () => {
  return (
    <div className="game-container">
      <div className="game-space">
        <Universe />
        <ul className="game-controlls">
          <li>
            <Button variant="fab" color="secondary">
                <DeleteIcon />
            </Button>
          </li>
          <li>
            <Button variant="fab" color="primary">
              <PlayArrowIcon />
            </Button>
          </li>
        </ul>
      </div>
  </div>
  )
}
