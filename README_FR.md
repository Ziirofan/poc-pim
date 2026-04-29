Ceci est un projet [Next.js](https://nextjs.org) initialisé avec
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Pour commencer

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le catalogue de produits.

## Structure du projet

- `src/mocks/pim/products.ts` — Données produit PIM fictives (attributs de type Akeneo
  avec locale/scope)
- `src/app/page.tsx` — Page de liste des produits
- `src/app/products/[code]/page.tsx` — Page de détail produit
- `src/app/api/products/` — Routes API (liste + produit individuel)

## Entretien technique — Exercices de fonctionnalités

Choisissez une ou plusieurs fonctionnalités ci-dessous et implémentez-les.

---

### Feat 1 — Améliorer le SEO

**En tant que** responsable marketing, **je souhaite** que chaque page produit soit
bien référencée sur les moteurs de recherche, **afin que** nos produits apparaissent
dans les résultats de recherche organique et génèrent du trafic.

**Critères d'acceptation :**
- Étant donné une page produit, lorsque je la partage sur les réseaux sociaux, alors
  un aperçu enrichi (titre, description, image) est affiché
- Étant donné le catalogue, lorsqu'un moteur de recherche explore le site, alors il
  trouve un sitemap listant toutes les pages produit
- Étant donné une page produit, lorsqu'elle apparaît dans les résultats de recherche,
  alors le titre et la description sont spécifiques à ce produit

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 2 — Améliorer l'accessibilité

**En tant qu'** utilisateur en situation de handicap, **je souhaite** que le catalogue
soit entièrement navigable au clavier et avec un lecteur d'écran, **afin que** je
puisse parcourir et lire les informations produit sans obstacles.

**Critères d'acceptation :**
- Étant donné n'importe quelle page, lorsque je navigue uniquement au clavier, alors
  je peux atteindre tous les éléments interactifs dans un ordre logique
- Étant donné une carte produit, lorsqu'un lecteur d'écran la lit, alors le nom du
  produit, le prix et le texte alternatif de l'image sont annoncés clairement
- Étant donné l'ensemble de l'application, lorsque je lance un audit d'accessibilité
  Lighthouse, alors le score est supérieur à 90

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 3 — Enrichir les données produit

**En tant que** chef de produit, **je souhaite** que des informations produit plus
riches soient affichées dans le catalogue, **afin que** les clients puissent prendre
des décisions d'achat éclairées en un coup d'œil.

**Critères d'acceptation :**
- Étant donné le catalogue, lorsque je regarde une carte produit, alors je vois des
  détails supplémentaires (ex. taille, matière, marque)
- Étant donné la page de détail produit, lorsque je l'ouvre, alors tous les attributs
  disponibles sont affichés de manière structurée
- Étant donné les données fictives, lorsqu'un développeur ajoute un nouveau produit
  avec une famille différente, alors il apparaît correctement dans le catalogue

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 4 — Filtrage et recherche de produits

**En tant que** client, **je souhaite** pouvoir rechercher et filtrer les produits du
catalogue, **afin de** trouver rapidement ce que je cherche sans tout parcourir.

**Critères d'acceptation :**
- Étant donné la page catalogue, lorsque je tape dans un champ de recherche, alors
  seuls les produits correspondant à ma requête sont affichés
- Étant donné la page catalogue, lorsque je sélectionne un filtre de catégorie ou de
  famille, alors la liste se met à jour en conséquence
- Étant donné des filtres actifs, lorsque je rafraîchis la page, alors mes filtres
  sont conservés
- Étant donné des filtres ne correspondant à aucun produit, lorsque je regarde la
  page, alors un message clair « aucun résultat » est affiché

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 5 — Correction de bug : les produits désactivés sont toujours visibles

**En tant que** chef de produit, **je souhaite** que les produits désactivés soient
masqués du catalogue, **afin que** les clients ne voient que les produits disponibles
à la vente.

**Critères d'acceptation :**
- Étant donné un produit avec `enabled: false` dans les données PIM, lorsque je
  parcours le catalogue, alors il n'apparaît PAS dans la liste des produits
- Étant donné un produit désactivé, lorsque j'appelle l'API de liste des produits
  (`/api/products`), alors il est exclu de la réponse
- Étant donné l'identifiant d'un produit désactivé, lorsque je visite directement sa
  page de détail (`/products/<code>`), alors je vois une page 404

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 6 — Correction de bug : les produits sont mal triés par prix

**En tant que** client, **je souhaite** que les produits soient triés du moins cher au
plus cher, **afin de** trouver rapidement les options les plus abordables.

**Critères d'acceptation :**
- Étant donné le catalogue produit, lorsque je consulte la liste, alors les produits
  sont triés par prix croissant (le moins cher en premier)
- Étant donné deux produits à 9,90 € et 79,90 €, alors le produit à 9,90 € apparaît
  en premier
- Étant donné un produit sans prix, alors il apparaît en fin de liste

**Notes techniques :**
>
> _À compléter par le candidat_
>
