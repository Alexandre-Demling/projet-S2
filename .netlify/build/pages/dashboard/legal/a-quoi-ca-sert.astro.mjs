/* empty css                                       */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_GrwkG2yk.mjs';
import { $ as $$HeaderDashboard } from '../../../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../../../chunks/FooterDashboard_BBVcmSux.mjs';
export { renderers } from '../../../renderers.mjs';

const $$AQuoiCaSert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 quoi \xE7a sert ? | Orbite Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderDashboard", $$HeaderDashboard, {})} ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white"> <div class="max-w-4xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">À quoi sert votre Dashboard Orbite ?</h1> <div class="space-y-8"> <section> <h2 class="text-2xl font-semibold mb-4 text-purple-300">Votre hub étudiant personnel</h2> <p class="text-gray-200 text-lg">
Votre Dashboard Orbite est votre centre de contrôle pour toute votre vie étudiante. Gérez vos événements, suivez vos points, connectez-vous avec d'autres étudiants, et découvrez tout ce qui se passe autour de votre campus.
</p> </section> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300"> Gestion d'événements</h3> <p class="text-gray-200">
Créez, modifiez et gérez tous vos événements étudiants. Suivez les inscriptions, communiquez avec les participants, et analysez le succès de vos événements.
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300"> Suivi de vos points</h3> <p class="text-gray-200">
Visualisez votre progression, vos points gagnés, et les récompenses débloquées.
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Profil personnalisé</h3> <p class="text-gray-200">
Gérez votre profil étudiant, votre photo, et vos contours de profil débloqués. Montrez votre niveau à la communauté !
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Carte interactive</h3> <p class="text-gray-200">
Explorez tous les événements étudiants sur une carte en temps réel.
</p> </div> </div> <section> <h2 class="text-2xl font-semibold mb-4 text-purple-300">Fonctionnalités principales</h2> <div class="space-y-4"> <div class="bg-black/20 rounded-lg p-4 border-l-4 border-purple-500"> <h4 class="font-semibold text-purple-300">Calendrier personnel</h4> <p class="text-gray-200">Tous vos événements créés et auxquels vous participez dans un calendrier unifié.</p> </div> <div class="bg-black/20 rounded-lg p-4 border-l-4 border-purple-500"> <h4 class="font-semibold text-purple-300">Messagerie intégrée</h4> <p class="text-gray-200">Communiquez avec d'autres étudiants et participants à vos événements.</p> </div> <div class="bg-black/20 rounded-lg p-4 border-l-4 border-purple-500"> <h4 class="font-semibold text-purple-300">Statistiques détaillées</h4> <p class="text-gray-200">Analysez vos participations, vos créations d'événements, et votre impact sur la communauté.</p> </div> </div> </section> <section> <h2 class="text-2xl font-semibold mb-4 text-purple-300">Avantages du Dashboard</h2> <div class="bg-gradient-to-r from-purple-900/50 to-black/50 rounded-lg p-6 border border-purple-800/30"> <ul class="space-y-3 text-gray-200"> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Interface intuitive conçue spécialement pour les étudiants
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Accès rapide à toutes les fonctionnalités d'Orbite
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Synchronisation en temps réel avec la communauté
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Personnalisation complète selon vos préférences
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Gamification motivante avec le système de points
</li> </ul> </div> </section> </div> </div> </div> ${renderComponent($$result2, "FooterDashboard", $$FooterDashboard, {})} ` })}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/dashboard/legal/a-quoi-ca-sert.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/dashboard/legal/a-quoi-ca-sert.astro";
const $$url = "/dashboard/legal/a-quoi-ca-sert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AQuoiCaSert,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
