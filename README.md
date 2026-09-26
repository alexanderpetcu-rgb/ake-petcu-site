AKE PETCU — site

Static site, no build step. All content is in one file, content.json, edited
either by hand or through the admin panel at /admin (once connected — see
SETUP below). Everything else in this folder is code/design and shouldn't
normally need to change.

FILES
- index.html                 home (single page with in-page routes)
- photography.html            standalone Photography page
- post-production.html        standalone Post Production page
- gallery.html?cat=...        photography sub-gallery + lightbox + booking form
                               cat = portrait | editorial | actor-headshots
- post.html?cat=...           post-production project list
                               cat = editing | color | sound-design
- project.html?cat=..&id=..   single project: Vimeo showreel (+ before/after for Color)
- privacy.html
- content.json                 ALL editable content: gallery images, post
                               production projects, the two editable text
                               lines, and the site-down switch
- data.js                     loads content.json for every page (with a
                               built-in fallback if content.json can't be
                               reached, e.g. opened locally by double-click)
- admin/                      the real content editor (Decap CMS) — see SETUP

IMAGES (placeholders — replace, keep the same file names, or edit content.json)
- assets/portrait-test.jpg, photography-test.jpg, postproduction-test.jpg,
  actor-headshots-test.jpg      cover images used on the two overview pages
- assets/gallery-portrait-1..6.jpg, gallery-editorial-1..6.jpg,
  gallery-actor-headshots-1..6.jpg     gallery photos (6 per category)
- assets/editing.jpg, color.jpg, sound-design.jpg     Post Production covers
- assets/uploads/              where new images you upload through /admin land

VIMEO
Each project in content.json has a "vimeoId" — the number in the video's
Vimeo URL (vimeo.com/76979871 → 76979871). Replace the placeholder IDs with
your own videos. In Vimeo's privacy settings for each video, allow it to be
embedded on your domain, or the player will refuse to load (this is normal
Vimeo behaviour, not a bug in the site).

BOOKING / CONTACT FORMS
Both open the visitor's email app addressed to hello@akepetcu.art (mailto:).
Nothing is stored on the site itself.

============================================================
SETUP — connecting the admin panel (free, one-time, ~20 minutes)
============================================================
The admin panel at /admin is Decap CMS, a free, open-source editor. It needs
three free accounts working together: GitHub (stores your site's files and
every change, like a version history), Netlify (hosts the live site and
rebuilds it automatically on every change), and Netlify Identity (handles
your login for /admin). Full instructions were given separately in chat —
this file is the reference copy:

1. Create a GitHub account, create a new repository, upload this whole
   folder to it (GitHub's "uploading an existing folder" web feature, no
   command line needed).
2. Create a Netlify account, "Import from GitHub", pick that repository.
   Leave the build command empty and publish directory as "." (netlify.toml
   already sets this). Deploy.
3. In the Netlify site's dashboard: Site configuration → Identity → Enable
   Identity. Then Identity → Services → Git Gateway → Enable Git Gateway.
4. Identity → Invite users → invite your own email. Accept the invite email,
   set a password.
5. Visit your-site.netlify.app/admin, log in, and edit. Every "Publish"
   commits straight to GitHub and the live site updates within a minute or
   two.
6. Optional: Site configuration → Domain management → add your own domain
   name, free HTTPS included.

Once this is set up, you don't need me for day-to-day content changes —
texts, photos, projects, and the site-down switch are all editable from
/admin on your phone or computer, from anywhere.
