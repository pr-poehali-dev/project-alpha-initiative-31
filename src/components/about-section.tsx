import Icon from "@/components/ui/icon"

const highlights = [
  { icon: "Zap", text: "Электрические жирафы — 36 лет на стойке" },
  { icon: "Globe", text: "Вселенная Лапенко внутри" },
  { icon: "Flame", text: "Разрыв шаблона гарантирован" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground uppercase mb-8">
            КТО, ЧЁРТ ВОЗЬМИ, ЭТИ <span className="text-red-500">«БАГРОВЫЙ ФАНТОМАС»</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Группу основал Антон Лапенко — человек, который знает о жирафах больше, чем зоологи, а о рок‑н‑ролле —
            больше, чем любой музыкант. В 1988 году (по легенде, в параллельной вселенной) вышел альбом «Электрические
            жирафы», и мир уже никогда не стал прежним.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-4">
            «Багровый Фантомас» — это не просто музыка. Это ритуал вытряхивания реальности. На концертах можно
            встретить персонажей из вселенной Лапенко, услышать песни, которые вы не слышали, но будто всегда знали,
            и понять, что жирафы — на самом деле проводники в другие измерения.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glow-border flex items-center gap-3 px-6 py-4 rounded-lg bg-card slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Icon name={item.icon as "Zap"} size={22} className="text-red-500 flex-shrink-0" />
              <span className="font-space-mono text-card-foreground text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
