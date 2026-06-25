/* ════════════════════════════════════════════════════════════
   CONFIG.JS — ZAK'S BAR
════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ── 1. IDENTITÉ ── */
  BAR_NAME:      "ZAK'S BAR",
  BAR_TAGLINE:   "Cocktails faits maison",
  RESTO_NAME:    "ZAK'S RESTAURANT",
  RESTO_TAGLINE: "Cuisine faite maison",

  /* ── 2. MESSAGE DU JOUR ── */
  MESSAGE_DUJOUR_ACTIF: false,
  MESSAGE_DUJOUR: "🥂 Soirée spéciale ce soir — Fête des Pères ! 🥂",

  /* ── 3. OUVERTURE ── */
  HORAIRES_AUTO_ACTIF: false,
  BAR_OUVERT:        true,
  RESTAURANT_OUVERT: false,
  RESTAURANT_ACTIF:  true,
  BAR_HORAIRES:        { debut: "20:00", fin: "23:00" },
  RESTAURANT_HORAIRES: { debut: "20:00", fin: "00:00" },

  /* ── 4. ACCÈS & PAIEMENT ── */
  MOT_DE_PASSE:    "Menubar03%",
  PAYPAL_USERNAME: "Zetun27",

  /* ── 5. EMAILJS ── */
  EMAILJS_PUBLIC_KEY:  "ZL8SCkq8GOwQQ7aGy",
  EMAILJS_SERVICE_ID:  "service_csu2lu3",
  EMAILJS_TEMPLATE_ID: "template_chhlm1c",

  /* ── 6. PRODUITS DÉSACTIVÉS ── */
  DISABLED_PRODUCTS: [
    "", "Mojito", "Mojito Fraise", "Jäger Bomb", "", 
    "", "", "", 
    "Tajine Poulet Olives Pommes de terre", "Tajine Haricots", "Tajine Pruneaux"
  ],
  
  /* ──────────────────────────────────────────────────────────
     7. COMPTES VIP
     ──────────────────────────────────────────────────────────
     Chaque compte VIP :
       nom          → prénom affiché et utilisé à la connexion (sensible à la casse)
       pin          → code PIN numérique (entre guillemets)
       gratuit      → true = tout gratuit pour ce VIP
       prixReduit   → si gratuit est false, multiplicateur de prix (ex: 0.5 = -50%)
                      mettre 1 pour prix normaux
       cocktailsVip → true = accès aux cocktails de catégorie "V.I.P."
       badgeEmail   → texte affiché dans l'email barman (laisse "" pour le nom seul)

     AJOUTER UN VIP  → copie un bloc { ... }, colle-le avant le "]",
                       ajoute une virgule après le bloc précédent.
     SUPPRIMER UN VIP → efface le bloc { ... } entier.
  ────────────────────────────────────────────────────────── */
  VIP_COMPTES: [
    {
      nom:          "Angeline",
      pin:          "270924",
      gratuit:      true,
      prixReduit:   1,
      cocktailsVip: true,
      badgeEmail:   "⭐ Cliente VIP — accès carte exclusive"
    },
    {
      nom:          "Claire",
      pin:          "1234",
      gratuit:      false,
      prixReduit:   0.3,
      cocktailsVip: true,
      badgeEmail:   "⭐ Client VIP — tarif -70%"
    },

        {
      nom:          "Zak",
      pin:          "270924",
      gratuit:      true,
      prixReduit:   1,
      cocktailsVip: true,
      badgeEmail:   "⭐ Gérant — accès carte exclusive"
    },

  ],

  /* ── 8. COCKTAILS ── */
  COCKTAILS: [
    {
      name: "Piña Colada",
      category: "Signatures",
      price: "2€",
      pricePerUnit: 2,
      tempsAttente: 5,
      desc: "Rhum blanc, lait de coco, jus d'ananas",
      ingredients: ["rhum blanc", "lait de coco", "jus d'ananas"]
    },
    {
      name: "Mojito",
      category: "Classiques",
      price: "2€",
      pricePerUnit: 2,
      tempsAttente: 5,
      desc: "Rhum blanc, menthe fraîche, citron vert, sirop de sucre, eau gazeuse",
      ingredients: ["rhum blanc", "menthe", "citron vert", "sirop de sucre", "eau gazeuse"]
    },
    {
      name: "Tequila Sunrise",
      category: "Deluxe",
      price: "2€",
      pricePerUnit: 2,
      tempsAttente: 5,
      desc: "Tequila, jus d'orange, grenadine",
      ingredients: ["tequila", "jus d'orange", "grenadine"]
    },
    {
      name: "Mojito Fraise",
      category: "Deluxe",
      price: "2€",
      pricePerUnit: 2,
      tempsAttente: 5,
      desc: "Rhum blanc, fraise fraîche, menthe, citron vert, sirop de sucre, eau gazeuse",
      ingredients: ["rhum blanc", "fraise", "menthe", "citron vert", "sirop de sucre", "eau gazeuse"]
    },
    {
      name: "Jäger Bomb",
      category: "Deluxe",
      price: "2€",
      pricePerUnit: 2,
      tempsAttente: 5,
      desc: "Jägermeister plongé dans une boisson énergisante",
      ingredients: ["jägermeister", "boisson énergisante"]
    },
  ],

  /* ── 9. PLATS ── */
  PLATS: [
    {
      name: "Tasty Crousty",
      category: "Signatures",
      price: "8€",
      pricePerUnit: 8,
      tempsAttente: 30,
      desc: "Riz, tenders, sauce secrète, oignons frits",
      ingredients: ["riz", "tenders", "creme fraiche", "sauce soja sucrée", "sauce aigre douce", "oignons frits", "miel"]
    },
    {
      name: "Saumon Teriyaki",
      category: "Signatures",
      price: "8€",
      pricePerUnit: 8,
      tempsAttente: 30,
      desc: "Pavé de saumon laqué à la sauce teriyaki, riz, graines de sésame, avocats",
      ingredients: ["saumon", "sauce teriyaki", "riz", "graines de sésame", "avocats"]
    },
    {
      name: "Pâtes Carbonara",
      category: "Classiques",
      price: "5€",
      pricePerUnit: 5,
      tempsAttente: 15,
      desc: "Pâtes, lardons, crème fraîche, parmesan, poivre",
      ingredients: ["pâtes", "lardons", "crème fraîche", "parmesan", "poivre"]
    },
    {
      name: "Pâtes Saumon",
      category: "Classiques",
      price: "5€",
      pricePerUnit: 5,
      tempsAttente: 15,
      desc: "Pâtes, saumon fumé, crème fraîche, citron",
      ingredients: ["pâtes", "saumon fumé", "crème fraîche", "citron"]
    },
    {
      name: "Tajine Poulet Olives Pommes de terre",
      category: "Tajines",
      price: "8€",
      pricePerUnit: 8,
      tempsAttente: 20,
      desc: "Poulet mijoté, olives, pommes de terre, citron confit, épices",
      ingredients: ["poulet", "olives", "pommes de terre", "citron confit", "épices tajine", "oignon"]
    },
    {
      name: "Tajine Haricots",
      category: "Tajines",
      price: "8€",
      pricePerUnit: 8,
      tempsAttente: 18,
      desc: "Haricots verts mijotés à la tomate, oignon, épices",
      ingredients: ["haricots verts", "tomate", "oignon", "ail", "épices tajine", "huile d'olive"]
    },
    
    {
      name: "Tajine Pruneaux",
      category: "Tajines",
      price: "8€",
      pricePerUnit: 8,
      tempsAttente: 20,
      desc: "Viande mijotée aux pruneaux, amandes, miel, épices",
      ingredients: ["viande", "pruneaux", "amandes", "oignon", "miel", "épices tajine"]
    },

    {
      name: "Glace Fraise",
      category: "Desserts",
      price: "1€",
      pricePerUnit: 1,
      tempsAttente: 10,
      desc: "Glace à la fraise, garnie de chantilly",
      ingredients: ["fraise", "lait", "sucre", "vanille"]
    },

    {
      name: "Glace Vanille",
      category: "Desserts",
      price: "1€",
      pricePerUnit: 1,
      tempsAttente: 10,
      desc: "Glace à la vanille, garnie de chantilly",
      ingredients: ["vanille", "lait", "sucre"]
    },

    {
      name: "Glace Café",
      category: "Desserts",
      price: "1€",
      pricePerUnit: 1,
      tempsAttente: 10,
      desc: "Glace au café, garnie de chantilly",
      ingredients: ["café", "lait", "sucre", "vanille"]
    },

    {
      name: "Glace Caramel",
      category: "Desserts",
      price: "1€",
      pricePerUnit: 1,
      tempsAttente: 10,
      desc: "Glace au caramel, garnie de chantilly",
      ingredients: ["caramel", "lait", "sucre", "vanille"]
    },

    
    {
      name: "Glace Framboise",
      category: "Desserts",
      price: "1€",
      pricePerUnit: 1,
      tempsAttente: 10,
      desc: "Glace à la framboise, garnie de chantilly",
      ingredients: ["framboise", "lait", "sucre", "vanille"]
    },
    
    {
      name: "Glace Menthe chocolat",
      category: "Desserts",
      price: "1€",
      pricePerUnit: 1,
      tempsAttente: 10,
      desc: "Glace à la menthe chocolat, garnie de chantilly",
      ingredients: ["menthe", "chocolat", "lait", "sucre", "vanille"]
    },
    
    {
      name: "Glace Chiocolat",
      category: "Desserts",
      price: "1€",
      pricePerUnit: 1,
      tempsAttente: 10,
      desc: "Glace au chocolat, garnie de chantilly",
      ingredients: ["chocolat", "lait", "sucre", "vanille"]
    },




  ],

  /* ── 10. INGRÉDIENTS DE BASE ── */
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

  /* ── 11. LISTE V.I.P. (affichage bas de carte) ── */
  VIP_ACTIF: false,
  VIP_TITLE: "🏆 V.I.P. 🏆",
  VIP_LIST: ["Angeline"],

  /* ── 12. MODE AMOUR 💕 ── */
  AMOUR_MOT_DE_PASSE: "270924",
  AMOUR_NOM: "Angeline",

  /* ── 13. TEMPS D'ATTENTE ──
     tempsAttente sur chaque cocktail/plat = minutes estimées pour préparer 1 unité.
     Le total affiché au client = somme des tempsAttente × quantités commandées.
     TEMPS_ATTENTE_ACTIF: false → désactive complètement l'affichage du temps.
     Exemple : 2× Mojito (3 min each) + 1× Tasty Crousty (12 min) = 18 min affichés.  */
  TEMPS_ATTENTE_ACTIF: true,

  /* ── 14. DEMANDE D'AVIS ──
     Après une commande (Paypal ou Espèces), le site peut demander une note
     en étoiles. Cette demande s'affiche au maximum 1 fois par semaine et
     par appareil (mémorisé sur le téléphone/ordinateur du client).
     AVIS_ACTIF: false → désactive complètement la demande d'avis. */
  AVIS_ACTIF: false,

  /* ════════════════════════════════════════════════════════════
     14. MODE FÊTE 🎉
     ════════════════════════════════════════════════════════════
     FETE_ACTIF: true  → active le mode fête (accès protégé + thème doré premium)
                false → site normal, aucun changement

     FETE_MOT_DE_PASSE → code d'accès communiqué aux invités (sensible à la casse)

     FETE_TITRE        → titre affiché sur l'écran d'accueil fête
     FETE_SOUS_TITRE   → sous-titre (ex: "Fête des Pères · Édition Prestige")
     FETE_MESSAGE      → petit message de bienvenue affiché après connexion
                         (laisse "" pour ne rien afficher)
  ════════════════════════════════════════════════════════════ */
  FETE_ACTIF:         false,
  FETE_MOT_DE_PASSE:  "fetethibault2026",

  FETE_TITRE:         "Fête des Pères",
  FETE_SOUS_TITRE:    "Édition Prestige · Accès Privé",
  FETE_MESSAGE:       "🥂 Bienvenue — Thibault & Claire.",

};
