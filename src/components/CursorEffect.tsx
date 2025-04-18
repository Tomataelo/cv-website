import React, { useState, useEffect } from 'react';

const CursorEffect: React.FC = () => {
    const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    const updateCursorPosition = (e: MouseEvent) => {
        setCursorPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 w-screen h-screen"
            style={{
                background: `radial-gradient(400px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(23, 103, 255, 0.1), transparent)`,
                transition: 'background 0.1s ease-out',
                zIndex: 9999,
            }}
        ></div>
    );
};

export default CursorEffect;
