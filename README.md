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

## Book editor (v2.4)

Open any title, tap **Open book editor** (or use the **Editor** tab in the bottom bar). Tabs:

- **Size**: KDP trims 5x8, 5.25x8, 5.5x8.5, 6x9, 6.14x9.21, 7x10, 8x10, 8.5x11, 8.5x8.5 square, plus 8.25x6 landscape for children's and coffee-table editions. Changing the size also changes it on the Royalty screen.
- **Shape**: paperback, hardcover case laminate (KDP: 5 sizes, 75 to 550 pages), cloth (shown, but marked "Not on KDP"); one or two columns; spine width estimate.
- **Quality**: ink (black and white, premium color, standard color) is one choice for the whole book; paper white/cream (cream only with black and white); matte/gloss cover.
- **Text**: Intro, Notes, Back matter. Markdown toolbar (bold, italic, heading, list, page break), word count, autosave, "Copy from Plan tab".
- **Art**: import pictures from the phone. Each is shrunk to 1600 px JPEG and kept only on this phone. Set a caption and a place: cover, frontispiece, or a page number.
- **Preview**: a rough mock of cover, spine, title page, intro page, and every page with art (flip through or tap the list).
- **Check royalty** (Size, Quality, Preview): uses the same KDP US paperback black-and-white math as the Royalty screen. For color or hardcover it still shows the black-and-white figure with a plain warning.

Data (still in `pdpress.v2`, added fields only): `t.book = {binding, orientation, columns, ink, paper, finish}`, `t.editor = {intro, notes, backmatter, updated}`, `t.artCount`. Art lives in `pdpress.art.<titleId>` as `[{id, name, width, height, added, caption, placement, page, data, thumb}]`. Backups include art; reset and delete remove it.

Limits: browsers give a site about 5 MB of storage, shared by all titles, so the app caps art at about 4.5 MB per title and refuses imports past that. The preview is not a print-ready PDF. Royalty figures cover black-and-white paperbacks only.

## Art storage (v2.5)

Pictures now live in **IndexedDB** (database `pdpress`, store `art`, keyed by `id`, index `titleId`), so the phone can hold far more art than the old ~5 MB localStorage limit. Titles, notes and editor text stay in localStorage `pdpress.v2` as before.

- Each record: `{id, titleId, name, width, height, added, caption, placement, page, order, size, thumb, blob}`. The full picture is a Blob where the browser supports Blobs in IndexedDB (checked at startup); otherwise it is kept as a data URL in `data`. Thumbnails stay small data URLs.
- **Migration**: on startup, any v2.4 `pdpress.art.<titleId>` keys are copied into IndexedDB, read back and checked, and only then removed. If anything fails, the old copy stays and the move is tried again next launch. Unreadable old keys are left alone.
- **Space**: the Art tab and Backup screen show real numbers from `navigator.storage.estimate()`. There is no hard cap any more; the app warns when less than about 50 MB is free or more than 90% of the quota is used, and refuses only when a save actually fails.
- **Keep my art**: on the first art import (and with the "Ask the phone to keep my art" button on the Backup screen) the app calls `navigator.storage.persist()` and says in plain words whether the phone agreed.
- **Backups** still include all art (as data URLs in `art: {titleId: [...]}`), are built in pieces and downloaded as a .json file. Old v2.4 backups still restore. Reset and deleting a title remove that art from IndexedDB.
- **Fallback**: if IndexedDB is not available (old browser, some private modes), the app uses the v2.4 localStorage storage with the 4.5 MB per-title cap and says so.

Limits: quotas differ by phone and browser. Chrome can clear site data when the phone is very low on space unless persistence is granted. iPhone Safari may delete site data after about 7 days without use unless the app is added to the Home Screen. Keep downloading backups.

## Readers, fame and suggestions (v2.6)

- **Readers switch** on the Titles screen: All, Kids, Teens, Adults, under the Publish now / Coming 2027 switch. Counts on every switch and chip follow the other choices.
- **Fame chips**: All, Well known, Obscure, with a one-line explanation. Well-known titles sell on name recognition but face lots of competition; obscure titles have little competition but need a strong angle.
- Status chips work together with Readers and Fame.
- Every title has `audience` (kids, teens, adults) and `fame` (wellknown, obscure). Pick them on the Plan tab or the Edition tab (the Add title screen). A new title starts with the Readers and Fame you have selected.
- Seed tags: picture books, Winnie-the-Pooh, Alice, Oz, Peter and Wendy and The Wind in the Willows are Kids (their market is illustrated read-aloud and gift editions); Sherlock Holmes and The Secret of Shadow Ranch are Teens; the rest are Adults. Haeckel, Snippy and Snappy and the lesser-known 1931 novels are Obscure.
- **Migration**: saved v2.5 data keeps every title and edit. Missing tags are filled from the seed list by title, otherwise Adults / Well known. Nothing is wiped.
- **Suggested** area under the list for the chosen readers and list (Publish now: first published 1930 or earlier; Coming 2027: first published 1931). Each card shows title, author, year, readers, fame, product idea, legal caution and the source used to check the year. "Add to my list" makes a normal title with everything filled in; "Hide" hides it (saved), "Show hidden" brings them back. Titles already on the list are not suggested.
- **Coming 2027 titles in the Book editor**: fully editable (Size, Shape, Quality, Text, Art, Preview, Check royalty, Export), same as Publish now. The detail screen and editor show a notice with a live countdown: "Free to publish on January 1, 2027 (in N days). You can prepare everything now, but don't upload to Amazon or any other store until that date." The date is worked out as January 1 of (first publication year + 96), so on or after that day it switches to "Free to publish now" by itself. Titles not yet free also get a "Ready for day one" checklist item.
- Service worker cache: `pdpress-v8`.

