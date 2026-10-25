# Plan SEO, GEO et AEO — nouvelles intentions éditoriales Tecxodus

Mise à jour : 25 octobre 2026. Le site comptait déjà 122 pages de blog. Ce lot ajoute quatre pages avec des intentions distinctes et développe la page existante sur l’open book / closed book. Les pages ont été rapprochées du contenu du site avant création pour éviter les doublons.

## Pages publiées dans le dépôt

| URL canonique | Intention propriétaire | Public / réponse principale | Liens de soutien |
|---|---|---|---|
| `/blog/appel-offres-logistique-maroc/` | appel d’offres / consultation logistique au Maroc | Acheteur qui compare ou prépare une consultation ; distinguer marché public et consultation privée | Cahier des charges, offres comparables, open/closed book, devis |
| `/blog/cahier-charges-entreposage-logistique/` | trame / contenu d’un cahier des charges d’entreposage | PME ou entreprise qui formalise son besoin pour la première fois | Consultation, devis, comparaison d’offres, inventaire initial |
| `/blog/prix-entreposage-maroc-villes-regions/` | prix 3PL au Maroc par villes et régions | Acheteur qui compare des zones ; séparer loyer immobilier et service d’entreposage | Prix Casablanca (intention locale), formules, devis, proximité |
| `/blog/stock-debord-ponctuel-externaliser/` | stock de débord / besoin ponctuel | Entreprise avec surstock, import, lancement ou campagne temporaires | Saisonnier (pic saisonnier), durée (horizon), transfert (exécution) |
| `/blog/open-book-closed-book-logistique/` | arbitrage open book / closed book | Article existant conservé comme unique propriétaire de cette intention ; ajout d’une matrice acheteur et liens vers consultation | Cahier des charges, appel d’offres, formules de prix |

## Prévention de la cannibalisation

- Garder `prix-entreposage-casablanca-facteurs` pour le coût local à Casablanca ; garder le nouvel article comme comparaison géographique et méthode de comparaison, sans créer une page `prix-entreposage-rabat`, `prix-entreposage-tanger`, etc. tant qu’aucune donnée réelle, comparable et maintenable ne justifie ces pages.
- Garder `comparer-offres-prestataires-logistiques-perimetre` pour la comparaison de périmètres ; le nouvel article appel d’offres répond à l’intention d’achat / procédure et distingue les marchés publics des consultations privées.
- Garder `devis-entreposage-informations-necessaires` comme checklist de devis ; le nouveau cahier des charges couvre la définition complète du besoin avant l’envoi.
- Garder `stockage-saisonnier-pics-activite` pour les pics saisonniers ; le nouveau guide traite un débord court ou ponctuel, y compris non saisonnier.
- Garder l’article open/closed book existant. Ne pas en publier une deuxième version ou une page locale.

## Barème de prix et fiabilité éditoriale

La recherche web a retrouvé des estimations immobilières ou des annonces, mais pas un barème public homogène des prestations 3PL par ville à périmètre égal. Un loyer de local/bâtiment ne couvre pas automatiquement réception, manutention, stock WMS, préparation et livraison. Aucun prix n’est donc avancé comme tarif Tecxodus ou prix moyen de marché. Les futurs repères tarifaires devront provenir de devis ou factures anonymisés et comparables, avec date, zone, profil de stock, unité, volume et prestations incluses. Toute disponibilité régionale hors Casablanca doit être confirmée avant communication.

## Gabarit GEO/AEO appliqué

- Réponse courte explicite dès le début, puis explication avec cas d’usage.
- Titres qui posent les vraies questions des acheteurs et paragraphes autonomes.
- Tableaux / listes uniquement quand ils facilitent le choix ou le chiffrage.
- Liens contextuels vers un article de soutien, une page service et un CTA de demande d’étude.
- Canonical, meta description, dates éditoriales, BreadcrumbList et BlogPosting JSON-LD. Pas de FAQPage structured data artificielle ; les FAQ visibles restent utiles au lecteur sans promettre un résultat enrichi Google.
- Sources officielles affichées lorsqu’un cadre de marchés publics est évoqué. Le contenu n’assimile jamais une demande privée à un marché public et n’offre pas de conseil juridique.

## Suivi à faire dans Search Console

Après déploiement, vérifier que les quatre URL canoniques sont présentes dans `https://blog.tecxodus.com/sitemap.xml`, demander une exploration des URL importantes, puis comparer impressions/requêtes par page après la période d’actualisation. Vérifier que l’article « prix Maroc » attire des requêtes nationales sans prendre la place de la page Casablanca sur les requêtes purement locales. Ne pas considérer une URL « découverte » ou « indexable » comme une URL déjà indexée.

## Sources externes utilisées

- Trésorerie Générale du Royaume, décret n° 2-22-431 : https://www.tgr.gov.ma/wps/wcm/connect/1f3081fc-2d01-41de-8339-9a2c7de0480f/DECRET%2B2-22-431%2BFR.pdf?MOD=AJPERES
- Portail Marocain des Marchés Publics : https://www.marchespublics.gov.ma/
- IMANOR, application des normes dans les marchés publics : https://www.imanor.gov.ma/application-des-normes-dans-les-marches-publics/

Les articles ne déclarent pas que Tecxodus détient une certification, capacité, délai ou barème non confirmé par l’entreprise. Ils présentent des repères de cadrage à faire confirmer par devis et par les équipes opérationnelles.
