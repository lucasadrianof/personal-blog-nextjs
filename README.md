# Lucas Felicio Adriano personal website

## ℹ️ About the project

My personal website rewritten with Next.js and Tailwind CSS (it was originally written with Hugo and had only static content).

The Homepage, About Me, and Contact pages are static, while all pages under `/blog/*` are dynamic and their content is served from Sanity. All these pages are Server Side Rendered (SSR) by default and are re-validated via a webhook that's fired every time their content changes.

The website is hosted on Vercel and the CI/CD pipeline [is configured on GH Actions](https://github.com/lucasadrianof/personal-blog-nextjs/blob/master/.github/workflows/prod-deployment.yml), deploying to production every time a new commit is pushed to the `main` branch.

## ⚒️ Technologies

The following tools and frameworks were used to develop the website:

- [AOS](https://github.com/michalsnik/aos)
- [Commento++](https://github.com/souramoo/commentoplusplus)
- [Date-fns](https://www.npmjs.com/package/date-fns)
- [Font Awesome](https://fontawesome.com/)
- [GitHub Actions](https://github.com/features/actions)
- [Next.js](https://nextjs.org/)
- [Next.js Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [React PortableText](https://github.com/portabletext/react-portabletext)
- [Sanity CMS](https://www.sanity.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

## 💡 Inspirations

- [Bostami - Personal Portfolio React](https://themeforest.net/item/bostami-tailwind-css-personal-portfolio-react-template/38598542)
- [Livramento - by Matheus do Livramento](https://github.com/livramatheus/livramento)
