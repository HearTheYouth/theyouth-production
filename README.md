# The Youth

Website + Sanity Studio voor The Youth (project ID: **dpv7nblq**).

## Lokaal draaien

Je hebt **twee terminals** nodig:

### 1. Sanity Studio (onder `/studio`)

```bash
cd studio
npm install
npm run dev
```

Studio draait op **http://localhost:3333/studio**.

### 2. Website (Vite)

```bash
cd web
npm install
npm run dev
```

Website draait op **http://localhost:5173**.

- **Website:** http://localhost:5173  
- **Studio via website (proxy):** http://localhost:5173/studio  

De link “Studio” in de navigatie gaat naar `/studio`; Vite proxyt dat naar de Sanity dev-server. Zorg dat beide servers draaien als je de studio via de site wilt openen.

## Bouwen

```bash
cd web && npm run build
cd studio && npm run build
```

## Structuur

- **`web/`** – Frontend (Vite, HTML/CSS/JS). Wall of Talent gebruikt nu placeholder-data in `web/js/data.js`; later kun je hier `@sanity/client` + GROQ toevoegen.
- **`studio/`** – Sanity Studio op project **dpv7nblq**, dataset `production`, documenttype o.a. **Talent** (naam, tagline, categorie).
