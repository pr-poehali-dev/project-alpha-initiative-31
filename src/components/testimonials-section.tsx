import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const members = [
  {
    name: "Антон Лапенко",
    role: "вокал, жирафоведение",
    initials: "АЛ",
    emoji: "🎤",
  },
  {
    name: "Алексей «Психофонарь» Смирнов",
    role: "гитара, шум",
    initials: "АС",
    emoji: "🎸",
  },
  {
    name: "Вячеслав «Велюр» Зайцев",
    role: "бас, бэк-вокал",
    initials: "ВЗ",
    emoji: "🎵",
  },
  {
    name: "Дмитрий «Ударник» Морозов",
    role: "ударные, перкуссия",
    initials: "ДМ",
    emoji: "🥁",
  },
]

export function TestimonialsSection() {
  return (
    <section id="members" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl xl:text-5xl font-extrabold text-card-foreground uppercase mb-4">
            УЧАСТНИКИ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-space-mono">
            Те самые люди, которые в декабре разорвут гнилой мешок тишины на сцене
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="glow-border slide-up text-center" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <Avatar className="w-20 h-20 mx-auto mb-4 bg-red-500/20 border border-red-500/40">
                  <AvatarFallback className="bg-red-500/20 text-red-400 text-2xl font-bold">
                    {member.emoji}
                  </AvatarFallback>
                </Avatar>
                <p className="font-orbitron font-semibold text-primary text-base mb-1">{member.name}</p>
                <p className="text-sm text-muted-foreground font-space-mono">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
