import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Header styleType="home" />

      <main className="home-content">
        <h1 className="main-title">Back to the Web</h1>
        <p className="main-sub">Explore the evolution of digital design through decades</p>
      </main>

      <Footer styleType="home" />
    </div>
  );
};

export default Home;