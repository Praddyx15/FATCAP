// ═══════════════════════════════════════════════════════════════════
//  FATCAP STUDIO — SITE CONFIGURATION
//  ✏️  This is the ONLY file you need to edit to update your website.
//  🚫  Do not edit index.html, work.html, or shop.html.
//  💡  Save this file after any change, then refresh in your browser.
// ═══════════════════════════════════════════════════════════════════

var SITE = {


  // ── 1. STUDIO INFO ──────────────────────────────────────────────
  //    Appears in the nav, footer, and page titles.

  name:      "Fatcap Studio",
  tagline:   "Motion & Design Studio",
  founded:   "2024",
  email:     "hello@fatcap.studio",
  instagram: "https://instagram.com/fatcapstudio",
  behance:   "https://behance.net/fatcapstudio",


  // ── 2. HERO VIDEO ───────────────────────────────────────────────
  //    Set this to your showreel file path to replace the dark placeholder.
  //    Example:  heroVideo: "assets/reel.mp4"
  //    Leave as "" to keep the dark placeholder.

  heroVideo: "",


  // ── 3. ABOUT ────────────────────────────────────────────────────
  //    Heading: each string is a new line.
  //    Wrap a word in {curly braces} to colour it orange — e.g. "{motion}"

  about: {
    headingLines: [
      "Independent studio",
      "built on {motion},",
      "craft, and culture."
    ],
    body: "Fatcap Studio was founded by Vivek Teotia as a creative home for work that moves — literally and culturally. The studio operates at the intersection of motion design, visual identity, and digital craft, partnering with brands and creators who demand more than the expected. Every project is an opportunity to make something genuinely worth watching.",
    team: [
      {
        name:  "Vivek Teotia",
        role:  "Founder & Creative Director",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=520&q=80"
      },
      {
        name:  "Aarav Sharma",
        role:  "Lead Motion Designer",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=520&q=80"
      },
      {
        name:  "Kabir Mehta",
        role:  "Brand Designer",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=520&q=80"
      },
      {
        name:  "Ishaan Malhotra",
        role:  "Art Director",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=520&q=80"
      }
    ]
  },


  // ── 4. WORK ─────────────────────────────────────────────────────
  //    featured: true  → shown on the homepage (first 5 featured items)
  //    featured: false → shown only in the full Work archive
  //
  //    span: how wide the tile is in the grid
  //      12 = full width (use for showreels / hero moments)
  //       7 = wide left tile
  //       5 = tall right tile
  //       6 = half width (pair two side by side)
  //       4 = one third (three across)
  //       8 = two thirds
  //
  //    cat: filter category — "motion" | "branding" | "design" | "direction"
  //
  //    image: path to an image file, or "" for placeholder
  //    video: path to a video file — overrides image if set

  work: [
    {
      name:     "Hypebeast",
      type:     "Motion Identity",
      year:     "2024",
      featured: true,
      span:     7,
      cat:      "motion",
      image:    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&h=560&q=80",
      video:    ""
    },
    {
      name:     "Oatly",
      type:     "Brand Film",
      year:     "2024",
      featured: true,
      span:     5,
      cat:      "branding",
      image:    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&h=650&q=80",
      video:    ""
    },
    {
      name:     "Fatcap Reel 2024",
      type:     "Showreel",
      year:     "2024",
      featured: true,
      span:     12,
      cat:      "motion",
      image:    "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1400&h=650&q=80",
      video:    ""
    },
    {
      name:     "Kith",
      type:     "Art Direction",
      year:     "2024",
      featured: true,
      span:     6,
      cat:      "direction",
      image:    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&h=560&q=80",
      video:    ""
    },
    {
      name:     "New Balance",
      type:     "Motion Campaign",
      year:     "2023",
      featured: true,
      span:     6,
      cat:      "motion",
      image:    "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&h=560&q=80",
      video:    ""
    },
    // ─ Add more work below — set featured: false for archive-only ─
    {
      name:     "Highsnobiety",
      type:     "Editorial Design",
      year:     "2023",
      featured: false,
      span:     4,
      cat:      "design",
      image:    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&h=800&q=80",
      video:    ""
    },
    {
      name:     "Nike ACG",
      type:     "Motion Graphics",
      year:     "2023",
      featured: false,
      span:     8,
      cat:      "motion",
      image:    "https://images.unsplash.com/photo-1520256866875-9b21f37e75f6?auto=format&fit=crop&w=1000&h=600&q=80",
      video:    ""
    },
    {
      name:     "Aime Leon Dore",
      type:     "Visual Branding",
      year:     "2023",
      featured: false,
      span:     4,
      cat:      "branding",
      image:    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&h=800&q=80",
      video:    ""
    }
  ],


  // ── 5. SERVICES ─────────────────────────────────────────────────
  //    name: the large text shown on each row
  //    tags: the small text on the right (hidden on mobile)

  services: [
    { name: "Motion Design",      tags: "Animation · Dynamic Identity · Title Sequences", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&h=400&q=80", link: "#" },
    { name: "Brand Systems",      tags: "Visual Strategy · Typography · Art Direction", image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&h=400&q=80", link: "#" },
    { name: "Digital Craft",      tags: "Interactive Experiences · WebGL · Web Design", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=600&h=400&q=80", link: "#" },
    { name: "Creative Direction", tags: "Concept Design · Copywriting · Editorial", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&h=400&q=80", link: "#" }
  ],


  // ── 6. CLIENT REVIEWS ───────────────────────────────────────────

  reviews: [
    {
      quote:   "The level of craft and attention to detail set Fatcap apart. They turned our brief into something we didn't know we needed.",
      author:  "Alex Chen",
      company: "Hypebeast"
    },
    {
      quote:   "Working with Fatcap felt like a true creative partnership — they pushed every idea further than we imagined possible.",
      author:  "Sarah Williams",
      company: "Kith"
    },
    {
      quote:   "Rare to find a studio that understands both the cultural moment and the craft of film the way these guys do.",
      author:  "Marcus Reid",
      company: "New Balance"
    }
  ],


  // ── 7. SHOP CATEGORIES (homepage tiles) ─────────────────────────
  //    bg: background colour of each tile (subtle warm grays by default)

  shopCategories: [
    { num: "01", name: "Fonts",    bg: "#EDECE6", link: "shop.html#fonts"    },
    { num: "02", name: "Textures", bg: "#E5E4DE", link: "shop.html#textures" },
    { num: "03", name: "Plugins",  bg: "#DDDCD6", link: "shop.html#plugins"  },
    { num: "04", name: "Merch",    bg: "#D5D4CE", link: "shop.html#merch"    }
  ],


  // ── 8. SHOP PRODUCTS ────────────────────────────────────────────
  //    Add products under each category.
  //    image: path to product image, or "" for placeholder
  //    bg:    placeholder background colour (only used when image is empty)
  //    link:  URL to product / checkout page (use "#" as placeholder)

  fonts: [
    { name: "Fatcap Sans", type: "Neo-Grotesque · OTF + WOFF2", price: "$49", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&h=400&q=80", link: "#" },
    { name: "Fatcap Mono", type: "Technical Mono · 4 Weights", price: "$59", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=500&h=400&q=80", link: "#" }
  ],

  textures: [
    { name: "Grain Pack 01",  type: "Film Grain · 12 files",    price: "$18", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&h=400&q=80", bg: "#EDECE6", link: "#" },
    { name: "Paper Pack 01",  type: "Paper Textures · 8 files", price: "$14", image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&h=400&q=80", bg: "#E8E7E1", link: "#" },
    { name: "Noise Pack 01",  type: "Digital Noise · 10 files", price: "$16", image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&h=400&q=80", bg: "#E2E1DB", link: "#" },
    { name: "Canvas Pack 01", type: "Fabric Textures · 6 files",price: "$12", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&h=400&q=80", bg: "#DCDBD5", link: "#" }
  ],

  plugins: [
    { name: "Grain Overlay",  type: "After Effects · Plugin", price: "$28", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&h=400&q=80", bg: "#EDECE6", link: "#" },
    { name: "Type Animator",  type: "After Effects · Script", price: "$38", image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=500&h=400&q=80", bg: "#E5E4DE", link: "#" },
    { name: "Color Grader",   type: "Premiere · LUT Pack",    price: "$22", image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?auto=format&fit=crop&w=500&h=400&q=80", bg: "#DDDCD6", link: "#" },
    { name: "Loop Builder",   type: "After Effects · Script", price: "$32", image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=500&h=400&q=80", bg: "#D5D4CE", link: "#" }
  ],

  merch: [
    { name: "Studio Tee",    type: "T-Shirt · Unisex", price: "$48", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=500&h=400&q=80", bg: "#F0EFE9", link: "#" },
    { name: "Studio Hoodie", type: "Hoodie · Unisex",  price: "$88", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&h=400&q=80", bg: "#EAEBE3", link: "#" },
    { name: "Fatcap Cap",    type: "Hat · One size",   price: "$42", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&h=400&q=80", bg: "#E4E3DD", link: "#" }
  ]


}; // ← do not delete this line
