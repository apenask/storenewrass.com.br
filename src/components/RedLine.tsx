import React from 'react';
import { TrendingUp, Star, Eye, Users } from 'lucide-react';
import Counter from './Counter';
import '../styles/RedLine.css';

const RedLine: React.FC = () => {
  return (
    <section className="redline-wrapper">
      <div className="redline-container">
        <TrendingUp className="redline-icon redline-icon-1" size={32} />
        <h2 className="redline-heading">Aumente Suas Visualizações com o Pack Ouro Premium!</h2>
        <div className="redline-divider"></div>
        <p className="redline-text">
          Mais de <span className="redline-highlight">120 vídeos exclusivos</span> de dinheiro, 
          carros, aviões e muito mais, organizados por categoria para você 
          alcançar <span className="redline-highlight">resultados rápidos</span>. Esqueça a busca e o 
          trabalho de minerar vídeos – todo o conteúdo que você precisa está aqui, 
          <span className="redline-highlight"> pronto para ser usado</span>.
        </p>
        
        <div className="redline-stats">
          <Counter 
            end={500000} 
            duration={4000}
            label="Visualizações" 
            icon={<Eye size={20} />} 
          />
          <Counter 
            end={500000} 
            duration={4000}
            label="Seguidores" 
            icon={<Users size={20} />} 
          />
        </div>
        
        <Star className="redline-icon redline-icon-2" size={32} />
      </div>
    </section>
  );
};

export default RedLine;