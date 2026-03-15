import React, { useEffect, useRef } from 'react';

class Bubble {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
    life: number;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 5;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
        this.color = color;
        this.life = 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.95; // Shrink over time
        this.life -= 0.02; // Fade out
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}

const InteractiveBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const bubbles = useRef<Bubble[]>([]);
    const animationFrameId = useRef<number>(0);
    const colors = ['#a855f7', '#d8b4fe', '#6b21a8', '#38bdf8']; // Purple & Cyan

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        let mouseX = width / 2;
        let mouseY = height / 2;
        let isMoving = false;
        let moveTimeout: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            isMoving = true;

            // Generate particles at mouse position
            for (let i = 0; i < 2; i++) {
                const color = colors[Math.floor(Math.random() * colors.length)];
                bubbles.current.push(new Bubble(mouseX, mouseY, color));
            }

            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => {
                isMoving = false;
            }, 100);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw existing bubbles
            for (let i = 0; i < bubbles.current.length; i++) {
                bubbles.current[i].update();
                bubbles.current[i].draw(ctx);
            }

            // Remove dead bubbles
            bubbles.current = bubbles.current.filter((b) => b.life > 0 && b.size > 0.5);

            // Add stray ambient bubbles if not moving to keep it alive
            if (!isMoving && Math.random() > 0.95) {
                const color = colors[Math.floor(Math.random() * colors.length)];
                bubbles.current.push(new Bubble(
                    Math.random() * width,
                    Math.random() * height,
                    color
                ));
            }

            animationFrameId.current = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId.current);
            clearTimeout(moveTimeout);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60"
            style={{ width: '100vw', height: '100vh' }}
        />
    );
};

export default InteractiveBackground;
