import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EraCard from '../components/EraCard';
import '../styles/era1990.css';

const Era1990 = () => {
  const navigate = useNavigate();

  const dummy1990 = [
    <div
      className="card-inner"
      onClick={() => navigate('/1990/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Back to the 90s</p>
      <img src="/images/90s1.jpg" alt="1" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/1990/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Back to the 90s</p>
      <img src="/images/90s2.png" alt="2" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/1990/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Back to the 90s</p>
      <img src="/images/900.jpg" alt="3" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/1990/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Back to the 90</p>
      <img src="/images/904.png" alt="4" style={{ width: '100%' }} />
    </div>,
  ];

  return (
    <>
      <div className="era1990-page">
        <div className="era1990-header">
          <Header styleType="era1990" />
        </div>
        </div>
        <EraCard styleType="era1990" dummyContent={dummy1990} />
        <Footer styleType="era1990" /> {/* ✅ Footer를 div 안으로 넣음 */}
      
    </>
  );
};

export default Era1990;