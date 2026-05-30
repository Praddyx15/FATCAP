# Fatcap Studio — Editing Guide

> **The golden rule:** You only ever need to edit one file — `site-config.js`.
> Leave `index.html`, `work.html`, and `shop.html` alone.

---

## How it works

All your website content lives in `site-config.js`. When someone opens your site in a browser, the HTML pages read that file and build themselves automatically. Change something in `site-config.js`, save, refresh the browser — done.

---

## Folder structure

```
Website/
├── site-config.js        ← ✏️  Edit this file only
├── index.html            ← Homepage (don't touch)
├── work.html             ← Work archive (don't touch)
├── shop.html             ← Shop page (don't touch)
└── assets/
    ├── fonts/            ← Drop GT America .woff2 files here
    ├── projects/         ← Drop project images/videos here
    ├── team/             ← Drop team portrait photos here
    └── shop/             ← Drop shop product images here
```

---

## Opening the site locally

Double-click `index.html` to preview in your browser.
You'll need to open it from a local server for some features — the easiest way:

1. Install VS Code (free) → install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**
3. Your site opens at `http://127.0.0.1:5500`

---

## What to edit and how

Open `site-config.js` in any text editor (VS Code, Notepad, TextEdit).

---

### Studio info

```js
name:      "Fatcap Studio",        // appears in nav + footer
tagline:   "Motion & Design Studio",
founded:   "2024",
email:     "hello@fatcap.studio",
instagram: "https://instagram.com/fatcapstudio",
behance:   "https://behance.net/fatcapstudio",
```

Change any value between the `" "` quotes.

---

### Hero video (showreel)

```js
heroVideo: "",
```

Drop your video into the `assets/` folder, then change the line to:

```js
heroVideo: "assets/reel.mp4",
```

Save and refresh. The dark placeholder is replaced by your video.

---

### About section

**Heading** — each string is one line. Wrap a word in `{curly braces}` to make it orange:

```js
headingLines: [
  "Independent studio",
  "built on {motion},",   // "motion" becomes orange
  "craft, and culture."
],
```

**Body text:**

```js
body: "Fatcap Studio was founded by...",
```

Replace the full paragraph with your own text.

**Team members** — there are 4 slots. Fill in name, role, and photo path:

```js
{ name: "Vivek Teotia", role: "Founder & Creative Director", photo: "assets/team/vivek.jpg" },
{ name: "Alex Smith",   role: "Motion Designer",             photo: "assets/team/alex.jpg"  },
```

Drop portrait photos into `assets/team/`. Leave `photo: ""` for a warm gray placeholder.

---

### Adding work projects

Each project in the `work` array looks like this:

```js
{
  name:     "Hypebeast",
  type:     "Motion",
  year:     "2024",
  featured: true,                 // true = shown on homepage, false = archive only
  span:     7,                    // tile width (see table below)
  cat:      "motion",             // filter: motion | branding | design | direction
  image:    "assets/projects/hypebeast.jpg",
  video:    ""                    // set a video path here to use video instead of image
},
```

**Tile widths (span):**

| span | Width | Best for |
|------|-------|----------|
| 12   | Full width | Showreels, hero moments |
| 7    | Wide (~58%) | Landscape shots |
| 5    | Tall (~42%) | Portrait/vertical shots |
| 6    | Half | Two equal tiles side by side |
| 4    | One third | Three tiles across |
| 8    | Two thirds | Feature with small aside |

**To add a new project:**

1. Drop your image into `assets/projects/` (e.g. `nike.jpg`)
2. Copy an existing project block in site-config.js
3. Paste it after the last `},` in the `work: [` list
4. Fill in the details — every block except the very last needs a comma `,` at the end

Example — adding a Nike project to the archive only (not homepage):

```js
{
  name:     "Nike",
  type:     "Motion",
  year:     "2025",
  featured: false,
  span:     6,
  cat:      "motion",
  image:    "assets/projects/nike.jpg",
  video:    ""
},
```

---

### Services

```js
services: [
  { name: "Motion & Video",  tags: "Film · Animation · VFX" },
],
```

Add, remove, or rename rows freely. `tags` appears on the right side on desktop only.

---

### Client reviews

```js
reviews: [
  {
    quote:   "The level of craft...",
    author:  "Alex Chen",
    company: "Hypebeast"
  },
],
```

Add or remove review objects. Three reviews display best on desktop.

---

### Shop products

Each category (fonts, textures, plugins, merch) has its own list. Add products like this:

```js
textures: [
  {
    name:  "Grain Pack 01",
    type:  "Film Grain · 12 files",
    price: "$18",
    image: "assets/shop/grain-01.jpg",   // or "" for a plain colour placeholder
    bg:    "#EDECE6",                     // placeholder background colour
    link:  "https://gumroad.com/l/yourproduct"
  },
],
```

To mark a category as **Coming Soon**, leave its array empty:

```js
fonts: [],
```

---

### Shop homepage tiles

These are the 4 tiles on the homepage that link to each shop section:

```js
shopCategories: [
  { num: "01", name: "Fonts", bg: "#EDECE6", link: "shop.html#fonts" },
],
```

Change `name` to rename a category. Change `bg` to change the tile background colour.

---

## Adding GT America fonts

The site uses GT America by Grilli Type. Without the font files it falls back to DM Sans (loaded from Google Fonts automatically — no files needed).

To activate GT America:

1. Purchase a licence at grili.type
2. Download the WOFF2 files
3. Rename them exactly as follows and drop into `assets/fonts/`:
   - `GT-America-Standard-Light.woff2`
   - `GT-America-Standard-Regular.woff2`
   - `GT-America-Standard-Medium.woff2`
   - `GT-America-Expanded-Bold.woff2`
4. Refresh the browser — the font switches automatically

---

## Publishing to fatcapstudio.com

### Netlify (recommended, free)

1. Go to netlify.com and sign up for a free account
2. Drag the entire `Website/` folder onto the Netlify dashboard
3. Your site is live on a `.netlify.app` URL in seconds
4. Go to Domain settings → Add custom domain → type `fatcapstudio.com`
5. Follow the instructions to point your domain's nameservers to Netlify

### Any web host (cPanel / FTP)

Upload the entire `Website/` folder to your host's `public_html` directory.

---

## Pre-launch checklist

- [ ] Set `heroVideo` to your showreel file path
- [ ] Add team portrait photos to `assets/team/`
- [ ] Add all project images to `assets/projects/` and update `work` entries
- [ ] Replace placeholder review text with real client quotes
- [ ] Update `email`, `instagram`, `behance` with live links
- [ ] Add GT America font files (or keep DM Sans as fallback)
- [ ] Add shop product images and live checkout links
- [ ] Test on mobile before going live
