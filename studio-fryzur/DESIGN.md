---
name: Studio Fryzur
description: A village hair salon's week drawn as a two-strand plait. Portal navy and sign violet on the building's cool white walls.
colors:
  wall-white: "#f3f2f7"
  plaque-white: "#ffffff"
  ink: "#1b1c33"
  ink-dim: "#66667a"
  muted: "#595971"
  portal-navy: "#232a5c"
  portal-navy-deep: "#181d45"
  sign-violet: "#7a3fa0"
  rule-grey: "#d9d7e3"
  tie-grey: "#3a3b55"
  portal-mist: "#c9cdf0"
  night-ground: "#14152a"
  night-surface: "#20223f"
  night-ink: "#ecebf4"
  night-silver: "#d3d2e0"
  night-violet: "#c69be8"
typography:
  display:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "168px"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "60px"
    fontWeight: 800
    lineHeight: 1
  title:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, Roboto Condensed, sans-serif"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: "42px"
    letterSpacing: "0.01em"
    fontFeature: "\"tnum\" 1"
  lead:
    fontFamily: "Sofia Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "36px"
  body:
    fontFamily: "Sofia Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "30px"
  label:
    fontFamily: "Sofia Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1
rounded:
  none: "0"
  tie: "3px"
spacing:
  u: "6px"
  strand: "24px"
  plait-column: "96px"
  gutter: "clamp(16px, 4vw, 48px)"
  section: "96px"
  section-mobile: "72px"
components:
  button-primary:
    backgroundColor: "{colors.portal-navy}"
    textColor: "{colors.plaque-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "60px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "{colors.portal-navy-deep}"
  button-hero:
    backgroundColor: "{colors.portal-navy}"
    textColor: "{colors.plaque-white}"
    rounded: "{rounded.none}"
    height: "72px"
    padding: "0 30px"
  button-outline:
    textColor: "{colors.portal-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 18px"
  strand-pull:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "48px"
    padding: "0 18px"
  strand-pull-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.wall-white}"
  day-row-today:
    backgroundColor: "{colors.plaque-white}"
    textColor: "{colors.sign-violet}"
  hours-plaque:
    backgroundColor: "{colors.plaque-white}"
    textColor: "{colors.ink}"
    padding: "24px"
    width: "480px"
---

# Design System: Studio Fryzur

## Overview

**Creative North Star: "Warkocz dwóch zmian" (the two-shift plait)**

The salon works alternating shifts: mornings (7:00-15:00) on Tuesday, Thursday and Saturday, afternoons (12:00-20:00) on Monday, Wednesday and Friday. The site draws that week as a two-strand plait hanging down the first viewport. The morning strand is portal navy, the afternoon strand sign violet. At each day's crossing the strand that works that day lies on top, and a hair tie closes Sunday. The plait is a chart drawn from the hours data at build time, not an illustration; every other surface on the page stays quiet so the plait is the one memorable thing.

Colour comes from the building itself: the deep navy entrance portal, the violet letters of the white pole sign, the white walls. Type is tall and narrow like that sign. The page is flat, square-cornered and generous in size for long-time, often older clients. It reads top to bottom: the name and the call, the week, what the salon does, the two stylists in their clients' words, the guest book of reviews, and a navy close that ends at the address and the phone.

Built from `.tooling/src` by `.tooling/build.mjs`; recorded after the build on 2026-09-28. Direction chosen by the user from an Impeccable concept roll (seed key 1b1b3bc2, re-roll round 2).

**Key Characteristics:**
- The week as a data-drawn plait; over/under is the shift, the tie is the closed day.
- Two brand colours from the building, each owning one strand; no other accent.
- Extra-condensed display type at poster scale; text in the same family's regular width.
- Module u = 6px: strand, spacing and type sizes are whole multiples of it.
- Flat, square, no photos until the owner supplies them.

## Colors

Two building colours carry all meaning on a cool white ground; everything else is ink and grey.

