/* empty css                                       */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_ldsaV2-t.mjs';
import { $ as $$HeaderDashboard } from '../../../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../../../chunks/FooterDashboard_BBVcmSux.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FAQ | Orbite Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderDashboard", $$HeaderDashboard, {})} ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white"> <div class="max-w-4xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">Questions fréquemment posées</h1> <div class="space-y-6"> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Comment naviguer dans mon Dashboard ?</h3> <p class="text-gray-200">
Votre Dashboard Orbite vous donne accès à tous vos événements, votre profil, vos points, et la carte interactive. Utilisez le menu latéral pour naviguer entre les sections.
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Comment créer mon premier événement ?</h3> <p class="text-gray-200">
Cliquez sur "Créer un événement" dans votre dashboard. Remplissez les informations (titre, description, lieu, date), ajoutez une photo, et publiez ! Votre événement apparaîtra sur la carte pour tous les étudiants.
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Comment gagner plus de points rapidement ?</h3> <p class="text-gray-200">
Participez aux événements (+10 points), créez des événements populaires (+10 points) !
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Comment personnaliser mon profil ?</h3> <p class="text-gray-200">
Allez dans "Mon Profil" pour ajouter une photo ou pour choisir votre contour de profil débloqué.
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Comment utiliser la carte pour trouver des événements ?</h3> <p class="text-gray-200">
La carte interactive vous montre tous les événements près de vous. Cliquez sur un marqueur pour voir les détails et vous inscrire !
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Que faire si mon événement n'attire pas de participants ?</h3> <p class="text-gray-200">
Assurez-vous d'avoir une description claire, une belle photo, et un titre accrocheur. Partagez votre événement dans les groupes d'intérêt pertinents et sur vos réseaux sociaux !
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Comment rejoindre des groupes d'intérêt ?</h3> <p class="text-gray-200">
Dans la section "Activité", explorez les groupes disponibles par thème : sport, musique, art, etc. Participez ceux qui vous intéressent pour rencontrer des étudiants partageant vos passions.
</p> </div> </div> </div> </div> ${renderComponent($$result2, "FooterDashboard", $$FooterDashboard, {})} ` })}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/dashboard/legal/faq.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/dashboard/legal/faq.astro";
const $$url = "/dashboard/legal/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
