export type PoidsCategory = "leger" | "moyen" | "lourd";

export const TARIF_BASE = 5000;
export const TARIF_KM = 350;
export const MAJORATION_POIDS: Record<PoidsCategory, number> = {
  leger: 1,
  moyen: 1.3,
  lourd: 1.7,
};

export const VILLES = [
  "Cotonou",
  "Porto-Novo",
  "Parakou",
  "Djougou",
  "Nikki",
  "Kandi",
  "Aneho",
  "Lomé",
  "Lagos",
  "Abidjan",
  "Niamey",
  "Ouagadougou",
  "Bobo-Dioulasso",
] as const;

export type Ville = (typeof VILLES)[number];

const DISTANCES: Record<string, number> = {
  "Cotonou-Porto-Novo": 35,
  "Cotonou-Parakou": 260,
  "Cotonou-Djougou": 320,
  "Cotonou-Nikki": 480,
  "Cotonou-Kandi": 250,
  "Cotonou-Aneho": 45,
  "Cotonou-Lagos": 95,
  "Cotonou-Abidjan": 520,
  "Cotonou-Niamey": 950,
  "Cotonou-Ouagadougou": 900,
  "Cotonou-Bobo-Dioulasso": 780,
  "Cotonou-Lomé": 260,
  "Porto-Novo-Parakou": 230,
  "Porto-Novo-Djougou": 340,
  "Parakou-Djougou": 200,
  "Parakou-Nikki": 260,
  "Lagos-Lomé": 360,
  "Lagos-Abidjan": 480,
  "Niamey-Ouagadougou": 850,
  "Lomé-Aného": 260,
};

export function getDistanceLocale(depart: string, arrivee: string): number | null {
  if (depart === arrivee) return null;
  const key = `${depart}-${arrivee}`;
  const reverse = `${arrivee}-${depart}`;
  if (key in DISTANCES) return DISTANCES[key];
  if (reverse in DISTANCES) return DISTANCES[reverse];
  return null;
}

export function calculerPrix(distanceKm: number, poids: PoidsCategory): number {
  if (distanceKm <= 0) return TARIF_BASE;
  const prix = TARIF_BASE + distanceKm * TARIF_KM * MAJORATION_POIDS[poids];
  return Math.round(prix);
}

export function estimerDelai(distanceKm: number): number {
  return Math.ceil(distanceKm / 50) + 1;
}

export function formatterPrix(prix: number): string {
  return new Intl.NumberFormat("fr-FR").format(prix);
}
