import React from 'react';
import SubLayout from '../components/SubLayout';
import '../styles/era1990sub.css';

const Era1990sub = () => {
  return (
    <SubLayout
      styleType="era1990sub" // ✅ 서브 전용 스타일
      headerStyleType="era1990sub" // ✅ 헤더만 따로 스타일 줄 수 있음
      use3D={true} // 🔥 여기에만 true
      modelPath="/m95odels/scene.gltf"
      modelScale={1}
      texts={[
        '> 시대: 1990s',
        '> 키워드: 윈도우95, 플로피디스크, 애니메이션 gif',
        '> 설명: 디지털 대중화의 시작, 인터넷의 보급기',
      ]}
    />
  );
};

export default Era1990sub;
