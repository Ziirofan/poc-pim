Ceci est un projet [Next.js](https://nextjs.org) initialisé avec
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

C'est une **SPA côté client** : les pages s'affichent dans le navigateur et
récupèrent leurs données à l'exécution depuis la propre API HTTP de
l'application. Le serveur Next.js ne sert que la coquille de l'application et les
points d'accès `/api/*`.

## Pour commencer

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le catalogue de produits.

## Architecture

- Les pages catalogue et produit sont des **composants client**
  (`"use client"`). Elles récupèrent les données en HTTP avec `fetch()` dans un
  `useEffect` et gèrent elles-mêmes leur état de chargement / erreur.
- Les données sont servies par des **route handlers** Next.js dans
  `src/app/api/` — c'est le backend auquel la SPA s'adresse. Le contenu produit
  n'est pas rendu côté serveur.
- La navigation est côté client (`next/link`, `useParams`).

## Structure du projet

- `src/mocks/pim/products.ts` — Données produit PIM fictives (attributs de type
  Akeneo avec locale/scope). Côté serveur ; utilisées par les routes API.
- `src/lib/pim.ts` — Types partagés et sûrs côté client (`PimProduct`) et
  helpers de valeurs (`getProductValue`, `getProductPrice`).
- `src/app/api/products/` — Routes API : liste des produits + produit individuel.
- `src/app/page.tsx` — Page catalogue (côté client, récupère `/api/products`).
- `src/app/products/[code]/page.tsx` — Page de détail produit (côté client,
  récupère `/api/products/<code>`).

## Entretien technique — Exercices de fonctionnalités

Choisissez une ou plusieurs fonctionnalités ci-dessous et implémentez-les. Elles
portent sur quatre domaines : **récupération de données & état**, **routage côté
client**, **qualité du code** et **accessibilité**.

---

### Feat 1 — États de chargement et d'erreur robustes

**En tant qu'** utilisateur sur une connexion lente ou instable, **je souhaite**
un retour clair pendant le chargement des produits et en cas d'échec, **afin de**
ne jamais rester devant un écran blanc ou cassé.

**Critères d'acceptation :**
- Étant donné le catalogue en cours de chargement, lorsque j'ouvre la page,
  alors je vois un indicateur de chargement (ex. cartes squelettes), pas un
  simple « Loading… »
- Étant donné l'échec de la requête produits, lorsque je consulte la page, alors
  je vois un message d'erreur avec une possibilité de réessayer
- Étant donné l'action de réessai, lorsque je la déclenche, alors l'application
  relance la requête sans rechargement complet de la page
- Étant donné une liste vide renvoyée par l'API, lorsque je consulte le
  catalogue, alors je vois un message « aucun produit » clair plutôt qu'une
  grille vide

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 2 — Extraire un hook de récupération de données réutilisable

**En tant que** développeur, **je souhaite** que la logique de récupération de
données soit partagée entre les pages catalogue et détail, **afin que** la
gestion chargement/erreur soit cohérente et non copiée-collée.

**Critères d'acceptation :**
- Étant donné les pages catalogue et détail, lorsque je lis le code, alors la
  logique `fetch`/chargement/erreur se trouve dans un seul hook réutilisable
  (ex. `useFetch` / `useProducts`)
- Étant donné le hook, lorsqu'une page l'utilise, alors cette page ne déclare
  plus sa propre plomberie `useState`/`useEffect` de récupération
- Étant donné une modification de la gestion d'erreur, lorsque je la fais dans le
  hook, alors les deux pages en bénéficient sans autre édition

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 3 — Gestion du « introuvable » côté client

**En tant qu'** utilisateur qui suit un lien produit obsolète ou mal saisi,
**je souhaite** une page « produit introuvable » claire, **afin de** comprendre
que le produit n'existe pas et de pouvoir reprendre ma navigation.

**Critères d'acceptation :**
- Étant donné un code produit inconnu, lorsque je visite directement
  `/products/<code>`, alors je vois un état « introuvable » dédié (pas un
  indicateur qui tourne sans fin, ni un plantage)
- Étant donné l'état « introuvable », lorsque je le regarde, alors un lien clair
  renvoie vers le catalogue
- Étant donné un code produit valide, lorsque j'y navigue depuis le catalogue,
  alors le détail s'affiche sans rechargement complet de la page

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 4 — Recherche et filtrage du catalogue (persistés dans l'URL)

**En tant que** client, **je souhaite** rechercher et filtrer le catalogue,
**afin de** trouver rapidement ce que je cherche et de pouvoir partager ou
mettre en favori une vue filtrée.

**Critères d'acceptation :**
- Étant donné la page catalogue, lorsque je tape dans un champ de recherche,
  alors seuls les produits correspondants sont affichés
- Étant donné la page catalogue, lorsque je sélectionne un filtre de catégorie
  ou de famille, alors la liste se met à jour en conséquence
- Étant donné des filtres actifs, lorsque je rafraîchis ou partage l'URL, alors
  les filtres sont conservés (ils vivent dans la query string)
- Étant donné des filtres ne correspondant à aucun produit, lorsque je regarde
  la page, alors un message clair « aucun résultat » est affiché

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 5 — Refactoriser et corriger le tri par prix

**En tant que** développeur, **je souhaite** que le code du catalogue soit
dédupliqué et le tri par prix correct, **afin que** le code soit maintenable et
les produits correctement ordonnés.

**Critères d'acceptation :**
- Étant donné le markup des cartes produit et la logique de mapping des valeurs,
  lorsque je lis le code, alors la logique répétée est extraite dans un
  composant/helper (DRY)
- Étant donné le catalogue, lorsque je consulte la liste, alors les produits sont
  triés par **prix numérique croissant** (ex. 9,90 € avant 29,90 €, pas par
  comparaison de chaînes)
- Étant donné un produit sans prix, lorsque la liste est triée, alors il apparaît
  en fin de liste
- Étant donné le refactoring, lorsque je lance l'application, alors le catalogue
  et le détail s'affichent toujours correctement

**Notes techniques :**
>
> _À compléter par le candidat_
>

---

### Feat 6 — Accessibilité

**En tant qu'** utilisateur en situation de handicap, **je souhaite** que le
catalogue soit entièrement navigable au clavier et avec un lecteur d'écran,
**afin de** parcourir et lire les informations produit sans obstacles.

**Critères d'acceptation :**
- Étant donné n'importe quelle page, lorsque je navigue uniquement au clavier,
  alors je peux atteindre chaque élément interactif dans un ordre logique avec un
  indicateur de focus visible
- Étant donné une carte produit, lorsqu'un lecteur d'écran la lit, alors le nom
  du produit, le prix et le texte alternatif de l'image sont annoncés clairement
  (le statut n'est pas transmis uniquement par la couleur)
- Étant donné une navigation côté client vers un produit (ou vers l'état
  « introuvable »), lorsque la vue change, alors le focus est géré et le
  changement est annoncé — pas un changement de route silencieux
- Étant donné l'ensemble de l'application, lorsque je lance un audit
  d'accessibilité Lighthouse, alors le score est supérieur à 90

**Notes techniques :**
>
> _À compléter par le candidat_
>
