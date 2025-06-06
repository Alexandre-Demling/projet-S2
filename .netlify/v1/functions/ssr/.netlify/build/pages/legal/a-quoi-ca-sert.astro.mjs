/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_GrwkG2yk.mjs';
import { $ as $$HeaderPublic } from '../../chunks/HeaderPublic_S0hRoKZ2.mjs';
import { $ as $$FooterPublic } from '../../chunks/FooterPublic_C0alk5Js.mjs';
export { renderers } from '../../renderers.mjs';

const $$AQuoiCaSert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 quoi \xE7a sert ? | Orbite" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPublic", $$HeaderPublic, {})} ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white"> <div class="max-w-4xl mx-auto px-4 py-16"> <h1 class="text-4xl font-bold mb-8">À quoi sert Orbite ?</h1> <div class="space-y-8"> <section> <h2 class="text-2xl font-semibold mb-4 text-purple-300">La plateforme étudiante par excellence</h2> <p class="text-gray-200 text-lg">
Orbite est né d'une idée simple : connecter les étudiants entre eux et dynamiser la vie universitaire. Créé par des étudiants qui comprenaient les défis de la vie étudiante.
</p> </section> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300"> Découvrir des événements</h3> <p class="text-gray-200">
Trouvez des soirées étudiantes, des conférences, des activités sportives et culturelles près de votre campus. Ne ratez plus jamais un événement qui vous intéresse !
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300"> Rencontrer d'autres étudiants</h3> <p class="text-gray-200">
Connectez-vous avec des étudiants de votre université !
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300"> Carte interactive</h3> <p class="text-gray-200">
Visualisez tous les événements étudiants sur une carte en temps réel.
</p> </div> <div class="bg-black/30 rounded-lg p-6 border border-purple-800/30"> <h3 class="text-xl font-semibold mb-3 text-purple-300">Système de points</h3> <p class="text-gray-200">
Gagnez des points en participant aux événements et débloquez des récompenses exclusives comme des contours de profil uniques !
</p> </div> </div> <section> <h2 class="text-2xl font-semibold mb-4 text-purple-300">Pour qui ?</h2> <div class="space-y-4"> <div class="bg-black/20 rounded-lg p-4 border-l-4 border-purple-500"> <h4 class="font-semibold text-purple-300">Nouveaux étudiants</h4> <p class="text-gray-200">Intégrez-vous rapidement dans votre nouvelle ville universitaire et rencontrez des personnes partageant vos centres d'intérêt.</p> </div> <div class="bg-black/20 rounded-lg p-4 border-l-4 border-purple-500"> <h4 class="font-semibold text-purple-300">Organisateurs d'événements</h4> <p class="text-gray-200">Associations étudiantes, BDE, ou étudiants individuels : créez et promouvez vos événements facilement.</p> </div> <div class="bg-black/20 rounded-lg p-4 border-l-4 border-purple-500"> <h4 class="font-semibold text-purple-300">Étudiants actifs</h4> <p class="text-gray-200">Participez à la vie étudiante, découvrez de nouvelles activités et enrichissez votre expérience universitaire.</p> </div> </div> </section> <section> <h2 class="text-2xl font-semibold mb-4 text-purple-300">Pourquoi choisir Orbite ?</h2> <div class="bg-gradient-to-r from-purple-900/50 to-black/50 rounded-lg p-6 border border-purple-800/30"> <ul class="space-y-3 text-gray-200"> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
100% gratuit pour tous les étudiants
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Créé par des étudiants qui comprennent vos besoins
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Interface moderne et intuitive
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Communauté bienveillante et sécurisée
</li> <li class="flex items-start"> <span class="text-purple-400 mr-2">✓</span>
Fonctionnalités pensées pour la vie étudiante
</li> </ul> </div> </section> </div> </div> </div> ${renderComponent($$result2, "FooterPublic", $$FooterPublic, {})} ` })}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/legal/a-quoi-ca-sert.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/legal/a-quoi-ca-sert.astro";
const $$url = "/legal/a-quoi-ca-sert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AQuoiCaSert,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
