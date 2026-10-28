import { ArrowLeft, FileText, Mail, MapPin } from 'lucide-react';

interface OfferProps {
  onClose: () => void;
}

export function Offer({ onClose }: OfferProps) {
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
              <FileText className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black uppercase leading-tight">
                Договор публичной оферты
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
                Настоящий документ является публичной офертой (далее — <strong className="font-black">Оферта</strong>) в соответствии со статьей 437 Гражданского кодекса Российской Федерации.
              </p>
              <p>
                Данная Оферта определяет условия предоставления информационно-консультационных услуг в области анализа причин лишнего веса и составления рекомендаций по питанию через Telegram-бот <strong className="font-black">AI-Супердиетолог</strong> (@superdietolog_bot).
              </p>
              <p className="bg-[#A0FF00]/10 p-4 sm:p-5 rounded-xl border-2 border-[#A0FF00] font-bold">
                <strong className="font-black">Исполнитель:</strong><br />
                Самозанятая Вавилова Ольга Евгеньевна<br />
                ИНН: 665910681771<br />
                Форма налогообложения: НПД (налог на профессиональный доход)<br />
                Email: astrozdrav6@gmail.com<br />
                Адрес: Краснодарский край, г. Геленджик, ул. Грибоедова, 15, кв. 52, индекс 353460
              </p>
              <p>
                <strong className="font-black">Заказчик</strong> — физическое лицо, достигшее 18 лет, принявшее условия настоящей Оферты путём оплаты услуг через Telegram-бот AI-Супердиетолог.
              </p>
              <p className="bg-black/5 p-4 sm:p-5 rounded-xl font-bold">
                Акцептом (принятием) настоящей Оферты является факт оплаты Заказчиком услуг. С момента акцепта Оферта считается договором, заключённым между Исполнителем и Заказчиком.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              2. Предмет договора
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                Исполнитель обязуется предоставить Заказчику информационно-консультационные услуги в области анализа причин лишнего веса, а Заказчик обязуется оплатить эти услуги.
              </p>
              <p><strong className="font-black">Услуги включают:</strong></p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">1</span>
                  <span><strong className="font-black">Единоразовый комплексный анализ</strong> — проведение анкетирования, анализ данных по 4 уровням (физический, поведенческий, психологический, психосоматический), расчёт ИМТ и калорийности, составление недельного меню и рекомендаций. Стоимость: 990₽</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#A0FF00] rounded-full border-2 border-black flex items-center justify-center text-xs font-black mt-1">2</span>
                  <span><strong className="font-black">Подписка на ежемесячное сопровождение</strong> — доступ к функциям бота, консультационная поддержка, обновление рекомендаций. Стоимость: 990₽/месяц. Подписка продлевается автоматически до момента её отмены Заказчиком</span>
                </li>
              </ul>
              <p className="bg-[#A0FF00]/10 p-4 sm:p-5 rounded-xl border-2 border-[#A0FF00] font-bold">
                ⚠️ <strong className="font-black">ВАЖНО:</strong> Услуги носят исключительно информационно-консультационный характер и НЕ являются медицинскими услугами. Рекомендации бота не заменяют консультацию врача. При наличии заболеваний обязательна консультация со специалистом.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              3. Порядок оплаты
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">3.1.</strong> Оплата услуг производится Заказчиком через платёжную систему <strong className="font-black">ЮКасса</strong> (ООО «НКО ЮМани») в российских рублях.
              </p>
              <p>
                <strong className="font-black">3.2.</strong> Услуги считаются оплаченными с момента поступления денежных средств на расчётный счёт Исполнителя.
              </p>
              <p>
                <strong className="font-black">3.3.</strong> Цены на услуги указаны на сайте superdietolog.ru и в Telegram-боте @superdietolog_bot. Исполнитель оставляет за собой право изменять цены, при этом стоимость уже оплаченных услуг изменению не подлежит.
              </p>
              <p>
                <strong className="font-black">3.4.</strong> Подписка автоматически продлевается каждый месяц. Списание средств производится в дату, соответствующую дате первой оплаты подписки.
              </p>
              <p>
                <strong className="font-black">3.5.</strong> Заказчик может отменить автоматическое продление подписки в любое время через интерфейс бота или настройки платёжной системы.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              4. Права и обязанности Исполнителя
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p><strong className="font-black">4.1. Исполнитель обязуется:</strong></p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Предоставить Заказчику доступ к функционалу Telegram-бота AI-Супердиетолог после оплаты услуг</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Провести комплексный анализ на основании предоставленных Заказчиком данных</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Предоставить результаты анализа и рекомендации в течение 24 часов с момента заполнения анкеты</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Обеспечить конфиденциальность персональных данных Заказчика в соответствии с Политикой конфиденциальности</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Оказывать техническую поддержку в рабочие дни с 10:00 до 20:00 МСК</span>
                </li>
              </ul>
              <p><strong className="font-black">4.2. Исполнитель имеет право:</strong></p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Приостановить или прекратить предоставление услуг при нарушении Заказчиком условий настоящего Договора</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Изменять условия Оферты с обязательной публикацией новой редакции на сайте</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Проводить профилактические и технические работы с предварительным уведомлением Заказчиков</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              5. Права и обязанности Заказчика
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p><strong className="font-black">5.1. Заказчик обязуется:</strong></p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Предоставлять достоверную информацию при заполнении анкет</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Своевременно оплачивать услуги в соответствии с установленными тарифами</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Самостоятельно отслеживать состояние подписки и сроки списания платежей</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Не использовать сервис в незаконных целях</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Консультироваться с врачом перед применением рекомендаций при наличии заболеваний</span>
                </li>
              </ul>
              <p><strong className="font-black">5.2. Заказчик имеет право:</strong></p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Получить результаты анализа и индивидуальные рекомендации</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Отменить подписку в любое время</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Обращаться за технической поддержкой</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Требовать возврата средств в соответствии с разделом 7 настоящего Договора</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              6. Ответственность сторон
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">6.1.</strong> За неисполнение или ненадлежащее исполнение обязательств по настоящему Договору Стороны несут ответственность в соответствии с законодательством Российской Федерации.
              </p>
              <p>
                <strong className="font-black">6.2.</strong> Исполнитель не несёт ответственности за результаты применения Заказчиком полученных рекомендаций, так как услуги носят информационно-консультационный характер.
              </p>
              <p>
                <strong className="font-black">6.3.</strong> Исполнитель не несёт ответственности за временную недоступность сервиса, вызванную техническими неполадками Telegram или иных третьих лиц.
              </p>
              <p>
                <strong className="font-black">6.4.</strong> Заказчик несёт полную ответственность за достоверность предоставленных данных. Исполнитель не несёт ответственности за качество рекомендаций, если они основаны на недостоверной информации.
              </p>
              <p className="bg-black text-white p-4 sm:p-5 rounded-xl font-bold">
                ⚠️ <strong className="font-black">ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ:</strong> Сервис AI-Супердиетолог НЕ предоставляет медицинских услуг и НЕ заменяет консультацию врача. Исполнитель не несёт ответственности за ухудшение состояния здоровья, связанное с игнорированием медицинских противопоказаний.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              7. Возврат средств
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">7.1.</strong> Возврат средств за единоразовый анализ (990₽) возможен только в случае, если Исполнитель не предоставил результаты анализа в течение 48 часов с момента оплаты и заполнения анкеты.
              </p>
              <p>
                <strong className="font-black">7.2.</strong> Возврат средств за подписку (990₽/месяц) осуществляется пропорционально неиспользованному периоду подписки при обращении Заказчика до даты следующего списания.
              </p>
              <p>
                <strong className="font-black">7.3.</strong> Для оформления возврата необходимо направить запрос на email: astrozdrav6@gmail.com с указанием:
              </p>
              <ul className="space-y-2 sm:space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Telegram ID</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Даты и суммы платежей</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Причины возврата</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-2 h-2 bg-[#A0FF00] rounded-full mt-2"></span>
                  <span>Реквизиты для возврата</span>
                </li>
              </ul>
              <p>
                <strong className="font-black">7.4.</strong> Срок рассмотрения запроса на возврат — до 10 рабочих дней. Возврат средств осуществляется в течение 10 рабочих дней с момента одобрения запроса.
              </p>
              <p>
                <strong className="font-black">7.5.</strong> Возврат не производится, если Заказчик уже получил результаты анализа и ознакомился с рекомендациями.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              8. Интеллектуальная собственность
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">8.1.</strong> Все материалы, предоставляемые через Telegram-бот AI-Супердиетолог (тексты, алгоритмы, методики), являются интеллектуальной собственностью Исполнителя.
              </p>
              <p>
                <strong className="font-black">8.2.</strong> Заказчик получает право на использование результатов анализа и рекомендаций исключительно для личных целей.
              </p>
              <p>
                <strong className="font-black">8.3.</strong> Запрещается копирование, распространение, публикация или коммерческое использование материалов сервиса без письменного согласия Исполнителя.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              9. Персональные данные
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">9.1.</strong> Акцептуя настоящую Оферту, Заказчик даёт согласие на обработку своих персональных данных в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».
              </p>
              <p>
                <strong className="font-black">9.2.</strong> Обработка персональных данных осуществляется в целях предоставления услуг и регулируется Политикой конфиденциальности, размещённой на сайте superdietolog.ru.
              </p>
              <p>
                <strong className="font-black">9.3.</strong> Заказчик имеет право отозвать согласие на обработку персональных данных, направив соответствующее заявление на email: astrozdrav6@gmail.com.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              10. Срок действия и изменение Договора
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">10.1.</strong> Договор вступает в силу с момента акцепта Оферты (оплаты услуг) и действует до полного исполнения обязательств Сторонами.
              </p>
              <p>
                <strong className="font-black">10.2.</strong> Исполнитель оставляет за собой право вносить изменения в условия Оферты в одностороннем порядке с обязательной публикацией новой редакции на сайте superdietolog.ru.
              </p>
              <p>
                <strong className="font-black">10.3.</strong> Новая редакция Оферты вступает в силу с момента её публикации на сайте, если иное не предусмотрено новой редакцией.
              </p>
              <p>
                <strong className="font-black">10.4.</strong> Продолжение использования сервиса после внесения изменений означает согласие Заказчика с новыми условиями.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 sm:mb-6 uppercase">
              11. Разрешение споров
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              <p>
                <strong className="font-black">11.1.</strong> Все споры и разногласия, возникающие из настоящего Договора, разрешаются путём переговоров.
              </p>
              <p>
                <strong className="font-black">11.2.</strong> При недостижении согласия споры подлежат рассмотрению в судебном порядке по месту нахождения Исполнителя в соответствии с законодательством Российской Федерации.
              </p>
              <p>
                <strong className="font-black">11.3.</strong> До обращения в суд Заказчик обязан направить Исполнителю письменную претензию. Срок ответа на претензию — 10 рабочих дней.
              </p>
            </div>
          </section>

          {/* Section 12 - Contact */}
          <section className="bg-black text-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2rem] border-3 sm:border-4 border-[#A0FF00]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-6 sm:mb-8 uppercase">
              12. Реквизиты и контакты Исполнителя
            </h2>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg">
              <div className="bg-white/10 p-4 sm:p-5 rounded-xl">
                <p className="font-bold">
                  <strong className="font-black text-[#A0FF00]">Самозанятая:</strong><br />
                  Вавилова Ольга Евгеньевна<br />
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
            <p className="text-sm sm:text-base md:text-lg text-black font-bold leading-relaxed text-center">
              Оплачивая услуги через Telegram-бот AI-Супердиетолог, вы подтверждаете, что ознакомились с условиями настоящего Договора публичной оферты, полностью их принимаете и обязуетесь их соблюдать.
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
