# godrepurposesskeletons.com

Static landing page for **God Repurposes Skeletons** — Dan Barton's second
book, and the site for the man who believes his past disqualifies him.

> Every man has a closet. This is what God does with what's in yours.

One hand-built HTML page styled with a locally compiled Tailwind CSS build.
No framework, no runtime — static files you can host anywhere (GitHub Pages,
Netlify, Cloudflare Pages, plain Apache/Nginx).

## The argument the page makes

The page is built as one movement, and the section order *is* the argument —
don't shuffle it:

1. **Hero (dark)** — the claim, stated flat.
2. **The Closet** — the lie, in the reader's own voice: he doesn't doubt God
   can use a man, he has decided God can't use *this* one.
3. **The Turn** — "God does not waste material," then two columns side by
   side: *what you call it* (struck through) against *what God calls it*.
4. **Scripture (dark)** — Ezekiel 37:3 and Genesis 50:20. The valley of dry
   bones is the whole thesis in one image.
5. **The Book** — what it is, when it's expected, how to be told it launched.
6. **Who's Writing This** — Dan, explicitly not as a man with a clean closet.
7. **You Have One of These** — hand-off to PictureOrStory.com and the network.
8. **Reach Dan** — email, phone, location.

The page also runs dark → light → dark → light on purpose. The reader starts
in the closet and walks out into the bone-colored sections.

## Develop & Build

Tailwind is installed locally (no CDN). The CSS compiles from `src/input.css`
to `style.css`.

```bash
npm install        # one time
npm run build      # compile + minify style.css for production
npm run watch      # rebuild style.css on change while developing
npm run serve      # http://localhost:8000
```

Re-run `npm run build` after editing `index.html` (it holds the Tailwind
classes) or `src/input.css`. **A change that isn't rebuilt won't show up.**

## Design system

Same DNA as andsatanlaughed.com — Cormorant Garamond (display serif) and
Inter (body), red headings between thin gold rules, the ✦ gold fleuron, and
the `.gold-divider`. This site skips the Caveat script face that danbarton.me
and gramps.me use; the voice here is solemn, not folksy.

What's its own: a deeper near-black `ink` (`#14110f`) that carries two full
sections rather than one accent band, and `bone` cream in place of the
flagship's white. Everything is in `tailwind.config.js`; the component classes
(`.rule-heading`, `.gold-divider`, `.verdict-lie` / `.verdict-truth`,
`.verse`, `.btn-on-dark`) are in `src/input.css`.

Color rules worth keeping:

- `brand.red` `#c0282d` clears 4.5:1 on bone, so it can carry small text.
- `brand.red-bright` `#ED1C24` is the flagship red — display sizes only.
- `brand.gold` `#c39a3e` is decorative and display-size only; use
  `brand.gold-deep` for small gold text on bone, and `brand.gold-light` for
  gold on the dark bands.

## Content to verify before launch

- **Scripture** is quoted NIV (Ezekiel 37:3, Genesis 50:20). Check both
  against Dan's preferred translation — the book pairs concepts with four.
- **Email** points at `DRB@andsatanlaughed.com`, the address the flagship
  already uses, since the LLC owns this book. Switch it if a
  `@godrepurposesskeletons.com` mailbox gets set up.
- **Phone** `(678) 748-9116` and the launch date **2027** are carried over
  from andsatanlaughed.com and `danbarton.me/copy.md`.
- The body copy on this page was written for it — it is not Dan's own words
  the way the book-description and bio paragraphs are (those are lifted from
  andsatanlaughed.com). Dan should read it in his own voice before launch.

## Pre-launch notice

The dark strip above the header (`.build-notice` in `src/input.css`) says the
site is a work in progress. **Delete that `<div>` from `index.html` when the
site is done** — the same strip is on the other pre-launch sites in the
network, and each carries its own wording.

## Images

Photos are copied from `danbarton.me/images` (both `.webp` and `.jpg`
fallbacks): the `logo-drb` monogram and `headshot-close` for the bio. The page
is deliberately typographic — there's no hero photo, and it doesn't need one.

### Favicons

Each site in the network gets its own mark so the tabs are tellable apart —
gramps.me is a cream **G** on brand gold, godrepurposesskeletons.com is a
bone **S** on brand red, both set in Cormorant Garamond to match the display
face. They're generated, not hand-drawn:

| File                        | Size    | Used for                          |
| --------------------------- | ------- | --------------------------------- |
| `favicon.ico`               | 16/32/48 | Browsers request `/favicon.ico` by default |
| `images/favicon-32.png`     | 32      | Tab icon                          |
| `images/favicon-16.png`     | 16      | Tab icon, small                   |
| `images/apple-touch-icon.png` | 180   | iOS home screen                   |
| `images/icon-512.png`       | 512     | Source / any future manifest      |

Two variants exist on purpose: the 180 and 512 carry a rounded square with a
thin inner ring, while 16/32 drop the ring and set the letter larger — at
16px the ring and the serifs turn to mush. If you regenerate them, check the
result at true 16px before shipping, not zoomed in.


## Hosting

Intended for **GitHub Pages** with a custom domain via the `CNAME` file →
`godrepurposesskeletons.com`. Static only, so there's no server-side form; the
notify-me button and contact card are `mailto:` links.
