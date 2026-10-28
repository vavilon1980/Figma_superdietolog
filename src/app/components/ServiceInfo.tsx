import { CheckCircle2 } from 'lucide-react';

export function ServiceInfo() {
  const features = [
    'Комплексный анализ причин лишнего веса',
    'Индивидуальный подход без жёстких диет',
    'Недельное меню под ваши цели',
    'Поддерживающий диалог в чате',
    'Расчёты: ИМТ, калорийность, БЖУ, режим воды',
    'Конкретные рекомендации по всем уровням'
  ];

  return (
    <section 
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white" 
      aria-labelledby="service-info-heading"
      itemScope 
      itemType="https://schema.org/Service"
    >
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 id="service-info-heading" className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-5 sm:mb-6 uppercase">
            Что вы <span className="text-[#A0FF00]">получите</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto font-bold uppercase">
            Полный анализ и индивидуальный план питания для похудения
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article 
              key={index}
              className="bg-white p-6 sm:p-7 md:p-8 lg:p-9 rounded-2xl sm:rounded-[2rem] border-2 sm:border-4 border-black hover:border-[#A0FF00] transition-all duration-300 transform hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(160,255,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(160,255,0,1)] flex flex-col items-start min-h-[160px] sm:min-h-[180px]"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-[#A0FF00] mb-4 sm:mb-5 flex-shrink-0" aria-hidden="true" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-black leading-[1.3] uppercase" itemProp="description">
                {feature}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}