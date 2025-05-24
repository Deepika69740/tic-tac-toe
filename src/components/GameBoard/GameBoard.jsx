import React from 'react';
import './GameBoard.css';

const GameBoard = ({ board, onCellClick, winningCells }) => {
  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <div
          key={index}
          className={`cell ${cell ? 'disabled' : ''} ${winningCells.includes(index) ? 'winning' : ''}`}
          onClick={() => onCellClick(index)}
        >
          {cell && <span className="emoji-placement">{cell}</span>}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;