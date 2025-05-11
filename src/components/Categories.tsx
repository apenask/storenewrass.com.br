import React from 'react';
import '../styles/Categories.css';

const Categories: React.FC = () => {
  const categories = [
    { nome: "Supercarros", quantidade: "25 vídeos", descricao: "Lamborghini, Ferrari, Bugatti" },
    { nome: "Jatos Privados", quantidade: "18 vídeos", descricao: "Interiores luxuosos, decolagens" },
    { nome: "Iates", quantidade: "15 vídeos", descricao: "Passeios em alto-mar, detalhes" },
    { nome: "Viagens Luxo", quantidade: "22 vídeos", descricao: "Destinos paradisíacos" },
    { nome: "Dinheiro", quantidade: "10 vídeos", descricao: "Notas, moedas, efeitos" },
    { nome: "Estilo de Vida", quantidade: "30 vídeos", descricao: "Experiências exclusivas" }
  ];

  return (
    <section className="categories" id="categorias">
      <div className="container">
        <h2>Conteúdo Organizado</h2>
        <div className="grid-categorias">
          {categories.map((cat, index) => (
            <div 
              className="category-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <h3>{cat.nome}</h3>
              <p>{cat.quantidade}</p>
              <p className="descricao">{cat.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;