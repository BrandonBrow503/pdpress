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

## Ten at a time, more suggestions, and counts for books you are editing (v2.7)

- **Ten suggestions per section.** Every Suggested area (each list, each Readers choice and each Fame choice) shows 10 cards, then a **Load more suggestions** button at the bottom that adds 10 more. A line above the button says how many are showing ("Showing 20 of 48 checked suggestions."). When nothing is left, the button is replaced by a plain line, for example "That's every 1931 title we've checked for kids so far." Paging is remembered per list, readers and fame choice while the app is open.
- **Bigger checked pool.** 120 more titles, years checked the same way as v2.6 (table below). With the starter titles, Publish now has 48 for Kids, 43 for Teens and 50 for Adults; Coming 2027 has 7 for Kids, 8 for Teens and 27 for Adults (counts include untouched starter titles; checked suggestions alone are 39/42/45 for Publish now and 6/7/14 for Coming 2027). The 1931 lists are short on purpose: only titles whose 1931 first publication could be confirmed are included.
- **Live Project Gutenberg results (Publish now only).** After the checked titles run out, Load more asks gutendex.com (topic children for Kids, adventure for Teens, fiction for Adults, any for All; English; not copyrighted), skipping anything already on your list, already suggested or hidden. These cards say "From Project Gutenberg, publication year not checked. Confirm it was first published in 1930 or earlier before you publish." and show only the author's life years, never a guessed publication year. Offline or on an error, a plain message appears and the button stays so you can try again. Live results are not used for Coming 2027, and not when Well known or Obscure is selected (Gutenberg does not say how famous a book is).
- **Counts only count books you are editing.** Every number on the Titles screen (Publish now, Coming 2027, All/Kids/Teens/Adults, All/Well known/Obscure, status chips) and the Editor list count only books on your list. When the count is 0 no number is shown.
- **What "editing" means.** A title is on your list (`editing: true`) if you added it (Add title, a suggestion's Add to my list, a Catalog search result), or changed anything about it: notes, plan fields, edition fields, legal ticks, status, Book editor text, art, or book settings. Every save checks this, so any edit counts.
- **Starter titles moved to Suggested.** The 30 titles that came with the app stay saved exactly as before, but untouched ones show as "Starter title" cards at the top of Suggested (All readers shows all of them; 10 at a time). "Add to my list" puts that same record on your list (no copy), "Hide" hides it, "Show hidden" brings it back. Empty list message: "You're not editing any books here yet. Pick one from the suggestions below."
- **Migration.** Saved v2.6 data has no `editing` flag, so it is worked out once on load: any title that is not one of the 30 starters is editing; a starter is editing if anything differs from how it shipped (notes, plan, status, editor text, art, book settings and so on). Nothing is deleted.
- Service worker cache: `pdpress-v9`.

### Titles added in v2.7 (checked October 2026)

W = English Wikipedia article for the book (or the page named).

**Publish now**

| Title | Author | Year | Readers | Fame | Source |
|---|---|---|---|---|---|
| The Jungle Book | Rudyard Kipling | 1894 | Kids | Well known | W: The Jungle Book (1894) |
| Black Beauty | Anna Sewell | 1877 | Kids | Well known | W: Black Beauty (1877) |
| A Child's Garden of Verses | Robert Louis Stevenson | 1885 | Kids | Well known | W: A Child's Garden of Verses (1885) |
| When We Were Very Young | A. A. Milne | 1924 | Kids | Well known | W: When We Were Very Young (1924) |
| Now We Are Six | A. A. Milne | 1927 | Kids | Well known | W: Now We Are Six (1927) |
| Through the Looking-Glass | Lewis Carroll | 1871 | Kids | Well known | W: Through the Looking-Glass (December 1871) |
| The Marvelous Land of Oz | L. Frank Baum | 1904 | Kids | Obscure | W: The Marvelous Land of Oz (July 1904) |
| Ozma of Oz | L. Frank Baum | 1907 | Kids | Obscure | W: Ozma of Oz (1907) |
| The Princess and the Goblin | George MacDonald | 1872 | Kids | Obscure | W: The Princess and the Goblin (1872, Strahan) |
| At the Back of the North Wind | George MacDonald | 1871 | Kids | Obscure | W: At the Back of the North Wind (book 1871) |
| The Water-Babies | Charles Kingsley | 1863 | Kids | Obscure | W: The Water-Babies (1863) |
| Five Children and It | E. Nesbit | 1902 | Kids | Obscure | W: Five Children and It (1902) |
| The Railway Children | E. Nesbit | 1906 | Kids | Well known | W: The Railway Children (book 1906) |
| A Little Princess | Frances Hodgson Burnett | 1905 | Kids | Well known | W: A Little Princess (1905 novel) |
| Pollyanna | Eleanor H. Porter | 1913 | Kids | Well known | W: Pollyanna (1913) |
| Heidi | Johanna Spyri | 1881 | Kids | Well known | W: Heidi (1880-1881) |
| The Adventures of Pinocchio | Carlo Collodi | 1883 | Kids | Well known | W: The Adventures of Pinocchio (1883) |
| The Happy Prince and Other Tales | Oscar Wilde | 1888 | Kids | Well known | W: The Happy Prince and Other Tales (May 1888) |
| Peter Pan in Kensington Gardens | J. M. Barrie | 1906 | Kids | Obscure | W: Peter Pan in Kensington Gardens (1906) |
| The Tale of Squirrel Nutkin | Beatrix Potter | 1903 | Kids | Obscure | W: The Tale of Squirrel Nutkin (August 1903) |
| The Tale of Benjamin Bunny | Beatrix Potter | 1904 | Kids | Well known | W: The Tale of Benjamin Bunny (September 1904) |
| The Tale of Jemima Puddle-Duck | Beatrix Potter | 1908 | Kids | Well known | W: The Tale of Jemima Puddle-Duck (1908) |
| The Voyages of Doctor Dolittle | Hugh Lofting | 1922 | Kids | Obscure | W: The Voyages of Doctor Dolittle (1922) |
| Rootabaga Stories | Carl Sandburg | 1922 | Kids | Obscure | W: Rootabaga Stories (1922) |
| Little Lord Fauntleroy | Frances Hodgson Burnett | 1886 | Kids | Obscure | W: Little Lord Fauntleroy (Scribner, Oct 7, 1886) |
| The Story of the Treasure Seekers | E. Nesbit | 1899 | Kids | Obscure | W: The Story of the Treasure Seekers (1899) |
| The Wonderful Adventures of Nils | Selma Lagerlof | 1906 | Kids | Obscure | W: The Wonderful Adventures of Nils (1906-07) |
| Shen of the Sea | Arthur Bowie Chrisman | 1925 | Kids | Obscure | W: Shen of the Sea (Dutton 1925) |
| Tales from Silver Lands | Charles Finger | 1924 | Kids | Obscure | W: Tales from Silver Lands (Doubleday 1924) |
| The Boxcar Children | Gertrude Chandler Warner | 1924 | Kids | Well known | W: The Boxcar Children (1924 edition) |
| Milly-Molly-Mandy Stories | Joyce Lankester Brisley | 1928 | Kids | Obscure | W: Milly-Molly-Mandy (first collection 1928) |
| The Reluctant Dragon | Kenneth Grahame | 1898 | Kids | Obscure | W: The Reluctant Dragon (1898 story) |
| Little Women | Louisa May Alcott | 1868 | Teens | Well known | W: Little Women (1868-69) |
| The Adventures of Tom Sawyer | Mark Twain | 1876 | Teens | Well known | W: The Adventures of Tom Sawyer (June 9, 1876) |
| Adventures of Huckleberry Finn | Mark Twain | 1885 | Teens | Well known | W: Adventures of Huckleberry Finn (US Feb 1885) |
| Kidnapped | Robert Louis Stevenson | 1886 | Teens | Well known | W: Kidnapped (1886) |
| The Prince and the Pauper | Mark Twain | 1882 | Teens | Well known | W: The Prince and the Pauper (Canada 1881, US 1882) |
| Around the World in Eighty Days | Jules Verne | 1872 | Teens | Well known | W: Around the World in Eighty Days (1872) |
| The Time Machine | H. G. Wells | 1895 | Teens | Well known | W: The Time Machine (1895) |
| The War of the Worlds | H. G. Wells | 1898 | Teens | Well known | W: The War of the Worlds (1898) |
| The Hound of the Baskervilles | Arthur Conan Doyle | 1902 | Teens | Well known | W: The Hound of the Baskervilles (25 March 1902) |
| The Lost World | Arthur Conan Doyle | 1912 | Teens | Obscure | W: The Lost World (Doyle novel, 1912) |
| King Solomon's Mines | H. Rider Haggard | 1885 | Teens | Obscure | W: King Solomon's Mines (1885) |
| The Prisoner of Zenda | Anthony Hope | 1894 | Teens | Obscure | W: The Prisoner of Zenda (1894) |
| The Scarlet Pimpernel | Baroness Orczy | 1905 | Teens | Well known | W: The Scarlet Pimpernel (1905) |
| Tarzan of the Apes | Edgar Rice Burroughs | 1912 | Teens | Well known | W: Tarzan of the Apes (October 1912) |
| White Fang | Jack London | 1906 | Teens | Well known | W: White Fang (Macmillan, October 1906) |
| The Red Badge of Courage | Stephen Crane | 1895 | Teens | Well known | W: The Red Badge of Courage (3 October 1895) |
| Captains Courageous | Rudyard Kipling | 1897 | Teens | Obscure | W: Captains Courageous (1897) |
| Kim | Rudyard Kipling | 1901 | Teens | Obscure | W: Kim (1901) |
| Rebecca of Sunnybrook Farm | Kate Douglas Wiggin | 1903 | Teens | Obscure | W: Rebecca of Sunnybrook Farm (1903) |
| Daddy-Long-Legs | Jean Webster | 1912 | Teens | Obscure | W: Daddy-Long-Legs (1912) |
| The Dark Frigate | Charles Boardman Hawes | 1923 | Teens | Obscure | W: The Dark Frigate (1923) |
| Hans Brinker, or The Silver Skates | Mary Mapes Dodge | 1865 | Teens | Obscure | W: Hans Brinker (1865) |
| The Story of Mankind | Hendrik Willem van Loon | 1921 | Teens | Obscure | W: The Story of Mankind (1921) |
| The Merry Adventures of Robin Hood | Howard Pyle | 1883 | Teens | Well known | W: The Merry Adventures of Robin Hood (1883) |
| Otto of the Silver Hand | Howard Pyle | 1888 | Teens | Obscure | W: Otto of the Silver Hand (Scribner 1888) |
| Men of Iron | Howard Pyle | 1891 | Teens | Obscure | W: Men of Iron (1891) |
| Penrod | Booth Tarkington | 1914 | Teens | Obscure | W: Penrod (1914) |
| Swallows and Amazons | Arthur Ransome | 1930 | Teens | Obscure | W: Swallows and Amazons (Jonathan Cape, 21 July 1930) |
| The Tower Treasure | Franklin W. Dixon | 1927 | Teens | Well known | W: The Tower Treasure (June 1, 1927) |
| The Great Airport Mystery | Franklin W. Dixon | 1930 | Teens | Obscure | W: The Great Airport Mystery (May 1, 1930) |
| The Hidden Staircase | Carolyn Keene | 1930 | Teens | Well known | W: The Hidden Staircase (1930) |
| Anne of Avonlea | L. M. Montgomery | 1909 | Teens | Obscure | W: Anne of Avonlea (1909) |
| Seventeen | Booth Tarkington | 1916 | Teens | Obscure | W: Seventeen (Harper, March 1916) |
| Bob, Son of Battle | Alfred Ollivant | 1898 | Teens | Obscure | W: Owd Bob (1898; US title Bob, Son of Battle) |
| Pride and Prejudice | Jane Austen | 1813 | Adults | Well known | W: Pride and Prejudice (1813) |
| Jane Eyre | Charlotte Bronte | 1847 | Adults | Well known | W: Jane Eyre (19 October 1847; US January 1848) |
| Wuthering Heights | Emily Bronte | 1847 | Adults | Well known | W: Wuthering Heights (1847) |
| Moby-Dick | Herman Melville | 1851 | Adults | Well known | W: Moby-Dick (1851) |
| The Picture of Dorian Gray | Oscar Wilde | 1890 | Adults | Well known | W: The Picture of Dorian Gray (1890) |
| Strange Case of Dr Jekyll and Mr Hyde | Robert Louis Stevenson | 1886 | Adults | Well known | W: Strange Case of Dr Jekyll and Mr Hyde (1886) |
| The Age of Innocence | Edith Wharton | 1920 | Adults | Well known | W: The Age of Innocence (25 October 1920) |
| Babbitt | Sinclair Lewis | 1922 | Adults | Obscure | W: Babbitt (1922) |
| Main Street | Sinclair Lewis | 1920 | Adults | Obscure | W: Main Street (1920) |
| The House of Mirth | Edith Wharton | 1905 | Adults | Obscure | W: The House of Mirth (October 14, 1905) |
| Ethan Frome | Edith Wharton | 1911 | Adults | Well known | W: Ethan Frome (1911) |
| My Antonia | Willa Cather | 1918 | Adults | Well known | W: My Antonia (1918) |
| O Pioneers! | Willa Cather | 1913 | Adults | Obscure | W: O Pioneers! (1913) |
| The Awakening | Kate Chopin | 1899 | Adults | Well known | W: The Awakening (22 April 1899) |
| The Yellow Wallpaper | Charlotte Perkins Gilman | 1892 | Adults | Well known | W: The Yellow Wallpaper (January 1892) |
| The Turn of the Screw | Henry James | 1898 | Adults | Well known | W: The Turn of the Screw (1898) |
| The Mysterious Affair at Styles | Agatha Christie | 1920 | Adults | Well known | W: The Mysterious Affair at Styles (October 1920) |
| The Murder of Roger Ackroyd | Agatha Christie | 1926 | Adults | Well known | W: The Murder of Roger Ackroyd (1926) |
| The Thirty-Nine Steps | John Buchan | 1915 | Adults | Obscure | W: The Thirty-Nine Steps (1915) |
| Winesburg, Ohio | Sherwood Anderson | 1919 | Adults | Obscure | W: Winesburg, Ohio (1919) |
| A Room with a View | E. M. Forster | 1908 | Adults | Well known | W: A Room with a View (1908) |
| Howards End | E. M. Forster | 1910 | Adults | Obscure | W: Howards End (1910) |
| A Passage to India | E. M. Forster | 1924 | Adults | Well known | W: A Passage to India (1924) |
| The Prophet | Kahlil Gibran | 1923 | Adults | Well known | W: The Prophet (Knopf 1923) |
| The Waste Land | T. S. Eliot | 1922 | Adults | Well known | W: The Waste Land (October 1922) |
| Passing | Nella Larsen | 1929 | Adults | Well known | W: Passing (1929) |
| The Sound and the Fury | William Faulkner | 1929 | Adults | Well known | W: The Sound and the Fury (1929) |
| Look Homeward, Angel | Thomas Wolfe | 1929 | Adults | Obscure | W: Look Homeward, Angel (1929) |
| All Quiet on the Western Front | Erich Maria Remarque | 1929 | Adults | Well known | W: All Quiet on the Western Front (1929); Standard Ebooks (A. W. Wheen translation) |
| Red Harvest | Dashiell Hammett | 1929 | Adults | Obscure | W: Red Harvest (1929) |
| Home to Harlem | Claude McKay | 1928 | Adults | Obscure | W: Claude McKay (Home to Harlem, 1928) |
| The Book of Tea | Okakura Kakuzo | 1906 | Adults | Obscure | W: The Book of Tea (1906) |
| Mrs Beeton's Book of Household Management | Isabella Beeton | 1861 | Adults | Obscure | W: Mrs Beeton's Book of Household Management (1861) |
| Flatland | Edwin A. Abbott | 1884 | Adults | Obscure | W: Flatland (1884) |
| Is Sex Necessary? | James Thurber and E. B. White | 1929 | Adults | Obscure | W: Is Sex Necessary? (1929) |
| Charlie Chan Carries On | Earl Derr Biggers | 1930 | Adults | Obscure | W: Charlie Chan Carries On (1930) |
| The Rubaiyat of Omar Khayyam | Edward FitzGerald (translator) | 1859 | Adults | Well known | W: The Rubaiyat of Omar Khayyam (1859) |

**Coming 2027 (1931)**

| Title | Author | Year | Readers | Fame | Source |
|---|---|---|---|---|---|
| Boy of the South Seas | Eunice Tietjens | 1931 | Kids | Obscure | W: Boy of the South Seas (1931) |
| Pirates in Oz | Ruth Plumly Thompson | 1931 | Kids | Obscure | W: Pirates in Oz (May 1931, Reilly & Lee) |
| Truce of the Wolf and Other Tales of Old Italy | Mary Gould Davis | 1931 | Kids | Obscure | W: Mary Gould Davis (published 1931) |
| Swallowdale | Arthur Ransome | 1931 | Teens | Obscure | W: Swallowdale (Jonathan Cape 1931) |
| Out of the Flame | Eloise Lownsbery | 1931 | Teens | Obscure | W: Out of the Flame (1931) |
| The Blanket of the Dark | John Buchan | 1931 | Teens | Obscure | W: The Blanket of the Dark (1931) |
| Black No More | George S. Schuyler | 1931 | Adults | Obscure | W: Black No More (1931) |
| God Sends Sunday | Arna Bontemps | 1931 | Adults | Obscure | W: 1931 in literature |
| The Dream Life of Balso Snell | Nathanael West | 1931 | Adults | Obscure | W: The Dream Life of Balso Snell (1931) |
| Axel's Castle | Edmund Wilson | 1931 | Adults | Obscure | W: Axel's Castle (1931) |
| The Dutch Shoe Mystery | Ellery Queen | 1931 | Adults | Obscure | W: The Dutch Shoe Mystery (1931) |
| Babylon Revisited | F. Scott Fitzgerald | 1931 | Adults | Well known | W: Babylon Revisited (21 February 1931) |
| The Whisperer in Darkness | H. P. Lovecraft | 1931 | Adults | Obscure | W: The Whisperer in Darkness (August 1931) |
| Joy of Cooking (1931 edition) | Irma S. Rombauer | 1931 | Adults | Well known | W: Joy of Cooking (privately published 1931) |
| Living My Life (volume 1) | Emma Goldman | 1931 | Adults | Obscure | W: Living My Life (1931 and 1934) |
| The Cape Cod Mystery | Phoebe Atwood Taylor | 1931 | Adults | Obscure | W: The Cape Cod Mystery (Bobbs-Merrill 1931) |
| These 13 | William Faulkner | 1931 | Adults | Obscure | W: These 13 (1931) |

Left out on purpose in v2.7: Jane's Island (sources disagree, 1930 or 1931), Tarzan the Invincible and A Fighting Man of Mars (magazine 1930, book 1931, plus a strongly enforced trademark), Back Street (copyright records for both 1930 and 1931), The Book of Dragons (1900 or 1901), The Jungle (serial 1905 vs. book 1906), The House on the Cliff (year not confirmed), Castle Skull (only indirect sources), and Old Mother West Wind, Johnny Crow's Garden, The Real Mother Goose and Pelle's New Suit (could not confirm the first US publication year).

Tests: `test_pdpress.py`, `test_editor.py`, `test_storage.py`, `test_audience.py`, `test_suggest.py` (in /workspace). `test_suggest.py` mocks gutendex.com.
