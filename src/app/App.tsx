import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Brain,
  Camera,
  Check,
  ChevronDown,
  ClipboardCheck,
  Dumbbell,
  Gift,
  HeartPulse,
  Menu,
  MessageCircle,
  NotebookPen,
  Salad,
  ShoppingBasket,
  Sparkles,
  Target,
  Utensils,
  X,
  Zap,
} from "lucide-react";
import { SEO } from "./components/SEO";
import { Privacy } from "./components/Privacy";
import { Offer } from "./components/Offer";
import { PersonalDataConsent } from "./components/PersonalDataConsent";

const TELEGRAM_URL = "https://telegram.me/superdietolog_bot";
const MAX_URL = "https://max.ru/id665910681771_bot";

const problems = [
  "Начинаете питаться по новому плану, но вскоре возвращаетесь к привычному рациону.",
  "Днём не хватает времени на полноценную еду, а вечером хочется съесть больше обычного.",
  "Стресс, усталость или скука влияют на выбор еды.",
  "Советы из интернета не учитывают ваш график, предпочтения и состояние здоровья.",
  "Не знаете, что приготовить, чтобы было вкусно, разнообразно и удобно.",
  "Хотите больше двигаться, но не знаете, какие тренировки подойдут именно вам.",
  "Трудно самостоятельно оценить рацион и понять, что стоит изменить.",
  "После получения плана не хватает поддержки, чтобы применять его каждый день.",
];

const levels = [
  {
    number: "01",
    title: "Физический уровень",
    icon: HeartPulse,
    color: "bg-[#A0FF00]",
    text: "Возраст, параметры тела, активность, особенности здоровья, сон и режим дня. На основе данных формируются ориентиры по питанию и план подходящей физической активности.",
  },
  {
    number: "02",
    title: "Пищевое поведение",
    icon: Utensils,
    color: "bg-[#FF7CE5]",
    text: "Регулярность питания, предпочтения, перекусы и условия приёма пищи. Анализ помогает увидеть повседневные действия, которые мешают сбалансированному рациону.",
  },
  {
    number: "03",
    title: "Психологический уровень",
    icon: Brain,
    color: "bg-[#8CEBFF]",
    text: "Связь питания с эмоциональным состоянием, стрессом и усталостью. Вы получаете практические рекомендации для осознанного отношения к еде.",
  },
  {
    number: "04",
    title: "Психосоматический контекст",
    icon: Activity,
    color: "bg-[#FFD84D]",
    text: "Самонаблюдение за связью телесных ощущений, переживаний и отношения к телу с пищевым поведением. Раздел не устанавливает медицинских или психологических диагнозов.",
  },
];

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Персональный PDF-отчёт",
    text: "Анализ питания и образа жизни, ориентиры по калорийности и питательным веществам, рекомендации по воде и клетчатке, психологические аспекты, упражнения для самонаблюдения и персональный план действий.",
    label: "Останется у вас",
  },
  {
    icon: Salad,
    title: "Меню на 7 дней",
    text: "Разнообразная русская домашняя кухня с учётом предпочтений, ограничений и доступных продуктов. Блюда можно заменять вместе с AI-помощником.",
    label: "7 дней",
  },
  {
    icon: ShoppingBasket,
    title: "Готовый список покупок",
    text: "Программа соберёт продукты из недельного меню в один список, чтобы спланировать поход в магазин без лишних расчётов.",
    label: "Без рутины",
  },
  {
    icon: Dumbbell,
    title: "План тренировок",
    text: "Ходьба, мобильность, доступные силовые упражнения и восстановление — с учётом подготовки, образа жизни, целей и указанных ограничений.",
    label: "В своём темпе",
  },
  {
    icon: MessageCircle,
    title: "30 дней AI-сопровождения",
    text: "Свободный чат о питании и фитнесе. Уточняйте отчёт, обсуждайте сложности, меняйте меню и упражнения, разбирайте записи дневника и следующие шаги.",
    label: "Всегда на связи",
  },
  {
    icon: Camera,
    title: "Анализ еды по фото",
    text: "Приблизительная оценка состава порции, калорийности, белков, жиров и углеводов. Ингредиенты и размер порции можно уточнить в диалоге.",
    label: "1 фото",
  },
  {
    icon: NotebookPen,
    title: "Дневник питания",
    text: "Фиксируйте приёмы пищи, замечайте закономерности и обсуждайте рацион с помощником на основе реальных записей.",
    label: "Реальная картина",
  },
  {
    icon: Target,
    title: "Отслеживание прогресса",
    text: "Отмечайте регулярность питания, самочувствие, активность и выполнение рекомендаций. Корректируйте программу по мере изменений.",
    label: "Видимый путь",
  },
  {
    icon: Sparkles,
    title: "Поддержка привычек",
    text: "Практики осознанности, напоминания и регулярные рекомендации помогают встроить выбранные действия в повседневную жизнь.",
    label: "Без давления",
  },
  {
    icon: Gift,
    title: "Гайд в подарок",
    text: "«Вес в норме. Реальные причины и психосоматика лишнего веса» - дополнительный материал к программе. Можно скачать и читать в удобное время.",
    label: "Подарок",
  },
];

