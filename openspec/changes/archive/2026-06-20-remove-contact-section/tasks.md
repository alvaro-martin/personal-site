## 1. Remove ContactMe from Home Page

- [x] 1.1 Remove `ContactMe` import from `src/components/05.pages/Home/Home.jsx`
- [x] 1.2 Remove `<ContactMe />` component usage from Home render

## 2. Remove Navigation Links

- [x] 2.1 Remove "Contact me" link from `src/components/03.organisms/Header/Header.jsx` nav items
- [x] 2.2 Remove `href="#contactme"` CTA link from `src/components/03.organisms/Hero/Hero.jsx`
- [x] 2.3 Remove `href="#contactme"` CTA link from `src/components/03.organisms/NewProject/NewProject.jsx`

## 3. Update Tests

- [x] 3.1 Update Hero.test.jsx to remove assertion for `#contactme` link
- [x] 3.2 Update NewProject.test.jsx to remove assertion for `#contactme` link

## 4. Remove Dependencies

- [x] 4.1 Run `npm uninstall @emailjs/browser react-toastify`
- [x] 4.2 Verify build succeeds without removed packages

## 5. Verify

- [x] 5.1 Run `npm test` - all tests pass
- [x] 5.2 Run `npm run build` - build succeeds
- [x] 5.3 Verify no remaining imports of ContactMe in rendered components
