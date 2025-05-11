import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como recebo os vídeos após a compra?",
      answer: "Assim que seu pagamento for confirmado, você receberá um e-mail com as instruções de acesso. Os vídeos estarão disponíveis imediatamente para download via Google Drive, com links permanentes."
    },
    {
      question: "Existe alguma garantia se eu não gostar do conteúdo?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não estiver satisfeito com o conteúdo, basta nos enviar um e-mail que devolvemos 100% do seu investimento."
    },
    {
      question: "Posso usar os vídeos comercialmente?",
      answer: "Sim! Todos os vídeos possuem licença comercial, o que significa que você pode utilizá-los em suas redes sociais, sites, blogs e materiais promocionais sem preocupações com direitos autorais."
    },
    {
      question: "Como funciona o acesso ao grupo VIP?",
      answer: "Após a compra, você receberá um link exclusivo de acesso ao nosso grupo privado no Telegram. Lá você terá contato direto com outros produtores de conteúdo e nossa equipe de suporte."
    },
    {
      question: "Vocês lançam novos vídeos com frequência?",
      answer: "Sim! Atualizamos nossa biblioteca mensalmente com novos conteúdos. E o melhor: quem compra o pacote uma vez tem acesso a todas as atualizações futuras sem custo adicional."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;