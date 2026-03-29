import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Projector",
    badge: "Шоу",
    title: "Живая встреча с жирафами",
    description: "Световое шоу с 3D-проекциями, от которых шея вытягивается сама.",
  },
  {
    icon: "Drama",
    badge: "Сюрприз",
    title: "Персонажи Лапенко на сцене",
    description: "Никто не знает, кто выйдет в этот раз.",
  },
  {
    icon: "Volume2",
    badge: "Звук",
    title: "Звук, который выворачивает наизнанку",
    description: "Система trAcoustics, проверенная на космических кораблях.",
  },
  {
    icon: "Gift",
    badge: "Первым 50",
    title: "Постер с автографом",
    description: "Постер с автографом Антона Лапенко (некоторые буквы точно настоящие).",
  },
  {
    icon: "Footprints",
    badge: "Хардкор",
    title: "Никаких «сидячих мест»",
    description: "Только стоя, только хардкор.",
  },
  {
    icon: "Star",
    badge: "Легенда",
    title: "Ты был там, когда тишина сдохла",
    description: "«Я был там, когда тишина сдохла» — скажете вы своим внукам.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground uppercase mb-4">
            6 ПРИЧИН ПОТЕРЯТЬ ОСТАТКИ <span className="text-red-500">ЗДРАВОГО СМЫСЛА</span> НА ЭТИХ КОНЦЕРТАХ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Icon name={feature.icon as "Projector"} size={30} className="text-red-500" />
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground font-orbitron">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed font-space-mono">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
