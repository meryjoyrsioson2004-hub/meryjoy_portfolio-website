# Electronics Engineering Portfolio

A responsive, static portfolio built with semantic HTML, CSS, and vanilla JavaScript. There is no build step, backend, or third-party JavaScript dependency.

## Project structure

```text
index.html                 Page content and accessible project dialog
css/style.css              Colors, layout, responsive styles, reduced-motion support
js/main.js                 Editable profile settings and interactive behavior
assets/images/             Your profile photo and authentic project images
assets/documents/          Your résumé PDF
```

## Run locally

Open `index.html` in a browser, or from this folder run `python -m http.server 8000` and visit `http://localhost:8000`. Stop the local server with Ctrl+C.

## Personalize before publishing

1. In `js/main.js`, confirm `Mery Joy Sioson`, replace `your.email@example.com` and the Facebook, LinkedIn, WhatsApp, and GitHub URLs, and confirm the résumé path.
2. Replace the education institution, degree details, graduation year, award details, dates, issuers, license and membership details, and scholarship/internship records in `index.html`. Remove entries that do not apply.
3. Confirm the Panasonic internship dates, department, and exact activities. Keep only work you personally performed.
4. Update every bracketed project description in the project dialog in `index.html` with verified details. Add further projects to the project cards and project list in `js/main.js` as needed. Do not publish unknown results or hardware details as facts.
5. Place your résumé PDF at `assets/documents/resume.pdf` (or update `portfolio.resume` in `js/main.js`). The download buttons point to this file.
6. The home page portrait cutout is `assets/images/mery-joy-sioson-cutout.png`, layered over the circuit illustration. Replace that file to change the portrait, keeping the same filename, or update the image path in `index.html`. Add only authentic project screenshots to `assets/images/`.
7. Update the page title, email, profile links, and visible name consistently. Replace any profile URL with the actual public profile URL.

## Deploy with GitHub Pages

1. Create a GitHub repository and upload the contents of this folder to its default branch (`main`).
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
4. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings. Open it and check the résumé, navigation, project dialog, and profile links.

The site uses relative asset paths, so it can be published from a repository subpath. Keep the résumé and image files in the listed folders and preserve their spelling and capitalization.
