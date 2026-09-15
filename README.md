# Jagdamba Procut Pvt. Ltd. — Website Frontend

A premium industrial frontend for **Jagdamba Procut Pvt. Ltd.** (steel
stockholding, CNC profile cutting, laser cutting and CNC drilling — Vadodara,
Gujarat), built with Next.js 14 (App Router), TypeScript, Tailwind CSS and
Framer Motion.

This is a **frontend-only** build. Forms, uploads and downloads are polished,
fully-designed demos — see [Backend integration](#backend-integration) for
where to wire in real endpoints.

---

## A note on company name & data

Every fact used across this site (address, phone lines, infrastructure
figures, machinery counts, material grades and mechanical / chemical property
tables) was taken from the company's own brochure pages, not invented. Two
things worth knowing about:

1. **Brand name.** The site is branded **"Jagdamba Procut Pvt. Ltd."** — the
   single source of truth is `data/company.ts` (`company.name` /
   `company.nameShort` / `company.nameUpper`); everywhere else either imports
   those values or was updated to match.
2. **Registration numbers.** The GST, ISO 9001:2015 and MSME/Udyam numbers
   shown on `/about` and `/downloads` come from certificates issued to the
   prior trading name, **"Jagdamba Profile."** `data/company.ts` carries this
   as `registeredAs` / `registeredAsNote`, and `/about` surfaces it as a short
   disclosure line under the registration cards. If new certificates are
   issued to "Jagdamba Procut Pvt. Ltd.," update the `registrations` object
   in `data/company.ts` and remove `registeredAsNote`. The **bank account /
   cancelled cheque page was intentionally excluded** throughout — account
   numbers and IFSC codes shouldn't be published on a public marketing site.

Anything not present in the source material (CIN, some "other certificates")
is left as a clearly-marked placeholder rather than invented.

---

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). That's it — no
environment variables or backend are required to see the full site.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

> **Fonts note:** the site uses `next/font/google` to self-host Manrope
> (display) and Inter (body/UI) at build time. This requires internet access
> the first time you run `dev` or `build` (to fetch the font files), same as
> any Next.js project using `next/font/google`. After that they're cached
> locally.

---

## Project structure

```
app/                          Next.js App Router routes
  layout.tsx                  Root layout: fonts, Navbar, Footer, WhatsApp button, SEO metadata
  page.tsx                    Homepage (12 sections)
  globals.css                 Design tokens applied as CSS, grid textures, focus states
  about/                      About Us
  products/                   Products overview + steel-plates / steel-makes / material-categories
  services/                   Services overview + [slug] dynamic template (8 services)
  machinery/                  Machinery & capacity chart
  infrastructure/             Infrastructure & capacity
  quality/                    Quality, inspection & traceability + UT standards
  grades/                     Grades & technical data (searchable/filterable)
  industries/                 Industries we serve
  transport/                  Transport & logistics
  gallery/                    Filterable gallery + lightbox
  downloads/                  Downloads & certifications
  stock-enquiry/              Stock enquiry form
  quote/                      Request a Quote form (with drawing/DXF upload demo)
  contact/                    Contact page (team, phones, map, contact form)
  sitemap.ts / robots.ts      SEO
  not-found.tsx / loading.tsx Error & loading states

components/
  layout/                     Navbar, MobileDrawer, Footer, PageHero, WhatsAppButton
  ui/                         Button, Container, SectionHeading, ImagePlaceholder,
                               AnimatedCounter, Reveal/RevealStagger, Primitives
                               (Card, Badge, SpecList, DataTable, CheckItem)
  sections/home/              The 12 homepage sections
  forms/                      FormFields, FileDropzone, EnquiryForm, ContactForm
  gallery/                    GalleryGrid (filter + lightbox)
  grades/                     GradesExplorer (search/filter table)

data/                         All site content, typed and separated from UI
  company.ts                  Company facts, stats, "why choose us"
  navigation.ts                Nav + footer link structure
  products.ts / services.ts / grades.ts / industries.ts / machinery.ts /
  quality.ts / gallery.ts     Page content, one file per domain

lib/utils.ts                  cn() class merge helper, number formatting
```

### Why a data layer?

Every page pulls its content from `/data/*.ts` rather than hardcoding copy
into components. To update a phone number, add a material grade, or change a
statistic, edit the relevant file in `/data` — no component code needs to
change. This is also the seam for a future CMS: point these files at a CMS
fetch instead of a static export and the pages don't change.

---

## Design system

Defined once in `tailwind.config.ts` and `app/globals.css`, per the brand
brief:

