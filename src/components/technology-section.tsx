import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const ticketCategories = [
  { name: "Предпродаж (до 20 ноября)", price: "1 400 ₽", icon: "Ticket", highlight: true },
  { name: "Стандарт", price: "2 200 ₽", icon: "Ticket", highlight: false },
  { name: "Билет + футболка с жирафом", price: "3 000 ₽", icon: "Shirt", highlight: false },
]

const venues = [
  {
    city: "Санкт-Петербург",
    date: "12 декабря",
    time: "20:00",
    venue: "клуб «Время N»",
    address: "наб. Фонтанки, 90",
  },
  {
    city: "Москва",
    date: "13 декабря",
    time: "20:00",
    venue: "клуб «Агломерат»",
    address: "Ленинградский пр-т, 80",
  },
]

export function TechnologySection() {
  return (
    <section id="tickets" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl xl:text-5xl font-extrabold text-foreground uppercase mb-4">
            ТУР ПО ДВУМ СТОЛИЦАМ:{" "}
            <span className="text-red-500">НИКАКИХ «ЕЩЁ ПОТОМ»</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {venues.map((venue, index) => (
            <div
              key={index}
              className="glow-border bg-card rounded-xl p-6 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-orbitron text-xl font-bold text-primary uppercase mb-4">{venue.city}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-card-foreground">
                  <Icon name="Calendar" size={18} className="text-red-500 flex-shrink-0" />
                  <span className="font-space-mono">{venue.date}, начало в {venue.time}</span>
                </div>
                <div className="flex items-center gap-3 text-card-foreground">
                  <Icon name="MapPin" size={18} className="text-red-500 flex-shrink-0" />
                  <span className="font-space-mono">{venue.venue}, {venue.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glow-border bg-card rounded-xl p-8 mb-8">
          <h3 className="font-orbitron text-xl font-bold text-foreground uppercase mb-6 text-center">Цены на билеты</h3>
          <div className="space-y-4">
            {ticketCategories.map((cat, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-lg ${cat.highlight ? "bg-red-500/10 border border-red-500/40" : "bg-muted/50"}`}
              >
                <div className="flex items-center gap-3">
                  <Icon name={cat.icon as "Ticket"} size={20} className="text-red-500" />
                  <span className="font-space-mono text-foreground">{cat.name}</span>
                </div>
                <span className="font-orbitron font-bold text-red-500 text-lg">{cat.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-red-500 hover:bg-red-600 text-white font-orbitron text-lg px-12 py-6 border-0 pulse-button"
          >
            ВЗЯТЬ БИЛЕТ
          </Button>
        </div>
      </div>
    </section>
  )
}
