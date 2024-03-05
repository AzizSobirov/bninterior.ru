export {}
declare global {
  const App: typeof import('layouts/App.astro')['default']
  const Button: typeof import('components/shared/Button.astro')['default']
  const Card: typeof import('components/shared/Card.astro')['default']
  const H2: typeof import('components/shared/H2.astro')['default']
  const H3: typeof import('components/shared/H3.astro')['default']
  const TheFooter: typeof import('components/TheFooter.astro')['default']
  const TheForm: typeof import('components/TheForm.astro')['default']
  const TheHeader: typeof import('components/TheHeader.astro')['default']
  const TheIntro: typeof import('components/TheIntro.astro')['default']
  const ThePopup: typeof import('components/ThePopup.astro')['default']
  const TheSection: typeof import('components/TheSection.astro')['default']
}