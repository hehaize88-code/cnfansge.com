import type { ArticleContent } from "./article-data";

export const articleFr: Record<string, ArticleContent> = {
  "litbuy-spreadsheet-guide": {
    title: "Utiliser un tableur LitBuy sans perdre la fiche d'origine",
    deck: "Une méthode complète pour garder ensemble la trouvaille, la page source, l'image, le prix, l'option et l'identité du produit.",
    readTime: "13 min de lecture",
    sections: [
      { heading: "La route fait partie du produit", paragraphs: [
        "Une ligne n'est utile que si elle conserve un chemin fiable vers la fiche qu'elle décrit. Le nom seul est une preuve fragile : il peut être raccourci, traduit, répété ou modifié. Une catégorie générale ne suffit pas non plus, car elle oblige le lecteur à rechercher le produit. Traitez l'URL finale, l'ID source, l'image et le libellé neutre comme un seul ensemble d'identité. Si un élément renvoie vers un autre article, la ligne n'est pas prête à être publiée.",
        "Sur litbuys.store, l'image ouvre une page de détail locale et l'action mène au bon enregistrement du catalogue principal. Le détail répète l'ID, le montant CNY, la référence USD et la date de contrôle. Ces champs ne garantissent pas un stock permanent, mais montrent exactement ce qui a été associé. Si le vendeur change la fiche, on peut identifier la donnée périmée au lieu de rediriger silencieusement vers un produit seulement ressemblant."
      ]},
      { heading: "Saisir l'identité avant la présentation", paragraphs: [
        "Commencez sur la page source, pas dans la mise en page de la carte. Enregistrez une URL propre sans paramètres de suivi inutiles et placez l'ID dans un champ séparé. Rédigez ensuite un libellé factuel limité aux éléments visibles, comme sweat, maillot ou petit sac. N'inventez ni modèle, ni matière, ni promesse de qualité que la fiche ne confirme pas. Un nom court et vérifiable est plus utile qu'un titre décoratif rempli d'attributs non prouvés.",
        "Associez l'image exacte de cet enregistrement. Deux sweats noirs ou deux chaussures blanches ne sont pas interchangeables : vendeur, options, prix et ID peuvent différer. Comparez silhouette, arrière-plan, couleur, graphisme et accessoires. Si la fiche contient plusieurs variantes, précisez ce que l'image représente. L'ID visible permet d'auditer les doublons et de retrouver la trace si LitBuy ou le catalogue modifie son format d'URL."
      ]},
      { heading: "Utiliser l'image comme preuve", paragraphs: [
        "Ouvrez l'image et la destination en taille suffisante. Vérifiez le même cadrage, fond, coloris, assemblage des panneaux, impression et pièces incluses. Une photo simplement similaire ne constitue pas une correspondance. Lorsqu'il existe des options, indiquez celle que montre la carte et si son prix lui correspond. L'image est un repère d'identité ; elle ne garantit ni stock ni disponibilité de toutes les variantes au même montant.",
        "Conservez une taille web pratique et un texte alternatif descriptif, sans filtre lourd, remplacement de fond ou recadrage qui masque les indices. Si l'image ne charge pas, nom, ID et destination doivent rester compréhensibles. À l'inverse, une belle image mise en cache ne doit pas faire croire qu'une route supprimée est active. Options, disponibilité, notes du vendeur et prix final se vérifient toujours sur la page en direct."
      ]},
      { heading: "Séparer prix indicatif et prix final", paragraphs: [
        "Le prix d'un tableur est un instantané. Enregistrez d'abord la valeur CNY affichée par la source. Une seconde devise facilite la comparaison, mais doit être clairement marquée comme conversion indicative avec sa base. Taux, taille, couleur, lot, livraison intérieure et changements du vendeur modifient le total. Le montant USD de litbuys.store n'est ni une offre de paiement ni une estimation du coût complet rendu à destination.",
        "Examinez le sélecteur d'options. Un prix de départ bas peut correspondre à un accessoire, un acompte ou la variante la moins chère plutôt qu'à la configuration photographiée. Si les choix n'apparaissent qu'après interaction, employez une formulation prudente. LitBuy fonctionne comme agent : achat du produit et transport international sont deux étapes. Le prix de la ligne ne doit jamais être présenté comme coût final du colis."
      ]},
      { heading: "Détecter les fiches périmées", paragraphs: [
        "Aucun tableur ne reste exact sans entretien. Les vendeurs retirent des articles, changent les images, modifient les options et migrent les systèmes. Ajoutez une date visible et contrôlez plus souvent les lignes populaires. Le simple chargement d'une page ne suffit pas : une erreur douce peut répondre normalement. Confirmez que l'image attendue, l'identité, l'ID et la zone de prix sont encore présents. La vérification doit porter sur le contenu et pas uniquement sur le statut technique.",
        "Lorsqu'une route échoue, ne l'envoyez pas discrètement vers une catégorie. Marquez l'article indisponible, conservez l'ancien ID pour l'audit ou remplacez-le après un nouvel appariement complet. S'il existe plusieurs domaines ou paramètres pour la même fiche, choisissez une version canonique propre. Cet entretien réduit les doublons et empêche une même carte d'aboutir à des destinations différentes ou sans rapport."
      ]},
      { heading: "Passer du répertoire au catalogue actif", paragraphs: [
        "Utilisez le tableur pour filtrer par catégorie, type et budget indicatif, pas pour conclure un achat. Ouvrez le détail local et contrôlez image, ID, base du prix et date. Passez ensuite au catalogue principal et revérifiez options, mesures, notes du vendeur, stock et total. S'il manque une information, recherchez avec l'ID ou une description neutre plutôt que de faire confiance à une ancienne capture ou un titre raccourci.",
        "Limitez les destinations externes. Un répertoire devient difficile à contrôler lorsque des boutons identiques mènent vers plusieurs plateformes, raccourcisseurs ou intermédiaires. Ici, les actions produit, catégorie et recherche restent dans un catalogue principal. La frontière est claire : litbuys.store organise et explique ; le catalogue lié contrôle les données vivantes et les étapes suivantes."
      ]},
      { heading: "Répéter sept contrôles", paragraphs: [
        "Suivez toujours la même séquence : ouvrir la source ; sauvegarder URL et ID ; nommer de façon neutre ; associer l'image exacte ; noter prix et options ; ajouter la date ; tester la route de l'image et l'action externe sur ordinateur et mobile. L'ordre place l'identité avant le design. Une ligne douteuse reste hors publication jusqu'à résolution. Cette méthode est plus lente que la copie automatique, mais elle protège la qualité de tout le répertoire.",
        "Parcourez enfin le site comme un lecteur : recherche, catégorie, carte, détail, destination puis retour. La langue doit rester sur la même page et les cartes mobiles ne doivent pas créer de défilement horizontal. Un bon SEO ne vient pas de la répétition de « LitBuy spreadsheet » sur des pages minces. Il vient d'enregistrements indexables, chemins stables, dates honnêtes et destinations qui tiennent la promesse de chaque carte."
      ]}
    ]
  },
  "litbuy-qc-photo-checklist": {
    title: "Photos QC LitBuy : ce qu'une image d'entrepôt peut prouver",
    deck: "Une séquence complète pour contrôler chaussures, vêtements, sacs et accessoires sans confondre preuve visible et garantie.",
    readTime: "13 min de lecture",
    sections: [
      { heading: "Définir ce que le QC peut prouver", paragraphs: [
        "Une photo QC enregistre un article, un angle, une lumière et un moment. Elle peut montrer forme, construction visible, marquages, relations de couleur, saleté, déchirures et emballage. Elle peut confirmer l'étiquette de taille ou d'option photographiée. Elle ne prouve pas durabilité, composition exacte, structure cachée, confort, odeur ou fonctionnement futur. Commencez par séparer les observations visibles des interprétations que l'image ne peut soutenir.",
        "Cette limite correspond aux conditions de remboursement LitBuy, qui décrivent le QC de base comme vérification de quantité, apparence visible et défauts extérieurs évidents. Ce n'est ni un laboratoire ni un certificat d'authenticité. Écrivez « la couture gauche paraît plus haute sur la vue avant », pas « mauvaise qualité ». Indiquez photo, emplacement et preuve supplémentaire nécessaire afin d'obtenir une prise ciblée plutôt qu'une opinion vague."
      ]},
      { heading: "Commencer par silhouette et symétrie", paragraphs: [
        "Regardez les vues complètes avant, côté et arrière avant de zoomer sur les logos. Les proportions révèlent des erreurs qu'un détail séduisant cache : chaussures de formes différentes, col inégal, panneaux tordus, poches déplacées ou sac qui ne tient pas droit. Comparez gauche et droite avec ligne centrale, bord, semelle, ourlet ou attache de poignée. La perspective peut tromper ; recherchez le même écart sous plusieurs angles.",
        "Pour les chaussures, vérifiez bout, talon, panneaux, collage de semelle et symétrie de la paire. Pour les vêtements, épaules, manches, ourlet, patte et placement d'impression. Pour les sacs, poignées, rabat, passepoil et base. Les accessoires demandent souvent recto et verso, car le fermoir est caché. Résolvez structure et identité avant les petites imperfections décoratives."
      ]},
      { heading: "Lire la construction dans un ordre fixe", paragraphs: [
        "Suivez toujours silhouette, panneaux, coutures, bords, fermetures, pièces métalliques, surface et étiquettes. La répétition empêche l'angle principal de distraire des problèmes pratiques. Parcourez les longues coutures et cherchez changements brusques, fronces ou points manquants. Vérifiez les bords collés, la peinture et, lorsque les photos le permettent, zips, boutons et boucles ouverts puis fermés.",
        "Ne transformez pas la compression numérique en défaut. Les images peuvent être redimensionnées, accentuées ou prises au téléphone ; une ligne floue ne prouve pas une couture cassée. Si la zone change votre décision, demandez une photo proche et éclairée avec lieu et action précis : couture intérieure gauche, zip fermé ou bord de semelle latéral. Les demandes précises créent des preuves ; demander si tout va bien produit une opinion."
      ]},
      { heading: "Les mesures valent mieux que les lettres", paragraphs: [
        "Une étiquette confirme la taille attachée, pas l'ajustement réel. Les normes varient entre vendeurs, patrons et catégories. Comparez avec un vêtement que vous possédez. Pour un haut : poitrine, épaules, longueur et manches. Pour un pantalon : taille à plat, fourche, entrejambe et ouverture. Pour un sac : largeur, hauteur, profondeur et tombé des anses. Pour les chaussures, la longueur intérieure est plus utile qu'un chiffre isolé.",
        "Une bonne photo montre tout le ruban, le zéro et le point final sur un article assez plat. Un gros plan d'un nombre manque de contexte. Tenez compte de l'élasticité, de l'épaisseur et de la méthode. Comparez avec le tableau source et gardez une tolérance raisonnable. Lorsque la coupe décide l'achat, une mesure claire apporte davantage que plusieurs images décoratives sans échelle."
      ]},
      { heading: "Traiter couleur et labels avec prudence", paragraphs: [
        "Les LED, la balance des blancs, le contraste et chaque écran modifient les couleurs. Comparez plusieurs angles et références neutres comme papier blanc, sol gris ou mètre. Si la teinte est décisive, demandez une lumière plus neutre tout en acceptant une variation résiduelle. Une photo prouve mieux que deux panneaux diffèrent l'un de l'autre qu'un nom commercial exact de couleur.",
        "Les étiquettes aident pour taille, code, identifiant et entretien, mais n'authentifient ni origine ni matière. Vérifiez la cohérence entre commande, étiquette volante et étiquette cousue. Si la fiche est ambiguë, ne transformez pas un texte photographié en certitude. Notez ce qui est visible et gardez la conclusion dans les limites des images et des données de commande."
      ]},
      { heading: "Contrôler l'emballage avant l'envoi", paragraphs: [
        "L'emballage influence état et volume facturable. Cherchez boîtes écrasées, métal exposé, humidité, surfaces non protégées et pièces libres. Décidez si une boîte protège ou occupe seulement de l'espace. La retirer réduit parfois le volume, mais enlève de la structure aux chaussures, chapeaux et objets fragiles. Demandez renfort ou séparation lorsqu'ils corrigent un risque visible, pas comme règle universelle.",
        "Avant de soumettre le colis, confirmez quantité et options avec ID et détail distinctif. Les commandes groupées facilitent les confusions de couleur ou taille. Une note finale identifie source, variante et signe visuel. Signalez les problèmes tant que l'article reste accessible à l'entrepôt. Après le départ international, nouvelles photos, retour vendeur et autres solutions deviennent généralement plus difficiles."
      ]},
      { heading: "Prendre une décision proportionnée", paragraphs: [
        "Classez chaque constat en différence confirmée, imperfection visible ou question ouverte. Une mauvaise taille est confirmée. Un fil ou une petite marque est visible, mais son importance dépend du lieu. Une ombre floue demande une meilleure image. Cette classification évite de traiter tout de la même manière et concentre l'attention sur identité, coupe, fonction et sécurité du transport.",
        "Documentez photo, emplacement et prochaine action. Acceptez si la preuve répond à vos critères ; demandez une vue précise si l'incertitude est importante ; ou arrêtez le colis si identité ou condition principale sont fausses. Aucune checklist ne garantit les performances futures. Son objectif est de transformer un contrôle rapide en décision répétable avant l'étape internationale plus coûteuse et moins réversible."
      ]}
    ]
  },
  "litbuy-shipping-weight-guide": {
    title: "Coût de livraison LitBuy : poids réel, volumétrique et facturable",
    deck: "Comprendre poids, premier palier, emballage, rehearsal et règles de route avant de transformer un calcul en budget.",
    readTime: "14 min de lecture",
    sections: [
      { heading: "Trois poids, une facture", paragraphs: [
        "Les estimations deviennent confuses lorsque le mot poids désigne plusieurs calculs. Le poids réel vient du colis fini sur la balance. Le volumétrique transforme l'espace en chiffre par longueur × largeur × hauteur divisé par le facteur de la route. Le poids facturable est celui utilisé après comparaison, règles et arrondi. Il peut être le plus élevé, mais la condition de la ligne doit toujours être lue.",
        "Deux colis contenant les mêmes produits peuvent donc recevoir des prix différents. Un colis dense dépend de la balance ; un grand carton léger du volume. Les mêmes dimensions donnent d'autres valeurs si facteur, unité ou convention changent. Ne copiez jamais un diviseur générique comme donnée finale. Consultez la route et confirmez si les mesures décrivent le paquet avant ou après son emballage définitif."
      ]},
      { heading: "Calculer sans fausse précision", paragraphs: [
        "Utilisez les dimensions extérieures emballées dans l'unité demandée. Multipliez, divisez par le facteur actuel, comparez au poids réel et appliquez l'incrément. Un résultat de 2,01 kg peut être facturé 2,1, 2,5 ou 3 kg. Beaucoup de décimales ne rendent pas le calcul exact lorsque les entrées décrivent le produit sans carton plutôt que le colis final.",
        "Les poids de fiche servent à planifier. Ils peuvent exclure protection, carton, emballage vendeur et consolidation. Travaillez avec des fourchettes de poids et taille pendant l'achat. Vous saurez si le colis est dense, volumineux ou proche d'un seuil où une mesure rehearsal pourrait modifier la meilleure route."
      ]},
      { heading: "L'emballage change les deux côtés", paragraphs: [
        "Retirer une boîte réduit parfois le volume, mais l'emballage le plus léger n'est pas toujours le meilleur. Chaussures, chapeaux, verre, sacs structurés et métal exposé peuvent nécessiter un support. Les vêtements souples se plient davantage, avec des plis possibles, et la compression ne réduit pas toujours les mesures autant qu'espéré. Évaluez la fonction de chaque couche avant de demander son retrait.",
        "Consolider élimine des cartons et parfois des frais de base, mais une forme irrégulière peut augmenter le côté le plus long ou déclencher le surdimensionnement. Vérifiez si séparer modifie routes, minimums ou assurance. L'objectif n'est pas toujours une seule boîte ni la plus petite : c'est une forme protectrice conforme aux règles de taille et de facturation."
      ]},
      { heading: "Lire la route, pas le tarif vedette", paragraphs: [
        "Un prix au kilo montre rarement tout : premier poids, incréments, minimum, longueur maximale, circonférence, catégories limitées ou suppléments. Certaines routes calculent le volume pour tous les colis, d'autres appliquent des règles particulières. Les délais sont des estimations et changent avec douane, capacité, météo, fêtes et distribution locale.",
        "Comparez avec les mêmes données : destination, poids emballé, dimensions, calcul facturable, services inclus et suppléments visibles. Une estimation et une mesure rehearsal ne sont pas directement comparables. Séparez transport et coût complet : livraison intérieure, inspection optionnelle, emballage, assurance, conversion, taxes et droits peuvent rester hors de la ligne de poids."
      ]},
      { heading: "Utiliser rehearsal au bon moment", paragraphs: [
        "La mesure préalable est utile lorsque le colis est volumineux, proche d'une limite ou susceptible de basculer vers le volume. Elle remplace des hypothèses par un paquet mesuré et montre si retirer une grande boîte ou séparer un objet rigide ouvre d'autres lignes. Pour un petit colis dense loin des seuils, le bénéfice est moindre, même si les données emballées restent préférables.",
        "Ne considérez pas rehearsal comme promesse que le transporteur mesurera pareil. Manipulation, arrondi et contrôle créent des écarts. Gardez une marge et, si le résultat dépasse l'attente, revoyez protection, division ou route avant soumission. C'est la dernière étape pratique pour changer la configuration avant que le colis soit en transit."
      ]},
      { heading: "Points spécifiques à LitBuy", paragraphs: [
        "L'estimateur LitBuy explique que l'unité de premier poids est le minimum facturé. Un colis plus léger paie l'unité complète et le reste avance par paliers. Perdre quelques grammes ne change donc pas le prix si le colis reste dans la même bande. Notez premier palier, continuation, dimensions maximales et restrictions avant de retirer une protection qui ne ferait peut-être aucune économie.",
        "La politique LitBuy indique généralement un à trois jours ouvrés de traitement d'entrepôt, hors week-ends et jours fériés. C'est avant l'expédition, pas une promesse de livraison internationale. Transit, douane, météo et remise locale sont séparés. Les remboursements dépendent d'un échec confirmé ou du retour reçu et inspecté, et non du simple dépassement d'une estimation."
      ]},
      { heading: "Construire le budget complet", paragraphs: [
        "Séparez produit, mouvement intérieur, services, transport international, marge et frais à destination. Les valeurs USD d'un tableur sont indicatives ; taux et paiement modifient le montant. Taxes et droits dépendent du pays, des biens, de la route et de la déclaration. Ne les inventez pas sous forme de pourcentage universel ; consultez la règle applicable lorsqu'ils comptent.",
        "Marquez chaque valeur comme connue, citée ou supposée : poids emballé connu, dimensions estimées, facteur de la route actuelle, zone éloignée inconnue. Une marge couvre mesure, arrondi et suppléments déclarés. Avant soumission, confirmez destination, contenu, restrictions, mesures, poids facturable, protection et déclaration. Le nombre important est le colis facturé sur la route réellement choisie."
      ]}
    ]
  }
};
