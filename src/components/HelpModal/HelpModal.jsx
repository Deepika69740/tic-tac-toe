import React from 'react';
import './HelpModal.css';

const HelpModal = ({ onClose }) => {
  return (
    <div className="help-modal" onClick={onClose}>
      <div className="help-content" onClick={e => e.stopPropagation()}>
        <h2 className="help-title">How to Play Twisted Tic Tac Toe</h2>
        
        <div className="help-section">
          <h3>🎯 Objective</h3>
          <p>Be the first to get 3 of your emojis in a row (horizontally, vertically, or diagonally).</p>
        </div>

        <div className="help-section">
          <h3>🎮 Game Setup</h3>
          <ul>
            <li>Each player chooses a different emoji category</li>
            <li>Players take turns placing random emojis from their category</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>✨ The Twist - Vanishing Rule</h3>
          <ul>
            <li>Each player can only have 3 emojis on the board at once</li>
            <li>When you place a 4th emoji, your oldest emoji disappears</li>
            <li>You cannot place your 4th emoji where your 1st emoji was</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>🏆 Winning</h3>
          <p>Get 3 of your emojis in a line. The game continues until someone wins - no draws possible!</p>
        </div>

        <button className="close-help-button" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default HelpModal;