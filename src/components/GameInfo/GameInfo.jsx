import React from 'react';
import './GameInfo.css';

const GameInfo = ({ currentPlayer, players, nextEmoji }) => {
  return (
    <div className="game-info">
      <div className="player-info-container">
        {[1, 2].map(playerNum => (
        <div 
          key={playerNum}
          className={`player-info ${currentPlayer === playerNum ? 'active-player' : ''}`}
        >
          <div className="player-name">Player {playerNum}</div>
          <div className="player-category">{players[`player${playerNum}`]}</div>
          <div className="player-emojis">
            {players[`player${playerNum}Emojis`].map((emoji, index) => (
              <span key={index}>{emoji}</span>
            ))}
          </div>
        </div>
      ))}
      </div>
      <div className="turn-indicator">
        <div className="current-turn">Player {currentPlayer}'s Turn</div>
        <div className="next-emoji">{nextEmoji}</div>
      </div>
    </div>
  );
};

export default GameInfo;