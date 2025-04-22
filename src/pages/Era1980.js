import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EraCard from '../components/EraCard';
import '../styles/era1980.css';

function Era1980() {
  return (
    <>
        <Header styleType="era1980" />
        <EraCard styleType="era1980" />
        <Footer styleType="era1980" />
    </>
  );
}

export default Era1980;