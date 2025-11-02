import React from 'react';
import SubLayout from '../components/SubLayout';
import '../styles/era2010sub.css';

const Era2010sub = () => {
  return (
    <SubLayout
      styleType="era2010sub"
      headerStyleType="era2010sub"
      use3D={true} // 🔥 여기에만 true
      modelPath="/m10odels/scene.gltf"
      modelScale={16}
      texts={[
        '> 시대: 2010s',
        '> 키워드: 플랫 디자인, 모바일, 카드 UI',
        '> 설명: 사용자 경험(UX)이 디자인의 중심이 되었던 시기입니다.',
      ]}
    />
  );
};

export default Era2010sub;