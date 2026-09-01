"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Transport fiable en Afrique de l&apos;Ouest
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Votre marchandise,
          <br />
          <span className="text-orange-500">livrée à temps.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Turbo Transport assure le transport de fret routier, la messagerie express et la logistique sur-mesure 
          au Bénin et dans toute l&apos;Afrique de l&apos;Ouest.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("simulateur")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-orange-500/30 hover:scale-105"
          >
            Simuler mon trajet
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 backdrop-blur-sm hover:scale-105"
          >
            Demander un devis
          </button>
        </div>

        {/* Statistiques */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { valeur: "12 ans", label: "d'expérience" },
            { valeur: "5 000+", label: "livraisons/an" },
            { valeur: "8 pays", label: "couverts" },
            { valeur: "99%", label: "taux de ponctualité" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-orange-500 mb-1">{stat.valeur}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Flèche bas */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
