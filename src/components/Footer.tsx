import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Vídeos Milionários Virais</h3>
            <p>Conteúdo Exclusivo em 24K</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#categorias">Categorias</a></li>
                <li><a href="#networking">Networking</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#oferta">Oferta</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Suporte</h4>
              <ul>
                <li><a href="#faq">Central de Ajuda</a></li>
                <li><a href="#política">Política de Privacidade</a></li>
                <li><a href="#termos">Termos de Uso</a></li>
                <li><a href="#garantia">Garantia</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Contato</h4>
              <ul className="social-links">
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#whatsapp">WhatsApp</a></li>
                <li><a href="#telegram">Telegram</a></li>
                <li><a href="#email">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Vídeos Milionários Virais. Todos os direitos reservados.</p>
          <p className="disclaimer">
            Este site não é afiliado a nenhuma plataforma de redes sociais.
            Os resultados podem variar dependendo do seu esforço e dedicação.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;