export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + Tagline */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 3h15v13H1zm15 4h3l3 3v6h-6V7zM6 17.5A1.5 1.5 0 1 0 6 20a1.5 1.5 0 0 0 0-2.5zm11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                </svg>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Turbo<span className="text-orange-500">Transport</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Le partenaire logistique de référence pour vos transports de marchandises au Bénin et en Afrique de l&apos;Ouest depuis 2012.
            </p>
            <div className="flex gap-3 mt-5">
              {["LinkedIn", "WhatsApp", "Facebook"].map((r) => (
                <a
                  key={r}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center text-xs font-bold text-white transition-colors"
                >
                  {r.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Fret routier", "Messagerie express", "Déménagement pro", "Logistique sur-mesure", "Simulateur de trajet"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-orange-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">📍</span>
                <span>Ave Jean-Paul II, Akpakpa<br />Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">📞</span>
                <a href="tel:+22901001122" className="hover:text-orange-400 transition-colors">+229 01 00 11 22</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">✉️</span>
                <a href="mailto:contact@turbotransport.bj" className="hover:text-orange-400 transition-colors">contact@turbotransport.bj</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <span>© {annee} Turbo Transport. Tous droits réservés.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-slate-400 transition-colors">CGV</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
