/* empty css                                    */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_GrwkG2yk.mjs';
import { $ as $$HeaderPublic } from '../../chunks/HeaderPublic_S0hRoKZ2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "S'inscrire - Orbite" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPublic", $$HeaderPublic, {})} ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center py-20"> <div class="max-w-md w-full mx-4"> <div class="bg-white rounded-2xl shadow-2xl p-8"> <!-- Header --> <div class="text-center mb-8"> <h1 class="text-2xl font-bold text-gray-800 mb-2">Créer un compte</h1> <p class="text-gray-600">Rejoins la communauté étudiante UFC qui ont pas les droits pour ufc mdrr</p> </div> <!-- Form --> <form id="register-form" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
Nom complet
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Votre nom complet"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
Email universitaire
</label> <input type="email" id="email" name="email" required pattern=".*@edu\.univ-fcomte\.fr$" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="votre.nom@edu.univ-fcomte.fr"> <p class="text-xs text-gray-500 mt-1">
Seuls les emails @edu.univ-fcomte.fr sont acceptés
</p> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
Mot de passe
</label> <input type="password" id="password" name="password" required minlength="8" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Minimum 8 caractères"> </div> <div> <label for="passwordConfirm" class="block text-sm font-medium text-gray-700 mb-2">
Confirmer le mot de passe
</label> <input type="password" id="passwordConfirm" name="passwordConfirm" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Confirmez votre mot de passe"> </div> <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
Créer mon compte
</button> </form> <!-- Login link --> <div class="text-center mt-6"> <p class="text-gray-600">
Déjà un compte ?
<a href="/auth/login" class="text-purple-600 hover:text-purple-700 font-semibold">
Se connecter
</a> </p> </div> <!-- Error/Success messages --> <div id="message" class="mt-4 hidden"></div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/register.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/register.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/register.astro";
const $$url = "/auth/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
