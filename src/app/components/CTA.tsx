import { ArrowRight, Zap } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white" aria-labelledby="cta-heading">
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="bg-black p-10 sm:p-12 md:p-14 lg:p-16 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] border-2 sm:border-4 border-[#A0FF00] shadow-[10px_10px_0px_0px_rgba(160,255,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(160,255,0,1)] md:shadow-[16px_16px_0px_0px_rgba(160,255,0,1)] relative overflow-hidden">
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#A0FF00] rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-[#CDFF00] rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none"></div>

          <div className="relative text-center">
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#A0FF00] rounded-full border-2 sm:border-4 border-white mb-7 sm:mb-8">
              <Zap className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-black" />
            </div>

            {/* Title */}
            <h2 id="cta-heading" className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 sm:mb-6 uppercase">
              Начните <span className="text-[#A0FF00]">сегодня</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto font-bold leading-[1.4]">
              Ваш персональный AI-диетолог уже ждёт вас в Telegram
            </p>

            {/* Pricing reminder */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-10 sm:mb-12 md:mb-14">
              <div className="w-full sm:w-auto bg-white rounded-2xl sm:rounded-[1.5rem] px-8 py-5 sm:px-10 sm:py-6 border-2 sm:border-4 border-[#A0FF00] text-center min-w-[180px]">
                <div className="text-black text-xs sm:text-sm font-black mb-1.5 uppercase tracking-wider whitespace-nowrap">Анализ</div>
                <div className="text-5xl sm:text-6xl font-black text-black whitespace-nowrap">990₽</div>
              </div>
              
              <div className="text-[#A0FF00] text-3xl sm:text-4xl font-black flex-shrink-0">+</div>
              
              <div className="w-full sm:w-auto bg-[#A0FF00] rounded-2xl sm:rounded-[1.5rem] px-8 py-5 sm:px-10 sm:py-6 border-2 sm:border-4 border-white text-center min-w-[180px]">
                <div className="text-black text-xs sm:text-sm font-black mb-1.5 uppercase tracking-wider whitespace-nowrap">Подписка</div>
                <div className="text-5xl sm:text-6xl font-black text-black whitespace-nowrap">990₽</div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://t.me/superdietolog_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#A0FF00] text-black font-black px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(160,255,0,0.4)] hover:shadow-[0_0_80px_rgba(160,255,0,0.6)] text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight w-full sm:w-auto max-w-md sm:max-w-none mx-auto"
              aria-label="Перейти в AI-Супердиетолог в Telegram"
            >
              <span className="whitespace-nowrap">Перейти в Telegram</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
            </a>

            <p className="text-white/60 text-sm sm:text-base mt-5 sm:mt-6 font-black uppercase tracking-wider whitespace-nowrap">
              @superdietolog_bot
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}