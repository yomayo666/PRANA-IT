import React, { Component } from 'react';


class ParticleCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
          particles: [],
        };
      }
    
      componentDidMount() {
        this.createParticles();
        this.animateParticles();
        window.addEventListener('mousemove', this.handleMouseMove);
      }
    
      componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
      }
    
      createParticles = () => {
        const numParticles = 2000; // Количество частиц
        const particles = [];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
    
        for (let i = 0; i < numParticles; i++) {
          const angle = Math.random() * Math.PI * 2; // Случайный угол
          const distance = Math.random() * 500; // Случайное расстояние от центра
    
          const x = centerX + Math.cos(angle) * distance;
          const y = centerY + Math.sin(angle) * distance;
    
          const speedX = (Math.random() - 0.2) * 0.5; // Уменьшаем скорость
          const speedY = (Math.random() - 0.2) * 0.5; // Уменьшаем скорость
    
          const radius = 2;
    
          particles.push({ id: i, x, y, speedX, speedY, radius });
        }
    
        this.setState({ particles });
      };
    
      animateParticles = () => {
        requestAnimationFrame(this.animateParticles);
        const { particles, cursorX, cursorY } = this.state;
        const context = this.canvas.getContext('2d');
    
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
        for (const particle of particles) {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
    
          if (
            particle.x < 0 ||
            particle.x > window.innerWidth ||
            particle.y < 0 ||
            particle.y > window.innerHeight
          ) {
            particle.x = Math.random() * window.innerWidth;
            particle.y = Math.random() * window.innerHeight;
          }
    
          const distance = Math.sqrt(
            (cursorX - particle.x) ** 2 + (cursorY - particle.y) ** 2
          );
    
          if (distance < 50) {
            const angle = Math.atan2(cursorY - particle.y, cursorX - particle.x);
            particle.speedX += Math.cos(angle) * 0.1; // Уменьшаем силу отталкивания
            particle.speedY += Math.sin(angle) * 0.1; // Уменьшаем силу отталкивания
          }
    
          context.beginPath();
          context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
          context.fillStyle = 'rgba(255, 255, 255, 0.6)';
          context.fill();
        }
      };
    
      handleMouseMove = (event) => {
        this.setState({
          cursorX: event.clientX,
          cursorY: event.clientY,
        });
      };
    
      render() {
        return (
          <canvas
            ref={(canvas) => (this.canvas = canvas)}
            style={{ position: 'absolute', top: 0, left: 0 , width: '100%', height: '100%'}}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        );
      }
    }
  
  export default ParticleCanvas;