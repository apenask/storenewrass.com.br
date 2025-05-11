import React from 'react';
import { Shield, Star, CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#222] py-16 px-4" id="oferta">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80">
            Acesso Premium Vitalício
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Transforme sua carreira com acesso exclusivo ao conteúdo que já impactou milhares de profissionais.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#222] rounded-2xl p-8 border border-[#D4AF37]/20 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative overflow-hidden">
          {/* Premium badge */}
          <div className="absolute -right-12 top-6 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 text-[#1a1a1a] font-bold py-1 px-12 transform rotate-45 text-sm shadow-xl">
            PREMIUM
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6 mb-8">
                {[
                  '120+ Vídeos em Alta Qualidade HD',
                  'Grupo VIP com 24k+ Membros',
                  'Suporte Premium Dedicado',
                  'Atualizações Vitalícias',
                  'Certificado de Conclusão',
                  '4 Bônus Exclusivos'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#1a1a1a]/50 p-4 rounded-lg border border-[#D4AF37]/10 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-[#D4AF37]" fill="#D4AF37" />
                  <span className="text-[#D4AF37] font-semibold">Bônus Limitado</span>
                </div>
                <p className="text-white/70 text-sm">
                  Acesso antecipado a novos conteúdos e workshops exclusivos.
                </p>
              </div>
            </div>

            <div>
              <div className="text-center mb-6">
                <div className="text-white/60 line-through mb-1">De R$597,00</div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 mb-2">
                  R$197,00
                </div>
                <div className="text-white/60">Pagamento único</div>
              </div>

              <button className="w-full py-4 px-6 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 text-[#1a1a1a] font-bold rounded-lg shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-300 transform hover:-translate-y-1 mb-6">
                GARANTIR ACESSO PREMIUM
              </button>

              <div className="flex items-center gap-4 p-4 bg-[#1a1a1a]/50 rounded-lg border border-[#D4AF37]/20 mb-6">
                <Shield className="w-10 h-10 text-[#D4AF37]" />
                <div>
                  <p className="font-semibold text-white">Garantia Premium de 7 Dias</p>
                  <p className="text-sm text-white/60">Satisfação total ou seu dinheiro de volta.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-white/60 mb-3">Pagamento 100% Seguro</p>
                <div className="flex justify-center gap-4 mb-4">
                  {['pix', 'visa', 'mastercard', 'elo'].map((brand) => (
                    <div key={brand} className="bg-white/10 p-2 rounded-lg w-12 h-8 flex items-center justify-center">
                      <img
                        src={`https://logopng.com.br/logos/${brand === 'pix' ? 'pix-106' : brand}-${brand === 'pix' ? '' : brand === 'visa' ? '17' : brand === 'mastercard' ? '18' : '30'}.svg`}
                        alt={brand}
                        className="h-full w-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;