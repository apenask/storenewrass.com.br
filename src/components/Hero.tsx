import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 className="gold-glow" id="hero-title">Vídeos Milionários<br />Ouro Premium</h1>
        <p className="hero-subtitle gold-glow">Conteúdo Exclusivo em 24K</p>
        <a href="#oferta" className="cta-gold pulse-animation">
          Acesso Imediato - R$19,90
        </a>
        <div className="hero-features">
          <span><span className="star">★</span> 120+ Vídeos</span>
          <span><span className="star">★</span> Grupo VIP</span>
          <span><span className="star">★</span> Suporte 24h</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;