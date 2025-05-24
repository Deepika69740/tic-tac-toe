import React from 'react';
import './CategorySelection.css';
import { EMOJI_CATEGORIES } from '../../constants/emojiCategories';

const CategorySelector = ({ onStart, selectedCategories, setSelectedCategories }) => {
  const handleCategorySelect = (player, category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [player]: category
    }));
  };

  const canStart = selectedCategories.player1 && selectedCategories.player2 && 
                   selectedCategories.player1 !== selectedCategories.player2;

  return (
    <div className="category-selector">
      <h2 className="category-title">Choose Your Emoji Categories</h2>
      <div className="players-selection">
        {['player1', 'player2'].map(player => (
          <div key={player} className="player-category">
            <div className="player-label">
              Player {player === 'player1' ? '1' : '2'}
            </div>
            <div className="category-grid">
              {Object.entries(EMOJI_CATEGORIES).map(([categoryName, emojis]) => (
                <div
                  key={categoryName}
                  className={`category-option ${selectedCategories[player] === categoryName ? 'selected' : ''}`}
                  onClick={() => handleCategorySelect(player, categoryName)}
                >
                  <div className="category-name">{categoryName}</div>
                  <div className="category-emojis">{emojis.slice(0, 3).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button 
        className="start-button" 
        onClick={onStart}
        disabled={!canStart}
      >
        {!canStart ? 'Select Different Categories' : 'Start Game!'}
      </button>
    </div>
  );
};

export default CategorySelector;