import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EraCard from '../components/EraCard';
import '../styles/era2010.css';

const Era2010 = () => {
  const navigate = useNavigate();

  const dummy2010 = [
    <div
      className="card-inner"
      onClick={() => navigate('/2010/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Hello, 2010!</p>
      <img src="/images/10s1.png" alt="2" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/2010/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Hello, 2010!</p>
      <img src="/images/10s11.jpg" alt="3" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/2010/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Welcome, 2010!</p>
      <img src="/images/10s2.jpg" alt="4" style={{ width: '100%' }} />
    </div>,

    <div
    className="card-inner"
    onClick={() => navigate('/2010/sub')}
    style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
    <p>Welcome, 2010!</p>
    <img src="/images/10s4.png" alt="4" style={{ width: '100%' }} />
    </div>,
  ];

  return (
    <>
      <div className="era2010-page">
        <div className="era2010-header">
          <Header styleType="era2010" />
        </div>
      </div>

      <EraCard styleType="era2010" dummyContent={dummy2010} />

      <Footer styleType="era2010" />
    </>
  );
};

export default Era2010;