import React from 'react';

const Header = ({ styleType }) => {
    return (
    <header className={`header ${styleType}`}>
        <div class="home-button">
            <button>Home</button>
        </div>
        <div class="connector-line"></div>
        <div class="timeline-buttons">
            <button>80's</button>
            <button>90's</button>
            <button>00's</button>
            <button>10's</button>
            <button>20's</button>
        </div>
    </header>
    );
  };

export default Header;