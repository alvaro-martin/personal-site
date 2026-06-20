## 1. PDF File Setup

- [x] 1.1 Create `public/cv/` directory
- [x] 1.2 Add Spanish CV PDF file as `public/cv/CV-ES-Alvaro-Aspilcueta.pdf`
- [x] 1.3 Add English CV PDF file as `public/cv/CV-EN-Alvaro-Aspilcueta.pdf`

## 2. Update i18n Translations

- [x] 2.1 Update `src/translations/es/global.json` — change `about.cvLink` from S3 URL to `/personal-site/cv/CV-ES-Alvaro-Aspilcueta.pdf`
- [x] 2.2 Update `src/translations/en/global.json` — change `about.cvLink` from S3 URL to `/personal-site/cv/CV-EN-Alvaro-Aspilcueta.pdf`

## 3. Verification

- [x] 3.1 Run `npm start` and verify CV download button works in browser
- [x] 3.2 Verify PDF opens in new tab when clicking download button
