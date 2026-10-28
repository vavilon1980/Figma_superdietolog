import { Target, TrendingDown, Smile } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: 'Стабильное похудение',
      description: 'Без жёстких ограничений и мучительного голода. Работаем с причинами, а не симптомами'
    },
    {
      icon: TrendingDown,
      title: 'Без срывов',
      description: 'Психологическая поддержка и понимание триггеров помогут избежать возврата к старым привычкам'
    },
    {
      icon: Smile,
      title: 'Улучшение самочувствия',
      description: 'Комплексный подход влияет не только на вес, но и на общее состояние здоровья'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black" aria-labelledby="benefits-heading">
      
      {/* Neon glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#CDFF00] rounded-full blur-[100px] sm:blur-[120px] md:blur-[140px] opacity-10"></div>
        <div className="absolute bottom-20 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#A0FF00] rounded-full blur-[80px] sm:blur-[90px] md:blur-[100px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 id="benefits-heading" className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-5 sm:mb-6 uppercase">
            Ваши <span className="text-[#A0FF00]">результаты</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-bold uppercase">
            Что вы получите от работы с AI-диетологом
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article 
                key={index}
                className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] border-2 sm:border-4 border-[#A0FF00] hover:shadow-[8px_8px_0px_0px_rgba(160,255,0,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(160,255,0,1)] transition-all duration-300 transform hover:scale-105 hover:rotate-1 flex flex-col min-h-[240px] sm:min-h-[260px]"
              >
                {/* Icon */}
                <div className="mb-5 sm:mb-6 md:mb-7 inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-black rounded-full border-2 sm:border-4 border-[#A0FF00] flex-shrink-0">
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#A0FF00]" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black mb-3 sm:mb-4 md:mb-5 uppercase leading-[1.2]">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-[1.6] font-bold">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}