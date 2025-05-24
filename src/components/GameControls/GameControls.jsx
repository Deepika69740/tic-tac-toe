import React from 'react';
import './GameControls.css';

const GameControls = ({ onReset, onHelp }) => {
  return (
    <div className="game-controls">
      <button className="control-button reset-button" onClick={onReset}>
        New Game
      </button>
      <button className="control-button help-button" onClick={onHelp}>
        How to Play
      </button>
    </div>
  );
};

export default GameControls;