const steps = [
  ["Откройте приложение", "Перейдите в «Супердиетолог» через Telegram или MAX. Ничего дополнительно устанавливать не нужно."],
  ["Заполните анкету", "Оплатите программу и ответьте на адаптивные вопросы о питании, здоровье, образе жизни, активности и привычках."],
  ["Получите разбор", "AI-система подготовит подробный PDF-отчёт, персональное меню на неделю и план тренировок."],
  ["Общайтесь с помощником", "Задавайте вопросы, отправляйте фото еды, уточняйте меню и тренировки в свободном чате."],
  ["Наблюдайте за изменениями", "Ведите дневник, отслеживайте прогресс и корректируйте программу в течение 30 дней."],
];

const toolkit = [
  ["Персональное анкетирование", "Учитывает ваши особенности"],
  ["Подробный PDF-отчёт", "Помогает разобраться в привычках"],
  ["Меню на 7 дней", "Упрощает ежедневное питание"],
  ["План тренировок", "Подбирает подходящую активность"],
  ["Список покупок", "Помогает подготовиться заранее"],
  ["Анализ фото еды", "Оценивает состав блюда"],
  ["Дневник питания", "Показывает закономерности"],
  ["AI-чат", "Решает вопросы по мере появления"],
  ["Отслеживание прогресса", "Помогает видеть изменения"],
  ["30 дней сопровождения", "Поддерживает на практике"],
  ["Гайд «Вес в норме» в подарок", "Дополнительный материал к программе"],
];

const faqs = [
  ["Это обычный чат-бот?", "Нет. «Супердиетолог» — персонализированный AI-сервис с анкетированием, отчётом, меню, планом тренировок, дневником и сопровождением. Чат использует персональный контекст пользователя."],
  ["Нужно ли самостоятельно считать калории?", "Нет. Программа предоставляет расчётные ориентиры и помогает приблизительно оценивать состав блюд по фотографиям. Расчёты являются оценками, а не лабораторными измерениями."],
  ["Меню будет состоять из сложных или дорогих блюд?", "Меню формируется на основе привычной русской домашней кухни с учётом ваших предпочтений. Блюда и продукты можно заменить в диалоге с AI-помощником."],
  ["Подойдут ли тренировки начинающим?", "Да. План учитывает указанный уровень подготовки и ограничения. Если вы только начинаете, программа предложит соответствующие варианты активности."],
  ["Можно менять упражнения и обсуждать тренировки?", "Да. Можно обсуждать программу и подбирать альтернативы. При травмах, заболеваниях или противопоказаниях требуется консультация квалифицированного специалиста."],
  ["Можно ли изменить меню?", "Да. Обсуждайте с AI-помощником замены блюд, изменения рациона и другие корректировки программы."],
  ["Что делать, если я не знаю, как описать проблему?", "Пишите обычным языком. Специальные команды и знания в диетологии не нужны."],
  ["Что происходит после 30 дней?", "Первый период сопровождения завершается. Доступ можно продлить ещё на 30 дней за 990 ₽, сохранив историю и персональные рекомендации."],
  ["Можно ли воспользоваться скидкой?", "Да. По промокоду действующего участника стартовая программа стоит 792 ₽ вместо 990 ₽ — скидка 20%."],
  ["Заменяет ли Супердиетолог врача, диетолога или тренера?", "Нет. Это информационный AI-помощник для взрослых, а не медицинская услуга. Он не ставит диагнозы, не назначает лечение и не заменяет квалифицированного специалиста."],
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-black tracking-[-0.03em]">
      <span className="grid size-9 rotate-[-6deg] place-items-center rounded-[12px] bg-primary text-primary-foreground shadow-[3px_3px_0_#171717]">
        <Zap className="size-5 fill-current" />
      </span>
      <span className="text-lg sm:text-xl">Супердиетолог</span>
    </a>
  );
}

