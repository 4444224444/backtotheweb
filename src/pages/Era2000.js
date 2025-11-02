import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EraCard from '../components/EraCard';
import '../styles/era2000.css';

const Era2000 = () => {
  const navigate = useNavigate();

  const dummy2000 = [
    <div
      className="card-inner"
      onClick={() => navigate('/2000/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Hello 00s</p>
      <img src="/images/00s1.jpg" alt="1" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/2000/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Back to the 00s</p>
      <img src="/images/00s2.jpg" alt="2" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/2000/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Back to the 00s</p>
      <img src="/images/00s3.jpg" alt="3" style={{ width: '100%' }} />
    </div>,

    <div
      className="card-inner"
      onClick={() => navigate('/2000/sub')}
      style={{ width: '100%', height: '100%', cursor: 'pointer' }}
    >
      <p>Hello 00s!</p>
      <img src="/images/00s4.jpg" alt="4" style={{ width: '100%' }} />
    </div>,
  ];

  return (
    <>
      <div className="era2000-page">
        <div className="era2000-header">
          <Header styleType="era2000" />
        </div>
        </div>

        <EraCard styleType="era2000" dummyContent={dummy2000} />

        <Footer styleType="era2000" /> {/* ✅ div 안으로 이동 */}
    </>
  );
};

export default Era2000;