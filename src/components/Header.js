import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ styleType }) => {
    return (
    <header className={`header ${styleType}`}>
        <div className="header-wrapper">
        <div class="home-button">
            <Link to="/">
            <button>Home</button>
            </Link>
        </div>
        <div class="timeline-buttons">
            <Link to="/1980">
            <button>80's</button>
            </Link>
            <Link to="/1990">
            <button>90's</button>
            </Link>
            <Link to="/2000">
            <button>00's</button>
            </Link>
            <Link to="/2010">
            <button>10's</button>
            </Link>
            <Link to="/computerInfo">
            <button>Info</button>
            </Link>
            </div>
        </div>
    </header>
    );
  };

export default Header;