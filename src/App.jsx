import React, { useState, useEffect } from 'react';
import { EMOJI_CATEGORIES, WINNING_LINES } from './constants/emojiCategories';
import CategorySelector from './components/CategorySelection/CategorySelection';
import GameInfo from './components/GameInfo/GameInfo';
import GameBoard from './components/GameBoard/GameBoard';
import GameControls from './components/GameControls/GameControls';
import WinnerModal from './components/WinnerModal/WinnerModal';
import HelpModal from './components/HelpModal/HelpModal';
import './App.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({ player1: '', player2: '' });
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [players, setPlayers] = useState({
    player1: '',
    player2: '',
    player1Emojis: [],
    player2Emojis: [],
    player1History: [],
    player2History: []
  });
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [showHelp, setShowHelp] = useState(false);
  const [nextEmoji, setNextEmoji] = useState('');

  const getRandomEmoji = (category) => {
    const emojis = EMOJI_CATEGORIES[category];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const checkWinner = (newBoard) => {
    for (let line of WINNING_LINES) {
      const [a, b, c] = line;
      if (newBoard[a] && newBoard[b] && newBoard[c]) {
        const player1Emojis = EMOJI_CATEGORIES[players.player1] || [];
        const player2Emojis = EMOJI_CATEGORIES[players.player2] || [];
        
        const isPlayer1Line = [newBoard[a], newBoard[b], newBoard[c]].every(emoji => 
          player1Emojis.includes(emoji)
        );
        const isPlayer2Line = [newBoard[a], newBoard[b], newBoard[c]].every(emoji => 
          player2Emojis.includes(emoji)
        );

        if (isPlayer1Line) {
          setWinningCells(line);
          return 1;
        }
        if (isPlayer2Line) {
          setWinningCells(line);
          return 2;
        }
      }
    }
    return null;
  };

  const startGame = () => {
    setGameStarted(true);
    setPlayers({
      player1: selectedCategories.player1,
      player2: selectedCategories.player2,
      player1Emojis: [],
      player2Emojis: [],
      player1History: [],
      player2History: []
    });
    setNextEmoji(getRandomEmoji(selectedCategories.player1));
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const currentCategory = players[`player${currentPlayer}`];
    const emoji = nextEmoji;
    const currentPlayerEmojis = [...players[`player${currentPlayer}Emojis`]];
    const currentPlayerHistory = [...players[`player${currentPlayer}History`]];

    if (currentPlayerEmojis.length >= 3) {
      const oldestPosition = currentPlayerHistory[0];
      newBoard[oldestPosition] = null;
      currentPlayerHistory.shift();
      currentPlayerEmojis.shift();
      
      if (index === oldestPosition) {
        alert("You cannot place your emoji where your oldest emoji was!");
        return;
      }
    }

    newBoard[index] = emoji;
    currentPlayerEmojis.push(emoji);
    currentPlayerHistory.push(index);

    setBoard(newBoard);
    setPlayers(prev => ({
      ...prev,
      [`player${currentPlayer}Emojis`]: currentPlayerEmojis,
      [`player${currentPlayer}History`]: currentPlayerHistory
    }));

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    const nextPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayer(nextPlayer);
    setNextEmoji(getRandomEmoji(players[`player${nextPlayer}`]));
  };

  const resetGame = () => {
    setGameStarted(false);
    setBoard(Array(9).fill(null));
    setCurrentPlayer(1);
    setPlayers({
      player1: '',
      player2: '',
      player1Emojis: [],
      player2Emojis: [],
      player1History: [],
      player2History: []
    });
    setWinner(null);
    setWinningCells([]);
    setSelectedCategories({ player1: '', player2: '' });
    setNextEmoji('');
  };

  const playAgain = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(1);
    setPlayers(prev => ({
      ...prev,
      player1Emojis: [],
      player2Emojis: [],
      player1History: [],
      player2History: []
    }));
    setWinner(null);
    setWinningCells([]);
    setNextEmoji(getRandomEmoji(players.player1));
  };

  useEffect(() => {
    if (gameStarted && players[`player${currentPlayer}`]) {
      setNextEmoji(getRandomEmoji(players[`player${currentPlayer}`]));
    }
  }, [currentPlayer, players, gameStarted]);

  return (
    <div className="game-container">
      <h1 className="game-title">🎮 Twisted Tic Tac Toe</h1>
      
      {!gameStarted ? (
        <CategorySelector 
          onStart={startGame}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      ) : (
        <>
          <GameInfo 
            currentPlayer={currentPlayer}
            players={players}
            nextEmoji={nextEmoji}
          />
          <GameBoard 
            board={board}
            onCellClick={handleCellClick}
            winningCells={winningCells}
          />
          <GameControls 
            onReset={resetGame}
            onHelp={() => setShowHelp(true)}
          />
        </>
      )}

      {winner && (
        <WinnerModal 
          winner={winner}
          onPlayAgain={playAgain}
        />
      )}

      {showHelp && (
        <HelpModal onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
};

export default App;