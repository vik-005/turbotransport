const temoignages = [
  {
    nom: "Marie Hinnou",
    entreprise: "Cimenterie du Bénin",
    role: "Responsable Logistique",
    texte:
      "Turbo Transport gère nos livraisons de ciment entre Cotonou et Parakou depuis 3 ans. Plus jamais un retard, ni une marchandise endommagée. Le suivi en temps réel nous fait gagner des heures précieuses.",
    note: 5,
    couleur: "bg-amber-100 border-amber-200 text-amber-800",
  },
  {
    nom: "Abdoulaye Sow",
    entreprise: "Société Africaine d'Export",
    role: "Direct des Achats",
    texte:
      "Pour nos envois Lagos–Abidjan, Turbo Transport est le seul à honorer ses délais contractuels. L'équipe est réactive et les tarifs sont clairs dès le devis en ligne.",
    note: 5,
    couleur: "bg-blue-100 border-blue-200 text-blue-800",
  },
  {
    nom: "Aïcha Danté",
    entreprise: "Distribora SARL",
    role: "Gérante",
    texte:
      "Le déménagement de nos locaux à Cotonou a été parfaitement orchestré. Matériel, planification et remise en place : une prestation clé en main qui a dépassé nos attentes.",
    note: 4,
    couleur: "bg-green-100 border-green-200 text-green-800",
  },
  {
    nom: "Samuel Baki",
    entreprise: "Eco-Logistiques SA",
    role: "Co-fondateur",
    texte:
      "Nos flux agroalimentaires vers le Niger et le Burkina Faso sont sûrs et à prix maîtrisé grâce à Turbo Transport. Un partenaire qui comprend les contraintes du transport régional.",
    note: 5,
    couleur: "bg-purple-100 border-purple-200 text-purple-800",
  },
];

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < note ? "text-amber-400" : "text-slate-300"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.446l-7.416 3.967 1.48-8.279L0 9.306l8.332-1.151z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ nom, couleur }: { nom: string; couleur: string }) {
  const initials = nom
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm ${couleur}`}
    >
      {initials}
    </div>
  );
}

export default function Temoignages() {
  return (
    <section id="temoignages" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Ce que nos clients disent
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Des résultats concrets
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Ils nous font confiance pour leurs envois les plus critiques. Leur
            satisfaction est notre meilleure référence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {temoignages.map((t) => (
            <div
              key={t.nom}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col"
            >
              <StarRating note={t.note} />
              <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                "{t.texte}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Avatar nom={t.nom} couleur={t.couleur} />
                <div>
                  <div className="font-bold text-slate-900">{t.nom}</div>
                  <div className="text-sm text-slate-500">
                    {t.role} — {t.entreprise}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
