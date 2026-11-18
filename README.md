# TOLVYXO website

A multi-page Next.js website for the TOLVYXO digital agency.

## Included
- Home page
- Service detail pages (6)
- Portfolio page with clearly labelled concept projects
- About page
- Contact page
- Responsive layout
- Basic metadata and Open Graph defaults

## Deploy to Vercel using GitHub

1. Extract this ZIP file on your computer.
2. Open GitHub and create a new repository named `tolvyxo-website`.
3. Keep it **Public** or **Private** (either works with Vercel).
4. On the new repository page choose **uploading an existing file**.
5. Upload the contents of this folder (not the ZIP itself). Make sure `package.json`, `app/`, `components/` and `public/` are at the repository root.
6. Commit the files.
7. In Vercel choose **Add New → Project**, import `tolvyxo-website` from GitHub and click **Deploy**.
8. Vercel should detect Next.js automatically. No custom build settings are required.

## Before public launch
- Confirm whether `tolvyxo.eu` is the final domain and update `metadataBase` in `app/layout.tsx` if needed.
- Replace `hello@tolvyxo.eu` with a real inbox in `components/Footer.tsx` and `app/contact/page.tsx`.
- The contact form currently opens the visitor's email application. It does not send directly from the website. Connect a form provider or backend before relying on it for leads.
- Portfolio entries are illustrative concept projects, not real client case studies. Replace them with verified work before presenting them as client projects.
- Add the real company legal name, registration details, privacy policy and cookie notice as applicable.
- Add real project images and social links when available.

## Local development (optional)
Requires Node.js 20 or newer:
```bash
npm install
npm run dev
```
Open http://localhost:3000
