import { AlertTriangle, Heart, Stethoscope } from 'lucide-react';

export function RedFlags() {
  const contraindications = [
    'Серьёзные заболевания ЖКТ (язва, гастрит в стадии обострения, колит)',
    'Эндокринные нарушения: диабет, заболевания щитовидной железы (требуется контроль врача)',
    'Онкологические заболевания на стадии лечения',
    'Беременность и период грудного вскармливания',
    'Расстройства пищевого поведения (анорексия, булимия, компульсивное переедание)'
  ];

  const redFlags = [
    'Резкая потеря веса без видимых причин (более 5 кг в месяц)',
    'Постоянная слабость, головокружения и обмороки',
    'Хронические проблемы с пищеварением более 2 недель',
    'Сильные боли в области желудка и кишечника',
    'Депрессивные состояния и панические атаки'
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black" aria-labelledby="red-flags-heading">
      
      {/* Neon warning glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-[#A0FF00] rounded-full blur-[150px] sm:blur-[180px] md:blur-[200px] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center w-18 h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#A0FF00] rounded-full border-2 sm:border-4 border-white mb-7 sm:mb-8 shadow-[0_0_30px_rgba(160,255,0,0.4)] sm:shadow-[0_0_40px_rgba(160,255,0,0.4)]">
            <AlertTriangle className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black" />
          </div>
          
          <h2 id="red-flags-heading" className="text-[2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-5 sm:mb-6 uppercase">
            Важная <span className="text-[#A0FF00]">информация</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto font-bold uppercase">
            Когда нужна консультация врача
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Contraindications */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] border-2 sm:border-4 border-[#A0FF00] flex flex-col min-h-[320px] sm:min-h-[360px]">
            <div className="flex items-center gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black rounded-full border-2 sm:border-4 border-[#A0FF00] flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#A0FF00]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black uppercase leading-[1.1]">
                Противопоказания
              </h3>
            </div>

            <ul className="space-y-4 sm:space-y-5">
              {contraindications.map((item, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center mt-1">
                    <span className="text-black font-black text-sm sm:text-base md:text-lg">!</span>
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-bold leading-[1.5] flex-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red Flags */}
          <div className="bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] border-2 sm:border-4 border-[#A0FF00] flex flex-col min-h-[320px] sm:min-h-[360px]">
            <div className="flex items-center gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-black rounded-full border-2 sm:border-4 border-[#A0FF00] flex items-center justify-center flex-shrink-0">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#A0FF00]" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black uppercase leading-[1.1]">
                Красные флаги
              </h3>
            </div>

            <ul className="space-y-4 sm:space-y-5">
              {redFlags.map((item, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4">
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center mt-1">
                    <span className="text-black font-black text-sm sm:text-base md:text-lg">!</span>
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-bold leading-[1.5] flex-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-10 sm:mt-12 md:mt-14 bg-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] border-2 sm:border-4 border-[#A0FF00] text-center">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-bold leading-[1.6] max-w-5xl mx-auto">
            <span className="font-black text-[#A0FF00]">ВАЖНО:</span> AI-Супердиетолог не заменяет медицинскую консультацию. 
            При наличии хронических заболеваний обязательно проконсультируйтесь с врачом перед началом программы.
          </p>
        </div>

      </div>
    </section>
  );
}