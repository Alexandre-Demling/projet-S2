/* empty css                                    */
import { e as createComponent, n as renderScript, p as renderHead, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$HeaderDashboard } from '../../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../../chunks/FooterDashboard_BBVcmSux.mjs';
export { renderers } from '../../renderers.mjs';

const $$PointsCheck = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Vérification des Points - Admin</title>${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/points-check.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black"> ${renderComponent($$result, "HeaderDashboard", $$HeaderDashboard, {})} <main class="min-h-screen pt-20 px-4"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold text-white mb-8 text-center">
🔧 Administration - Vérification des Points
</h1> <!-- Panneau de contrôle --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl mb-8"> <h2 class="text-xl font-bold text-white mb-6">Vérification manuelle des points</h2> <div class="space-y-4"> <p class="text-purple-200">
Cette page permet de vérifier manuellement l'attribution des points pour les événements passés.
            Normalement, cette vérification devrait se faire automatiquement.
</p> <button id="check-points-btn" class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg">
🔍 Vérifier et attribuer les points
</button> <div id="results" class="hidden mt-6 p-4 bg-white/5 rounded-lg border border-white/10"> <h3 class="text-lg font-semibold text-white mb-2">Résultats :</h3> <div id="results-content" class="text-purple-200"></div> </div> </div> </div> <!-- Configuration automatique --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl mb-8"> <h2 class="text-xl font-bold text-white mb-6">Configuration automatique</h2> <div class="space-y-4"> <p class="text-purple-200">
Pour automatiser cette vérification, vous pouvez :
</p> <div class="bg-purple-900/30 rounded-lg p-4 border border-purple-700/50"> <h3 class="text-white font-semibold mb-2">Option 1 : Cron Job (Recommandé)</h3> <p class="text-purple-200 text-sm mb-2">Ajoutez cette ligne à votre crontab pour vérifier les points chaque heure :</p> <code class="bg-black/50 text-green-400 p-2 rounded block text-sm">
0 * * * * curl -X POST http://localhost:4321/api/check-points
</code> </div> <div class="bg-purple-900/30 rounded-lg p-4 border border-purple-700/50"> <h3 class="text-white font-semibold mb-2">Option 2 : Vérification à chaque visite</h3> <p class="text-purple-200 text-sm mb-2">Activer la vérification automatique à chaque chargement de page :</p> <label class="flex items-center gap-2"> <input type="checkbox" id="auto-check" class="rounded"> <span class="text-white">Vérifier automatiquement les points</span> </label> </div> </div> </div> <!-- Historique des événements --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl"> <h2 class="text-xl font-bold text-white mb-6">Événements passés</h2> <div id="past-events" class="space-y-4"> <!-- Les événements seront chargés ici --> </div> </div> </div> </main> ${renderComponent($$result, "FooterDashboard", $$FooterDashboard, {})} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/points-check.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/points-check.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/points-check.astro";
const $$url = "/admin/points-check";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PointsCheck,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
