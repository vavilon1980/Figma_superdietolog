import heroImage from 'figma:asset/6c61d450fd3273670f131511f69bc8c888bbbb93.png';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      aria-label="Главная секция"
    >
      {/* Neon glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] bg-[#A0FF00] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#CDFF00] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] opacity-15"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 sm:px-6 sm:py-3 mb-6 sm:mb-8 border-2 sm:border-4 border-[#A0FF00]">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0" />
              <span className="text-sm sm:text-base text-black font-black uppercase tracking-tight whitespace-nowrap">AI-Ассистент</span>
            </div>

            {/* Mega Title */}
            <h1 className="text-[2.5rem] leading-[0.9] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tight uppercase">
              AI-СУПЕР<br />
              <span className="text-[#A0FF00] drop-shadow-[0_0_20px_rgba(160,255,0,0.5)] sm:drop-shadow-[0_0_30px_rgba(160,255,0,0.5)]">ДИЕТОЛОГ</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-black leading-tight mb-3 sm:mb-4 uppercase">
              Стабильное похудение
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-[#A0FF00] font-black mb-8 sm:mb-10 uppercase">
              без диет и срывов
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 sm:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-bold">
              Персональный AI-диетолог в Telegram 24/7. Комплексный анализ, индивидуальное меню и поддержка на пути к здоровому весу
            </p>

            {/* Pricing Cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start items-center mb-10 sm:mb-12">
              <div className="w-full sm:w-auto bg-white rounded-2xl sm:rounded-[2rem] px-8 py-5 sm:px-10 sm:py-6 border-2 sm:border-4 border-[#A0FF00] shadow-[0_0_30px_rgba(160,255,0,0.3)] sm:shadow-[0_0_40px_rgba(160,255,0,0.3)] hover:shadow-[0_0_60px_rgba(160,255,0,0.5)] transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-black text-xs sm:text-sm font-black mb-1.5 uppercase tracking-wider whitespace-nowrap">Анализ</div>
                <div className="text-5xl sm:text-6xl font-black text-black whitespace-nowrap">990₽</div>
              </div>
              
              <div className="text-[#A0FF00] text-3xl sm:text-4xl font-black flex-shrink-0">+</div>
              
              <div className="w-full sm:w-auto bg-black rounded-2xl sm:rounded-[2rem] px-8 py-5 sm:px-10 sm:py-6 border-2 sm:border-4 border-[#A0FF00] shadow-[0_0_30px_rgba(160,255,0,0.3)] sm:shadow-[0_0_40px_rgba(160,255,0,0.3)] hover:shadow-[0_0_60px_rgba(160,255,0,0.5)] transition-all duration-300 transform hover:scale-105 text-center">
                <div className="text-[#A0FF00] text-xs sm:text-sm font-black mb-1.5 uppercase tracking-wider whitespace-nowrap">Подписка</div>
                <div className="text-5xl sm:text-6xl font-black text-white whitespace-nowrap">990₽</div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://telegram.me/superdietolog_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#A0FF00] text-black font-black px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_0_40px_rgba(160,255,0,0.4)] hover:shadow-[0_0_80px_rgba(160,255,0,0.6)] text-base sm:text-lg md:text-xl lg:text-2xl uppercase tracking-tight w-full sm:w-auto max-w-sm sm:max-w-none mx-auto lg:mx-0"
              aria-label="Начать работу с AI-Супердиетологом в Telegram"
            >
              <span className="whitespace-nowrap">Начать сейчас</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" />
            </a>

            <p className="text-[#A0FF00] text-sm sm:text-base mt-5 sm:mt-6 font-black uppercase tracking-wider whitespace-nowrap">
              @superdietolog_bot
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              {/* Neon glow */}
              <div className="absolute -inset-3 sm:-inset-4 bg-[#A0FF00] rounded-3xl sm:rounded-[3rem] blur-2xl sm:blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              {/* Image container */}
              <div className="relative rounded-3xl sm:rounded-[3rem] overflow-hidden border-2 sm:border-4 border-[#A0FF00] shadow-[0_0_40px_rgba(160,255,0,0.3)] sm:shadow-[0_0_60px_rgba(160,255,0,0.3)] transform group-hover:scale-[1.02] transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="AI-Супердиетолог - персональный диетолог в Telegram для похудения без диет и срывов" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}