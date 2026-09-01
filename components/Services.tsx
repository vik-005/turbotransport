const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    titre: "Fret routier",
    description:
      "Transport de marchandises volumineuses par camion sur l'ensemble du territoire béninois et vers les pays frontaliers. Chargement complet (FTL) ou partiel (LTL).",
    detail: "Portée : Bénin, Togo, Nigeria, Niger, Burkina Faso",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titre: "Messagerie express",
    description:
      "Livraison rapide de colis et courriers sensibles avec enlèvement en J et remise en J+1 sur les principaux axes urbains du Bénin.",
    detail: "Garantie J+1 Cotonou–Porto-Novo–Parakou",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    titre: "Déménagement pro",
    description:
      "Prestation complète pour déménagement d'entreprises : inventaire, emballage sécurisé, transport et remise en place dans vos nouveaux locaux.",
    detail: "Équipes spécialisées, matériel de conditionnement fourni",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titre: "Logistique sur-mesure",
    description:
      "Solutions logistiques adaptées aux contraintes spécifiques de votre secteur : agroalimentaire, BTP, industrie, produits sensibles ou dangereux.",
    detail: "Analyse de vos besoins, contrat cadre, reporting mensuel",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Ce que nous faisons</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">Nos services de transport</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            De la messagerie express au fret international, Turbo Transport propose une gamme complète pour couvrir l&apos;ensemble de vos besoins logistiques.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.titre} className="group p-8 rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300 bg-white">
              <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.titre}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{s.description}</p>
              <p className="text-sm text-orange-600 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
