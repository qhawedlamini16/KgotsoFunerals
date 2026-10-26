# Project log — Kgotso BM Funerals Scheme

> Read first on every session, update last.

## Status
- **Mode:** B (change request on live site) — "October package updates"
- **Phase:** LIVE (25 Oct 2026) — follow-up edits pending David's answers
- **Next action:** Qhawe sends David the preview link + sign-off sheet; Bobo confirms coffin/headstone per plan
- **Waiting on:** David (sign-off, 6 open items below), Bobo (coffin + headstone per plan)
- **Deferred by operator (25 Oct 2026):** 2FA on Netlify/GitHub, repo privacy, account ownership — "remove friction, prioritise web changes and getting it live"

## Key facts
| Item | Value |
|---|---|
| Client contact (approver) | David (via Qhawe); owner Bobo |
| Agency operator | Qhawe Dlamini |
| Domain | kgotsobmfunerals.com (primary, apex) |
| Registrar / account owner | Namecheap (IANA 1068) — registered 2026-09-30, expires 2027-09-30; account holder TBC |
| Canonical URL | https://kgotsobmfunerals.com/ |
| GitHub repo | qhawedlamini16/KgotsoFunerals (public, personal account) |
| Netlify project / site ID | kgotsobmfunerals / 11ea9073-ee60-411a-a6e8-46c47ba15f5b |
| Netlify team & plan | qhawedlamini16's team (Free, 1 member, MFA off) |
| Last production deploy before this change | 6abcd72d6ec1c79a619bf95d, 30 Sep 2026, commit 1273816 |
| Official NAP | Name: **Kgotso BM Funerals Scheme** (operator, 25 Oct 2026) · Address: 1997 Corner Themba Street, Kagiso 2 · Phone display: 010 109 6723 · link: +27101096723 · WhatsApp 071 985 4522, 061 533 6947 |
| Hours | Mon–Fri 08:00–16:00, Sat 07:30–13:00, Sun closed |
| Search Console | not set up |
| Google Business Profile | none found |

## Gates
| Gate | Status | Date | Approved by | What exactly was approved |
|---|---|---|---|---|
| G4 Content & pricing | ⚠️ waived by operator | 2026-10-25 | Qhawe | Went live before David's written sign-off; open items 1–8 still to confirm (grave fee wording most urgent) |
| G5 Merge to production | ✅ | 2026-10-25 | Qhawe ("go live") | PR #1, deploy-preview-1 |
| G8a Search Console TXT | ⬜ | | | |
| G8 Search & Business Profile | ⬜ | | | |

## Approval log (verbatim)
- 2026-10-25 19:50 — G5 — Qhawe: "what's next the edits are good" then 19:52 "go live". G4 (David) not yet received; operator chose to launch and correct after David replies.
- 2026-10-24 — change request — David (relayed by Qhawe): "Drinks - use those that was sent / Coffins - pictures will be added to drive / headstone - use what we been sent / Top 3 packages is 4 children and 4 adults = use you can add up to 8 members / say graveyard transport instead of 5 taxis on all packages / remove flowers add headstones … / full gas bottle 9kg add to gas stove / Plan A to D should be including vegetables only / Registration of the diseased and Removals should be included in packages / Grave side deco & refreshments should be included / Remove names from headstones"
- 2026-10-25 — name — Qhawe: use "Kgotso BM Funerals Scheme". Refreshment photos: use the ones in the Kgotso Funeral Services Drive folder.

## Open items for sign-off
1. Top 3 cover wording: "Up to 8 members: 4 adults and 4 children" — includes the main member? extra premium per member?
2. Plans A–D: kept "Paper cups and plates" in service items; groceries now "Vegetables" only. Confirm.
3. Refreshments: what exactly is included (same on all plans?).
4. Coffin per plan matched to the brochure wording (25 Oct): flat lid = Premium/Plan A, open face coffin = Presidential/Plan B, 3 tier = Plan C, open face casket = Royal/Plan D. Presidential shows the open face option. Headstones on top 3 only (brochure); design per plan is a placeholder choice (Premium open-book, Presidential slanted pillar, Royal pillared) — confirm with Bobo.
5. Brochure differs from the site: top 3 say "Grave Fee Excluded" (site says included on all 7); address "1997 Corner Themba Drive & Monageng Street, Kagiso 2" (site: Corner Themba Street); 3 more branches listed (Munsieville, Zenzele Randfontein, Bagale Village Tarlton); Grocery Plan R140 and custom plans not on site; reg no. 2023/989428/07 vs K2023989428 on site.
6. Plans A–D cover ("Funeral service package") and waiting period (6 months) unchanged — confirm.
7. Premiums: are they monthly? (site now says "premiums from R135" without "a month")
8. Facebook https://web.facebook.com/profile.php?id=61595772892689 and TikTok @kgotso.bm.funeral confirmed by Qhawe 25 Oct 2026. Instagram link still needed.

## Keyword map
| Page / section | Primary phrase | Secondary phrases |
|---|---|---|
| Home title + H1 | Kgotso BM Funerals Scheme · funeral scheme Kagiso | funeral services Kagiso, Kgotso BM Funerals, Kgotso funerals Kagiso |
| Packages section | funeral packages Kagiso | funeral plan with groceries, headstone included, affordable funeral plan |
| Services section | funeral services in Kagiso | funeral parlour Kagiso, graveside decor, hearse |
| Branches (pending) | funeral services Munsieville / Randfontein / Tarlton | only with confirmed staffed branches |
Note: "Kgatso" is the NFMW (National Fund for Municipal Workers) voluntary burial scheme — national authority; compete on "Kgotso BM" + Kagiso + Maps, never mention Kgatso.

## Incidents
- 2026-10-26 — kgotsobmfunerals.com unreachable. Cause: Namecheap suspended the domain for failed registrant (WHOIS/ICANN) contact verification; nameservers set to verify-contact-details / failed-whois-verification.namecheap.com, A record → 198.54.117.242 (Namecheap holding). Registry "last changed" 2026-10-15 → domain has been down since ~15 Oct, before the 25 Oct launch; site itself healthy on kgotsobmfunerals.netlify.app. Fix: registrant clicks Namecheap verification email (or updates registrant email in Namecheap → Contacts, which resends it); Namecheap restores previous nameservers. Follow-up: record registrant email, turn on auto-renew, confirm Netlify DNS records once restored.

## Change log
- 2026-10-25 — package summary block removed at operator request (too cluttered); package details live in the panels only.
- 2026-10-25 — on-page SEO: H1 now carries "Funeral scheme & funeral services in Kagiso"; hero intro names the business; section headings with search phrases; plain-text "All funeral packages at a glance" summary (mirror of app.js — update both); "a month" removed from description (not confirmed).
- 2026-10-25 — panels: plan coffin photos (supplied by Qhawe) + headstones on top 3; food photos removed from package panels; grocery lists kept as text.
- 2026-10-25 — branch change/david-oct-updates: package changes, new name, real coffin/headstone/refreshment photos, flowers removed, images 69 MB → 4 MB, favicons, robots/sitemap/canonical/schema, _headers, _redirects (internal files 404), 404 page, privacy notice, old Manus recovered copy removed from published files.

## Diary
- After go-live: Search Console verify + sitemap; 7-day and 4-week checks.
- Business Profile: owner to claim/verify (not started).
