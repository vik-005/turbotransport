"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [envoye, setEnvoye] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi (pas de backend email requis pour le test)
    setEnvoye(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Parlons de votre projet</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-4">Demander un devis</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Réponse garantie sous 24 heures. Pour les urgences, contactez-nous directement par téléphone ou WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Infos de contact */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {[
              {
                icon: "",
                label: "Adresse",
                value: "Avenue Jean-Paul II, Quartier Akpakpa\nCotonou, Bénin",
              },
              {
                icon: "📞",
                label: "Téléphone / WhatsApp",
                value: "+229 01 00 11 22",
              },
              {
                icon: "✉️",
                label: "Email",
                value: "contact@turbotransport.bj",
              },
              {
                icon: "🕐",
                label: "Horaires",
                value: "Lun–Ven : 07h30 – 18h00\nSam : 08h00 – 13h00",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">{item.label}</div>
                  <div className="text-slate-600 text-sm whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
            {envoye ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <div className="text-5xl"></div>
                <h3 className="text-xl font-bold text-slate-900">Message envoyé !</h3>
                <p className="text-slate-500 text-center">
                  Merci pour votre demande. Notre équipe commerciale vous contacte sous 24 heures.
                </p>
                <button
                  onClick={() => { setEnvoye(false); setForm({ nom: "", email: "", telephone: "", message: "" }); }}
                  className="mt-2 text-orange-500 font-semibold hover:underline text-sm"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-1">Nom complet *</label>
                    <input
                      type="text"
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-semibold mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={form.telephone}
                      onChange={handleChange}
                      required
                      placeholder="+229 00 00 00 00"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-1">Email professionnel *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="vous@entreprise.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-sm font-semibold mb-1">Décrivez votre besoin</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Type de marchandise, destination, fréquence, contraintes particulières..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-orange-500/20"
                >
                  Envoyer ma demande de devis
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Vos données restent confidentielles et ne seront jamais transmises à des tiers.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
