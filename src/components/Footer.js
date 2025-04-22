import React from 'react';


const Footer = ({ styleType }) => {
    return (
      <footer className={`footer ${styleType}`}>
        <h1>이 부분은 푸터</h1>
      </footer>
    );
  };

export default Footer;