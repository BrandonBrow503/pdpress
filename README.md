# Public Domain Press

A phone-first planner for turning public-domain books into new annotated and illustrated print editions.
It is one HTML file, with no sign-in, no ads and no outside code. Your data stays on your phone.

## How to open it
- **On a computer:** double-click `index.html`.
- **On your phone (GitHub Pages, set up the same way as bbtracker):**
  1. On github.com, create a new public repository named `pdpress`.
  2. Choose **Add file > Upload files** and upload `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png` and `icon-512.png`. Then tap **Commit changes**.
  3. Open **Settings > Pages**. Under "Branch", choose `main` and `/ (root)`, then tap **Save**.
  4. After a minute or two, open **https://brandonbrow503.github.io/pdpress/**.
  5. In Chrome's menu, tap **Add to Home screen** to use it like an app.

## What's new in version 2
- **Publish now** is the main list. It holds 15 books that are already free in the US in 2026 (published 1930 or earlier), all marked *Ready to annotate*: The Great Gatsby, The Adventures of Sherlock Holmes, Dracula, Frankenstein, The Tale of Peter Rabbit, The Velveteen Rabbit, Millions of Cats, The Little Engine That Could (1930 Lois Lenski edition), Winnie-the-Pooh, Alice's Adventures in Wonderland, The Wonderful Wizard of Oz, Peter and Wendy, The Wind in the Willows, Art Forms in Nature (Haeckel) and The Birds of America (Audubon). Each has a product idea and legal cautions where needed.
- **Coming 2027** keeps the 15 titles from 1931 and the live countdown to January 1, 2027. On or after that date, one button moves them all to Publish now. You can also move a single title with the *List* setting on its Plan tab.
- The statuses are now: Watching, Ready to annotate, Annotating, Ready to publish, Published.
- Data is saved under the key `pdpress.v2`. **Your old data carries over automatically.** On first open, version 1 data (`pdpress.v1`) is copied over and the old copy is left untouched. The new titles are added, the 1931 titles go to Coming 2027, and books you added from the Catalog go to Publish now. Old backup files can still be restored and are converted the same way.

## What the app includes
- **Two lists** (switch at the top of the Titles screen). Each title has a product idea, legal cautions (trademark, translation year, revised edition), notes and a status. You can filter each list by status.
- **Catalog search** of free Project Gutenberg books through the public Gutendex service (US public-domain books in English only). Each result shows the title, author, ID, downloads and format links, with an **Add to watchlist** button. A notice reminds you to remove the Gutenberg license and name before you sell anything. The app is not branded as Gutenberg.
- **Title detail** with five tabs:
  - **Plan:** status, product, notes, introduction, glossary, footnotes, illustrations and back matter.
  - **Edition:** edition title, subtitle, store description, illustration count, pages and price.
  - **Legal:** cautions and source text.
  - **Checklist**
  - **Export**
- **KDP paperback royalty calculator** for black-and-white books sold on Amazon.com. It covers pages, list price and 7 trim sizes, and shows print cost, royalty, break-even price and the price that earns $3 a copy. These are estimates.
  - Royalty is 60% of the list price at $9.99 or more, and 50% below that.
  - Regular trim: $2.30 up to 108 pages, otherwise $1.00 + $0.012 a page.
  - Large trim: $2.84 up to 108 pages, otherwise $1.00 + $0.017 a page.
- **KDP checklist** that updates as you work:
  - (Annotated) or (Illustrated) appears in the title.
  - The description starts with a bullet about your added content.
  - At least 10 original illustrations, for illustrated editions.
  - The AI disclosure question is answered.
  - The Gutenberg license is removed.
  - Cautions are reviewed.
- **Export:** an interior outline as Markdown (`.md`) or as a print-ready `.html` page (Print, then Save as PDF). It holds front matter placeholders plus your notes, but no book text.
- **Backup:** download or restore a `.json` file, or reset to the starter lists. Data is saved in the browser under the key `pdpress.v2`.
- **Offline:** after the first visit, everything except catalog search works without internet (`sw.js`, only when served over https).

## Known gaps (for a later version)
- No real book typesetting or PDF yet. For now, use HTML, then Print to PDF.
- The royalty calculator covers US black-and-white paperbacks only. Hardcover, color, Kindle ebooks and other countries are not included.
- The starter notes are research notes, not legal advice. Before you publish, check the copyright page of the exact printing you use.
- Gutendex is a free service and can sometimes take up to a minute. If it fails, the app shows a link to search gutenberg.org directly.
- Data is not synced between devices. Use Backup to move it.

## Look (v2.3, art deco fireside)

Default: `<html class="deco-2">` - Federo headings, Marcellus SC buttons and tabs, brass stepped-frame buttons, frosted glass panels. Body text stays in the system sans.
Other options (change the class on the `<html>` tag): `deco-1` (Poiret One headings, Josefin Sans uppercase buttons), `deco-3` (Limelight headings, heavier brass buttons). Previews: deco-1.png, deco-2.png, deco-3.png (v2.2).

v2.3 changes: the fireside photo shows through a clear window at the top of the Titles screen; status and edition badges use the deco look (dark fill, brass double line, Marcellus SC, colour-coded diamond: terracotta Ready to annotate, gold Annotating, green Ready to publish, solid brass Published, outlined Watching; amber fill for caution tags such as Trademark caution and Revised edition); larger type for easier reading (17px body, 15-16px secondary text, 14-16px badge and button labels, darker grey text, slightly more opaque glass for 4.5:1 contrast). The title detail screen now shows the status and edition badges too. Previews: deco-v2-main.png, deco-v2-main-list.png, deco-v2-detail.png, deco-v2-countdown.png (390px wide) and the -360 versions (360px wide).

Background: `study-bg-2.jpg` - "Brown Leather Armchairs Beside Fireplace" by Yosra, Pexels (https://www.pexels.com/photo/brown-leather-armchairs-beside-fireplace-14303851/), Pexels License: free for commercial use, attribution not required. Cropped to the fireplace, both armchairs and the flanking bookshelves, placed in the top of a 1080x2340 phone-shaped image; the lower part is a blurred, darkened copy of the same photo so the glass panels have texture.
Fallback backgrounds (add a class to `<html>`): `bg-study1` uses `study-bg.jpg` - "Elegant Vintage Library Interior in London" by Gul Isik, Pexels (https://www.pexels.com/photo/elegant-vintage-library-interior-in-london-34415964/), Pexels License; `bg-library` uses `library-bg.jpg` - Trinity College Dublin Long Room, by Dmitrij Paskevic (Unsplash), CC0 via Wikimedia Commons (https://commons.wikimedia.org/wiki/File:Trinity_College_Dublin_(Unsplash).jpg).

Fonts (self-hosted in fonts/, latin subset woff2 from Google Fonts, SIL Open Font License 1.1, license texts in fonts/OFL-*.txt): Federo (Cyreal), Marcellus SC (Astigmatic), Josefin Sans (Santiago Orozco), Poiret One (Denis Masharov), Limelight (Sorkin Type). Browsers without backdrop-filter get near-solid panels.

Older previews preview-a/b/c.png are from v2.1 (variants B and C were retired).
