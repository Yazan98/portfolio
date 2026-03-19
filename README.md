# Portfolio

My personal portfolio website — built with React, TypeScript, Vite, and Tailwind CSS.

![Header](https://github.com/Yazan98/portfolio/blob/v3/design/header.png?raw=true)

**Live:** [yazantarifi.com](https://www.yazantarifi.com)

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- GSAP (animations)
- React Router
- React Helmet (SEO)
- Firebase Hosting

## Pages

| Page | Description |
|------|-------------|
| Home | Hero section, services, core languages, featured projects, articles, contact form |
| Projects | Full project listing with 3D card hover animations |
| Project Details | Individual project breakdown |
| Skills | Languages and tools overview |

## Getting Started

```bash
# install dependencies
npm install

# run locally (port 3000)
npm run dev

# production build (output: /build)
npm run build

# preview production build
npm run preview
```

## Deployment

### Firebase
```bash
firebase login
firebase deploy --only hosting
```

### Docker
```bash
docker-compose up --build -d
```

Or pull directly:
```bash
docker pull yt98/portfolio-website:v3
docker run --name portfolio -p 3000:3000 -d yt98/portfolio-website:v3
```

### GitHub Pages
```
https://yazan98.github.io
```

## Project History

1. Started as a simple Vue.js page
2. Migrated to Angular 8
3. Rebuilt in React + TypeScript (PWA)
4. Redesigned with Material UI
5. Current version — Tailwind CSS + Vite + GSAP animations

## Screenshots

See the [screenshots folder](https://github.com/Yazan98/portfolio/tree/master/screenshots) for page previews.

## License

MIT — see [LICENSE](LICENSE) for details.
