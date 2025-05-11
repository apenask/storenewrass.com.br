import React from 'react';
import '../styles/Pricing.css';

const Pricing: React.FC = () => {
  return (
    <section className="pricing-section" id="oferta">
      <div className="container">
        <div className="pricing-card">
          <h2 className="pricing-title">Acesso Vitalício</h2>
          <div className="pricing-features">
            <div className="pricing-feature">
              <span className="check-icon">✓</span>
              <span>120+ Vídeos em Alta Qualidade</span>
            </div>
            <div className="pricing-feature">
              <span className="check-icon">✓</span>
              <span>Grupo Networking 24k (Após 07 dias)</span>
            </div>
            <div className="pricing-feature">
              <span className="check-icon">✓</span>
              <span>Suporte Personalizado</span>
            </div>
            <div className="pricing-feature">
              <span className="check-icon">✓</span>
              <span>Bônus Exclusivos</span>
            </div>
          </div>
          <div className="price-container">
            <div className="original-price">De <span>R$59,90</span></div>
            <div className="price-tag">R$19,90</div>
            <div className="payment-info">Pagamento único</div>
          </div>
          <a href="#checkout" className="cta-gold btn-lg pulse-animation">
            Garantir Acesso Imediato
          </a>
          <div className="guarantee">
            <div className="guarantee-badge">7 DIAS</div>
            <div className="guarantee-text">
              <strong>Garantia Incondicional</strong>
              <p>Satisfação total ou seu dinheiro de volta</p>
            </div>
          </div>
          <div className="secure-payment">
            <div className="payment-methods">
              <img 
                src="https://logopng.com.br/logos/pix-106.svg" 
                alt="PIX"
                className="payment-icon"
              />
              <img 
                src="https://imagepng.org/wp-content/uploads/2019/09/boleto-simbolo.png" 
                alt="Boleto"
                className="payment-icon"
              />
            </div>
            <div className="payment-brands">
              <img 
                src="https://logopng.com.br/logos/visa-17.svg" 
                alt="Visa"
                className="brand-icon"
              />
              <img 
                src="https://logopng.com.br/logos/mastercard-18.svg" 
                alt="Mastercard"
                className="brand-icon"
              />
              <img 
                src="	https://logopng.com.br/logos/elo-30.svg" 
                alt="Elo"
                className="brand-icon"
              />
            </div>
            <p>Pagamento 100% Seguro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;