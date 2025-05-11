import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      title: "Supercarros",
      thumbnail: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      count: "25 vídeos"
    },
    {
      title: "Jatos Privados",
      thumbnail: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      count: "18 vídeos"
    },
    {
      title: "Iates",
      thumbnail: "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      count: "15 vídeos"
    },
    {
      title: "Viagens Luxo",
      thumbnail: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      count: "22 vídeos"
    },
    {
      title: "Dinheiro",
      thumbnail: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      count: "10 vídeos"
    },
    {
      title: "Estilo de Vida",
      thumbnail: "https://images.pexels.com/photos/1974520/pexels-photo-1974520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      count: "30 vídeos"
    }
  ];

  const nextSlide = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / 3;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      const newScroll = Math.min(carouselRef.current.scrollLeft + itemWidth, maxScroll);
      
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / 3;
      const newScroll = Math.max(carouselRef.current.scrollLeft - itemWidth, 0);
      
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="testimonials" id="depoimentos">
      <div className="container">
        <h2>Conteúdo Premium</h2>
        <div className="carousel-container">
          <button className="carousel-button prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <div className="carousel" ref={carouselRef}>
            {categories.map((category, index) => (
              <div key={index} className="carousel-item">
                <div className="carousel-card">
                  <img src={category.thumbnail} alt={category.title} />
                  <div className="carousel-content">
                    <h3>{category.title}</h3>
                    <p>{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;