import React from 'react';
import './WinnerModal.css';

const WinnerModal = ({ winner, onPlayAgain,onReset }) => {
  return (
    <div className="winner-announcement">
      <div className="winner-modal">
        <div className="winner-title">🎉</div>
        <div className="winner-message">Player {winner} Wins!</div>
        <button className="play-again-button" onClick={onPlayAgain}>
          Play Again
        </button>
        <button className="control-button reset-button new-game-button" onClick={onReset}>
        New Game
      </button>
      </div>
    </div>
  );
};

export default WinnerModal;