This is a [Next.js](https://nextjs.org) project bootstrapped with
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the product catalog.

## Project Structure

- `src/mocks/pim/products.ts` — Mock PIM product data (Akeneo-style attributes
  with locale/scope)
- `src/app/page.tsx` — Product listing page
- `src/app/products/[code]/page.tsx` — Product detail page
- `src/app/api/products/` — API routes (list + single product)

## Tech Interview — Feature Exercises

Pick one or more features below and implement them.

---

### Feat 1 — Improve SEO

**As a** marketing manager, **I want** each product page to be well-referenced
on search engines, **so that** our products appear in organic search results and
drive traffic.

**Acceptance criteria:**
- Given a product page, when I share it on social media, then a rich preview
  (title, description, image) is displayed
- Given the catalog, when a search engine crawls the site, then it finds a
  sitemap listing all product pages
- Given a product page, when viewed in search results, then the title and
  description are specific to that product

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 2 — Improve Accessibility

**As a** user with a disability, **I want** the catalog to be fully navigable
with a keyboard and screen reader, **so that** I can browse and read product
information without barriers.

**Acceptance criteria:**
- Given any page, when I navigate using only the keyboard, then I can reach all
  interactive elements in a logical order
- Given a product card, when a screen reader reads it, then the product name,
  price, and image alt text are announced clearly
- Given the entire app, when I run a Lighthouse accessibility audit, then the
  score is above 90

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 3 — Enrich Product Data

**As a** product manager, **I want** richer product information displayed on the
catalog, **so that** customers can make informed purchasing decisions at a
glance.

**Acceptance criteria:**
- Given the catalog, when I view a product card, then I see additional details
  (e.g. size, material, brand)
- Given the product detail page, when I open it, then all available attributes
  are displayed in a structured way
- Given the mock data, when a developer adds a new product with a different
  family, then it appears correctly in the catalog

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 4 — Product Filtering & Search

**As a** customer, **I want** to search and filter products in the catalog, **so
that** I can quickly find what I'm looking for without scrolling through
everything.

**Acceptance criteria:**
- Given the catalog page, when I type in a search field, then only products
  matching my query are displayed
- Given the catalog page, when I select a category or family filter, then the
  list updates accordingly
- Given active filters, when I refresh the page, then my filters are preserved
- Given filters that match no product, when I look at the page, then a clear "no
  results" message is shown

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 5 — Bug Fix: Disabled Products Still Visible

**As a** product manager, **I want** disabled products to be hidden from the
catalog, **so that** customers only see products that are available for sale.

**Acceptance criteria:**
- Given a product with `enabled:
  false` in the PIM data, when I browse the catalog, then it does NOT appear in
  the product listing
- Given a disabled product, when I call the product list API (`/api/products`),
  then it is excluded from the response
- Given a disabled product identifier, when I visit its detail page directly
  (`/products/<code>`), then I see a 404 page

**Technical notes:**
>
> _To be completed by the candidate_
>

---

### Feat 6 — Bug Fix: Products Are Sorted Incorrectly by Price

**As a** customer, **I want** products to be sorted from cheapest to most
expensive, **so that** I can quickly find affordable options.

**Acceptance criteria:**
- Given the product catalog, when I view the listing, then products are sorted
  by ascending price (lowest first)
- Given two products priced at 9.90 € and 79.90 €, then the 9.90 € product
  appears first
- Given a product with no price, then it appears at the end of the list

**Technical notes:**
>
> _To be completed by the candidate_
>
