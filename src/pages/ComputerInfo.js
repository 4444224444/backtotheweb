import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';

const ComputerInfo = () => {

  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: '4rem auto',
      fontFamily: 'sans-serif'
    },
    card: {
      background: '#f4f4f4',
      padding: '1rem 1.5rem',
      marginBottom: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      lineHeight: '1.8rem'
    }
  };

  const computers = [
    {
      decade: "1980s",
      model: "IBM Personal Computer (IBM PC 5150)",
      os: "PC-DOS 1.0",
      processor: "Intel 8088 @ 4.77 MHz",
      ram: "64KB ~ 640KB",
      graphics: "CGA (Color Graphics Adapter)",
      storage: "5.25-inch floppy disk (160KB)"
    },
    {
      decade: "1990s",
      model: "Compaq Presario 425",
      os: "Windows 95",
      processor: "Intel 486DX @ 33 MHz",
      ram: "4MB ~ 8MB",
      graphics: "VGA Graphics",
      storage: "Hard Drive 420MB"
    },
    {
      decade: "2000s",
      model: "Dell Dimension 4600",
      os: "Windows XP",
      processor: "Intel Pentium 4 @ 2.4GHz",
      ram: "512MB ~ 1GB",
      graphics: "NVIDIA GeForce4 MX",
      storage: "40GB ~ 80GB HDD"
    },
    {
      decade: "2010s",
      model: "Apple iMac (2012)",
      os: "macOS High Sierra",
      processor: "Intel Core i5 @ 2.7GHz",
      ram: "8GB",
      graphics: "Intel Iris Pro",
      storage: "1TB HDD"
    }
  ];

  return (
    <>
      <div className="Info-header">
        <Header styleType="home" />
      </div>

      <div style={styles.container}>
        <h2>Era-by-Era Computer Specs</h2>
        {computers.map((pc) => (
          <div key={pc.decade} style={styles.card}>
            <h3>{pc.decade}</h3>
            <ul style={styles.list}>
              <li><strong>Model:</strong> {pc.model}</li>
              <li><strong>OS:</strong> {pc.os}</li>
              <li><strong>Processor:</strong> {pc.processor}</li>
              <li><strong>RAM:</strong> {pc.ram}</li>
              <li><strong>Graphics:</strong> {pc.graphics}</li>
              <li><strong>Storage:</strong> {pc.storage}</li>
            </ul>
          </div>
        ))}
      </div>

      <Footer styleType="home" />
    </>
  );
};

export default ComputerInfo;