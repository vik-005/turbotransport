# Brief technique — Site vitrine "Turbo Transport"
### Test technique Call Connect Bénin — Durée stricte : 1h30

---

## ⚠️ Point critique avant de commencer

Le sujet **ne demande aucune base de données** et le critère éliminatoire n°1 est :
> "Un site non déployé est éliminatoire."

**Symfony + base de données sur Vercel est risqué en 1h30** : Vercel n'est pas fait pour du PHP/Symfony classique (il faut un adaptateur serverless PHP, une config `vercel.json` spécifique, une DB externe hébergée...). Le temps perdu en config peut te faire dépasser le délai → élimination automatique.

**Recommandation d'expert (à valider par toi) :**
- Stack **Next.js** (ou HTML/CSS/JS pur + Tailwind) → déploiement Vercel en 30 secondes, zéro config serveur.
- Simulateur de trajet = calcul **côté client** (JS) ou via une **API Route Next.js** (backend léger, sans DB — juste une fonction de calcul avec tarif au km stocké dans un fichier de config).
- Aucune base de données nécessaire : les infos de Turbo Transport sont statiques (contenu généré, pas de CMS demandé).

Si tu veux absolument montrer du Symfony pour le test, dis-le moi et je t'ajoute une variante API Symfony séparée déployée sur Railway/Render (backend) + frontend statique sur Vercel — mais ça ajoute de la complexité pour un gain de points incertain vu que ce n'est pas demandé.

**Je pars sur la stack Next.js ci-dessous par défaut. Dis-moi si tu veux basculer sur Symfony malgré le risque.**

---

## 1. Stack retenue

| Élément | Choix | Pourquoi |
|---|---|---|
| Framework | Next.js 14 (App Router) | Déploiement Vercel natif, SEO (SSR/meta), rapide à scaffolder |
| Style | Tailwind CSS | Responsive rapide, pas de CSS custom à écrire |
| Animation 3D | Spline (embed) ou Three.js léger (`@react-three/fiber`) | Spline = zéro code 3D, gain de temps énorme dans le délai |
| Simulateur | API Route Next.js (`/api/simulate`) | Montre une compétence backend sans DB |
| Déploiement | Vercel CLI | `vercel --prod` en une commande |
| Repo | Git + push GitHub avant déploiement | Traçabilité, propre |

---

## 2. Budget temps (1h30 = 90 min)

| Temps | Tâche |
|---|---|
| 0–8 min | Scaffold projet + init git + connexion Vercel |
| 8–15 min | Génération du contenu Turbo Transport (texte IA) |
| 15–35 min | Structure de la page (sections) + responsive Tailwind |
| 35–55 min | Simulateur de trajet (logique + UI) |
| 55–70 min | Animation 3D (intégration, pas de sur-ingénierie) |
| 70–80 min | SEO (meta, balisage, images optimisées, perf) |
| 80–88 min | Déploiement Vercel + vérif lien live |
| 88–90 min | Envoi email à ben@lannkin.com (cc maxime@lannkin.com) |

**Règle dure : à 88 min, tu arrêtes d'ajouter des features et tu déploies ce qui est prêt.** Continuer après le délai = éliminatoire.

---

## 3. Commandes projet

```bash
# 1. Scaffold
npx create-next-app@latest turbo-transport --tailwind --app --no-src-dir --eslint
cd turbo-transport

# 2. Git
git init
git add .
git commit -m "init: scaffold Next.js + Tailwind"

# 3. Lancer en local
npm run dev

# 4. Installer Vercel CLI si absent
npm i -g vercel

# 5. Lier le projet à Vercel
vercel link

# 6. Déployer en preview (test rapide)
vercel

# 7. Déployer en production (à faire à la fin, une seule fois idéalement)
vercel --prod
```

Optionnel (animation 3D avec React Three Fiber) :
```bash
npm install three @react-three/fiber @react-three/drei
```