### Primary
- **Portal Navy** (#232a5c): the morning strand, every call button, the stylists' names and the whole closing section (the entrance you walk through). Deep navy (#181d45) on hover.

### Secondary
- **Sign Violet** (#7a3fa0): the afternoon strand, the salon name "Studio Fryzur", today's day name, service names and review signatures. 6.9:1 on white, 6.2:1 on the ground.

### Neutral
- **Wall White** (#f3f2f7): the page ground, a cool white taken from the building's walls. Never cream.
- **Plaque White** (#ffffff): today's row in the plait, the stylists section and the hours plaque on the navy close.
- **Ink** (#1b1c33): text and day names. **Ink Dim** (#66667a): past days and days outside a pulled strand (5.0:1). **Muted** (#595971): secondary text.
- **Rule Grey** (#d9d7e3): the few 2px rules (header, section tops, guest-book entries). **Tie Grey** (#3a3b55): the hair tie.
- **Portal Mist** (#c9cdf0): secondary text on the navy close (8.6:1).

### Dark mode
Night Ground (#14152a), Night Surface (#20223f), Night Ink (#ecebf4). On a dark ground the morning strand turns Night Silver (#d3d2e0) and the afternoon strand Night Violet (#c69be8); the call button inverts to light. Only the salon name keeps the violet in dark mode; other headings use Night Ink. The close stays Portal Navy; its plaque takes the Night Ground.

### Named Rules
**The Two Strands Rule.** Navy means morning, violet means afternoon, wherever a strand, swatch or key appears. No third accent exists.

**The Strand on Dark Rule.** Wherever a strand sits on a dark ground (dark mode, the plaque in dark mode), it takes its night colour, silver or night violet, never the light-mode navy.

## Typography

**Display Font:** Sofia Sans Extra Condensed 800 (with Arial Narrow, Roboto Condensed)
**Body Font:** Sofia Sans 400 and 700 (with Segoe UI, system-ui)

**Character:** One superfamily at two widths: the extra-condensed cut is the pole sign, tall and narrow at poster scale; the normal width is a calm, readable text face. Both self-hosted, latin and latin-ext, OFL.

### Hierarchy
- **Display** (800, 168px desktop, 132px up to 1199px, 120px up to 959px, 96px on phones; line-height 0.9): the salon name only, two lines.
- **Headline** (800, 60px, 48px on phones; 72px for the address on the close): section headings.
- **Title** (800, 36px/42px, tabular figures): day names and hours in the plait; service names at 42px/48px; stylist names at 84px.
- **Lead** (400, 24px/36px): the hero sentence, stylists' roles, quotes and reviews on desktop.
- **Body** (400, 18px/30px): everything else, also quotes and reviews on phones. Never smaller than 18px.
- **Label** (700, 18px): buttons, nav, signatures under quotes.

### Named Rules
**The Sign Letters Rule.** Extra-condensed 800 is for the name, headings, days, hours and signatures; running text is never set in it.

**The Six Rule.** Sizes and line heights are multiples of 6px (18/30, 24/36, 36/42, 42/48, 48, 60, 72, 84, 96, 120, 132, 168).

## Layout

A 12-column grid (24px gap) inside 1320px plus a `clamp(16px, 4vw, 48px)` gutter, safe-area aware.

- First viewport: name, sentence and hero call in columns 1-5; the week in columns 6-12: strand pulls, then seven rows, each row a 96px plait column beside day name, hours and shift word.
- Up to 1199px the shift word drops under the day; up to 959px everything stacks (name, sentence, call, then the week) and the nav hides.
- Phones: plait column 72px, strands 18px, pulls stacked full width; under 375px the pulls drop their hours (the rows carry them). A fixed call bar appears once the hero call scrolls away and hides at the close.
- Sections: 96px vertical padding (72px on phones). Services as name/text rows (5/6 columns); stylists as two paired columns; the guest book as one column up to 840px; the close as 5/12 info and 6/12 map.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes from over/under in the plait (the over-strand is drawn above a 10px gap stroke in the row's ground colour) and from tonal fields: white rows and panels on the cool white ground, the navy close as the one full-colour field.

### Named Rules
**The Over-Under Rule.** The only depth on the page is a strand lying over another. Nothing else floats.

## Shapes

Square corners everywhere (0). The only curves are the strands themselves and the hair tie (3px radius). Rules are 2px. The plait's segments are cubic S-curves that meet vertically at row boundaries, so rows of any height join without a seam.

## Components

### Buttons
- **Shape:** square (0).
- **Primary:** Portal Navy with white label and a Phosphor phone icon, 60px tall, 24px side padding; the hero call is 72px with a 24px label. One label for the call intent everywhere: "Zadzwoń 797 518 390" (the header and phone header show "Zadzwoń" alone when space is short).
- **Outline:** 2px current-colour border, navy text, fills navy on hover. On the navy close: white fill with navy text, and a white outline variant ("Wyznacz trasę").
- **Press:** `scale(0.97)` over 160ms with `cubic-bezier(0.23, 1, 0.32, 1)`.

### Strand pulls (signature control)
Two toggle buttons above the plait: a navy or violet swatch (24 x 12px), the shift name and its hours. `aria-pressed`; pressing one dims the other strand to 12% opacity through the whole week, sets the matching days' shift word in the strand colour, dims the rest to Ink Dim, and writes a sentence in an `aria-live` line ("Rano (7:00-15:00): wtorek, czwartek i sobota do 13:00."). Pressed state inverts to ink with a ground-coloured ring round the swatch. Pointer presses fade the strands in 200ms; keyboard presses switch instantly.

### The plait (signature component)
One inline SVG per day row, 100 x 100 viewBox stretched to the row (`preserveAspectRatio="none"`, strokes non-scaling), generated by `build.mjs` from the hours table. Ribbons are 24px (18px on phones) with two fine hair lines inside. Loose strands above Monday start with round ends; Sunday gathers both strands into the tie and ends in a straight cut. Live state from `main.js` in Europe/Warsaw time: today's row turns white with its day name in violet and a sentence ("Teraz otwarte, do 20:00.", "Dziś otwieramy o 12:00.", "Na dziś już zamknięte. Jutro od 7:00."); past days dim (none on Sunday, when the plait shows the coming week). On load the rows draw in from the top, 70ms apart, 480ms each, then the tie settles; skipped under reduced motion.

### Hours plaque
On the navy close: a white panel (Night Ground in dark mode), 24px padding, up to 480px, holding the hours table with strand keys (navy, violet, tie) and the holiday note.

### Navigation
Four anchors in the header (Usługi, Fryzjerki, Opinie, Dojazd), 700, 48px targets, underline on hover; hidden up to 959px, where the page is one short column and the call carries the header.

### Quotes and guest book
Stylist quotes: 24px text, signature in 700 Muted below. Guest book: one column, entries between 2px rules, the review first and the signature under it, right-aligned in violet extra-condensed like a signature. No carousel.

## Do's and Don'ts

### Do:
- **Do** draw anything about the hours from the same data (`DAYS` in `build.mjs`), and keep navy for mornings and violet for afternoons.
- **Do** keep sizes on the 6px module and body text at 18px or larger.
- **Do** add the owner's photos through `.tooling/photos-src/` (they render in the stylists section when present), cropped plainly, without frames or overlays.
- **Do** respect `prefers-reduced-motion`: the plait appears drawn, pulls switch without fading.

### Don't:
- **Don't** add a third accent colour, gradients, glass or shadows.
- **Don't** turn the plait into decoration elsewhere on the page (section dividers, backgrounds, icons); it is the week's chart only.
- **Don't** show the Google star rating as a headline, prices, or services the salon has not confirmed (colouring, perms, children's cuts, make-up).
- **Don't** add eyebrows or kickers above headings.

Known intentional detector finding: in dark mode the salon name is Night Violet (#c69be8) on the Night Ground, which Impeccable's detector reports as "AI color palette". It is the violet of the real pole sign and the only violet heading left in dark mode.
