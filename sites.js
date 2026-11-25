/* Edit one object to make a new client site. See README.md. */
const SITES = {
  cafe: {
    kind: 'cafe', name: 'Café Noura', mark: 'noura.', category: 'CAFÉ · RESTAURANT',
    city: 'La Marsa, Tunis', eyebrow: 'UNE PAUSE QUI FAIT DU BIEN',
    heading: 'Le goût des <em>bons moments.</em>',
    intro: 'Du café préparé avec soin, des assiettes qui donnent envie de rester et un endroit où l’on se sent bien.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1800&q=88',
    secondaryImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=85',
    items: [
      { title: 'Café & douceur', detail: 'Espresso, cappuccino, boissons maison', price: 'Dès 4 DT' },
      { title: 'Brunch à partager', detail: 'Une table généreuse pour prendre son temps', price: 'Dès 24 DT' },
      { title: 'Pâtisseries du jour', detail: 'Une petite envie, toujours une bonne idée', price: 'Dès 7 DT' }
    ],
    aboutTitle: 'L’endroit où l’on revient.', about: 'Une adresse de quartier pensée pour les conversations qui durent, les matinées tranquilles et les plaisirs simples.',
    hours: 'Tous les jours · 08h00 – 22h00', address: 'Adresse à personnaliser · La Marsa, Tunis',
    phone: '', whatsapp: '', maps: '', instagram: ''
  },
  service: {
    kind: 'service', name: 'Atlas Services', mark: 'ATLAS', category: 'SERVICES PROFESSIONNELS',
    city: 'Tunis, Tunisie', eyebrow: 'DES SOLUTIONS CLAIRES. DES RÉSULTATS CONCRETS.',
    heading: 'Votre prochain projet commence <em>ici.</em>',
    intro: 'Un partenaire de confiance pour avancer avec méthode, gagner du temps et donner vie à vos ambitions.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1800&q=88',
    secondaryImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=85',
    items: [
      { title: 'Conseil', detail: 'Comprendre votre besoin et définir la bonne direction.', number: '01' },
      { title: 'Réalisation', detail: 'Mettre en place une solution adaptée à votre activité.', number: '02' },
      { title: 'Suivi', detail: 'Rester disponible et faire évoluer le projet avec vous.', number: '03' }
    ],
    aboutTitle: 'Un accompagnement à votre mesure.', about: 'Chaque activité a ses défis. Nous prenons le temps d’écouter, de proposer des solutions simples et de construire une relation durable.',
    hours: 'Lundi – Vendredi · 09h00 – 18h00', address: 'Adresse à personnaliser · Tunis, Tunisie',
    phone: '', whatsapp: '', maps: '', instagram: ''
  },
  wellness: {
    kind: 'wellness', name: 'Maison Zina', mark: 'maison zina', category: 'BEAUTÉ & BIEN-ÊTRE',
    city: 'El Menzah, Tunis', eyebrow: 'UN MOMENT RIEN QUE POUR VOUS',
    heading: 'Prenez le temps de <em>rayonner.</em>',
    intro: 'Des soins attentionnés, un accueil chaleureux et une parenthèse de douceur au cœur de votre journée.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1800&q=88',
    secondaryImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=85',
    items: [
      { title: 'Soin du visage', detail: 'Une pause lumineuse adaptée à votre peau.', price: 'À partir de 80 DT' },
      { title: 'Coiffure & style', detail: 'Un regard neuf sur votre beauté naturelle.', price: 'Sur rendez-vous' },
      { title: 'Rituel détente', detail: 'Respirer, ralentir, repartir légère.', price: 'Sur rendez-vous' }
    ],
    aboutTitle: 'La beauté de prendre soin de soi.', about: 'Un espace calme où chaque détail compte. Nos prestations se personnalisent selon vos envies et votre rythme.',
    hours: 'Mardi – Samedi · 09h00 – 19h00', address: 'Adresse à personnaliser · El Menzah, Tunis',
    phone: '', whatsapp: '', maps: '', instagram: ''
  },
  shop: {
    kind: 'shop', name: 'Atelier Sable', mark: 'atelier sable.', category: 'BOUTIQUE & CRÉATION',
    city: 'Sidi Bou Saïd, Tunisie', eyebrow: 'DES PIÈCES À AIMER LONGTEMPS',
    heading: 'La beauté des choses <em>simples.</em>',
    intro: 'Une sélection d’objets et de créations pour apporter un peu de soleil à votre quotidien.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1800&q=88',
    secondaryImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=1200&q=85',
    items: [
      { title: 'La collection maison', detail: 'Des pièces pour habiter chaque instant.', price: 'Découvrir' },
      { title: 'Nos essentiels', detail: 'Le plaisir des détails bien choisis.', price: 'Découvrir' },
      { title: 'Idées cadeaux', detail: 'De belles attentions à offrir.', price: 'Découvrir' }
    ],
    aboutTitle: 'Choisi avec intention.', about: 'Nous aimons les objets avec une histoire, la matière, le savoir-faire et le plaisir de découvrir quelque chose de singulier.',
    hours: 'Lundi – Samedi · 10h00 – 19h00', address: 'Adresse à personnaliser · Sidi Bou Saïd, Tunisie',
    phone: '', whatsapp: '', maps: '', instagram: ''
  }
};