### Where the suggestion years come from (checked October 2026)

W = English Wikipedia article; IA = Internet Archive record; HT = HathiTrust record. 1931 titles were cross-checked with Wikipedia's "2027 in public domain" page (which follows Duke's Center for the Study of the Public Domain) where listed.

| Title | Author | Year | Readers | Fame | Source |
|---|---|---|---|---|---|
| Just So Stories | Rudyard Kipling | 1902 | Kids | Well known | W |
| The Story of Doctor Dolittle | Hugh Lofting | 1920 | Kids | Well known | W (US, Stokes, Oct 25, 1920) |
| Raggedy Ann Stories | Johnny Gruelle | 1918 | Kids | Well known | W: Raggedy Ann (Volland) |
| Angus and the Ducks | Marjorie Flack | 1930 | Kids | Obscure | W |
| The Funny Thing | Wanda Gag | 1929 | Kids | Obscure | HT 001021617; Online Books Page |
| The Cat Who Went to Heaven | Elizabeth Coatsworth | 1930 | Kids | Obscure | W |
| Hitty, Her First Hundred Years | Rachel Field | 1929 | Kids | Obscure | W |
| Anne of Green Gables | L. M. Montgomery | 1908 | Teens | Well known | W (L. C. Page, Boston) |
| The Secret Garden | Frances Hodgson Burnett | 1911 | Teens | Well known | W (US: Stokes) |
| Treasure Island | Robert Louis Stevenson | 1883 | Teens | Well known | W |
| The Call of the Wild | Jack London | 1903 | Teens | Well known | W |
| The Trumpeter of Krakow | Eric P. Kelly | 1928 | Teens | Obscure | W |
| Smoky the Cowhorse | Will James | 1926 | Teens | Obscure | W (1927 Newbery, Scribner 1926) |
| Gay-Neck, the Story of a Pigeon | Dhan Gopal Mukerji | 1927 | Teens | Obscure | W |
| The Secret of the Old Clock | Carolyn Keene | 1930 | Teens | Well known | W (April 28, 1930) |
| The Sun Also Rises | Ernest Hemingway | 1926 | Adults | Well known | W (Scribner) |
| Mrs Dalloway | Virginia Woolf | 1925 | Adults | Well known | W (May 14, 1925) |
| A Farewell to Arms | Ernest Hemingway | 1929 | Adults | Well known | W |
| The Maltese Falcon | Dashiell Hammett | 1930 | Adults | Well known | W (book 1930, serial 1929) |
| Quicksand | Nella Larsen | 1928 | Adults | Obscure | W |
| Plum Bun | Jessie Redmon Fauset | 1929 | Adults | Obscure | W (London 1928, US Stokes 1929) |
| Cane | Jean Toomer | 1923 | Adults | Obscure | W |
| Urformen der Kunst | Karl Blossfeldt | 1928 | Adults | Obscure | W: Karl Blossfeldt (1928; lead says 1929) |
| Angus and the Cat | Marjorie Flack | 1931 | Kids | Obscure | IA anguscat00flac; library catalogs |
| The Fairy Circus | Dorothy P. Lathrop | 1931 | Kids | Obscure | W |
| Histoire de Babar | Jean de Brunhoff | 1931 | Kids | Well known | W: 2027 in public domain (French original only) |
| Calico Bush | Rachel Field | 1931 | Teens | Obscure | W: Rachel Field |
| Waterless Mountain | Laura Adams Armer | 1931 | Teens | Obscure | W |
| The Secret of Red Gate Farm | Carolyn Keene | 1931 | Teens | Well known | W; 2027 in public domain |
| What Happened at Midnight | Franklin W. Dixon | 1931 | Teens | Well known | W; 2027 in public domain |
| Only Yesterday | Frederick Lewis Allen | 1931 | Adults | Obscure | W (Harper, 1931) |
| The Epic of America | James Truslow Adams | 1931 | Adults | Obscure | W: James Truslow Adams |
| The Living Shadow | Walter B. Gibson | 1931 | Adults | Obscure | W (April 1, 1931); 2027 in public domain |

Left out on purpose: The Pocket Book of Boners (a 1941 compilation; the 1931 volumes and Dr. Seuss trademarks need item-by-item checks), Cavalcade (British play, first printing date unclear), Maigret's Pietr-le-Letton and Tintin in the Congo (French originals only, strong trademarks, Tintin's racist content), Bambi (1923 German book with a disputed US copyright history), If It Had Happened Otherwise (British book; the US version was revised), the Disney Mickey Mouse book (Disney trademarks).

Tests: `test_pdpress.py`, `test_editor.py`, `test_storage.py`, `test_audience.py` (in /workspace).
