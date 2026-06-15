/* ════════════════════════════════════════════════════════════
   CONFIG.JS — ZAK'S BAR
   ════════════════════════════════════════════════════════════
   Ce fichier regroupe TOUT ce que tu peux modifier facilement :
   noms, messages, horaires, cocktails, plats, ingrédients,
   mots de passe, identifiants PayPal et EmailJS...

   Le fichier index.html contient uniquement le "moteur" du site
   (affichage, calculs, formulaires) — tu n'as normalement jamais
   besoin d'y toucher.

   RÈGLE D'OR : ne touche jamais aux symboles de structure
   ( { } [ ] , : ) — modifie seulement ce qui est entre guillemets
   "..." ou les nombres / true / false.
════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ──────────────────────────────────────────────────────────
     1. IDENTITÉ DU SITE
     Les titres affichés en haut de la carte. Ils changent
     automatiquement selon l'onglet Boissons / Restaurant.
  ────────────────────────────────────────────────────────── */
  BAR_NAME:      "ZAK'S BAR",
  BAR_TAGLINE:   "Cocktails faits maison",
  RESTO_NAME:    "ZAK'S RESTAURANT",
  RESTO_TAGLINE: "Cuisine faite maison",


  /* ──────────────────────────────────────────────────────────
     2. MESSAGE DU JOUR
     Un bandeau affiché en haut de la carte (annonce, soirée
     spéciale, info...). Mets ACTIF sur false pour le masquer.
  ────────────────────────────────────────────────────────── */
  MESSAGE_DUJOUR_ACTIF: true,
  MESSAGE_DUJOUR: "ouverture du bar à 20h",


  /* ──────────────────────────────────────────────────────────
     3. OUVERTURE
     ──────────────────────────────────────────────────────────
     Deux modes au choix :

     MODE MANUEL (HORAIRES_AUTO_ACTIF: false)
       → BAR_OUVERT / RESTAURANT_OUVERT décident directement.
       → Pratique pour fermer ponctuellement sans toucher aux horaires.

     MODE AUTOMATIQUE (HORAIRES_AUTO_ACTIF: true)
       → Le site calcule lui-même si c'est ouvert en comparant
         l'heure actuelle aux horaires définis ci-dessous.
       → BAR_OUVERT / RESTAURANT_OUVERT sont alors ignorés.

     FORMAT DES HORAIRES : "HH:MM" (24h), par exemple "18:00".
     Si l'heure de fin est plus petite que l'heure de début
     (ex: ouverture 18:00, fermeture 02:00), ça veut dire que
     ça ferme après minuit — c'est géré automatiquement.

     - RESTAURANT_ACTIF : mets false pour masquer COMPLÈTEMENT
       l'onglet Restaurant (mode "bar uniquement" — c'est le
       mode utilisé la plupart du temps).
  ────────────────────────────────────────────────────────── */
  HORAIRES_AUTO_ACTIF: true,

  BAR_OUVERT:        true,
  RESTAURANT_OUVERT: true,
  RESTAURANT_ACTIF:  true,

  BAR_HORAIRES: {
    debut: "20:00",
    fin:   "02:00",
  },
  RESTAURANT_HORAIRES: {
    debut: "04:00",
    fin:   "04:01",
  },


  /* ──────────────────────────────────────────────────────────
     4. ACCÈS BARMAN & PAIEMENT
  ────────────────────────────────────────────────────────── */
  MOT_DE_PASSE:    "Menubar03%",   // mot de passe de l'onglet "Gestion"
  PAYPAL_USERNAME: "Zetun27",      // ton identifiant paypal.me (sans le lien complet)


  /* ──────────────────────────────────────────────────────────
     5. EMAILJS (envoi des commandes par email)
  ────────────────────────────────────────────────────────── */
  EMAILJS_PUBLIC_KEY:  "ZL8SCkq8GOwQQ7aGy",
  EMAILJS_SERVICE_ID:  "service_csu2lu3",
  EMAILJS_TEMPLATE_ID: "template_chhlm1c",


  /* ──────────────────────────────────────────────────────────
     6. PRODUITS DÉSACTIVÉS MANUELLEMENT
     Écris ici le NOM EXACT d'un cocktail ou d'un plat pour le
     rendre immédiatement indisponible, peu importe le stock
     d'ingrédients (utile pour une rupture définitive).
     Exemple : ["Jäger Bomb", "Tajine Pruneaux"]
  ────────────────────────────────────────────────────────── */
  DISABLED_PRODUCTS: [
    "Piña Colada", "Mojito", "Mojito Fraise", "Jäger Bomb",
  ],


  /* ──────────────────────────────────────────────────────────
     7. COCKTAILS
     ──────────────────────────────────────────────────────────
     Chaque cocktail :
       name         → nom affiché
       category     → section de la carte
                       (Signatures / Classiques / V.I.P. / Personnalisé)
       price        → texte affiché ("2€", "Gratuit"...)
       pricePerUnit → nombre utilisé pour les calculs (0 = gratuit)
       desc         → description affichée
       ingredients  → liste d'ingrédients — ATTENTION : le même
                      ingrédient doit avoir le même nom partout
                      (minuscules, sans faute) pour que la gestion
                      de stock fonctionne correctement.

     AJOUTER UN COCKTAIL  → copie un bloc { ... } entier, colle-le
                             avant le "]" final, ajoute une virgule
                             après le bloc précédent.
     SUPPRIMER UN COCKTAIL → efface le bloc { ... } entier (avec
                             sa virgule).
     RENDRE GRATUIT        → mets pricePerUnit: 0 et price: "Gratuit"
     CHANGER LE PRIX       → modifie price ET pricePerUnit ensemble.
  ────────────────────────────────────────────────────────── */
  COCKTAILS: [

    {
      name: "Piña Colada",
      category: "Signatures",
      price: "2€",
      pricePerUnit: 2,
      desc: "Rhum blanc, lait de coco, jus d'ananas",
      ingredients: ["rhum blanc", "lait de coco", "jus d'ananas"]
    },

    {
      name: "Mojito",
      category: "Classiques",
      price: "2€",
      pricePerUnit: 2,
      desc: "Rhum blanc, menthe fraîche, citron vert, sirop de sucre, eau gazeuse",
      ingredients: ["rhum blanc", "menthe", "citron vert", "sirop de sucre", "eau gazeuse"]
    },

    {
      name: "Tequila Sunrise",
      category: "V.I.P.",
      price: "2€",
      pricePerUnit: 2,
      desc: "Tequila, jus d'orange, grenadine",
      ingredients: ["tequila", "jus d'orange", "grenadine"]
    },

    {
      name: "Mojito Fraise",
      category: "V.I.P.",
      price: "2€",
      pricePerUnit: 2,
      desc: "Rhum blanc, fraise fraîche, menthe, citron vert, sirop de sucre, eau gazeuse",
      ingredients: ["rhum blanc", "fraise", "menthe", "citron vert", "sirop de sucre", "eau gazeuse"]
    },

    {
      name: "Jäger Bomb",
      category: "V.I.P.",
      price: "2€",
      pricePerUnit: 2,
      desc: "Jägermeister plongé dans une boisson énergisante",
      ingredients: ["jägermeister", "boisson énergisante"]
    },

  ],


  /* ──────────────────────────────────────────────────────────
     8. PLATS (RESTAURANT)
     Même structure que COCKTAILS. Ignoré si RESTAURANT_ACTIF
     est sur false — la liste peut rester telle quelle.
  ────────────────────────────────────────────────────────── */
  PLATS: [

    {
      name: "Tasty Crousty",
      category: "Signatures",
      price: "8€",
      pricePerUnit: 8,
      desc: "Riz, tenders, sauce secrète, oignons frits",
      ingredients: ["riz", "tenders", "creme fraiche", "sauce soja sucrée", "sauce aigre douce", "oignons frits", "miel"]
    },

    {
      name: "Saumon Teriyaki",
      category: "Signatures",
      price: "8€",
      pricePerUnit: 8,
      desc: "Pavé de saumon laqué à la sauce teriyaki, riz, graines de sésame, avocats",
      ingredients: ["saumon", "sauce teriyaki", "riz", "graines de sésame", "avocats"]
    },

    {
      name: "Pâtes Carbonara",
      category: "Classiques",
      price: "5€",
      pricePerUnit: 5,
      desc: "Pâtes, lardons, crème fraîche, parmesan, poivre",
      ingredients: ["pâtes", "lardons", "crème fraîche", "parmesan", "poivre"]
    },

    {
      name: "Pâtes Saumon",
      category: "Classiques",
      price: "5€",
      pricePerUnit: 5,
      desc: "Pâtes, saumon fumé, crème fraîche, citron",
      ingredients: ["pâtes", "saumon fumé", "crème fraîche", "citron"]
    },

    {
      name: "Tajine Poulet Olives Pommes de terre",
      category: "Tajines",
      price: "8€",
      pricePerUnit: 8,
      desc: "Poulet mijoté, olives, pommes de terre, citron confit, épices",
      ingredients: ["poulet", "olives", "pommes de terre", "citron confit", "épices tajine", "oignon"]
    },

    {
      name: "Tajine Haricots",
      category: "Tajines",
      price: "8€",
      pricePerUnit: 8,
      desc: "Haricots verts mijotés à la tomate, oignon, épices",
      ingredients: ["haricots verts", "tomate", "oignon", "ail", "épices tajine", "huile d'olive"]
    },

    {
      name: "Tajine Pruneaux",
      category: "Tajines",
      price: "8€",
      pricePerUnit: 8,
      desc: "Viande mijotée aux pruneaux, amandes, miel, épices",
      ingredients: ["viande", "pruneaux", "amandes", "oignon", "miel", "épices tajine"]
    },

  ],


  /* ──────────────────────────────────────────────────────────
     9. INGRÉDIENTS DE BASE (pour la gestion de stock)
     ──────────────────────────────────────────────────────────
     Les ingrédients utilisés dans COCKTAILS / PLATS sont ajoutés
     AUTOMATIQUEMENT à ces listes — pas besoin de les recopier.

     Ajoute ici en plus tout ingrédient de stock qui n'est pas
     (encore) utilisé dans une recette, pour qu'il apparaisse
     quand même dans la gestion.
  ────────────────────────────────────────────────────────── */
  INGREDIENTS_BOISSONS: [
    "citron vert", "citron jaune", "sucre de canne", "sirop de sucre", "bailey",
    "vin rouge", "biere ruby", "biere blonde", "biere blanche", "tequila",
    "rhum blanc", "rhum agricole", "vodka", "rhum arrangé",
    "menthe", "eau gazeuse", "lait de coco", "jus d'ananas", "jus d'orange", "grenadine",
    "fraise", "jägermeister", "boisson énergisante",
  ],

  INGREDIENTS_NOURRITURE: [
    "riz", "tenders", "creme fraiche", "sauce soja sucrée", "sauce aigre douce",
    "oignons frits", "avocats", "lardons", "parmesan", "oeuf", "poivre",
    "saumon fumé", "citron", "aneth", "poulet", "olives", "pommes de terre",
    "citron confit", "épices tajine", "oignon", "tomate", "ail", "huile d'olive",
    "pruneaux", "amandes", "miel", "haricots verts",
  ],


  /* ──────────────────────────────────────────────────────────
     10. LISTE V.I.P.
     Affichée en bas de la carte. Mets ACTIF sur false pour la
     masquer complètement.

     AJOUTER UN NOM  → ajoute une ligne "Nom" entre les crochets,
                       avec une virgule après.
     SUPPRIMER UN NOM → efface la ligne correspondante.
  ────────────────────────────────────────────────────────── */
  VIP_ACTIF: false,
  VIP_TITLE: "🏆 V.I.P. 🏆",
  VIP_LIST: [
    "Angeline",
  ],

};