- **Color** — brand blue (`blue-950…50`), industrial orange (`orange-900…100`),
  dark industrial (`dark-950…600`), plus semantic `surface-*`, `ink-*` and
  `hairline-*` tokens for backgrounds, text and borders.
- **Type** — Manrope (display/headings) + Inter (body/UI), loaded via
  `next/font/google` with the weight ranges specified in the brief.
- **Motion** — Framer Motion, used deliberately: a hero reveal sequence,
  scroll-triggered section reveals (`Reveal`/`RevealStagger`), animated
  counters that run once in view, and a scroll-linked "one roof" process
  flow on the homepage. `prefers-reduced-motion` is respected globally in
  `globals.css`.
- **Texture** — `.bg-technical-grid` / `.bg-technical-grid-light` utility
  classes provide the restrained blueprint-style grid used on dark panels.

---

## Image & video placeholder system

No stock photography is bundled. Every image slot uses the branded
`<ImagePlaceholder />` component (`components/ui/ImagePlaceholder.tsx`) — a
styled block (industrial grid + corner marks + a category icon) rather than a
broken `<img>`, and it prints the exact path a real asset should replace it
at, e.g. `/images/cnc-profile-cutting.jpg`.

**To drop in real photography:**

1. Add the file under `public/images/<category>/...` (folders already
   scaffolded: `factory`, `machinery`, `steel`, `services`, `gallery`,
   `transport`, `quality` — create subfolders as needed).
2. Replace the relevant `<ImagePlaceholder category="..." />` usage with
   `next/image`, e.g.:
   ```tsx
   <Image src="/images/factory/hero.jpg" alt="..." fill className="object-cover" />
   ```
3. For the hero background video, `components/sections/home/Hero.tsx` has a
   single placeholder block — swap it for a `<video>` element with a poster
   image (muted, autoplay, loop), per the brief's video strategy.

`next.config.mjs` has an empty `images.remotePatterns` — add a domain there
if photography will be served from a CDN instead of `/public`.

---

## Forms — frontend-only, by design

`components/forms/EnquiryForm.tsx` (Stock Enquiry + Request a Quote, via a
`variant` prop), `ContactForm.tsx`, and `FileDropzone.tsx` all:

- validate required fields and show inline error states,
- show a loading state on submit,
- show a polished success confirmation,
- **do not send data anywhere.** `handleSubmit` has a `setTimeout` standing in
  for a real request, clearly commented.

## Backend integration

Everything is structured so a backend can be dropped in without restructuring
the frontend:

- **Forms** — replace the `setTimeout` in each form's `handleSubmit` with a
  real `fetch()`/API call (or a server action). Field shapes are already
  typed (`FormState` in each form file).
- **File uploads** — `FileDropzone.tsx` simulates upload progress client-side
  only. Wire its `addFiles` callback to real upload logic (e.g. a signed URL
  or multipart POST) when ready.
- **Downloads** — `data/gallery.ts` → `documents` lists the certificate/
  brochure cards on `/downloads`; each currently renders a demo "Download"
  button. Point them at real file URLs (or a CMS) once assets exist.
- **Gallery / CMS content** — anything in `/data/*.ts` can be swapped for a
  CMS fetch (e.g. in a Server Component) without touching the presentation
  components.
- **WhatsApp** — `components/layout/WhatsAppButton.tsx` and the hero already
  link to a real `wa.me` link using the number in `data/company.ts`.

---

## SEO

`app/layout.tsx` sets global metadata (title template, description, keywords,
Open Graph, Twitter card). Each route sets its own `title`/`description` via
Next's `Metadata` API. `app/sitemap.ts` and `app/robots.ts` generate
`/sitemap.xml` and `/robots.txt` — update the `base` URL constant in both
once a production domain is set.

---

## Accessibility & performance

- Semantic headings, visible focus rings (`:focus-visible` in `globals.css`),
  keyboard-operable nav/drawer/lightbox.
- `prefers-reduced-motion` disables non-essential animation globally.
- Client components are scoped narrowly (forms, nav, animated sections) —
  most page shells are React Server Components.
- `next/image` is ready to use once real photography replaces the
  placeholders (see above); `next/font` self-hosts and subsets both typefaces.

---

## Known limitation to flag before production

`npm audit` will report vulnerabilities against `next@14.2.35` (currently the
newest 14.x release). Several of the aggregated advisories only affect
features this site doesn't use (middleware, Server Actions, custom servers,
i18n rewrites, remote image proxying — `next.config.mjs` keeps
`images.remotePatterns` empty). Fully clearing `npm audit` requires moving to
Next 15/16, which includes breaking API changes (async `params`/
`searchParams`, React 19). That migration was left for a deliberate, tested
follow-up rather than rushed in — worth doing before a production launch.
#   J P  
 