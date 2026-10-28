import { Bot, Heart } from 'lucide-react';

interface FooterProps {
  onPrivacyClick?: () => void;
  onOfferClick?: () => void;
  onConsentClick?: () => void;
}

export function Footer({ onPrivacyClick, onOfferClick, onConsentClick }: FooterProps = {}) {
  return (
    <footer 
      className="relative bg-black text-white py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-t-2 sm:border-t-4 border-[#A0FF00]" 
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      
      {/* Neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[#A0FF00] rounded-full blur-[80px] sm:blur-[100px] opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-80 sm:h-80 bg-[#CDFF00] rounded-full blur-[100px] sm:blur-[120px] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
          
          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4" itemScope itemType="https://schema.org/Organization">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-[#A0FF00] rounded-full border-2 sm:border-4 border-white flex items-center justify-center shadow-[0_0_20px_rgba(160,255,0,0.3)] sm:shadow-[0_0_30px_rgba(160,255,0,0.3)] flex-shrink-0">
              <Bot className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-black" aria-hidden="true" />
            </div>
            <div>
              <div className="font-black text-white text-xl sm:text-2xl md:text-3xl uppercase whitespace-nowrap" itemProp="name">
                AI-Супердиетолог
              </div>
              <a 
                href="https://t.me/superdietolog_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#A0FF00] font-black whitespace-nowrap hover:underline"
                itemProp="url"
                aria-label="Перейти в Telegram бот AI-Супердиетолог"
              >
                @superdietolog_bot
              </a>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-right">
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-white/80 font-bold uppercase">
              Стабильное похудение без диет и срывов
            </p>
            <div className="flex items-center justify-center md:justify-end gap-2 text-xs sm:text-sm text-white/60 font-bold">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-[#A0FF00] fill-[#A0FF00] flex-shrink-0" aria-label="любовью" />
              <span>для вашего здоровья</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 md:my-12 h-0.5 sm:h-1 bg-[#A0FF00] rounded-full"></div>

        {/* Bottom */}
        <div className="text-center text-xs sm:text-sm text-white/60 space-y-3 sm:space-y-4">
          <p className="font-black uppercase whitespace-nowrap">© {new Date().getFullYear()} AI-Супердиетолог. Все права защищены.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-white/60">
            <button
              onClick={onPrivacyClick}
              className="hover:text-[#A0FF00] transition-colors font-bold underline"
              aria-label="Открыть политику конфиденциальности"
            >
              Политика конфиденциальности
            </button>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={onOfferClick}
              className="hover:text-[#A0FF00] transition-colors font-bold underline"
              aria-label="Открыть договор оферты"
            >
              Договор оферты
            </button>
            <span className="hidden sm:inline">•</span>
            <button
              onClick={onConsentClick}
              className="hover:text-[#A0FF00] transition-colors font-bold underline"
              aria-label="Открыть согласие на обработку персональных данных"
            >
              Согласие на обработку ПД
            </button>
            <span className="hidden sm:inline">•</span>
            <span className="font-bold">ИНН: 665910681771</span>
          </div>

          <p className="leading-relaxed font-bold max-w-4xl mx-auto">
            Бот не ставит диагнозы и не назначает лечение. Перед использованием проконсультируйтесь с врачом. Не является медицинской услугой.
          </p>
          <p className="leading-relaxed font-bold text-white/40 text-xs max-w-3xl mx-auto">
            <strong>Ключевые слова:</strong> похудение без диет, AI диетолог, телеграм бот, снижение веса, правильное питание, расчет калорий, БЖУ, индивидуальное меню, консультация диетолога онлайн
          </p>
        </div>
      </div>
    </footer>
  );
}