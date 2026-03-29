import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Санкт-Петербург",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            12 декабря, начало в 20:00. Клуб «Время N», наб. Фонтанки, 90. Первая остановка грандиозного тура —
            город, который умеет слушать настоящую музыку.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              12 декабря, 20:00
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Клуб «Время N», наб. Фонтанки, 90
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Специальный гость: группа «Велюр»
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Москва",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            13 декабря, начало в 20:00. Клуб «Агломерат», Ленинградский пр-т, 80. Финальная точка тура — столица
            встречает «Багровый Фантомас» во всём великолепии.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              13 декабря, 20:00
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Клуб «Агломерат», Ленинградский пр-т, 80
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Специальный гость: группа «Велюр»
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="tour-dates" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
            ТУР ПО ДВУМ СТОЛИЦАМ
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-space-mono">
            Никаких «ещё потом»
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
