import React from 'react';
import SubLayout from '../components/SubLayout';
import '../styles/era1980sub.css';

const Era1980sub = () => {
  return (
    <SubLayout
      styleType="era1980sub"
      headerStyleType="era1980"
      use3D={true} // 🔥 여기에만 true
      modelPath="/m80odels/scene.gltf"
      texts={[
        '> 시대: 1980s',
        '> 키워드: 레트로, 비디오, 카세트테이프',
        '> 설명: 1980년대는 시각적으로 가장 다채로운 문화적 전환기의 시기였음',
      ]}
    />
  );
};

export default Era1980sub;
