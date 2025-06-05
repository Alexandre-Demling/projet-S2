/* empty css                                    */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BPmbLR4T.mjs';
import { $ as $$HeaderPublic } from '../../chunks/HeaderPublic_S0hRoKZ2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Connexion - Orbite" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPublic", $$HeaderPublic, {})} ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center py-20"> <div class="max-w-md w-full mx-4"> <div class="bg-white rounded-2xl shadow-2xl p-8"> <!-- Header --> <div class="text-center mb-8"> <h1 class="text-2xl font-bold text-gray-800 mb-2">Connexion</h1> <p class="text-gray-600">Accédez à votre espace étudiant orbite</p> </div> <!-- Form --> <form id="login-form" class="space-y-6"> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="votre.nom@edu.univ-fcomte.fr"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
Mot de passe
</label> <input type="password" id="password" name="password" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Votre mot de passe"> </div> <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
Se connecter
</button> </form> <!-- Register link --> <div class="text-center mt-6"> <p class="text-gray-600">
Pas encore de compte ?
<a href="/auth/register" class="text-purple-600 hover:text-purple-700 font-semibold">
S'inscrire
</a> </p> </div> <!-- Error/Success messages --> <div id="message" class="mt-4 hidden"></div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/login.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/login.astro";
const $$url = "/auth/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
