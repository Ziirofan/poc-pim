This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It is a **client-side SPA**: the pages render in the browser and fetch their
data at runtime from the app's own HTTP API. The Next.js server only serves the
app shell and the `/api/*` endpoints.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the product catalog.

## Architecture

- The catalog and product pages are **client components** (`"use client"`).
  They fetch over HTTP with `fetch()` in a `useEffect` and manage their own
  loading / error state.
- Data is served by Next.js **route handlers** under `src/app/api/` — this is
  the backend the SPA talks to. There is no server-side rendering of product
  content.
- Routing is client-side (`next/link`, `useParams`).

## Project Structure

- `src/mocks/pim/products.ts` — Mock PIM product data (Akeneo-style attributes
  with locale/scope). Server-side; used by the API routes.
- `src/lib/pim.ts` — Shared, client-safe types (`PimProduct`) and value helpers
  (`getProductValue`, `getProductPrice`).
- `src/app/api/products/` — API routes: product list + single product.
- `src/app/page.tsx` — Catalog page (client-side, fetches `/api/products`).
- `src/app/products/[code]/page.tsx` — Product detail page (client-side, fetches
  `/api/products/<code>`).

## Tech Interview — Feature Exercises

Pick one or more features below and implement them. They focus on three areas:
**data fetching & state**, **client-side routing**, and **code quality**.

---

### Feat 1 — Robust Loading & Error States

**As a** user on a slow or flaky connection, **I want** clear feedback while
products load and when something fails, **so that** I'm never staring at a blank
or broken screen.

**Acceptance criteria:**
- Given the catalog is loading, when I open the page, then I see a loading
  placeholder (e.g. skeleton cards), not a bare "Loading…" line
- Given the products request fails, when I view the page, then I see an error
  message with a way to retry
- Given the retry action, when I trigger it, then the app re-fetches without a
  full page reload
- Given the API returns an empty list, when I view the catalog, then I see a
  clear "no products" message rather than an empty grid

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 2 — Extract a Reusable Data-Fetching Hook

**As a** developer, **I want** the data-fetching logic shared between the
catalog and detail pages, **so that** loading/error handling is consistent and
not copy-pasted.

**Acceptance criteria:**
- Given the catalog and detail pages, when I read the code, then the
  `fetch`/loading/error logic lives in a single reusable hook (e.g.
  `useFetch` / `useProducts`)
- Given the hook, when a page uses it, then that page no longer declares its own
  `useState`/`useEffect` fetch plumbing
- Given a change to error handling, when I make it in the hook, then both pages
  pick it up without further edits

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 3 — Client-Side Not-Found Handling

**As a** user who follows a stale or mistyped product link, **I want** a clear
"product not found" page, **so that** I understand the product doesn't exist and
can get back to browsing.

**Acceptance criteria:**
- Given an unknown product code, when I visit `/products/<code>` directly, then
  I see a dedicated not-found state (not a spinner that never resolves, and not
  a crash)
- Given the not-found state, when I look at it, then there is a clear link back
  to the catalog
- Given a valid product code, when I navigate to it from the catalog, then the
  detail renders without a full page reload

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 4 — Catalog Search & Filtering (URL-persisted)

**As a** customer, **I want** to search and filter the catalog, **so that** I
can quickly find what I'm looking for and share or bookmark a filtered view.

**Acceptance criteria:**
- Given the catalog page, when I type in a search field, then only products
  matching my query are shown
- Given the catalog page, when I select a category or family filter, then the
  list updates accordingly
- Given active filters, when I refresh or share the URL, then the filters are
  preserved (they live in the query string)
- Given filters that match no product, when I look at the page, then a clear "no
  results" message is shown

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 5 — Refactor & Fix the Price Sort

**As a** developer, **I want** the catalog code de-duplicated and the price sort
correct, **so that** the code is maintainable and products are ordered properly.

**Acceptance criteria:**
- Given the product card markup and value-mapping logic, when I read the code,
  then repeated logic is extracted into a component/helper (DRY)
- Given the catalog, when I view the listing, then products are sorted by
  **ascending numeric price** (e.g. 9.90 € before 29.90 €, not by string
  comparison)
- Given a product with no price, when the list is sorted, then it appears at the
  end
- Given the refactor, when I run the app, then catalog and detail still render
  correctly

**Technical notes:**
>
> _To be completed by the candidate_
>
