const avantages = [
  {
    icon: "🛡️",
    titre: "Fiabilité certifiée",
    texte: "Nos conducteurs professionnels et notre flotte moderne garantissent la sécurité de vos cargaisons. Assurance marchandise incluse sur chaque trajet.",
  },
  {
    icon: "📍",
    titre: "Suivi en temps réel",
    texte: "Localisez votre livraison à tout moment via notre portail client ou par SMS. Transparence totale de l'enlèvement à la remise.",
  },
  {
    icon: "⚡",
    titre: "Délais respectés",
    texte: "Nos engagements de délais sont contractuels. Un retard ? Nous vous en informons proactivement et proposons une solution immédiate.",
  },
  {
    icon: "🌍",
    titre: "Couverture régionale",
    texte: "Présents au Bénin, Togo, Nigeria, Niger et Burkina Faso. Un réseau de partenaires locaux pour les derniers kilomètres partout en Afrique de l'Ouest.",
  },
  {
    icon: "💬",
    titre: "Support dédié 7j/7",
    texte: "Un conseiller logistique disponible 7j/7 par téléphone et WhatsApp pour répondre à toutes vos questions et urgences en temps réel.",
  },
  {
    icon: "💰",
    titre: "Tarifs transparents",
    texte: "Pas de surprise : notre simulateur vous donne une estimation immédiate. Facturation claire, sans frais cachés, avec bons de livraison digitaux.",
  },
];

export default function Avantages() {
  return (
    <section id="avantages" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Pourquoi nous choisir</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">La différence Turbo Transport</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Depuis 2012, nous nous sommes imposés comme le partenaire logistique de confiance des entreprises béninoises et régionales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {avantages.map((a) => (
            <div key={a.titre} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100">
              <div className="text-4xl mb-5">{a.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{a.titre}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{a.texte}</p>
            </div>
          ))}
        </div>

        {/* Bannière chiffres clés */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-950 rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "120+", l: "Camions en flotte" },
            { n: "24h", l: "Temps de réponse devis" },
            { n: "500+", l: "Clients actifs" },
            { n: "0", l: "Compromis sur la sécurité" },
          ].map((item) => (
            <div key={item.l}>
              <div className="text-3xl font-extrabold text-orange-500 mb-1">{item.n}</div>
              <div className="text-slate-400 text-sm">{item.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
