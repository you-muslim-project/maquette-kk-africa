// KK Africa Déco : le SEUL fichier qui change d'un client à l'autre (modèle décorateur 3D du 17/11/2026).
// Données : fiche Google Maps relevée le 17/11/2026 (kk-africa/donnees-google-maps.md). Rien d'inventé :
// note, nombre d'avis, avis, adresse, heure de fermeture et téléphone viennent de la fiche.
// Photos : la fiche n'en a aucune. Les emplacements « vos réalisations ici » attendent celles du client.
window.SITE = {
  nom: 'KK Africa Déco',
  metier: { fr: "Décoration d'intérieur", ar: 'الديكور الداخلي' },
  ville: { fr: 'Tanger', ar: 'طنجة' },
  langues: ['fr', 'ar'],
  whatsapp: '212626617324',             // indicatif + numéro, sans le 0 ni le +
  telephoneAffiche: '06 26 61 73 24',
  couleurs: { fond: '#EFE6DA', texte: '#1E1A16', accent: '#B5552B', second: '#2F3A2F' },
  note: { valeur: 4.9, nombre: 31, cinqEtoiles: 30 },
  adresse: { fr: '3e étage, Ibn Battouta Mall, Tanger', ar: 'الطابق الثالث، ابن بطوطة مول، طنجة' },
  horaires: { fr: "Ouvert jusqu'à 18 h", ar: 'مفتوح حتى السادسة مساءً' },
  carte: 'https://www.google.com/maps/search/?api=1&query=KK+Africa+D%C3%A9co+Tanger',
  // Avis Google avec texte, recopiés tels quels (l'avis à 1 étoile « Aucune réponse » n'est pas repris).
  avis: [
    { nom: 'Mohamed Al Asri', etoiles: 5, texte: 'Formidable travail par rapport aux qualité prix' },
    { nom: 'Mohamed Belhaj', etoiles: 5, texte: 'Excellent travail' },
    { nom: 'Grain tv', etoiles: 5, texte: 'Endroit magnifique 💡' },
  ],
  // Photos du client : { src: 'photos/salon-1.jpg', legende: { fr: '…', ar: '…' } }
  realisations: [],
  // EN ATTENDANT les photos du client (consigne de Youness du 17/11) : images générées (Google Flow,
  // Nano Banana), affichées avec la mention « Photo d'illustration », jamais présentées comme ses réalisations.
  // Dès que ses vraies photos arrivent dans « realisations », ces illustrations disparaissent toutes seules.
  illustrations: [
    { src: 'photos/illustration-4.webp', legende: { fr: 'Salon aux tons terre cuite (illustration)', ar: 'صالون بألوان ترابية (صورة توضيحية)' } },
    { src: 'photos/illustration-1.webp', legende: { fr: 'Coin lecture avec lanterne (illustration)', ar: 'ركن القراءة مع فانوس (صورة توضيحية)' } },
    { src: 'photos/illustration-2.webp', legende: { fr: 'Salle à manger en zellige vert (illustration)', ar: 'غرفة طعام بالزليج الأخضر (صورة توضيحية)' } },
    { src: 'photos/illustration-3.webp', legende: { fr: 'Chambre apaisante (illustration)', ar: 'غرفة نوم هادئة (صورة توضيحية)' } },
  ],
  // Étiquettes posées sur la 3D (ordinateur seulement), par séquence puis par repère Blender.
  etiquettes: {
    amenagement: {
      murs: { fr: 'Couleurs des murs', ar: 'ألوان الجدران' },
      tapis: { fr: 'Tapis et textiles', ar: 'الزرابي والأقمشة' },
      canape: { fr: 'Mobilier', ar: 'الأثاث' },
      arbre: { fr: 'Plantes', ar: 'النباتات' },
    },
    soiree: {
      lanterne: { fr: "Lumière d'ambiance", ar: 'إضاءة دافئة' },
    },
  },
  textes: {
    noteCourte: { fr: '{note} sur Google · {nombre} avis', ar: '{note} على Google · {nombre} تقييم' },
    titre: { fr: ['Un intérieur', 'qui vous', 'ressemble.'], ar: ['بيت', 'يشبهك', 'في طنجة.'] },
    chapo: { fr: "Décoration et aménagement d'intérieur à {ville}. Couleurs, mobilier, lumière : chaque pièce prend vie.", ar: 'ديكور وتهيئة داخلية في طنجة. الألوان، الأثاث، الإضاءة: كل غرفة تنبض بالحياة.' },
    scene1: { fr: "De la pièce vide au salon où l'on se sent bien.", ar: 'من غرفة فارغة إلى صالون تشعر فيه بالراحة.' },
    bande: { fr: ['Salons', 'Couleurs', 'Mobilier', 'Tapis', 'Lumière', 'Plantes'], ar: ['الصالونات', 'الألوان', 'الأثاث', 'الزرابي', 'الإضاءة', 'النباتات'] },
    scene2: { fr: 'Le jour comme le soir, une lumière qui réchauffe.', ar: 'في النهار كما في المساء، إضاءة دافئة.' },
    chiffreNote: { fr: 'note sur Google', ar: 'التقييم على Google' },
    chiffreAvis: { fr: 'avis Google', ar: 'تقييمات Google' },
    chiffreCinq: { fr: 'avis à 5 étoiles', ar: 'تقييمات بخمس نجوم' },
    titreAvis: { fr: 'Ce que disent nos clients', ar: 'ماذا يقول زبناؤنا' },
    sourceAvis: { fr: 'Avis publiés sur Google Maps, recopiés tels quels.', ar: 'تقييمات منشورة على خرائط Google كما هي.' },
    titreRealisations: { fr: 'Nos réalisations', ar: 'أعمالنا' },
    emplacementPhoto: { fr: 'Vos réalisations ici', ar: 'صور أعمالكم هنا' },
    titreIllustrations: { fr: 'Inspirations', ar: 'أفكار وإلهام' },
    mentionIllustration: { fr: "Photo d'illustration", ar: 'صورة توضيحية' },
    titreVisite: { fr: 'Venez nous voir', ar: 'زورونا' },
    boutonCarte: { fr: "Voir l'itinéraire", ar: 'الطريق إلينا' },
    boutonWhatsapp: { fr: 'WhatsApp', ar: 'واتساب' },
    titreContact: { fr: 'Parlons de votre projet.', ar: 'حدثونا عن مشروعكم.' },
    champNom: { fr: 'Votre nom', ar: 'الاسم' },
    champProjet: { fr: 'Votre projet : pièce, quartier, envies…', ar: 'مشروعكم: الغرفة، الحي، أفكاركم…' },
    consentement: { fr: "J'accepte que mes coordonnées servent uniquement à me recontacter (loi 09-08).", ar: 'أوافق على استعمال معلوماتي فقط للتواصل معي (القانون 09-08).' },
    boutonEnvoyer: { fr: 'Envoyer sur WhatsApp', ar: 'أرسل عبر واتساب' },
    messageWhatsapp: { fr: 'Bonjour KK Africa Déco, je viens de votre site.', ar: 'السلام عليكم KK Africa Déco، تواصلت معكم من الموقع.' },
    credits: { fr: 'Meubles 3D : Poly Haven (CC0)', ar: 'أثاث ثلاثي الأبعاد: Poly Haven (CC0)' },
  },
};
