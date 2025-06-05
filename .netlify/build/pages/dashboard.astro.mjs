/* empty css                                 */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BPmbLR4T.mjs';
import { $ as $$HeaderDashboard } from '../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../chunks/FooterDashboard_BBVcmSux.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Accueil - Orbite Dashboard", "data-astro-cid-3nssi2tu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderDashboard", $$HeaderDashboard, { "data-astro-cid-3nssi2tu": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black" data-astro-cid-3nssi2tu> <!-- Hero Section avec illustration --> <section class="relative pt-24 md:pt-32 pb-16 px-4" data-astro-cid-3nssi2tu> <div class="max-w-6xl mx-auto" data-astro-cid-3nssi2tu> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-3nssi2tu> <!-- Contenu texte --> <div class="text-white space-y-6 order-2 lg:order-1" data-astro-cid-3nssi2tu> <h1 class="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight" data-astro-cid-3nssi2tu>
Orbite, c'est la plateforme créée par les étudiants, pour les étudiants !
</h1> <p class="text-lg md:text-xl leading-relaxed opacity-90" data-astro-cid-3nssi2tu>
Ici, tu peux découvrir de nouvelles passions et créer tes propres événements pour rassembler la communauté autour de tes centres d'intérêt... tout est possible !
</p> </div> <!-- Image des étudiants --> <div class="order-1 lg:order-2" data-astro-cid-3nssi2tu> <img src="/images/students-silhouette.webp" alt="Étudiants en activité" class="w-full h-auto rounded-2xl shadow-2xl sepia brightness-110" data-astro-cid-3nssi2tu> </div> </div> </div> </section> <!-- Grille des sections principales --> <section class="py-12 px-4" data-astro-cid-3nssi2tu> <div class="max-w-6xl mx-auto" data-astro-cid-3nssi2tu> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-3nssi2tu> <!-- Section Les Activités --> <a href="/activities/" class="group block hover:scale-105 transition-all duration-300" data-astro-cid-3nssi2tu> <div class="bg-purple-900/50 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl border border-purple-500/30 h-full" data-astro-cid-3nssi2tu> <!-- Image du bar --> <div class="h-48 md:h-56 overflow-hidden" data-astro-cid-3nssi2tu> <img src="/images/bar-activities.webp" alt="Bar et activités" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-astro-cid-3nssi2tu> </div> <!-- Contenu texte --> <div class="p-6 text-white" data-astro-cid-3nssi2tu> <h2 class="text-xl md:text-2xl font-bold mb-3 flex items-center" data-astro-cid-3nssi2tu> <span class="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3" data-astro-cid-3nssi2tu> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3nssi2tu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-3nssi2tu></path> </svg> </span>
Les Activités
</h2> <p class="text-base leading-relaxed opacity-90" data-astro-cid-3nssi2tu>
Découvrez les activités qui sont disponibles
</p> </div> </div> </a> <!-- Section La Carte --> <a href="/map" class="group block hover:scale-105 transition-all duration-300" data-astro-cid-3nssi2tu> <div class="bg-purple-900/50 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl border border-purple-500/30 h-full" data-astro-cid-3nssi2tu> <!-- Image de la carte --> <div class="h-48 md:h-56 overflow-hidden" data-astro-cid-3nssi2tu> <img src="/images/map-montbeliard.webp" alt="Carte de Montbéliard" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-astro-cid-3nssi2tu> </div> <!-- Contenu texte --> <div class="p-6 text-white" data-astro-cid-3nssi2tu> <h2 class="text-xl md:text-2xl font-bold mb-3 flex items-center" data-astro-cid-3nssi2tu> <span class="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3" data-astro-cid-3nssi2tu> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3nssi2tu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" data-astro-cid-3nssi2tu></path> </svg> </span>
La Carte
</h2> <p class="text-base leading-relaxed opacity-90" data-astro-cid-3nssi2tu>
Découvrez la carte des activités autour de chez vous
</p> </div> </div> </a> <!-- Section Créez --> <a href="/creer" class="group block hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1" data-astro-cid-3nssi2tu> <div class="bg-purple-900/50 rounded-3xl overflow-hidden backdrop-blur-sm shadow-xl border border-purple-500/30 h-full" data-astro-cid-3nssi2tu> <!-- Image des étudiants --> <div class="h-48 md:h-56 overflow-hidden" data-astro-cid-3nssi2tu> <img src="/images/students-laptop.webp" alt="Étudiants travaillant" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-astro-cid-3nssi2tu> </div> <!-- Contenu texte --> <div class="p-6 text-white" data-astro-cid-3nssi2tu> <h2 class="text-xl md:text-2xl font-bold mb-3 flex items-center" data-astro-cid-3nssi2tu> <span class="bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3" data-astro-cid-3nssi2tu> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3nssi2tu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-3nssi2tu></path> </svg> </span>
Créez
</h2> <p class="text-base leading-relaxed opacity-90" data-astro-cid-3nssi2tu>
Créez vos propres activités et publiez-les
</p> </div> </div> </a> </div> </div> </section> <!-- Section statistiques ou informations supplémentaires --> </main> ${renderComponent($$result2, "FooterDashboard", $$FooterDashboard, { "data-astro-cid-3nssi2tu": true })} ` })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/dashboard.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
