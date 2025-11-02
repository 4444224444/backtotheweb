import React, { useEffect, useState, useRef } from 'react';

const EraCard = ({ styleType, dummyContent }) => {
  const [boxes, setBoxes] = useState([]);
  const zCounter = useRef(1);
  const activeDragId = useRef(null);
  const allowDrag = useRef(true);

  useEffect(() => {
    const newBoxes = Array.from({ length: 5 }, (_, i) => {
      const top = Math.floor(Math.random() * 60) + 10;
      const left = Math.floor(Math.random() * 60) + 10;
      const width = Math.floor(Math.random() * 220) + 240;
      const height = Math.floor(Math.random() * 180) + 190;

      return {
        id: crypto.randomUUID(),
        top,
        left,
        width,
        height,
        zIndex: 1,
        content: dummyContent[i % dummyContent.length], // ✨ props로 받은 content
      };
    });
    setBoxes(newBoxes);
  }, [dummyContent]);

  const handleMouseDown = (e, id) => {
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const edgeThreshold = 16;

    const nearRightEdge = e.clientX > rect.right - edgeThreshold;
    const nearBottomEdge = e.clientY > rect.bottom - edgeThreshold;

    allowDrag.current = !(nearRightEdge && nearBottomEdge);

    if (allowDrag.current) {
      zCounter.current += 1;
      setBoxes((prev) =>
        prev.map((box) =>
          box.id === id ? { ...box, zIndex: zCounter.current } : box
        )
      );
      activeDragId.current = id;
    }
  };

  const handleMouseUp = () => {
    activeDragId.current = null;
  };

  const handleMouseMove = (e) => {
    const id = activeDragId.current;
    if (!id || !allowDrag.current || e.buttons !== 1) return;

    const deltaX = e.movementX;
    const deltaY = e.movementY;

    setBoxes((prev) =>
      prev.map((box) =>
        box.id === id
          ? {
              ...box,
              top: box.top + (deltaY / window.innerHeight) * 100,
              left: box.left + (deltaX / window.innerWidth) * 100,
            }
          : box
      )
    );
  };

  return (
    <div className={`eraCard ${styleType}`} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
      {boxes.map((box) => (
        <div
          key={box.id}
          className="resizable-box"
          style={{
            top: `${box.top}vh`,
            left: `${box.left}vw`,
            width: `${box.width}px`,
            height: `${box.height}px`,
            position: 'absolute',
            zIndex: box.zIndex,
          }}
          onMouseDown={(e) => handleMouseDown(e, box.id)}
        >
          {box.content}
        </div>
      ))}
    </div>
  );
};

export default EraCard;