function Button({ children, href = TELEGRAM_URL, light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-[#171717] px-6 py-3 text-center font-black transition duration-200 hover:-translate-y-1 hover:shadow-[6px_7px_0_#171717] focus-visible:outline-2 focus-visible:outline-offset-4 ${light ? "bg-white text-[#171717]" : "bg-primary text-primary-foreground shadow-[4px_5px_0_#171717]"}`}
    >
      {children}
      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function CtaPair({
  telegramLabel = "Открыть в Telegram",
  maxLabel = "Открыть в MAX",
  className = "",
}: {
  telegramLabel?: string;
  maxLabel?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      <Button href={TELEGRAM_URL}>{telegramLabel}</Button>
      <Button href={MAX_URL} light>{maxLabel}</Button>
    </div>
  );
}

function SectionTitle({ eyebrow, children, note }: { eyebrow: string; children: React.ReactNode; note?: string }) {
  return (
    <div className="mb-10 max-w-4xl md:mb-14">
      <div className="mb-4 inline-flex rotate-[-1deg] items-center gap-2 rounded-full border-2 border-[#171717] bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#171717] shadow-[3px_3px_0_#171717]">
        <Sparkles className="size-4 shrink-0 text-[#171717]" /> {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-black leading-[0.98] tracking-[-0.055em] sm:text-5xl lg:text-7xl">{children}</h2>
      {note && <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4A4946] md:text-xl">{note}</p>}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<"main" | "privacy" | "offer" | "consent">("main");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = "ru";
    const syncHash = () => {
      const hash = window.location.hash;
      setPage(hash === "#privacy" ? "privacy" : hash === "#offer" ? "offer" : hash === "#consent" ? "consent" : "main");
      window.scrollTo(0, 0);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const closeLegal = () => {
    window.location.hash = "";
    setPage("main");
  };

  if (page === "privacy") return <><SEO title="Политика конфиденциальности — Супердиетолог" /><Privacy onClose={closeLegal} /></>;
  if (page === "offer") return <><SEO title="Договор публичной оферты — Супердиетолог" /><Offer onClose={closeLegal} /></>;
  if (page === "consent") return <><SEO title="Согласие на обработку персональных данных — Супердиетолог" /><PersonalDataConsent onClose={closeLegal} /></>;

  return (
    <div id="top" className="min-h-screen overflow-hidden bg-background font-body text-foreground selection:bg-primary selection:text-primary-foreground">
      <SEO
        title="Супердиетолог — персональный AI-помощник по питанию"
        description="Персональное меню, план тренировок, PDF-отчёт и 30 дней AI-сопровождения в Telegram и MAX за 990 ₽."
        keywords="AI помощник по питанию, персональное меню, план тренировок, дневник питания, анализ еды по фото, Супердиетолог Telegram, питание и фитнес"
      />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border-2 border-[#171717] bg-[#FFFDF8]/95 px-4 py-2.5 shadow-[4px_5px_0_#171717] backdrop-blur-xl sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-bold lg:flex">
            <a className="transition hover:text-[#5E9600]" href="#inside">Что внутри</a>
            <a className="transition hover:text-[#5E9600]" href="#how">Как работает</a>
            <a className="transition hover:text-[#5E9600]" href="#price">Стоимость</a>
            <a className="transition hover:text-[#5E9600]" href="#faq">Вопросы</a>
          </nav>
          <div className="hidden items-center gap-2 sm:flex">
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full bg-[#171717] px-4 py-3 text-sm font-black text-white transition hover:bg-[#4C4C4C]">
              Telegram
            </a>
            <a href={MAX_URL} target="_blank" rel="noreferrer" className="rounded-full border-2 border-[#171717] bg-white px-4 py-2.5 text-sm font-black text-[#171717] transition hover:bg-primary">
              MAX
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню" className="grid size-10 place-items-center rounded-full bg-[#171717] text-white sm:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-3 mt-2 grid rounded-[24px] border-2 border-[#171717] bg-white p-3 text-lg font-black shadow-[4px_5px_0_#171717] sm:hidden">
            {["inside", "how", "price", "faq"].map((id, i) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 hover:bg-primary">
                {["Что внутри", "Как работает", "Стоимость", "Вопросы"][i]}
              </a>
            ))}
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 hover:bg-primary">
              Открыть в Telegram
            </a>
            <a href={MAX_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 hover:bg-primary">
              Открыть в MAX
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[920px] overflow-hidden bg-[#B9FF3B] px-4 pb-20 pt-32 sm:px-6 lg:min-h-[820px] lg:pt-40">
          <div className="absolute -left-20 top-48 size-64 rounded-full bg-[#FF7CE5] blur-[1px]" />
          <div className="absolute -right-16 top-20 size-72 rotate-12 rounded-[36%] bg-[#8CEBFF]" />
          <div className="absolute bottom-8 left-[47%] size-28 rotate-45 bg-[#FFD84D]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#171717] bg-white px-4 py-2 font-extrabold shadow-[3px_3px_0_#171717]">
                <span className="size-2.5 animate-pulse rounded-full bg-[#FF4D8D]" />
                В Telegram и MAX · 18+
              </div>
              <h1 className="font-display text-[clamp(3.5rem,9vw,8rem)] font-black leading-[0.82] tracking-[-0.075em]">
                ВАШ AI-<br />ПОМОЩНИК<br />
                <span className="relative inline-block text-white [text-shadow:3px_3px_0_#171717,-2px_-2px_0_#171717,2px_-2px_0_#171717,-2px_2px_0_#171717]">
                  ПО ПИТАНИЮ
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-xl font-bold leading-snug sm:text-2xl">
                Разберитесь в пищевых привычках, получите персональное меню, план тренировок и поддержку на каждый день.
              </p>
              <div className="mt-8 flex flex-col items-start gap-5">
                <CtaPair telegramLabel="В Telegram" maxLabel="В MAX" />
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-black tracking-[-0.05em]">990 ₽</span>
                  <span className="max-w-24 text-sm font-bold leading-tight">программа + 30 дней</span>
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold">Работает прямо в мессенджере. Ничего лишнего.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, rotate: 5, scale: 0.94 }} animate={{ opacity: 1, rotate: 2, scale: 1 }} transition={{ delay: 0.18, duration: 0.55 }} className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -left-8 -top-8 z-10 rotate-[-10deg] rounded-full border-2 border-[#171717] bg-[#FF7CE5] px-5 py-3 font-black shadow-[4px_4px_0_#171717]">30 дней рядом</div>
              <div className="rounded-[42px] border-[3px] border-[#171717] bg-[#171717] p-3 shadow-[12px_14px_0_rgba(23,23,23,.24)]">
                <div className="overflow-hidden rounded-[31px] bg-[#FFFDF8]">
                  <div className="flex items-center gap-3 border-b-2 border-[#171717] bg-white p-4">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary"><Zap className="fill-current" /></span>
                    <div><p className="font-black">Супердиетолог</p><p className="text-xs font-bold text-[#5F5F5F]">персональный контекст включён</p></div>
                    <span className="ml-auto size-3 rounded-full bg-[#54D46B]" />
                  </div>
                  <div className="space-y-3 p-5">
                    <div className="mr-10 rounded-[22px_22px_22px_4px] bg-[#ECEBE5] p-4 text-sm font-semibold">Доброе утро! Как прошёл завтрак?</div>
                    <div className="ml-12 rounded-[22px_22px_4px_22px] bg-[#8CEBFF] p-4 text-sm font-semibold">Отправляю фото. Можно оценить порцию?</div>
                    <div className="grid grid-cols-[92px_1fr] gap-3 rounded-3xl border-2 border-[#171717] bg-white p-3">
                      <div className="grid aspect-square place-items-center rounded-2xl bg-[#FFD84D]"><Salad className="size-10" /></div>
                      <div><span className="text-xs font-extrabold uppercase tracking-wider">Оценка блюда</span><p className="mt-1 text-2xl font-black">≈ 420 ккал</p><p className="text-xs font-semibold">Б 28 · Ж 14 · У 46</p></div>
                    </div>
                    <div className="mr-5 rounded-[22px_22px_22px_4px] bg-primary p-4 text-sm font-semibold">Да! Отличный баланс. Добавила запись в дневник ✓</div>
                  </div>
                  <div className="m-4 flex items-center rounded-full border-2 border-[#171717] bg-white px-4 py-3 text-sm text-[#777]">Спросить помощника…<ArrowRight className="ml-auto size-5 text-[#171717]" /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y-2 border-[#171717] bg-[#171717] py-4 text-white">
          <div className="flex min-w-max animate-[marquee_24s_linear_infinite] items-center gap-9 text-xl font-black uppercase tracking-tight">
            {Array.from({ length: 2 }).flatMap(() => ["Персональное меню", "План тренировок", "PDF-отчёт", "AI-чат 30 дней", "Дневник питания", "Анализ фото", "Гайд в подарок"]).map((item, i) => (
              <span key={i} className="flex items-center gap-9"><span>{item}</span><span className="text-[1.15em] leading-none" aria-hidden="true">🍏</span></span>
            ))}
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Это нормально">
              Почему диеты часто <span className="text-[#FF4D8D]">не работают?</span>
            </SectionTitle>
            <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-2xl font-bold leading-snug">Знать, какие продукты полезны, — ещё не значит легко изменить привычки.</p>
                <div className="mt-8 rotate-[-2deg] rounded-[30px] border-2 border-[#171717] bg-[#FFD84D] p-6 shadow-[7px_8px_0_#171717]">
                  <p className="font-display text-3xl font-black leading-tight">Питание — это не только продукты и калории.</p>
                  <p className="mt-3 font-semibold">На него влияют сон, режим, активность, эмоции и обстоятельства.</p>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {problems.map((problem, i) => (
                  <div key={problem} className={`rounded-[26px] border-2 border-[#171717] p-5 transition hover:-translate-y-1 ${i % 3 === 0 ? "bg-[#F3E8FF]" : i % 3 === 1 ? "bg-[#E6FAFF]" : "bg-white"}`}>
                    <span className="mb-5 grid size-8 place-items-center rounded-full bg-[#171717] text-xs font-black text-white">{i + 1}</span>
                    <p className="font-bold leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E8D7FF] px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Комплексный подход" note="В основе программы — подробное анкетирование и многоуровневый анализ ваших ответов. Результат помогает понять привычки и выбрать реалистичные шаги.">
              Учитывает не только <span className="underline decoration-[#A0FF00] decoration-[12px] underline-offset-[-4px]">что вы едите</span>, но и как живёте
            </SectionTitle>
            <div className="grid gap-5 md:grid-cols-2">
              {levels.map(({ number, title, icon: Icon, color, text }, i) => (
                <article key={title} className={`relative rounded-[34px] border-2 border-[#171717] bg-white p-6 shadow-[6px_7px_0_#171717] sm:p-8 ${i === 1 || i === 2 ? "md:translate-y-8" : ""}`}>
                  <div className="mb-8 flex items-start justify-between">
                    <span className="font-display text-5xl font-black text-[#D3D0C8]">{number}</span>
                    <span className={`grid size-14 rotate-3 place-items-center rounded-2xl border-2 border-[#171717] ${color}`}><Icon className="size-7" /></span>
                  </div>
                  <h3 className="font-display text-3xl font-black leading-tight tracking-[-0.035em]">{title}</h3>
                  <p className="mt-4 leading-relaxed text-[#4A4946]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="inside" className="bg-[#171717] px-4 py-20 text-white sm:px-6 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Полный комплект">
              Что вы получаете <span className="text-primary">за 990 ₽</span>
            </SectionTitle>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text, label }, i) => (
                <article key={title} className={`group rounded-[32px] border-2 border-white/20 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#171717] hover:text-[#171717] ${i === 0 ? "bg-primary text-[#171717] lg:col-span-2" : i === 4 ? "bg-[#FF7CE5] text-[#171717] lg:row-span-2" : "bg-[#282828] hover:bg-white"}`}>
                  <div className="mb-9 flex items-start justify-between">
                    <Icon className="size-9" strokeWidth={2.3} />
                    <span className="rounded-full border border-current px-3 py-1 text-xs font-extrabold uppercase">{label}</span>
                  </div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.03em] sm:text-3xl">{title}</h3>
                  <p className="mt-4 leading-relaxed opacity-80">{text}</p>
                  {title === "Анализ еды по фото" && <p className="mt-4 text-xs font-bold opacity-60">Оценки по фотографиям носят приблизительный характер.</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Пять простых шагов">Как работает <span className="text-[#619B00]">Супердиетолог</span></SectionTitle>
            <div className="relative">
              <div className="absolute bottom-0 left-[27px] top-0 w-1 bg-[#171717] md:left-1/2" />
              {steps.map(([title, text], i) => (
                <div key={title} className={`relative mb-8 grid items-center pl-20 md:grid-cols-2 md:gap-24 md:pl-0 ${i % 2 ? "" : ""}`}>
                  <span className="absolute left-0 z-10 grid size-14 place-items-center rounded-full border-2 border-[#171717] bg-primary font-display text-xl font-black shadow-[3px_3px_0_#171717] md:left-1/2 md:-translate-x-1/2">{i + 1}</span>
                  <div className={`${i % 2 ? "md:col-start-2" : "md:text-right"}`}>
                    <h3 className="font-display text-2xl font-black tracking-tight">{title}</h3>
                    <p className="mt-2 leading-relaxed text-[#5C5A55]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <CtaPair className="mt-14 justify-center" telegramLabel="В Telegram · 990 ₽" maxLabel="В MAX · 990 ₽" />
          </div>
        </section>

        <section className="bg-[#8CEBFF] px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Всё в одном">Один помощник вместо <span className="italic">разрозненных</span> приложений</SectionTitle>
            <div className="overflow-hidden rounded-[32px] border-2 border-[#171717] bg-white shadow-[8px_9px_0_#171717]">
              <div className="hidden grid-cols-2 bg-[#171717] px-7 py-4 font-black text-white sm:grid"><span>Возможность</span><span>Что это даёт</span></div>
              {toolkit.map(([feature, value], i) => (
                <div key={feature} className="grid gap-1 border-b-2 border-[#171717]/15 px-5 py-4 last:border-0 sm:grid-cols-2 sm:gap-6 sm:px-7">
                  <span className="flex items-center gap-3 font-black"><Check className="size-5 shrink-0 rounded-full bg-primary p-0.5" />{feature}</span>
                  <span className="pl-8 text-[#5B5A55] sm:pl-0">{value}</span>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-4xl text-center text-lg font-bold">Всё связано: анкета формирует персональную программу, а дальнейший диалог учитывает ваши вопросы, записи и изменения в жизни.</p>
          </div>
        </section>

        <section id="price" className="px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-stretch gap-7 lg:grid-cols-[1.2fr_.8fr]">
              <div className="rounded-[42px] border-2 border-[#171717] bg-primary p-7 shadow-[9px_10px_0_#171717] sm:p-10">
                <span className="inline-flex rounded-full bg-[#171717] px-4 py-2 text-xs font-black uppercase tracking-wider text-white">Стартовая программа</span>
                <div className="mt-8 flex flex-wrap items-end gap-4">
                  <span className="font-display text-7xl font-black leading-none tracking-[-0.07em] sm:text-9xl">990 ₽</span>
                  <span className="mb-3 max-w-36 font-black leading-tight">за первые 30 дней</span>
                </div>
                <div className="my-8 h-0.5 bg-[#171717]" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Подробное анкетирование", "Многоуровневый анализ", "Персональный PDF-отчёт", "Меню на 7 дней", "План тренировок", "Список покупок", "AI-чат на 30 дней", "Анализ фото еды", "Дневник питания", "Замены и корректировки", "Гайд «Вес в норме. Реальные причины и психосоматика лишнего веса» в подарок"].map((item) => (
                    <span key={item} className="flex items-center gap-2 font-bold"><Check className="size-5 shrink-0" strokeWidth={3} />{item}</span>
                  ))}
                </div>
                <CtaPair className="mt-9" telegramLabel="В Telegram · 990 ₽" maxLabel="В MAX · 990 ₽" />
              </div>
              <div className="flex flex-col justify-between rounded-[42px] border-2 border-[#171717] bg-[#FF7CE5] p-7 sm:p-10">
                <div>
                  <span className="text-sm font-black uppercase tracking-wider">Дальше — по желанию</span>
                  <h3 className="mt-5 font-display text-5xl font-black leading-none tracking-[-0.05em]">990 ₽<br /><span className="text-3xl">за 30 дней</span></h3>
                  <p className="mt-6 text-lg font-semibold leading-relaxed">Продлите AI-сопровождение, дневник и другие функции. История и персональные рекомендации сохранятся.</p>
                </div>
                <p className="mt-10 rounded-2xl bg-white/60 p-4 text-sm font-bold">Без обязательного продления. Решение принимаете вы.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFD84D] px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div className="mb-6 grid size-20 rotate-[-7deg] place-items-center rounded-[25px] border-2 border-[#171717] bg-[#FF7CE5] shadow-[5px_5px_0_#171717]"><Gift className="size-10" /></div>
              <h2 className="font-display text-5xl font-black leading-[.98] tracking-[-0.055em] sm:text-7xl">Приглашайте друзей</h2>
              <p className="mt-5 text-2xl font-black">и получайте 198 ₽ за каждого</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[32px] border-2 border-[#171717] bg-white p-7 shadow-[6px_7px_0_#171717]"><span className="text-sm font-black uppercase">Ваш друг</span><p className="my-3 font-display text-5xl font-black">−20%</p><p className="font-semibold">Заплатит 792 ₽ вместо 990 ₽ по вашему промокоду.</p></div>
              <div className="rounded-[32px] border-2 border-[#171717] bg-primary p-7 shadow-[6px_7px_0_#171717]"><span className="text-sm font-black uppercase">Вы получаете</span><p className="my-3 font-display text-5xl font-black">198 ₽</p><p className="font-semibold">20% от полной цены за подтверждённую покупку друга.</p></div>
              <div className="rounded-[32px] border-2 border-[#171717] bg-[#171717] p-7 text-white sm:col-span-2">
                <ol className="grid gap-5 sm:grid-cols-4">
                  {["Получите промокод", "Поделитесь с другом", "Друг оплатит со скидкой", "Вам начислят 198 ₽"].map((item, i) => <li key={item} className="font-bold"><span className="mb-2 block text-primary">0{i + 1}</span>{item}</li>)}
                </ol>
                <p className="mt-6 text-xs text-white/60">Подробные условия начисления и получения вознаграждений доступны в правилах реферальной программы.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#D9FF9C] px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionTitle eyebrow="Всегда под рукой">Telegram <span className="text-[#777]">&</span> MAX</SectionTitle>
              <p className="max-w-xl text-xl leading-relaxed">Меню, дневник, тренировки, отчёт и чат доступны дома, на работе, в магазине или кафе — в одном привычном интерфейсе.</p>
              <CtaPair className="mt-8" />
            </div>
            <div id="max-note" className="relative mx-auto grid aspect-square w-full max-w-[470px] place-items-center rounded-full border-2 border-[#171717] bg-[#8CEBFF] shadow-[10px_12px_0_#171717]">
              <div className="absolute inset-10 animate-[spin_22s_linear_infinite] rounded-full border-2 border-dashed border-[#171717]" />
              <div className="z-10 rotate-[-4deg] rounded-[36px] border-2 border-[#171717] bg-white p-8 text-center shadow-[7px_8px_0_#171717]">
                <MessageCircle className="mx-auto size-14 fill-primary" />
                <p className="mt-4 font-display text-3xl font-black">Один сервис.<br />Два мессенджера.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow="Без непонятного">Частые вопросы</SectionTitle>
            <div className="space-y-3">
              {faqs.map(([question, answer], i) => (
                <details key={question} className="group rounded-[24px] border-2 border-[#171717] bg-white open:bg-[#F3E8FF]">
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5 font-display text-xl font-black sm:p-6 sm:text-2xl">
                    <span className="text-sm text-[#8E8B83]">{String(i + 1).padStart(2, "0")}</span>
                    <span>{question}</span>
                    <ChevronDown className="ml-auto size-6 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-3xl px-5 pb-6 pl-14 leading-relaxed text-[#4A4946] sm:px-6 sm:pl-16">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:pb-28">
          <div className="mx-auto max-w-7xl rounded-[40px] border-2 border-[#171717] bg-[#171717] p-7 text-white shadow-[10px_12px_0_#A0FF00] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_.65fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider"><HeartPulse className="size-4 text-primary" /> Важно</span>
                <h2 className="mt-6 font-display text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Информационный сервис, а не медицинская услуга</h2>
              </div>
              <div className="space-y-4 leading-relaxed text-white/75">
                <p>«Супердиетолог» предназначен для пользователей от 18 лет. Он не ставит диагнозы, не назначает лечение и не заменяет врача, диетолога, психолога или тренера.</p>
                <p>При заболеваниях, беременности, травмах, расстройствах пищевого поведения или противопоказаниях рекомендации необходимо согласовать с квалифицированным специалистом.</p>
                <p>Расчёты и оценка еды по фото носят приблизительный характер.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#B9FF3B] px-4 py-20 sm:px-6 lg:py-28">
          <div className="absolute -left-24 top-0 size-72 rounded-full bg-[#FF7CE5]" />
          <div className="absolute -right-24 bottom-0 size-80 rounded-full bg-[#8CEBFF]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="inline-block rotate-[-2deg] rounded-full border-2 border-[#171717] bg-white px-4 py-2 text-sm font-black shadow-[3px_3px_0_#171717]">ВАШ ТЕМП · ВАША ПРОГРАММА</span>
            <h2 className="mt-8 font-display text-5xl font-black leading-[.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">Начните с персональной поддержки</h2>
            <p className="mx-auto mt-7 max-w-3xl text-xl font-bold leading-relaxed">Персональный разбор + меню на неделю + план тренировок + список покупок + 30 дней общения с AI-помощником + гайд «Вес в норме» в подарок.</p>
            <CtaPair className="mt-9 justify-center" telegramLabel="В Telegram · 990 ₽" maxLabel="В MAX · 990 ₽" />
            <p className="mt-5 text-sm font-bold">Доступно в Telegram и MAX · Для пользователей 18+</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#171717] px-4 py-12 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1fr_auto]">
            <div>
              <Logo />
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">Персональный AI-помощник по питанию и физической активности в Telegram и MAX.</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
                <a className="rounded-full border border-white/25 px-4 py-2 hover:border-primary hover:text-primary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>
                <a className="rounded-full border border-white/25 px-4 py-2 hover:border-primary hover:text-primary" href={MAX_URL} target="_blank" rel="noreferrer">MAX</a>
              </div>
            </div>
            <div className="grid gap-3 text-sm font-bold sm:grid-cols-3 sm:gap-7">
              <a className="hover:text-primary" href="/legal/privacy" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
              <a className="hover:text-primary" href="/legal/offer" target="_blank" rel="noreferrer">Публичная оферта</a>
              <a className="hover:text-primary" href="/legal/consent" target="_blank" rel="noreferrer">Согласие на обработку данных</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Супердиетолог. Все права защищены.</p>
            <p>Рекомендации носят информационный характер и не являются медицинскими назначениями.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
