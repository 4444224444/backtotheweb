import React from 'react';
import SubLayout from '../components/SubLayout';
import '../styles/era2000sub.css';

const Era2000sub = () => {
  return (
    <SubLayout
      styleType="era2000sub"
      headerStyleType="era2000sub" // ✅ 이게 헤더 디자인 결정
      use3D={true} // 🔥 여기에만 true
      modelPath="/m00odels/scene.gltf"
      modelScale={6}
      texts={[
        '> 시대: 2000s',
        '> 키워드: 윈도우XP, MSN, 블루톤 UI',
        '> 설명: 사용자 중심 디자인의 시작, XP와 함께한 유저 인터페이스의 시기',
      ]}
    />
  );
};

export default Era2000sub;
