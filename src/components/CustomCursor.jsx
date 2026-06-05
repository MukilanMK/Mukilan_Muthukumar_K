import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -100, y: -100, lastX: 0, lastY: 0, isDown: false, isHovering: false });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, color, size, speedX, speedY, type = 'trail') {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.maxSize = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.life = 1.0;
        this.decay = type === 'click' ? 0.02 + Math.random() * 0.025 : 0.035 + Math.random() * 0.025;
        this.type = type;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Gravity and friction physics for click explosions
        if (this.type === 'click') {
          this.speedY += 0.09; // gravity
          this.speedX *= 0.98; // horizontal drag
        } else {
          this.speedX *= 0.92;
          this.speedY *= 0.92;
        }

        this.life -= this.decay;
        this.size = Math.max(0, this.maxSize * this.life);
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Neon ambient glow
        ctx.shadowBlur = this.size * 2.5;
        ctx.shadowColor = this.color;
        
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const neonColors = [
      '#22d3ee', // Cyan
      '#6366f1', // Indigo
      '#a855f7', // Purple
      '#3b82f6', // Blue
      '#06b6d4'  // Dark Teal
    ];

    const spawnParticles = (x, y, count, type = 'trail') => {
      for (let i = 0; i < count; i++) {
        const color = neonColors[Math.floor(Math.random() * neonColors.length)];
        const size = type === 'click' 
          ? 3 + Math.random() * 5 
          : 2.5 + Math.random() * 3;
        
        let speedX, speedY;
        if (type === 'click') {
          const angle = Math.random() * Math.PI * 2;
          const force = 1.5 + Math.random() * 5;
          speedX = Math.cos(angle) * force;
          speedY = Math.sin(angle) * force - 1.2; // Slight upward eject
        } else {
          // Trail disperses in opposite direction of mouse motion
          const dx = x - mouseRef.current.lastX;
          const dy = y - mouseRef.current.lastY;
          speedX = -dx * 0.15 + (Math.random() - 0.5) * 1.5;
          speedY = -dy * 0.15 + (Math.random() - 0.5) * 1.5;
        }

        particlesRef.current.push(new Particle(x, y, color, size, speedX, speedY, type));
      }
    };

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const mouse = mouseRef.current;
      const dist = Math.hypot(x - mouse.x, y - mouse.y);
      
      if (dist > 3) {
        spawnParticles(x, y, mouse.isDown ? 3 : 1, 'trail');
      }

      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
      mouse.x = x;
      mouse.y = y;
    };

    const handleMouseDown = () => {
      mouseRef.current.isDown = true;
      spawnParticles(mouseRef.current.x, mouseRef.current.y, 25, 'click');
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    const handleMouseOver = (e) => {
      if (e.target && e.target.closest) {
        const isClickable = e.target.closest('a, button, [role="button"], input, select, textarea') || window.getComputedStyle(e.target).cursor === 'pointer';
        mouseRef.current.isHovering = !!isClickable;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        if (p.life <= 0 || p.size <= 0) {
          particles.splice(i, 1);
        } else {
          p.draw();
        }
      }

      // Draw the core glowing pointer dot
      const mouse = mouseRef.current;
      ctx.save();
      
      if (mouse.isHovering) {
        // Outer ring for clickable elements
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#a855f7';
        ctx.stroke();
        
        // Inner dot
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#22d3ee';
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block"
    />
  );
};

export default CustomCursor;
