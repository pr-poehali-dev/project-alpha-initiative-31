import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Когда и где проходят концерты?",
      answer:
        "12 декабря — Санкт-Петербург, клуб «Время N» (наб. Фонтанки, 90), начало в 20:00. 13 декабря — Москва, клуб «Агломерат» (Ленинградский пр-т, 80), начало в 20:00.",
    },
    {
      question: "Кто такой специальный гость «Велюр»?",
      answer:
        "Группа «Велюр» — ещё один проект из вселенной Лапенко. Фронтмен — Вячеслав «Велюр» Зайцев, он же басист «Багрового Фантомаса». Два в одном, бонусом.",
    },
    {
      question: "Что такое «предпродаж» и до когда он действует?",
      answer:
        "Предпродажная цена 1400 ₽ действует до 20 ноября. После этой даты цена становится стандартной — 2200 ₽. Рекомендуем не затягивать.",
    },
    {
      question: "Что входит в пакет «Билет + футболка с жирафом»?",
      answer:
        "Входной билет на концерт плюс эксклюзивная футболка с изображением электрического жирафа — авторский дизайн из вселенной Лапенко. Тираж ограничен.",
    },
    {
      question: "Будут ли места? Можно ли сидеть?",
      answer:
        "Никаких сидячих мест — только стоя, только хардкор. Это концерт, а не кино. Приходите готовыми двигаться.",
    },
    {
      question: "Как попасть в число первых 50 и получить постер?",
      answer:
        "Первые 50 покупателей билетов на каждый из концертов получают постер с автографом Антона Лапенко. Некоторые буквы точно настоящие. Покупайте раньше.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 uppercase">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что вы боялись спросить о туре «Электрические жирафы — 36 лет»
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
