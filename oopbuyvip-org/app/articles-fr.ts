import { englishArticles, type Article, type ArticleSlug } from "./seo-articles";
import { applyArticleDepth } from "./article-depth";
import { frenchDepth } from "./article-depth-fr";

const withSources = (slug: ArticleSlug, article: Omit<Article, "sources">): Article => ({ ...applyArticleDepth(article, frenchDepth[slug]), sources: englishArticles[slug].sources });

export const frenchArticles: Record<ArticleSlug, Article> = {
  "oopbuy-spreadsheet-guide": withSources("oopbuy-spreadsheet-guide", {
    eyebrow: "Guide du tableur OOPBuy", title: "Utiliser un tableur OOPBuy comme liste de contrôle, pas comme promesse",
    description: "Une méthode complète, de la fiche et de l'offre active au QC d'entrepôt et à la préparation réaliste du colis.", read: "12 min de lecture", updated: "1er septembre 2026",
    sections: [
      { heading: "Ce qu'un tableur OOPBuy peut faire — et ne peut pas faire", paragraphs: [
        "Un tableur est d'abord un index de recherche : il classe les routes produit, identifiants, prix indicatifs et poids publiés. Il ne prouve ni le stock, ni la matière, ni la qualité, ni l'authenticité, ni un transport bon marché.",
        "L'achat comprend plusieurs décisions : choisir l'offre, attendre l'entrée en entrepôt, examiner le QC, décider d'un retour ou d'un envoi, puis comparer une route internationale avec les mesures disponibles.",
        "Travaillez par catégorie. Chaussures, sweats, électronique et accessoires présentent des risques distincts de taille, d'emballage et de contrôle. Trois candidats comparables valent mieux que trente onglets désordonnés."
      ]},
      { heading: "Toujours ouvrir la route active avant de comparer", paragraphs: [
        "Les pages vendeur évoluent. Le prix enregistré peut viser la variante la moins chère ou une ancienne promotion. Vérifiez le canal, l'identifiant, la couleur, la taille, la version et la description actuelle.",
        "Ne comparez pas uniquement les conversions en dollars. Conservez le montant CNY et la date. L'accord OOPBuy indique actuellement 8 % de frais d'achat assisté, mais le checkout et les conditions en vigueur font foi.",
        "Une ligne utile contient l'ID, la catégorie, l'option exacte, le prix, la livraison locale visible, la source du poids, la date et une note de risque. Elle peut ainsi être auditée et mise à jour."
      ]},
      { heading: "Former une fourchette de coût total avant l'achat", paragraphs: [
        "Au prix peuvent s'ajouter livraison locale, frais d'agent, conversion du paiement, services d'entrepôt, retour, fret international, assurance et frais éventuels à destination. Tous ne s'appliquent pas à chaque commande.",
        "Calculez un scénario bas et un scénario haut. Le haut prévoit un poids mesuré supérieur, un emballage rigide, la facturation au volume ou une route moins favorable.",
        "Marquez chaque donnée comme confirmée ou estimée. Prix actif, poids vendeur, poids d'entrepôt et devis préliminaire n'ont pas la même fiabilité."
      ]},
      { heading: "Faire du QC d'entrepôt une vraie décision", paragraphs: [
        "Après l'entrée, confirmez d'abord l'identité : couleur, taille, quantité et caractéristiques principales. Contrôlez ensuite forme, symétrie, coutures, bords, fermetures, impressions et dommages visibles.",
        "Les photos révèlent des écarts visibles, mais ne prouvent pas la durabilité, la composition exacte, le fonctionnement interne ou l'authenticité. Demandez la vue décisive si elle manque.",
        "La politique de retour publiée prévoit cinq jours après l'entrée pour une demande ordinaire. Notez date d'entrée et échéance à côté de l'article."
      ]},
      { heading: "Utiliser stockage et regroupement avec méthode", paragraphs: [
        "La documentation officielle OOPBuy annonce 90 jours de stockage gratuit. Ce délai sert à réunir des articles compatibles et terminer le QC, pas à repousser le contrôle.",
        "Un colis plus grand n'est pas toujours moins cher. Poids, dimensions, mélange et limites de route peuvent justifier une division, surtout avec un article volumineux ou restreint.",
        "Remplacez le poids vendeur par les mesures d'entrepôt lorsqu'elles existent et attribuez un statut : retour, preuve manquante ou prêt pour le colis."
      ]},
      { heading: "Un processus OOPBuy répétable", paragraphs: [
        "Choisissez une catégorie, comparez trois offres, ouvrez les routes actives, confirmez l'option, calculez une fourchette, examinez le QC à temps puis comparez les lignes avec les mesures finales.",
        "Le tableur le plus fiable n'est pas le plus grand. Il date ses contrôles, retire les routes expirées et sépare clairement données vendeur, estimations et faits d'entrepôt.",
        "Solde, frais, politiques et lignes doivent être vérifiés en direct au moment de décider. Le tableur facilite ce contrôle sans le remplacer."
      ]},
    ],
  }),
  "oopbuy-qc-checklist": withSources("oopbuy-qc-checklist", {
    eyebrow: "Photos QC OOPBuy", title: "Photos QC OOPBuy : une liste répétable pour contrôler l'entrepôt",
    description: "Vérifier l'identité, la qualité visible, les mesures et les preuves manquantes dans le bon ordre.", read: "12 min de lecture", updated: "1er septembre 2026",
    sections: [
      { heading: "Ce que le QC OOPBuy est censé montrer", paragraphs: [
        "OOPBuy décrit une inspection et des photos QC après l'entrée en entrepôt. Cette étape aide à confirmer qu'un article visible est arrivé et ressemble à l'option choisie.",
        "QC ne signifie pas certification. Une image ne prouve ni l'authenticité, ni les fibres, ni l'étanchéité, ni la batterie, ni les composants internes, ni la durabilité.",
        "Enregistrez auparavant l'annonce, l'option exacte, le guide des tailles, la couleur et les mesures importantes. Vous comparerez des faits plutôt que vos souvenirs."
      ]},
      { heading: "Étape 1 : confirmer l'identité avant la qualité", paragraphs: [
        "Comparez quantité, couleur, taille, étiquette, version et éléments principaux. Pour une paire, contrôlez les deux côtés ; les accessoires décrits devraient être visibles.",
        "Gardez commande et galerie QC côte à côte. Pour des variantes proches, notez à l'avance la différence déterminante et conservez la référence de commande.",
        "Si le sachet ou l'emballage cache le produit, n'inventez pas l'invisible. Utilisez l'option actuelle de photo supplémentaire ou le support si la décision en dépend."
      ]},
      { heading: "Étape 2 : de la forme générale aux détails", paragraphs: [
        "Pour les chaussures, examinez la paire, l'avant, les talons, la symétrie et les bords de semelle. Pour les vêtements, proportions, manches, ourlet, col et coutures vrillées.",
        "Passez ensuite aux coutures, finitions, fermetures, impressions, fils, taches, rayures et pièces absentes. Croisez plusieurs angles.",
        "Rédigez une note neutre : talon apparemment inégal sur la vue arrière ou photo avec règle absente. Une observation précise aide mieux que parfait ou inutilisable."
      ]},
      { heading: "Étape 3 : mesurer taille et compatibilité", paragraphs: [
        "Une étiquette ne prouve pas l'ajustement. Comparez largeur poitrine, longueur, épaules, manches, taille ou semelle intérieure avec un article personnel adapté.",
        "Pour l'électronique, contrôlez modèle, prise, connecteurs, dimensions, accessoires et dommages visibles. La photo ne démontre pas le fonctionnement interne ; évaluez le risque restant.",
        "Définissez seuils et tolérances avant d'ouvrir la galerie. Si la mesure décisive manque, demandez une preuve au lieu d'assouplir vos attentes."
      ]},
      { heading: "Traiter les cinq jours comme une échéance de travail", paragraphs: [
        "OOPBuy publie un délai de cinq jours après l'entrée pour les retours ou échanges ordinaires. Politique vendeur, responsabilité, transport local et service peuvent modifier coût et issue.",
        "Consultez rapidement les notifications et déposez une demande claire avec référence, variante, écart précis et photo correspondante.",
        "Distinguez faute du vendeur et changement d'avis. Les informations publiées préviennent qu'une demande imputable au client peut ajouter transport et service."
      ]},
      { heading: "Documenter retour, attente ou envoi", paragraphs: [
        "Terminez chaque contrôle par un statut : retour, attente de preuve ou approuvé pour le colis. Aucun article non examiné ne rejoint ainsi la consolidation par erreur.",
        "Conservez le résultat QC avec la route et le poids d'entrepôt. Vous pourrez justifier pourquoi une recommandation est gardée, signalée ou retirée.",
        "Le but n'est pas de fabriquer une certitude. Indiquez ce qui est visible, ce qui manque et quel risque relève de l'acheteur, du vendeur, de la plateforme ou du transporteur."
      ]},
      { heading: "Questions QC à conserver par catégorie", paragraphs: [
        "Pour les chaussures : symétrie, semelle, talon, avant, pointure et longueur intérieure. Pour les vêtements : couleur, étiquette, mesures, impression, coutures et taches.",
        "Pour les sacs : dimensions, fermeture, quincaillerie, poignées et accessoires. Pour l'électronique, séparez aspect et fonction et retenez seulement les tests réellement proposés.",
        "Ne publiez pas les photos QC d'autrui sans autorisation. Un exemple net et annoté convainc ; un collage flou ou sans contexte diminue la confiance.",
        "Enregistrez cette liste de questions avec l'annonce avant l'achat. Des critères constants accélèrent le QC et rendent les produits réellement comparables."
      ]},
    ],
  }),
  "oopbuy-shipping-planning": withSources("oopbuy-shipping-planning", {
    eyebrow: "Coût d'expédition OOPBuy", title: "Expédition OOPBuy : poids, volume, emballage et risque de route",
    description: "Estimer le transport avant et après l'entrepôt, et interpréter correctement chaque devis.", read: "13 min de lecture", updated: "1er septembre 2026",
    sections: [
      { heading: "Pourquoi le prix du produit prédit mal le transport", paragraphs: [
        "Le fret dépend de la destination, de la route, du poids, des dimensions, de la catégorie et de l'emballage. Un produit léger mais volumineux ou une boîte à chaussures peuvent coûter cher.",
        "Planifiez avant d'acheter : consignez poids vendeur, dimensions emballées probables et type de conditionnement. Signalez boîtes rigides, doudounes, électronique et objets fragiles.",
        "Travaillez avec une fourchette. Le scénario haut prévoit poids supérieur, protections, volume facturé et ligne moins favorable."
      ]},
      { heading: "Poids réel, volumétrique et facturable", paragraphs: [
        "Selon la ligne, le prix peut suivre le poids réel, un calcul volumétrique ou le plus élevé. Consultez l'estimateur OOPBuy et la fiche active de la route.",
        "Le poids vendeur filtre avant achat, le poids d'entrepôt affine et les dimensions du colis décident. Étiquetez chaque étape.",
        "Retirer une boîte peut réduire le volume, mais aussi la protection ou la présentation. Décidez selon l'article, sa valeur et le risque, jamais automatiquement."
      ]},
      { heading: "L'emballage modifie prix et risque", paragraphs: [
        "OOPBuy recommande les sacs sous vide pour les objets mous volumineux comme doudounes ou peluches. Ils réduisent le volume mais ne conviennent pas aux articles sensibles à la déformation.",
        "Coins renforcés, barrière contre l'humidité, carton solide et protection des chaussures doivent répondre à un risque défini. Ils ajoutent matière et parfois poids.",
        "Terminez le QC avant l'emballage. Il est inutile de protéger et d'expédier un produit que vous auriez retourné après un écart visible."
      ]},
      { heading: "Regrouper en pensant à la route", paragraphs: [
        "Le guide permet de sélectionner les articles stockés et de créer un colis ; 90 jours gratuits donnent du temps. Chaque regroupement doit néanmoins suivre un plan.",
        "Comparez au minimum un colis complet et une division. Un article volumineux ou restreint peut supprimer des lignes pour tout le reste.",
        "Gardez une réserve pour taux de change, mesure et évolution des routes. Si seul le calcul optimiste tient, l'achat n'est pas vraiment abordable."
      ]},
      { heading: "Séparer douane, restrictions et assurance", paragraphs: [
        "OOPBuy publie des catégories interdites et restreintes. Une livraison locale vers l'entrepôt ne garantit pas l'éligibilité au transport international.",
        "Personne ne garantit l'issue douanière. Poids, volume, valeur et quantité d'articles identiques influencent le risque ; le destinataire doit respecter les règles locales.",
        "Selon OOPBuy, l'indemnisation dépend de chaque ligne. Lisez couverture, preuves et exclusions avant de choisir."
      ]},
      { heading: "Une meilleure feuille d'estimation", paragraphs: [
        "Par article, notez prix, poids vendeur, poids d'entrepôt, contribution emballée, risque d'emballage et restriction. Pour le colis : destination, mesures, règle, prix et date.",
        "Recalculez avant achat, après entrée et juste avant paiement. Chaque passage remplace des hypothèses par de meilleurs éléments.",
        "Ne cherchez pas une ligne toujours moins chère. Cherchez la route active adaptée à la destination, au colis, au mélange, au délai et au risque accepté."
      ]},
      { heading: "Trois scénarios qui révèlent une mauvaise estimation", paragraphs: [
        "Une paire bon marché avec boîte rigide peut devenir chère par le volume. Comparez conservation, protection de remplacement et retrait après analyse du risque.",
        "Plusieurs doudounes pèsent peu mais prennent de la place. Calculez dimensions comprimées et normales et vérifiez si le vide convient au textile et à la ligne.",
        "Un colis mixte avec un article sensible peut perdre des routes. Chiffrez la division et enregistrez destination, date, devise, taxes, assurance et coupon inclus.",
        "Testez chaque scénario pour le vrai pays dans l'estimateur actuel, puis recalculez après l'emballage final : quelques centimètres peuvent changer le palier facturable."
      ]},
    ],
  }),
  "oopbuy-fees-total-cost": withSources("oopbuy-fees-total-cost", {
    eyebrow: "Frais OOPBuy", title: "Frais OOPBuy : calculer le coût total avant d'acheter",
    description: "Séparer prix, frais d'agent publiés, livraison locale, retour, paiement et fret international.", read: "12 min de lecture", updated: "1er septembre 2026",
    sections: [
      { heading: "Commencer par les frais d'agent publiés", paragraphs: [
        "L'accord utilisateur actuel OOPBuy indique 8 % du prix d'achat sélectionné comme frais d'achat assisté. Le checkout en direct reste décisif en cas de changement ou promotion.",
        "Séparez ces frais du paiement, de la livraison vendeur, des services d'entrepôt et du fret international. Un pourcentage unique pour tout le coût est trompeur.",
        "Notez prix CNY, option exacte et montant du checkout. Un écart peut provenir de la livraison locale, du service, du change ou de la variante."
      ]},
      { heading: "La livraison locale appartient à l'étape produit", paragraphs: [
        "De nombreux vendeurs facturent séparément l'envoi vers l'entrepôt OOPBuy. Ce n'est pas le transport international et le montant varie selon l'offre.",
        "Comparez prix du produit, livraison locale et frais d'agent actuels. Le tarif affiché le plus bas ne donne pas forcément le coût d'entrepôt le plus bas.",
        "Conservez le transport local sur une ligne distincte afin de ne pas le confondre ensuite avec le colis international."
      ]},
      { heading: "Paiement et change modifient le coût réel", paragraphs: [
        "La note PayPal d'OOPBuy évoque la conversion en USD et les ajustements de change. Une carte peut aussi appliquer ses propres frais de devise ou d'étranger.",
        "Comparez le solde crédité au montant réellement prélevé. Ne mélangez pas CNY, solde USD et taux bancaire sans étiquette.",
        "N'annoncez pas de méthode toujours meilleure. Disponibilité et frais varient selon pays, compte et prestataire actuel."
      ]},
      { heading: "Retours et échanges peuvent ajouter des coûts", paragraphs: [
        "OOPBuy publie qu'un retour imputable au client peut inclure envoi vendeur, retour et 5 CNY de service ; un échange peut ajouter une deuxième livraison et 5 CNY.",
        "Le délai ordinaire publié est de cinq jours après l'entrée. Un QC tardif peut donc réduire les options et augmenter le coût.",
        "Prévoyez une petite réserve QC et contrôlez avant le fret international. Un retour depuis le pays de destination peut être peu pratique."
      ]},
      { heading: "Le fret international est un paiement séparé", paragraphs: [
        "Le guide officiel sépare achat de marchandise et expédition du colis. L'estimateur exige destination et données, donc un même produit peut produire des options différentes.",
        "Poids, dimensions, emballage, regroupement, restrictions, assurance et ligne changent le devis. Un coupon temporaire ne doit pas devenir un prix permanent.",
        "Traitez taxes et douane séparément sauf indication de la ligne. Aucun guide sérieux ne promet un transport toujours sans taxe ou saisie."
      ]},
      { heading: "Une formule complète du coût OOPBuy", paragraphs: [
        "Additionnez produit, livraison locale, frais d'agent actuels, conversion, services optionnels, retours déclenchés, fret, assurance et frais éventuels à destination.",
        "Séparez confirmé et estimé. Checkout et entrepôt sont plus solides qu'un devis anticipé ou une douane possible. Remplacez les estimations sans les doubler.",
        "Comparez le coût par article utilisable. Un QC échoué, un échange ou un volume élevé peuvent effacer l'économie apparente."
      ]},
      { heading: "Comparer équitablement deux commandes OOPBuy", paragraphs: [
        "Utilisez la même monnaie et la même frontière : coût à l'entrepôt, coût du colis ou coût livré. Ne comparez pas un prix produit à un total final.",
        "Séparez coûts fixes et variables. Répartissez le fret commun par poids, volume ou valeur et indiquez la méthode pour rendre le calcul reproductible.",
        "Datez devis et coupons, enregistrez les remboursements comme ajustements et marquez le niveau de confiance. Les 8 %, 5 CNY et routes actuels ne sont pas des garanties éternelles.",
        "Conservez les captures du checkout et du devis final afin d'expliquer les écarts ultérieurs sans dépendre de votre mémoire.",
        "Actualisez la feuille lorsque politiques ou lignes changent : un ancien calcul reste un historique, pas un prix en vigueur.",
        "Terminez par le coût de chaque article réellement utilisable et précisez si taxes, assurance ou remises étaient déjà comprises."
      ]},
    ],
  }),
  "is-oopbuy-legit-review": withSources("is-oopbuy-legit-review", {
    eyebrow: "Avis OOPBuy 2026", title: "OOPBuy est-il fiable ? Parcours, plaintes et preuves examinés en 2026",
    description: "Distinguer les fonctions vérifiables, l'alerte Trustpilot actuelle et les témoignages non vérifiés.", read: "14 min de lecture", updated: "1er septembre 2026",
    sections: [
      { heading: "Ce que fiable devrait signifier dans un avis OOPBuy", paragraphs: [
        "La question en regroupe plusieurs : l'agent fonctionne-t-il, les produits sont-ils stockés, un QC est-il proposé, les colis partent-ils et les problèmes sont-ils traités ?",
        "Guides et accords officiels prouvent l'existence d'un parcours décrit, pas l'authenticité de chaque produit, chaque livraison ni un support toujours excellent.",
        "Utilisez les sources officielles pour les règles, le compte en direct pour les prix et les témoignages pour les thèmes récurrents. Chaque histoire reste sélectionnée et non vérifiée."
      ]},
      { heading: "Ce que propose le parcours officiel OOPBuy", paragraphs: [
        "Le guide décrit lien produit, achat, entrée, QC, stockage et soumission du colis. La page de protection annonce inspection et 90 jours gratuits.",
        "Les retours ordinaires sont annoncés sous cinq jours après l'entrée ; l'accord indique actuellement 8 % de frais d'agent.",
        "Des limites sont aussi publiées : contenus restreints, absence de garantie douanière et indemnisation selon la ligne. Un avis juste cite avantages et limites."
      ]},
      { heading: "Trustpilot affiche actuellement un avertissement important", paragraphs: [
        "Le 1er septembre 2026, Trustpilot affichait 906 avis mais aucune note globale, à cause d'une violation des règles, et indiquait avoir supprimé de faux avis.",
        "La répartition visible était de 75 % à cinq étoiles et 17 % à une étoile. Les positifs citaient livraison et support ; les négatifs, coûts, retards et QC.",
        "Ce sont des expériences, pas une preuve pour chaque commande. Une ancienne note de quatre étoiles ou une accusation isolée d'arnaque ne résument pas le service."
      ]},
      { heading: "Ce que les expériences Reddit ajoutent — et ne prouvent pas", paragraphs: [
        "Un récit détaillé de 2024 mentionnait simplicité, QC inégal, support web lent, correction du fret et livraison en 24 jours, avec l'intention de réutiliser le service.",
        "Des fils plus récents parlent aussi d'attentes longues, de réponses lentes et de transport cher ; d'autres utilisateurs rapportent des résultats plus rapides.",
        "Ces publications fournissent des questions, pas des statistiques. Date, destination, ligne, parrainage et détails absents modifient leur portée."
      ]},
      { heading: "Réduire soi-même les risques", paragraphs: [
        "Vérifiez offre active, option, taille, prix et livraison locale. Conservez ID et preuves vendeur ; un tableur ne garantit pas la qualité future.",
        "Examinez le QC vite et méthodiquement. Contrôlez identité, état visible et mesures dans les cinq jours publiés et demandez les preuves absentes.",
        "Estimez le fret, recalculez avec le poids d'entrepôt et payez avec les mesures finales. Prévoyez marge, restrictions et conditions d'indemnisation."
      ]},
      { heading: "Conclusion : des preuves, pas un raccourci de réputation", paragraphs: [
        "OOPBuy documente achat assisté, entrepôt, QC, colis et après-vente. Cela appuie l'existence d'un service réel, sans prouver toutes les affirmations.",
        "L'alerte Trustpilot et les faux avis retirés empêchent une recommandation simple par étoiles. Commencez petit, gardez peu de solde et archivez les devis.",
        "La réponse honnête est conditionnelle : le parcours existe, mais le résultat dépend du vendeur, de l'article, du QC, de la route et du traitement des incidents."
      ]},
      { heading: "Comment cet avis pondère des preuves contradictoires", paragraphs: [
        "Les documents officiels priment pour frais, délais et règles, mais moins pour la promotion. Un écran actif l'emporte sur un ancien guide.",
        "Les avis sont regroupés par thèmes, sans produire une nouvelle note. Parrainages, incitations, comptes supprimés et absence de données réduisent la confiance.",
        "Un achat test fournit des données propres à ce compte. Documentez achat, entrepôt, QC, devis, expédition, livraison et support, puis actualisez lors d'un changement de règle.",
        "Si vous publiez l'expérience, indiquez destination, route, date et éventuelles incitations afin qu'elle ne soit pas prise pour un taux de réussite général."
      ]},
    ],
  }),
};
