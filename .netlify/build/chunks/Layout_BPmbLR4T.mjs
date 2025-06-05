import { e as createComponent, f as createAstro, p as renderHead, w as renderSlot, r as renderTemplate } from './astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="description" content="Orbite - Plateforme étudiante de l'Université de Franche-Comté"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-white"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/alexa/Documents/orbite-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
