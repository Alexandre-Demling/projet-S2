/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_GrwkG2yk.mjs';
import { $ as $$HeaderPublic } from '../chunks/HeaderPublic_S0hRoKZ2.mjs';
import { $ as $$FooterPublic } from '../chunks/FooterPublic_C0alk5Js.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 propos - Orbite" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPublic", $$HeaderPublic, {})}  ${maybeRenderHead()}<section class="bg-gradient-to-b from-purple-900 via-purple-900 to-black min-h-screen pt-20"> <div class="max-w-4xl mx-auto px-4 py-16"> <!-- Logo Orbite central --> <div class="text-center mb-16"> <div class="mb-8"> <img src="/images/logo-orbite.svg" alt="Logo Orbite" class="h-32 w-auto mx-auto"> </div> </div> <!-- Qui sommes-nous ? --> <div class="mb-16"> <h1 class="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
Qui sommes-nous ?
</h1> <div class="bg-purple-800/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-700/50"> <p class="text-gray-200 leading-relaxed text-lg">
Nous sommes une équipe de trois étudiants de MMI et avons créé Orbite, une plateforme 
            pour aider les étudiants à trouver et organiser facilement des activités.
</p> </div> </div> <!-- L'histoire --> <div class="mb-16"> <h2 class="text-2xl md:text-3xl font-bold text-white mb-6">
L'histoire
</h2> <div class="bg-purple-800/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-700/50"> <p class="text-gray-200 leading-relaxed mb-6">
Étudiants en MMI, nous avons constaté qu'il était difficile de trouver et organiser des 
            activités sur le campus. C'est pourquoi nous avons créé Orbite : une plateforme conçue par et pour 
            les étudiants, pour simplifier la découverte et l'accès aux événements.
</p> <p class="text-gray-200 leading-relaxed mb-6">
Notre mission ? Simplifier la vie étudiante, favoriser les rencontres et dynamiser la vie de 
            campus. Avec votre soutien, nous irons encore plus loin !
</p> </div> </div> <!-- L'équipe --> <div class="mb-16"> <h2 class="text-2xl md:text-3xl font-bold text-white mb-8">
L'équipe
</h2> <div class="grid md:grid-cols-1 gap-6"> <!-- Membre 1 --> <div class="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-700/50"> <h3 class="text-xl font-bold text-white mb-2">Alexandre Demling</h3> <p class="text-purple-300 font-medium mb-3">Notre développeur web</p> <p class="text-gray-200 leading-relaxed">
Passionné de développement et d'innovation, Alexandre s'occupe de toute la partie technique 
              d'Orbite pour vous offrir une expérience utilisateur optimale.
</p> </div> <!-- Membre 2 --> <div class="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-700/50"> <h3 class="text-xl font-bold text-white mb-2">Florian Goerig</h3> <p class="text-purple-300 font-medium mb-3">Notre chargé de communication</p> <p class="text-gray-200 leading-relaxed">
Expert en communication et marketing digital, Florian s'assure que notre message 
              atteigne tous les étudiants et crée une communauté engagée autour d'Orbite.
</p> </div> <!-- Membre 3 --> <div class="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-700/50"> <h3 class="text-xl font-bold text-white mb-2">Gautier Vicat</h3> <p class="text-purple-300 font-medium mb-3">Design & Expérience utilisateur</p> <p class="text-gray-200 leading-relaxed">
Créatif et soucieux du détail, Gautier conçoit une interface intuitive et 
              esthétique pour que votre expérience sur Orbite soit toujours agréable.
</p> </div> </div> </div> <!-- Call to action --> <div class="text-center"> <div class="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 border border-purple-500/50"> <h3 class="text-2xl font-bold text-white mb-4">
Rejoignez l'aventure Orbite !
</h3> <p class="text-purple-200 mb-6 leading-relaxed">
Découvrez une nouvelle façon de vivre votre vie étudiante. 
            Connectez-vous avec d'autres étudiants et participez aux événements qui vous passionnent.
</p> <a href="/auth/register" class="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
Rejoindre Orbite
</a> </div> </div> </div> </section> ${renderComponent($$result2, "FooterPublic", $$FooterPublic, {})} ` })}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
