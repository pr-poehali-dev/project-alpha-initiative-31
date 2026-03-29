import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const streamingLinks = [
  { name: "VK Музыка", icon: "Music", href: "#" },
  { name: "YouTube", icon: "Youtube", href: "#" },
  { name: "Apple Music", icon: "Music2", href: "#" },
]

export function SafetySection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-orbitron text-3xl md:text-4xl xl:text-5xl font-extrabold text-card-foreground uppercase mb-6">
          «ЭЛЕКТРИЧЕСКИЕ ЖИРАФЫ» —{" "}
          <span className="text-red-500">АЛЬБОМ, КОТОРЫЙ СЛЫШАЛ КАЖДЫЙ,</span>{" "}
          ДАЖЕ ЕСЛИ ДУМАЕТ, ЧТО НЕТ
        </h2>

        <div className="glow-border bg-background rounded-xl p-8 mb-8 text-left">
          <div className="space-y-4">
            <p className="text-muted-foreground font-space-mono text-base leading-relaxed">
              <span className="text-red-500 font-bold">Переиздание 36-летия.</span> На концерте прозвучат все треки
              в первоначальном, бешеном звучании плюс неизданные демки, найденные на плёнках в подвале дома Лапенко.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {streamingLinks.map((link, index) => (
            <a key={index} href={link.href}>
              <Button
                variant="outline"
                className="border-red-500/40 text-foreground hover:bg-red-500/10 hover:border-red-500 font-space-mono gap-2 w-full sm:w-auto"
              >
                <Icon name={link.icon as "Music"} size={18} className="text-red-500" />
                Слушать на {link.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
