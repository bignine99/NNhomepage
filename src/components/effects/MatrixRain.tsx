'use client';

import { useEffect, useRef } from 'react';

export function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Canvas 크기 설정
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Matrix 설정
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);
        
        // 이진 코드 (0과 1)
        const binaryChars = '01';
        
        // 그라디언트 색상 (Cybernetic 테마에 맞춤)
        const colors = [
            'rgba(99, 102, 241, 0.8)',   // Primary (Violet)
            'rgba(14, 165, 233, 0.8)',   // Secondary (Cyan)
            'rgba(16, 185, 129, 0.8)',   // Accent (Green)
        ];

        function draw() {
            if (!ctx || !canvas) return;

            // 페이드 효과 (꼬리 효과)
            ctx.fillStyle = 'rgba(5, 12, 28, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                // 랜덤 이진 문자 선택
                const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
                
                // 랜덤 색상 선택
                const color = colors[Math.floor(Math.random() * colors.length)];
                ctx.fillStyle = color;

                // 텍스트 그리기
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                ctx.fillText(text, x, y);

                // 리셋 조건 (화면 끝에 도달하거나 랜덤하게)
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        // 애니메이션 시작
        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none opacity-20 -z-10"
        />
    );
}

