import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="font-orbitron text-3xl md:text-5xl font-extrabold text-foreground uppercase mb-6">
            КТО ЭТО ВСЁ УСТРОИЛ?
          </h2>
          <div className="flex justify-center mb-6">
            <Icon name="Hammer" size={40} className="text-red-500" />
          </div>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto font-space-mono">
            Промо-группа <span className="text-foreground font-bold">«Хардкор по факту»</span>.
          </p>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto font-space-mono">
            Мы те, кто привозит в этот город музыку, от которой отказываются нормальные люди.
          </p>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-space-mono">
            Мы отвечаем за звук, свет и то, чтобы ни один жираф не пострадал.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4 font-orbitron border-0"
              onClick={() => document.querySelector('#tickets')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ВЗОРВАТЬ КАССУ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent font-orbitron"
              onClick={() => document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Контакты
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
