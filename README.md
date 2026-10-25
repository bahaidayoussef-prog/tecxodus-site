# Tecxodus website

Static showcase site for Tecxodus logistics and warehousing services in Aïn Sebaâ, Casablanca.

## Contents

- index.html: homepage and service showcase
- blog/: 122 articles with contextual links and metadata
- entreposage-casablanca/: service page for Tecxodus warehousing in Casablanca
- sitemap.xml, robots.txt: search crawler files
- llms.txt, llms-full.txt: AI crawler and language-model discovery files
- wordpress/tecxodus-wordpress-import-120-articles.xml: WordPress WXR import with 120 posts set to draft
- editorial/: source drafts and SEO/GEO internal-linking plan

## Recent site improvements

- The homepage strengthens Tecxodus's positioning for 3PL logistics, outsourced warehousing, stock management, order preparation, and delivery in Casablanca.
- The FAQ addresses common 3PL and partial-outsourcing questions for visitors and search engines.
- A dedicated Casablanca warehousing page is linked from the homepage, blog index, and articles.
- The site includes client references and video content; client logos are published with Tecxodus's authorization.
- The warehouse simulator uses a 100-pallet example as an indicative layout estimate. Its space and volume figures must be validated against the actual goods, handling equipment, and site plan before use as an operating specification or quotation.

## Publishing

The HTML site is deployed on Vercel from the `main` branch. The company website stays on `https://www.tecxodus.com/`; the editorial blog is served on `https://blog.tecxodus.com/`. `vercel.json` maps the blog host to the existing static article files and permanently redirects the previous `/blog/...` URLs to their new locations.

The root sitemap is an index: `sitemap-main.xml` lists the company pages and the blog host serves its own `sitemap.xml` and `robots.txt`. Add `blog.tecxodus.com` to the Vercel project and configure the exact DNS record Vercel provides at Namecheap before deploying this migration. Do not guess or replace other DNS records.

The WordPress WXR file imports the articles as drafts; review them in WordPress before publishing. It remains separate from this static site and does not control the blog subdomain.

The static blog contains 122 article pages. The separate WordPress WXR file remains the original 120 draft posts and does not include this static-only update.

The blog sitemap lists the 122 public article pages and blog index on `blog.tecxodus.com`. Submit the sitemap index only after the subdomain, DNS, and redirects are live.

## Content and imagery notes

The 20 new technical/contract articles include illustrative stock images loaded from Pexels. They do not depict Tecxodus's actual warehouse. Productivity examples are teaching assumptions, not measured Tecxodus results. No displayed amount should be treated as a Tecxodus tariff or verified Morocco market rate; confirm commercial rates, capacity and service limits with operations before quoting them.
