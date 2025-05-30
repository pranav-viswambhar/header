import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="yt-header">
        <div className="left-section">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Logo" className="logo" />
        </div>

        <div className="center-section">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">🔍</button>
        </div>

        <div className="right-section">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
        </div>
      </header>

      <main>
        <p>Hello</p>
      </main>
    </div>
  );
}

export default App;
