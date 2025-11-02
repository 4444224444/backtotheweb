import React from 'react';

const Footer = ({ styleType }) => {
  const footerStyle = {
    width: '100%',
    padding: '1.5rem 2rem',
    textAlign: 'center',
    backgroundColor: '#1f1f1f',
    color: '#dcdcdc',
    fontFamily: "'Segoe UI', sans-serif",
    fontSize: '0.9rem',
    borderTop: '1px solid #444',
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15)',
  };

  const textStyle = {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 400,
  };

  return (
    <footer className={`footer ${styleType}`} style={footerStyle}>
      <h1 style={textStyle}>@4444.22.4444</h1>
    </footer>
  );
};

export default Footer;