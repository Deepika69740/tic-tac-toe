# 🧠 Twisted Tic Tac Toe (React + Vite)

Welcome to **Twisted Tic Tac Toe**, a fun and modern twist on the classic game. Built with **React** and **Vite**, this is a 2-player game with an exciting twist — **emoji categories** and **vanishing emoji rules** that make gameplay unpredictable and strategic!


## 🚀 Features

- 🧑‍🤝‍🧑 Two-player mode
- 😊 Emoji-based moves with different **emoji categories**
- 💨 Vanishing Emoji Rule: the last used emoji **disappears** from the board in the next turn
- 🏆 Winner detection with a styled **Winner Modal**
- 🆘 Help Modal to explain game rules
- 🔄 Game controls to restart or switch emoji category
- 🎨 Smooth animations and responsive design


## 📁 Folder Structure

src/<br>
├── components/<br>
│ ├── CategorySelection/<br>
│ │ ├── CategorySelection.jsx <br>
│ │ └── CategorySelection.css<br>
│ ├── GameBoard/<br>
│ │ ├── GameBoard.jsx<br>
│ │ └── GameBoard.css<br>
│ ├── GameControls/<br>
│ │ ├── GameControls.jsx<br>
│ │ └── GameControls.css<br>
│ ├── GameInfo/<br>
│ │ ├── GameInfo.jsx<br>
│ │ └── GameInfo.css<br>
│ ├── HelpModal/<br>
│ │ ├── HelpModal.jsx<br>
│ │ └── HelpModal.css<br>
│ └── WinnerModal/<br>
│ ├── WinnerModal.jsx<br>
│ └── WinnerModal.css<br>
├── constants/<br>
│ └── emojiCategories.js<br>
├── App.jsx<br>
├── App.css<br>
└── index.js

## 🛠️ Tech Stack

- ⚛️ React
- ⚡ Vite
- 💅 CSS (with animations)
- 🐱‍💻 JavaScript (ES6+)

---

## 🧾 How to Run

Make sure [Node.js](https://nodejs.org/) and npm are installed.

1. Clone the repository or download the source code.
2. Open the terminal and navigate to the project directory.
3. Run the following commands:

npm install
npm run dev

4.  Open your browser and go to http://localhost:5173

## 📜 Rules of the Game

Players take turns placing emojis on the board.

Only emojis from the selected category can be used.

After a move, the emoji used disappears from the board.

The first player to align 3 emojis wins.

## 🧑‍💻 Author

Made by<br>
Y.V.Sai Deepika
