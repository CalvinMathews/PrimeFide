# PrimeFide Consulting

Responsive static website for PrimeFide Consulting. The site is built with plain HTML, CSS and JavaScript and has no build step or server-side runtime requirement.

## Run locally

Open `index.html` in a browser, or serve this directory with any static HTTP server. The site opens in light mode and remembers a visitor's theme choice. A short branded splash and logo-led entrance motion play on page load; visitors with reduced-motion preferences see the content without the animation. Service cards and standards cards expand together as separate groups, remain equal-height as the viewport changes, and work with keyboard controls. Dedicated sections cover automotive protection, assurance scope and timings, secure hardware capabilities, and the six-step PCB design process.

The contact form is static-host friendly: submitting it opens the visitor's email application with an enquiry addressed to `contact@primefideconsulting.com`. A server-backed form provider is needed if you want enquiries to submit without the visitor opening their email app.

## Publish on Namecheap shared hosting

1. In your Namecheap account, make sure you have both a domain and a shared hosting plan. Open the hosting account's cPanel.
2. Connect the domain to hosting. For a Namecheap domain, choose **Namecheap Web Hosting DNS** in Domain List → Manage → Nameservers. If you use email or other DNS services already, review the current DNS records before changing nameservers; use the hosting IP and the DNS-record method if you need to preserve those services.
3. In cPanel, open **File Manager** and then the document root for your domain. For the account's primary domain this is normally `public_html`; add-on domains have their own document root.
4. Upload the website files into that folder so `index.html`, `styles.css`, `script.js`, `logo.png`, and the `assets` folder sit at the document root. Keep the `assets/images/automotive-hero.webp` path intact. Do not upload the containing project folder as an extra nested directory.
5. Once DNS points to the hosting account, use cPanel's **Namecheap SSL** area to confirm the certificate is issued and installed. Open the site over `https://` and confirm the browser shows a secure connection.
6. Check the site on a phone and desktop, test the theme switch and navigation, and submit a sample enquiry to confirm the visitor's email app opens with the intended recipient and message.

DNS changes can take time to propagate. Namecheap notes that nameserver updates can take up to 24–48 hours; allow time before diagnosing a site that has not appeared everywhere.

## Files

- `index.html` — page structure, content and metadata
- `styles.css` — theme tokens, responsive layouts, native illustrations, animations and reduced-motion support
- `script.js` — theme persistence, mobile navigation, reveal effects and email-draft form handling
- `logo.png` — supplied PrimeFide logo used for the site mark and splash animation
- `assets/images/automotive-hero.webp` — generated automotive studio image used in the vehicle security section

## Content and service notes

Assurance durations shown on the site are planning estimates and should be confirmed against the organisation's scope and readiness before being used in a proposal. Certification decisions remain with the relevant independent certification or audit body.
