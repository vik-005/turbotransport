import { NextRequest, NextResponse } from "next/server";
import {
  calculerPrix,
  estimerDelai,
  getDistanceLocale,
  PoidsCategory,
} from "@/lib/pricing";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { villeDepart, villeArrivee, distanceKm, poids } = body;

    if (!villeDepart || !villeArrivee || !poids) {
      return NextResponse.json(
        { error: "Veuillez renseigner les villes de départ et d'arrivée ainsi que le poids." },
        { status: 400 }
      );
    }

    let distance = typeof distanceKm === "number" ? distanceKm : getDistanceLocale(villeDepart, villeArrivee);

    if (!distance || distance <= 0) {
      return NextResponse.json(
        { error: "Distance introuvable pour cet itinéraire. Veuillez indiquer la distance en kilmètres." },
        { status: 400 }
      );
    }

    const prix = calculerPrix(distance, poids as PoidsCategory);
    const delai = estimerDelai(distance);

    return NextResponse.json({
      prix,
      distanceKm: distance,
      poids,
      delaiHeures: delai,
      tarifBase: 5000,
      tarifKm: 350,
    });
  } catch {
    return NextResponse.json({ error: "Erreur de traitement de la requête." }, { status: 500 });
  }
}
