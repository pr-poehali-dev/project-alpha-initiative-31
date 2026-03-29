import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contacts" className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-2 uppercase">
              Багровый <span className="text-red-500">Фантомас</span>
            </h2>
            <p className="font-space-mono text-gray-400 text-sm mb-1">
              Тур в честь 36-летия альбома
            </p>
            <p className="font-orbitron text-red-500 text-sm font-bold mb-6">«Электрические жирафы»</p>
            <p className="font-space-mono text-gray-400 text-sm">
              Организатор: промо-группа «Хардкор по факту»
            </p>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4 uppercase">Навигация</h3>
            <ul className="space-y-2">
              {[
                { href: "#tour", label: "Тур" },
                { href: "#about", label: "О группе" },
                { href: "#members", label: "Участники" },
                { href: "#tickets", label: "Билеты" },
                { href: "#faq", label: "FAQ" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="contacts-social">
            <h3 className="font-orbitron text-white font-semibold mb-4 uppercase">
              НЕ ПРОСПИ, НЕ ЗАБУДЬ, НЕ ОТМАЗЫВАЙСЯ
            </h3>
            <p className="font-space-mono text-gray-400 text-sm mb-6">Следи за новостями в соцсетях:</p>
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Icon name="Users" size={20} />
                <span className="font-space-mono text-sm">ВКонтакте</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Icon name="Send" size={20} />
                <span className="font-space-mono text-sm">Telegram «Только для своих»</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors duration-200"
              >
                <Icon name="Youtube" size={20} />
                <span className="font-space-mono text-sm">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-space-mono text-gray-400 text-sm">
              © 2024 «Багровый Фантомас». Все жирафы живы.
            </p>
            <p className="font-space-mono text-gray-500 text-xs">
              Промо-группа «Хардкор по факту»
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
