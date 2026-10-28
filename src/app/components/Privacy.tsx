import { ArrowLeft, Shield, Mail, MapPin } from 'lucide-react';

interface PrivacyProps {
  onClose: () => void;
}

export function Privacy({ onClose }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-black hover:text-[#A0FF00] transition-colors duration-300 mb-6 sm:mb-8 font-black text-base sm:text-lg group"
            aria-label="Вернуться на главную"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
            Вернуться на главную
          </button>

          <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#A0FF00] rounded-full border-3 sm:border-4 border-black flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase leading-tight">
                Политика конфиденциальности
              </h1>
              <p className="text-sm sm:text-base text-black/60 font-bold mt-1 sm:mt-2">
                Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 sm:space-y-10 text-black">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              1. Общие положения
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всех персональных данных, которые сервис <strong className="font-black">AI-Супердиетолог</strong> (Telegram-бот @superdietolog_bot) может получить о Пользователе во время использования сайта superdietolog.ru и сервисов бота.
              </p>
              <p>
                Использование сервисов AI-Супердиетолог означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки персональных данных. В случае несогласия с этими условиями Пользователь должен воздержаться от использования сервиса.
              </p>
              <p className="bg-[#A0FF00]/10 p-4 sm:p-5 rounded-xl border-2 border-[#A0FF00] font-bold">
                <strong className="font-black">Оператор персональных данных:</strong><br />
                Самозанятая Вавилова Ольга Евгеньевна<br />
                ИНН: 665910681771<br />
                Форма налогообложения: НПД (налог на профессиональный доход)
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              2. Персональные данные, которые собираются
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                В рамках использования сервиса AI-Супердиетолог могут обрабатываться следующие категории персональных данных:
              </p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Telegram ID</strong> — уникальный идентификатор пользователя в Telegram, необходимый для идентификации и работы бота</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Email адрес</strong> — для отправки результатов анализа и важных уведомлений (при добровольном предоставлении)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">История переписки</strong> — сообщения, отправленные в процессе взаимодействия с ботом, включая ответы на анкеты и запросы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Информация о здоровье</strong> — данные, предоставленные добровольно в рамках анкетирования (рост, вес, особенности питания, цели)</span>
                </li>
              </ul>
              <p className="bg-black/5 p-4 sm:p-5 rounded-xl font-bold italic">
                Мы не собираем паспортные данные, точный адрес проживания, СНИЛС или другие государственные идентификаторы.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              3. Цели обработки персональных данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>Персональные данные обрабатываются в следующих целях:</p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">1</span>
                  <span>Предоставление доступа к функционалу Telegram-бота AI-Супердиетолог</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">2</span>
                  <span>Проведение комплексного анализа причин лишнего веса и составление индивидуальных рекомендаций</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">3</span>
                  <span>Обработка платежей за услуги через платежную систему ЮКасса</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">4</span>
                  <span>Связь с Пользователем для предоставления информации об услугах, технической поддержки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">5</span>
                  <span>Улучшение качества сервиса и разработка новых функций</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              4. Правовые основания обработки
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>Обработка персональных данных осуществляется на основании:</p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Согласия Пользователя на обработку персональных данных (предоставляется при начале использования сервиса)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Договора оказания услуг, заключаемого между Оператором и Пользователем</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              5. Способы и сроки обработки данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">Способы обработки:</strong> Персональные данные обрабатываются автоматизированным способом с использованием защищенных баз данных, расположенных на территории Российской Федерации.
              </p>
              <p>
                <strong className="font-black">Сроки хранения:</strong>
              </p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>История переписки и результаты анализа хранятся в течение периода активной подписки + 3 года после её окончания (для возможности восстановления доступа)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Платежная информация хранится в соответствии с требованиями налогового законодательства РФ — 5 лет</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>После истечения сроков хранения данные подлежат удалению или обезличиванию</span>
                </li>
              </ul>
              <p className="bg-[#A0FF00]/10 p-4 sm:p-5 rounded-xl border-2 border-[#A0FF00] font-bold">
                <strong className="font-black">Место хранения:</strong> Все данные хранятся на серверах, расположенных на территории Российской Федерации. Трансграничная передача данных не осуществляется.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              6. Передача данных третьим лицам
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">Мы НЕ передаем ваши персональные данные третьим лицам</strong>, за исключением следующих случаев:
              </p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">ЮКасса (ООО «НКО ЮМани»)</strong> — платежная система для обработки платежей. Передаются только данные, необходимые для проведения транзакции</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">LLM-сервисы (Large Language Model)</strong> — для автоматизации работы Telegram-бота могут использоваться различные сети искусственного интеллекта (включая, но не ограничиваясь: OpenAI, Anthropic, Google AI, Yandex GPT и другие). При этом передаются только данные, необходимые для обработки запросов и формирования ответов бота</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>По запросам уполномоченных государственных органов в случаях, предусмотренных законодательством РФ</span>
                </li>
              </ul>
              <p className="bg-black text-white p-4 sm:p-5 rounded-xl font-bold">
                ⚠️ При использовании LLM-сервисов мы предпринимаем все необходимые меры для защиты ваших данных и не передаем информацию, которая может идентифицировать вас как личность (ФИО, паспортные данные, точный адрес).
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              7. Права субъектов персональных данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>В соответствии с ФЗ-152 Вы имеете право:</p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Получать информацию о том, какие персональные данные о вас обрабатываются</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Требовать уточнения или исправления неточных или неполных данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Требовать удаления ваших персональных данных (право на забвение)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Отозвать согласие на обработку персональных данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Обжаловать действия или бездействие Оператора в Роскомнадзоре или судебном порядке</span>
                </li>
              </ul>
              <p className="bg-[#A0FF00]/10 p-4 sm:p-5 rounded-xl border-2 border-[#A0FF00] font-bold">
                <strong className="font-black">Как воспользоваться своими правами:</strong><br />
                Отправьте запрос на email: <a href="mailto:astrozdrav6@gmail.com" className="text-black underline hover:text-[#A0FF00] transition-colors">astrozdrav6@gmail.com</a><br />
                Срок рассмотрения запроса: до 10 рабочих дней
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              8. Меры по защите персональных данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>Оператор принимает необходимые организационные и технические меры для защиты персональных данных:</p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Использование защищенных каналов связи (HTTPS, TLS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Шифрование данных при хранении и передаче</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Ограничение доступа к персональным данным только для уполномоченных лиц</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Регулярное резервное копирование данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Защита от несанкционированного доступа и кибератак</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              9. Cookies и аналитика
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                На сайте superdietolog.ru <strong className="font-black">НЕ используются</strong> сервисы веб-аналитики (Google Analytics, Яндекс.Метрика и т.п.) и файлы cookies для отслеживания поведения пользователей.
              </p>
              <p>
                Сайт не устанавливает рекламные или аналитические cookies. Используются только технические cookies, необходимые для корректной работы сайта (сессии).
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              10. Изменение Политики конфиденциальности
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                Оператор имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в заголовке документа указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента её размещения на сайте.
              </p>
              <p className="font-bold">
                Реком��ндуем периодически просматривать данную страницу для ознакомления с актуальной информацией о том, как мы защищаем ваши персональные данные.
              </p>
            </div>
          </section>

          {/* Section 11 - Contact */}
          <section className="bg-black text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-[#A0FF00]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 uppercase">
              11. Контактная информация
            </h2>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg">
              <p className="font-bold">
                По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться:
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#A0FF00] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-[#A0FF00] mb-1">Email:</p>
                    <a 
                      href="mailto:astrozdrav6@gmail.com" 
                      className="text-white hover:text-[#A0FF00] transition-colors underline font-bold"
                    >
                      astrozdrav6@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#A0FF00] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-black text-[#A0FF00] mb-1">Почтовый адрес:</p>
                    <p className="font-bold">
                      Краснодарский край, г. Геленджик,<br />
                      ул. Грибоедова, 15, кв. 52<br />
                      Индекс: 353460
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 p-4 sm:p-5 rounded-xl mt-4 sm:mt-6">
                  <p className="font-bold">
                    <strong className="font-black text-[#A0FF00]">Оператор персональных данных:</strong><br />
                    Самозанятая Вавилова Ольга Евгеньевна<br />
                    ИНН: 665910681771
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-[#A0FF00]/10 p-6 sm:p-8 rounded-2xl border-2 border-[#A0FF00]">
            <p className="text-sm sm:text-base md:text-lg text-black font-bold leading-relaxed text-center">
              Используя сервис AI-Супердиетолог, вы подтверждаете, что ознакомились с настоящей Политикой конфиденциальности и согласны с условиями обработки ваших персональных данных.
            </p>
          </section>

        </div>

        {/* Back button at bottom */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 bg-[#A0FF00] text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full border-3 sm:border-4 border-black font-black text-base sm:text-lg uppercase hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            Вернуться на главную
          </button>
        </div>

      </div>
    </div>
  );
}