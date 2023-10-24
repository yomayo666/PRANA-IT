import React, { Component } from 'react';

class ParticleCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particles: [],
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
    };
  }

  componentDidMount() {
    this.createParticles();
    this.animateParticles();
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('resize', this.handleResize);
  }

  createParticles = () => {
    const numParticles = 2000;
    const particles = [];
    const centerX = this.state.canvasWidth / 2;
    const centerY = this.state.canvasHeight / 2;

    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 500;

      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;

      const speedX = (Math.random() - 0.2) * 0.5;
      const speedY = (Math.random() - 0.2) * 0.5;

      const radius = 2;

      particles.push({ id: i, x, y, speedX, speedY, radius });
    }

    this.setState({ particles });
  };

  animateParticles = () => {
    requestAnimationFrame(this.animateParticles);
    const { particles, cursorX, cursorY } = this.state;
    const context = this.canvas.getContext('2d');

    context.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);

    for (const particle of particles) {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (
        particle.x < 0 ||
        particle.x > this.state.canvasWidth ||
        particle.y < 0 ||
        particle.y > this.state.canvasHeight
      ) {
        particle.x = Math.random() * this.state.canvasWidth;
        particle.y = Math.random() * this.state.canvasHeight;
      }

      const distance = Math.sqrt(
        (cursorX - particle.x) ** 2 + (cursorY - particle.y) ** 2
      );

      if (distance < 50) {
        const angle = Math.atan2(cursorY - particle.y, cursorX - particle.x);
        particle.speedX += Math.cos(angle) * 0.1;
        particle.speedY += Math.sin(angle) * 0.1;
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

  handleResize = () => {
    this.setState({
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
    });
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createParticles();
  };

  render() {
    return (
      <canvas
        ref={(canvas) => (this.canvas = canvas)}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        width={this.state.canvasWidth}
        height={this.state.canvasHeight}
      />
    );
  }
}

export default ParticleCanvas;
