import { ArrowLeft, CheckCircle, Mail, MapPin } from 'lucide-react';

interface PersonalDataConsentProps {
  onClose: () => void;
}

export function PersonalDataConsent({ onClose }: PersonalDataConsentProps) {
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
              <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase leading-tight">
                Согласие на обработку персональных данных
              </h1>
              <p className="text-sm sm:text-base text-black/60 font-bold mt-1 sm:mt-2">
                В соответствии с ФЗ-152 «О персональных данных»
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 sm:space-y-10 text-black">
          
          {/* Intro */}
          <section className="bg-[#A0FF00]/10 p-6 sm:p-8 rounded-2xl border-2 border-[#A0FF00]">
            <p className="text-sm sm:text-base md:text-lg text-black font-bold leading-relaxed">
              Настоящим я, действуя своей волей и в своём интересе, даю согласие на обработку моих персональных данных самозанятой <strong className="font-black">Вавиловой Ольге Евгеньевне</strong> (ИНН: 665910681771), именуемой далее «Оператор», в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              1. Данные Оператора
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <div className="bg-black/5 p-4 sm:p-5 rounded-xl font-bold">
                <p>
                  <strong className="font-black">Оператор персональных данных:</strong><br />
                  Самозанятая Вавилова Ольга Евгеньевна<br />
                  ИНН: 665910681771<br />
                  Форма налогообложения: НПД (налог на профессиональный доход)<br />
                  Email: astrozdrav6@gmail.com<br />
                  Адрес: Краснодарский край, г. Геленджик, ул. Грибоедова, 15, кв. 52, индекс 353460
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              2. Цели обработки персональных данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>Даю согласие на обработку моих персональных данных в следующих целях:</p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Предоставление доступа к функционалу Telegram-бота AI-Супердиетолог (@superdietolog_bot)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Проведение комплексного анализа причин лишнего веса на основании предоставленных данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Составление индивидуальных рекомендаций по питанию и образу жизни</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Обработка платежей через платёжную систему ЮКасса (ООО «НКО ЮМани»)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Информирование об услугах, технической поддержке и обновлениях сервиса</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">✓</span>
                  <span>Улучшение качества сервиса и разработка новых функций</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              3. Перечень персональных данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>Даю согласие на обработку следующих категорий персональных данных:</p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Telegram ID</strong> — уникальный идентификатор пользователя в мессенджере Telegram</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Email адрес</strong> — адрес электронной почты (при добровольном предоставлении)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">История переписки</strong> — текст сообщений, отправленных в процессе взаимодействия с ботом</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Информация о здоровье и физических параметрах</strong> — рост, вес, возраст, пол, особенности питания, физическая активность, цели и задачи (предоставляется добровольно при заполнении анкеты)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Платёжные данные</strong> — информация о транзакциях, необходимая для обработки платежей (обрабатывается платёжной системой ЮКасса)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              4. Действия с персональными данными
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>Даю согласие на совершение следующих действий с моими персональными данными:</p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Сбор
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Запись
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Систематизация
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Накопление
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Хранение
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Уточнение
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Извлечение
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Использование
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Передача (третьим лицам)*
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Обезличивание
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Блокирование
                </div>
                <div className="bg-black/5 p-4 rounded-xl font-bold">
                  <span className="text-[#A0FF00]">✓</span> Удаление
                </div>
              </div>
              <p className="bg-[#A0FF00]/10 p-4 sm:p-5 rounded-xl border-2 border-[#A0FF00] font-bold text-sm">
                * Передача персональных данных третьим лицам осуществляется только в случаях, указанных в Политике конфиденциальности: платёжной системе ЮКасса для обработки платежей, LLM-сервисам для автоматизации работы бота, а также по запросам уполномоченных государственных органов.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              5. Способ обработки данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                Подтверждаю своё согласие на обработку персональных данных <strong className="font-black">автоматизированным способом</strong> с использованием вычислительной техники, а также <strong className="font-black">неавтоматизированным способом</strong> (на бумажных носителях).
              </p>
              <p className="bg-black/5 p-4 sm:p-5 rounded-xl font-bold">
                Персональные данные обрабатываются с использованием защищённых баз данных, расположенных на территории Российской Федерации. Трансграничная передача персональных данных не осуществляется.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              6. Срок действия согласия
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                Настоящее согласие действует с момента его предоставления и до момента его отзыва мной в письменной форме.
              </p>
              <p>
                В случае отсутствия отзыва согласие действует в течение:
              </p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Периода активной подписки + 3 года после её окончания (для истории переписки и результатов анализа)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>5 лет с момента совершения транзакции (для платёжной информации в соответствии с требованиями налогового законодательства РФ)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              7. Мои права как субъекта персональных данных
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>Подтверждаю, что проинформирован(а) о следующих правах:</p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">1</span>
                  <span>Право на получение информации о том, какие персональные данные обрабатываются</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">2</span>
                  <span>Право на уточнение, блокирование или удаление персональных данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">3</span>
                  <span>Право на отзыв согласия на обработку персональных данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">4</span>
                  <span>Право на обжалование действий Оператора в Роскомнадзоре или судебном порядке</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              8. Порядок отзыва согласия
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                Я проинформирован(а), что могу отозвать настоящее согласие, направив письменное заявление Оператору одним из следующих способов:
              </p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">По электронной почте:</strong> astrozdrav6@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span><strong className="font-black">Почтовым отправлением:</strong> Краснодарский край, г. Геленджик, ул. Грибоедова, 15, кв. 52, индекс 353460</span>
                </li>
              </ul>
              <p className="bg-[#A0FF00]/10 p-4 sm:p-5 rounded-xl border-2 border-[#A0FF00] font-bold">
                Срок рассмотрения заявления об отзыве согласия — до 10 рабочих дней с момента получения. После отзыва согласия Оператор прекращает обработку персональных данных, за исключением случаев, когда обработка необходима для исполнения договора или предусмотрена законодательством РФ.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              9. Дополнительные условия
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">9.1.</strong> Подтверждаю, что ознакомлен(а) с Политикой конфиденциальности, размещённой на сайте superdietolog.ru, и согласен(на) с её положениями.
              </p>
              <p>
                <strong className="font-black">9.2.</strong> Подтверждаю, что предоставляю персональные данные добровольно.
              </p>
              <p>
                <strong className="font-black">9.3.</strong> Гарантирую, что предоставленные персональные данные являются достоверными и актуальными.
              </p>
              <p>
                <strong className="font-black">9.4.</strong> Понимаю, что Оператор не проверяет достоверность предоставленных мной данных и исходит из того, что я предоставляю точную и достаточную информацию.
              </p>
              <p className="bg-black text-white p-4 sm:p-5 rounded-xl font-bold">
                ⚠️ <strong className="font-black">ВАЖНО:</strong> Информация о здоровье, предоставляемая в рамках анкетирования, используется исключительно для формирования информационно-консультационных рекомендаций и НЕ является основанием для постановки диагноза или назначения лечения.
              </p>
            </div>
          </section>

          {/* Section 10 - Contact */}
          <section className="bg-black text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-[#A0FF00]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 uppercase">
              10. Контактная информация Оператора
            </h2>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg">
              <div className="bg-white/10 p-4 sm:p-5 rounded-xl">
                <p className="font-bold">
                  <strong className="font-black text-[#A0FF00]">Оператор персональных данных:</strong><br />
                  Самозанятая Вавилова Ольга Евгеньевна<br />
                  ИНН: 665910681771<br />
                  Форма налогообложения: НПД (налог на профессиональный доход)
                </p>
              </div>
              
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
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <section className="bg-[#A0FF00]/10 p-6 sm:p-8 rounded-2xl border-2 border-[#A0FF00]">
            <p className="text-sm sm:text-base md:text-lg text-black font-bold leading-relaxed text-center mb-4">
              Начиная использовать сервис AI-Супердиетолог и оплачивая услуги, я подтверждаю, что даю своё согласие на обработку персональных данных в соответствии с условиями, изложенными в настоящем документе.
            </p>
            <p className="text-xs sm:text-sm text-black/60 font-bold text-center">
              Дата предоставления согласия: {new Date().toLocaleDateString('ru-RU')}
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
