import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Header from './Header';

const SubLayout = ({ styleType, headerStyleType, use3D, modelPath, modelScale = 6, texts }) => {
  const Model = () => {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={modelScale} />;
  };

  return (
    <div className={`${styleType}-page`}>
      <Header styleType={headerStyleType || styleType} />

      <div
        className={`${styleType}-content`}
        style={{ flexDirection: 'column', alignItems: 'center', display: 'flex' }}
      >
        {use3D && (
          <>
            <div style={{ width: '900px', height: '500px' }}>
              <Canvas camera={{ position: [0, 2, 5] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <Suspense fallback={null}>
                  <Model />
                </Suspense>
                <OrbitControls enableZoom={false} target={[0, 1, 0]} />
              </Canvas>
            </div>
          </>
        )}

        <div className="text-box" style={{ marginTop: '0.2rem' }}>
          {texts.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubLayout;