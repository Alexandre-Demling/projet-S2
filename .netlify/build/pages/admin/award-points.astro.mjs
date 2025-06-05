/* empty css                                    */
import { e as createComponent, n as renderScript, p as renderHead, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$HeaderDashboard } from '../../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../../chunks/FooterDashboard_BBVcmSux.mjs';
export { renderers } from '../../renderers.mjs';

const $$AwardPoints = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Attribution des Points - Admin</title>${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/award-points.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black"> ${renderComponent($$result, "HeaderDashboard", $$HeaderDashboard, {})} <main class="min-h-screen pt-20 px-4"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold text-white mb-8 text-center">
⭐ Attribution des Points
</h1> <!-- Panneau principal --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl mb-8"> <h2 class="text-xl font-bold text-white mb-6">Attribution automatique des points</h2> <div class="space-y-6"> <div class="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-4"> <h3 class="text-white font-semibold mb-2">🎯 Comment ça marche :</h3> <ul class="text-yellow-200 text-sm space-y-1"> <li>• Le système trouve tous les événements passés</li> <li>• Il attribue 10 points à chaque participant</li> <li>• Les événements sont marqués comme "traités"</li> </ul> </div> <button id="award-points-btn" class="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
⭐ Attribuer les points maintenant
</button> <div id="loading" class="hidden text-center py-4"> <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div> <p class="text-white mt-2">Attribution en cours...</p> </div> <div id="results" class="hidden mt-6 p-4 bg-white/5 rounded-lg border border-white/10"> <h3 class="text-lg font-semibold text-white mb-2">Résultats :</h3> <div id="results-content" class="text-purple-200"></div> </div> </div> </div> <!-- Événements en attente --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl"> <h2 class="text-xl font-bold text-white mb-6">📋 Événements en attente</h2> <div id="pending-events" class="space-y-4"> <!-- Chargé par JavaScript --> </div> </div> </div> </main> ${renderComponent($$result, "FooterDashboard", $$FooterDashboard, {})} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/award-points.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/award-points.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/award-points.astro";
const $$url = "/admin/award-points";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AwardPoints,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
