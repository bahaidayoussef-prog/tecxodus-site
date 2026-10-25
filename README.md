# Tecxodus website

Static showcase site for Tecxodus logistics and warehousing services in Aïn Sebaâ, Casablanca.

## Contents

- index.html: homepage and service showcase
- blog/: 166 articles with contextual links and metadata
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

The root sitemap is an index: `sitemap-main.xml` lists the company pages and the blog host serves its own `sitemap.xml` and `robots.txt`. The production blog subdomain is connected to Vercel; the domain DNS is managed at Porkbun. Do not change production DNS records without checking the current Vercel domain configuration and Porkbun zone first.

The WordPress WXR file imports the articles as drafts; review them in WordPress before publishing. It remains separate from this static site and does not control the blog subdomain.

The static blog contains 166 article pages, including 40 practical guides added on 26 October 2026. The separate WordPress WXR file remains the original 120 draft posts and does not include these static articles.

The blog sitemap lists 166 public article pages plus the blog index on `blog.tecxodus.com`. The root sitemap index references both the main-site sitemap and the blog sitemap; both are submitted and accepted in Google Search Console.

## Content and imagery notes

The 20 new technical/contract articles include illustrative stock images loaded from Pexels. They do not depict Tecxodus's actual warehouse. Productivity examples are teaching assumptions, not measured Tecxodus results. Any prices shown in the national comparison guide are third-party property-rental listing references, not 3PL service prices or Tecxodus tariffs. Confirm commercial rates, capacity and service limits with operations before quoting them.
