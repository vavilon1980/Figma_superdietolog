import { Users } from 'lucide-react';

export function TargetAudience() {
  const audiences = [
    'Устали от жёстких диет и постоянных срывов на пути к похудению',
    'Хотите понять истинные причины лишнего веса и психосоматику',
    'Ищете индивидуальный подход без шаблонных диет',
    'Нужна профессиональная поддержка и мотивация на пути к здоровому весу',
    'Готовы работать над собой комплексно: питание, привычки, психология',
    'Хотите стабильный результат похудения без возврата веса'
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white" aria-labelledby="target-audience-heading">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left - Icon */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-black rounded-full border-4 sm:border-6 md:border-8 border-[#A0FF00] flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(160,255,0,1)] sm:shadow-[14px_14px_0px_0px_rgba(160,255,0,1)] md:shadow-[16px_16px_0px_0px_rgba(160,255,0,1)]">
                <Users className="w-26 h-26 sm:w-30 sm:h-30 md:w-36 md:h-36 text-[#A0FF00]" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <h2 id="target-audience-heading" className="text-[1.75rem] leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-8 sm:mb-10 md:mb-12 uppercase text-center lg:text-left">
              Это для <span className="text-[#A0FF00]">вас</span>, если вы:
            </h2>

            <div className="space-y-4 sm:space-y-5">
              {audiences.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 bg-white p-5 sm:p-6 md:p-7 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-[1.5rem] border-2 sm:border-4 border-black hover:border-[#A0FF00] transition-all duration-300 transform hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(160,255,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(160,255,0,1)]"
                >
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#A0FF00] rounded-full border-2 sm:border-3 border-black flex items-center justify-center mt-0.5">
                    <span className="text-black font-black text-base sm:text-lg md:text-xl">✓</span>
                  </div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-black leading-[1.4] flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}