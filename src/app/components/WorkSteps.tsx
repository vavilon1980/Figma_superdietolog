import { ClipboardList, Bot, Calendar, TrendingUp } from 'lucide-react';

export function WorkSteps() {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Анкетирование',
      description: 'Подробная анкета о здоровье, рационе питания, образе жизни и целях по снижению веса'
    },
    {
      icon: Bot,
      title: 'AI-Анализ',
      description: 'Искусственный интеллект анализирует данные по 4 уровням для составления индивидуального плана'
    },
    {
      icon: Calendar,
      title: 'Персональный план',
      description: 'Индивидуальное меню на неделю, расчёт БЖУ, калорий и рекомендации по правильному питанию'
    },
    {
      icon: TrendingUp,
      title: 'Поддержка 24/7',
      description: 'Постоянный диалог с AI-диетологом, корректировка плана питания, мотивация на пути к цели'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white" aria-labelledby="work-steps-heading">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 id="work-steps-heading" className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-5 sm:mb-6 uppercase">
            Как это <span className="text-[#A0FF00]">работает</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/70 max-w-3xl mx-auto font-bold uppercase">
            Простой процесс в 4 шага
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article 
                key={index}
                className="relative bg-white p-6 sm:p-7 md:p-8 lg:p-9 rounded-2xl sm:rounded-[2rem] border-2 sm:border-4 border-black hover:border-[#A0FF00] transition-all duration-300 transform hover:scale-105 min-h-[240px] sm:min-h-[260px] flex flex-col"
              >
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#A0FF00] rounded-full border-2 sm:border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="mb-4 sm:mb-5 mt-4 sm:mt-5 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-black rounded-full flex-shrink-0">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#A0FF00]" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-black mb-3 sm:mb-4 uppercase leading-[1.2]">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black/70 leading-[1.5] font-bold">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}