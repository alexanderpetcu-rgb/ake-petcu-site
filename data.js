/* AKE PETCU — site content loader.
   The real content lives in content.json, edited through the admin panel at
   /admin (Decap CMS) once it's connected to GitHub + Netlify. This file:
   1) sets window.SITE_DATA to a safe built-in default immediately, so the
      site still works even before content.json has loaded, or if it's
      opened locally by double-clicking a file (fetch of local files is
      blocked by the browser in that case);
   2) fetches content.json and, if that succeeds, replaces window.SITE_DATA
      with the real content;
   3) exposes window.SITE_DATA_READY, a promise every page's script waits on
      before rendering, so pages never render with half-loaded data.
   Every public page must do: window.SITE_DATA_READY.then(function(){ ... }) */

window.SITE_DATA = {
  siteDown: false,
  texts: {
    aboutEyebrow: "Photographer and cinematographer",
    contactHeading: "hello"
  },
  photography: {
    portrait: {
      label: "Portrait",
      tagline: "One face, fully considered.",
      intro: "One-to-one sessions, natural light or studio. Less about a pose and more about a few minutes of real attention — the kind of picture that still looks like you in ten years.",
      images: [
        { src: "assets/gallery-portrait-1.jpg", alt: "Portrait study 1" },
        { src: "assets/gallery-portrait-2.jpg", alt: "Portrait study 2" },
        { src: "assets/gallery-portrait-3.jpg", alt: "Portrait study 3" },
        { src: "assets/gallery-portrait-4.jpg", alt: "Portrait study 4" },
        { src: "assets/gallery-portrait-5.jpg", alt: "Portrait study 5" },
        { src: "assets/gallery-portrait-6.jpg", alt: "Portrait study 6" }
      ]
    },
    editorial: {
      label: "Editorial",
      tagline: "A concept, staged and lit.",
      intro: "Shoots built around an idea: styling, location and light planned in advance and directed on the day, for magazines, brands and personal series.",
      images: [
        { src: "assets/gallery-editorial-1.jpg", alt: "Editorial study 1" },
        { src: "assets/gallery-editorial-2.jpg", alt: "Editorial study 2" },
        { src: "assets/gallery-editorial-3.jpg", alt: "Editorial study 3" },
        { src: "assets/gallery-editorial-4.jpg", alt: "Editorial study 4" },
        { src: "assets/gallery-editorial-5.jpg", alt: "Editorial study 5" },
        { src: "assets/gallery-editorial-6.jpg", alt: "Editorial study 6" }
      ]
    },
    "actor-headshots": {
      label: "Actor Headshots",
      tagline: "Made for casting directors.",
      intro: "Sharp, current headshots that read well at thumbnail size. Quick, simple direction on the day, and a contact sheet back the same evening so you can pick fast.",
      images: [
        { src: "assets/gallery-actor-headshots-1.jpg", alt: "Actor headshot 1" },
        { src: "assets/gallery-actor-headshots-2.jpg", alt: "Actor headshot 2" },
        { src: "assets/gallery-actor-headshots-3.jpg", alt: "Actor headshot 3" },
        { src: "assets/gallery-actor-headshots-4.jpg", alt: "Actor headshot 4" },
        { src: "assets/gallery-actor-headshots-5.jpg", alt: "Actor headshot 5" },
        { src: "assets/gallery-actor-headshots-6.jpg", alt: "Actor headshot 6" }
      ]
    }
  },
  post: {
    editing: {
      label: "Editing",
      tagline: "Rhythm, structure, cut.",
      cover: "assets/editing.jpg",
      projects: [
        { id: "city-of-glass", title: "City of Glass", type: "Short film", description: "A 14-minute short edited from roughly nine hours of footage, built around a single reveal saved for the final cut.", vimeoId: "76979871", beforeAfter: false },
        { id: "night-shift", title: "Night Shift", type: "Documentary", description: "Observational documentary editing across a five-day shoot, structured into three acts without a scripted narration track.", vimeoId: "148751763", beforeAfter: false }
      ]
    },
    color: {
      label: "Color",
      tagline: "Tone, contrast, consistency.",
      cover: "assets/color.jpg",
      projects: [
        { id: "low-tide", title: "Low Tide", type: "Music video", description: "Full grade for a music video shot on mixed cameras, matched to a single desaturated, warm-shadow look.", vimeoId: "76979871", beforeAfter: true },
        { id: "harbor-light", title: "Harbor Light", type: "Commercial", description: "Product commercial graded for a cleaner, higher-contrast daylight look while keeping skin tones neutral.", vimeoId: "148751763", beforeAfter: true }
      ]
    },
    "sound-design": {
      label: "Sound Design",
      tagline: "What you feel before you notice it.",
      cover: "assets/sound-design.jpg",
      projects: [
        { id: "static-hour", title: "Static Hour", type: "Short film", description: "Full sound design and mix built from location audio, foley and a sparse synth bed.", vimeoId: "76979871", beforeAfter: false },
        { id: "open-water", title: "Open Water", type: "Documentary", description: "Dialogue cleanup, ambient layering and final mix for a feature-length documentary.", vimeoId: "148751763", beforeAfter: false }
      ]
    }
  }
};

window.SITE_DATA_READY = fetch("content.json", { cache: "no-store" })
  .then(function (r) {
    if (!r.ok) throw new Error("content.json not found (" + r.status + ")");
    return r.json();
  })
  .then(function (json) {
    window.SITE_DATA = json;
  })
  .catch(function () {
    /* content.json missing, not reachable (e.g. opened via file://), or
       invalid — keep the built-in defaults above so the site still works. */
  })
  .then(function () {
    if (window.SITE_DATA && window.SITE_DATA.siteDown && !location.pathname.endsWith("admin.html")) {
      document.documentElement.setAttribute("data-site-down", "1");
    }
  });
