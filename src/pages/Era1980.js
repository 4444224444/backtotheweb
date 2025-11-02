import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EraCard from '../components/EraCard';
import '../styles/era1980.css';

 const Era1980 = () => {
  const navigate = useNavigate();

  const dummy1980 = [
    <div
      className="card-inner"
      onClick={() => navigate('/1980/sub')}
      
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Back to the 80s</p>
      <img src="/images/80s1.jpg" alt="1" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/1980/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Hello, 1980!</p>
      <img src="/images/80s2.jpg" alt="2" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/1980/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Hello, 1980!</p>
      <img src="/images/805.png" alt="3" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/1980/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Welcome, 1980!</p>
      <img src="/images/80s4.jpg" alt="4" style={{ width: '100%' }} />
    </div>,
  ];

  return (
    <>
      <div className="era1980-header">
        <Header styleType="era1980" />
      </div>
      <EraCard styleType="era1980" dummyContent={dummy1980} />
      <Footer styleType="era1980" />
    </>
  );
}

export default Era1980;