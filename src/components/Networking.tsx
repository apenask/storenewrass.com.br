import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, Users, TrendingUp } from 'lucide-react';
import '../styles/Networking.css';

const Networking: React.FC = () => {
  const [showTyping, setShowTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1, 
      text: "Acabei de bater 50k views com seu vídeo!",
      type: "sender",
      visible: true
    },
    {
      id: 2, 
      text: "Excelente! Agora aplique a estratégia de monetização que ensinei!",
      type: "receiver",
      visible: false
    },
    {
      id: 3, 
      text: "Já estou aplicando, as conversões estão subindo! 📈",
      type: "sender",
      visible: false
    },
    {
      id: 4, 
      text: "Perfeito! Você está no caminho certo. Mande os resultados no grupo VIP! 🔥",
      type: "receiver",
      visible: false
    }
  ]);

  // Função para exibir mensagens sequencialmente
  useEffect(() => {
    const showMessages = async () => {
      // Primeira mensagem já está visível
      
      // Mostrar digitando após 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowTyping(true);
      
      // Mostrar segunda mensagem após 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowTyping(false);
      setMessages(prev => 
        prev.map(msg => msg.id === 2 ? {...msg, visible: true} : msg)
      );
      
      // Mostrar digitando após 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowTyping(true);
      
      // Mostrar terceira mensagem após 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowTyping(false);
      setMessages(prev => 
        prev.map(msg => msg.id === 3 ? {...msg, visible: true} : msg)
      );
      
      // Mostrar digitando após 1.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowTyping(true);
      
      // Mostrar quarta mensagem após 2 segundos
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowTyping(false);
      setMessages(prev => 
        prev.map(msg => msg.id === 4 ? {...msg, visible: true} : msg)
      );
    };
    
    // Iniciar sequência após meio segundo
    const timer = setTimeout(() => {
      showMessages();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="networking-section" id="networking">
      <div className="container">
        <div className="networking-grid">
          <div className="networking-content">
            <h2>Networking Exclusivo 24K</h2>
            <p className="networking-intro">
              Conecte-se com criadores que já conquistaram o sucesso e aprenda diretamente
              com quem já está lucrando com conteúdo premium.
            </p>
            <ul className="networking-features">
              <li>
                <Users className="feature-icon" size={35} />
                <span>Acesso a Criadores Bem-Sucedidos</span>
              </li>
              <li>
                <TrendingUp className="feature-icon" size={35} />
                <span>Discord para Network</span>
              </li>
              <li>
                <MessageCircle className="feature-icon" size={35} />
                <span>Suporte Direto</span>
              </li>
              <li>
                <Clock className="feature-icon" size={35} />
                <span>Primeiros a Receber Atualizações</span>
              </li>
            </ul>
          </div>
          <div className="networking-image">
            <div className="phone-mockup">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-content">
                  <div className="phone-header">
                    <div className="chat-avatar">24k</div>
                    <div>
                      <div className="chat-name">Network 24k</div>
                      <div className="chat-status">Online</div>
                    </div>
                  </div>
                  
                  {messages.map((message) => (
                    message.visible && (
                      <div key={message.id} className={`message ${message.type}`}>
                        {message.text}
                      </div>
                    )
                  ))}
                  
                  {showTyping && (
                    <div className="typing">
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                      <div className="typing-dot"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Networking;