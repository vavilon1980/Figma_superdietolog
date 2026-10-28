import { Activity, Brain, Heart, Users } from 'lucide-react';

export function Analysis() {
  const levels = [
    {
      icon: Activity,
      title: 'Физический',
      description: 'Оценка питания, режима, физической активности. Расчёт ИМТ, калорийности, БЖУ и водного баланса',
      color: '#A0FF00'
    },
    {
      icon: Users,
      title: 'Поведенческий',
      description: 'Анализ пищевых привычек, распорядка дня и паттернов питания для коррекции веса',
      color: '#CDFF00'
    },
    {
      icon: Brain,
      title: 'Психологический',
      description: 'Работа с мотивацией, установками и эмоциональными триггерами для устойчивого похудения',
      color: '#A0FF00'
    },
    {
      icon: Heart,
      title: 'Психосоматический',
      description: 'Выявление глубинных причин лишнего веса и связи эмоций с пищевым поведением',
      color: '#CDFF00'
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black" aria-labelledby="analysis-heading">
      
      {/* Neon background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-[#A0FF00] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-10"></div>
        <div className="absolute bottom-40 left-20 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-[#CDFF00] rounded-full blur-[100px] sm:blur-[130px] md:blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 id="analysis-heading" className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-5 sm:mb-6 uppercase">
            4 уровня <span className="text-[#A0FF00]">анализа</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-bold uppercase">
            Комплексный подход к вашему здоровью
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <article 
                key={index}
                className="group bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] border-2 sm:border-4 border-[#A0FF00] hover:shadow-[8px_8px_0px_0px_rgba(160,255,0,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(160,255,0,1)] transition-all duration-300 transform hover:scale-105 hover:-rotate-1 flex flex-col min-h-[220px] sm:min-h-[240px]"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-5 md:mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black rounded-full border-2 sm:border-4 border-[#A0FF00] flex-shrink-0">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#A0FF00]" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black mb-3 sm:mb-4 uppercase leading-[1.2]">
                  {level.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-black/70 leading-[1.6] font-bold">
                  {level.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}