---

## 4. Arborescence cible

```
turbo-transport/
├── app/
│   ├── layout.tsx          # meta SEO globales, lang="fr"
│   ├── page.tsx            # page one-page (assemble les sections)
│   └── api/
│       └── simulate/
│           └── route.ts    # calcul du prix de trajet (POST)
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Avantages.tsx
│   ├── Simulateur.tsx      # formulaire départ/arrivée/poids
│   ├── Animation3D.tsx     # scène 3D (camion / trajet)
│   ├── Temoignages.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── pricing.ts          # règles de calcul du tarif (constantes)
├── public/
│   └── images/
└── tailwind.config.ts
```

---

## 5. Contenu — Turbo Transport (à générer/adapter)

- **Secteur** : transport de marchandises (national + sous-régional, Bénin/Afrique de l'Ouest)
- **Sections attendues** :
  1. Hero : accroche + CTA "Demander un devis" / "Simuler mon trajet"
  2. Services (fret routier, messagerie, déménagement pro, logistique sur-mesure)
  3. Pourquoi nous (fiabilité, délais, suivi, couverture géographique)
  4. **Simulateur de trajet** (section centrale, visible et interactive)
  5. Animation 3D (illustration camion/trajet, discrète, ne doit pas ralentir la page)
  6. Témoignages clients
  7. Contact / CTA final
  8. Footer (mentions, réseaux, coordonnées)
- **Ton** : professionnel, crédible, orienté B2B logistique — pas de tournures "IA" génériques.

---

## 6. Simulateur — logique de calcul (exemple simple)

```ts
// lib/pricing.ts
export const TARIF_BASE = 5000; // FCFA
export const TARIF_KM = 350;    // FCFA/km
export const MAJORATION_POIDS = { leger: 1, moyen: 1.3, lourd: 1.7 };

export function calculerPrix(distanceKm: number, poids: "leger" | "moyen" | "lourd") {
  const prix = TARIF_BASE + distanceKm * TARIF_KM * MAJORATION_POIDS[poids];
  return Math.round(prix);
}
```

L'API `/api/simulate` reçoit `{ villeDepart, villeArrivee, distanceKm, poids }` et retourne le prix estimé + délai indicatif. Le calcul de distance entre deux villes peut être une table statique de distances Bénin (Cotonou–Porto-Novo, Cotonou–Parakou, etc.) pour rester crédible sans dépendre d'une API externe (gain de temps).

---

## 7. Checklist SEO (rapide, ne pas négliger)

- [ ] `<title>` et `<meta description>` uniques et pertinents
- [ ] Un seul `<h1>` par page, hiérarchie `h2/h3` logique
- [ ] Attributs `alt` sur toutes les images
- [ ] Balises sémantiques (`<section>`, `<nav>`, `<footer>`)
- [ ] Images optimisées (`next/image`, format webp)
- [ ] `robots.txt` + `sitemap.xml` basiques (Next.js les génère facilement)
- [ ] CTA visibles et clairs ("Demander un devis", "Simuler")
- [ ] Vérifier le Lighthouse score avant déploiement final

---

## 8. Checklist critères éliminatoires — À NE JAMAIS OUBLIER

- [ ] Le site est **réellement déployé** et accessible via une URL publique Vercel
- [ ] Le lien fonctionne (tester en navigation privée avant d'envoyer)
- [ ] **Arrêt strict à 1h30**, même si tout n'est pas parfait
- [ ] Email envoyé à **ben@lannkin.com**, en copie **maxime@lannkin.com**, avec le lien du site

---

## 9. Email de livraison (modèle)

```
À : ben@lannkin.com
Cc : maxime@lannkin.com
Objet : Test technique Développeur Web — Site Turbo Transport

Bonjour,

Voici le lien du site réalisé dans le cadre du test technique :
[URL Vercel]

Cordialement,
Providence KOUKOUI (WEL)
```
