"use client";
import { useState } from "react";
import { VILLES, type PoidsCategory, formatterPrix } from "@/lib/pricing";

const majorations: { value: PoidsCategory; label: string; facteur: number }[] = [
  { value: "leger", label: "Léger (< 500 kg)", facteur: 1 },
  { value: "moyen", label: "Moyen (500 kg – 2 t)", facteur: 1.3 },
  { value: "lourd", label: "Lourd (> 2 t)", facteur: 1.7 },
];

const villeLabels: Record<string, string> = {
  Cotonou: "Cotonou (Bénin)",
  "Porto-Novo": "Porto-Novo (Bénin)",
  Parakou: "Parakou (Bénin)",
  Djougou: "Djougou (Bénin)",
  Nikki: "Nikki (Bénin)",
  Kandi: "Kandi (Bénin)",
  Aneho: "Aneho (Togo)",
  Lomé: "Lomé (Togo)",
  Lagos: "Lagos (Nigeria)",
  Abidjan: "Abidjan (Côte d'Ivoire)",
  Niamey: "Niamey (Niger)",
  Ouagadougou: "Ouagadougou (Burkina Faso)",
  "Bobo-Dioulasso": "Bobo-Dioulasso (Burkina Faso)",
};

export default function Simulateur() {
  const [form, setForm] = useState({
    villeDepart: "",
    villeArrivee: "",
    poids: "moyen" as PoidsCategory,
    distanceManuelle: "",
  });
  const [result, setResult] = useState<{
    prix: number;
    distanceKm: number;
    delaiHeures: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    const payload = {
      villeDepart: form.villeDepart,
      villeArrivee: form.villeArrivee,
      poids: form.poids,
      distanceKm: form.distanceManuelle ? parseFloat(form.distanceManuelle) : undefined,
    };

    try {
      const res = await fetch("/api/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setForm({ villeDepart: "", villeArrivee: "", poids: "moyen", distanceManuelle: "" });
    setResult(null);
    setError("");
  };

  return (
    <section id="simulateur" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Estimateur de coût
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Simulez votre trajet en 30 secondes
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Indiquez votre ville de départ, votre destination et le poids de votre
            cargaison. Notre calculateur vous fournit un devis estimatif immédiatement.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-2">
                  Ville de départ *
                </label>
                <select
                  name="villeDepart"
                  value={form.villeDepart}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez…</option>
                  {VILLES.map((v) => (
                    <option key={v} value={v}>
                      {villeLabels[v] ?? v}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-2">
                  Ville d'arrivée *
                </label>
                <select
                  name="villeArrivee"
                  value={form.villeArrivee}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez…</option>
                  {VILLES.map((v) => (
                    <option key={v} value={v}>
                      {villeLabels[v] ?? v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Catégorie de poids *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {majorations.map((m) => (
                  <label
                    key={m.value}
                    className={`
                      flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer
                      transition-all duration-200
                      ${
                        form.poids === m.value
                          ? "border-orange-500 bg-orange-50"
                          : "border-slate-200 hover:border-slate-300"
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="poids"
                      value={m.value}
                      checked={form.poids === m.value}
                      onChange={() => setForm((f) => ({ ...f, poids: m.value }))}
                      className="sr-only"
                    />
                    <span className="text-slate-700 font-semibold text-sm">{m.label}</span>
                    <span className="ml-auto text-orange-600 font-bold text-sm">
                      ×{m.facteur}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-slate-700 text-sm font-semibold mb-2">
                Distance (km) — optionnel
              </label>
              <input
                type="number"
                name="distanceManuelle"
                value={form.distanceManuelle}
                onChange={handleChange}
                placeholder="Laisser vide si l'itinéraire est connu"
                min="1"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              <p className="text-xs text-slate-400 mt-1">
                Si vous ne renseignez pas de distance, le système utilise notre base
                de données de routes au Bénin et en Afrique de l'Ouest.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !form.villeDepart || !form.villeArrivee}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-md shadow-orange-500/20"
            >
              {loading ? "Calcul en cours…" : "Calculer mon devis"}
            </button>
          </form>

          {result && (
            <div className="mt-8 bg-gradient-to-br from-slate-50 to-orange-50/30 rounded-2xl p-8 border border-orange-100 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 rounded-full mb-4">
                <svg
                  className="w-7 h-7 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c3.866 0 7 1.79 7 4v2.1m-7-6.1c-3.866 0-7-1.79-7-4S8.134 4 12 4s7 1.79 7 4v2.1M12 12v10m0 0c-3.866 0-7-1.79-7-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Devis estimé</h3>
              <p className="text-slate-500 text-sm mb-6">
                Trajet {result.distanceKm} km • Allonge de {result.prix} FCFA
              </p>
              <div className="text-4xl font-extrabold text-orange-500 mb-2">
                {formatterPrix(result.prix)} FCFA
              </div>
              <div className="text-sm text-slate-600 mb-6">
                Délai indicatif: <strong>{result.delaiHeures}h</strong> (environ{" "}
                {Math.round(result.delaiHeures / 24)} jours)
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={reset}
                  className="border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Nouveau calcul
                </button>
                <button
                  onClick={() => {
                    const message = `Bonjour, j'ai obtenu un devis estimatif de ${result.prix} FCFA pour un trajet de ${result.distanceKm} km. Je souhaite passer commande.`;
                    window.open(`mailto:contact@turbotransport.bj?subject=Devis Turbo Transport&body=${encodeURIComponent(message)}`);
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
                >
                  Commander via email
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Ce montant est une estimation. Le tarif final peut varier selon la
                nature exacte de la marchandise et les conditions de charge.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
