/* empty css                                 */
import { e as createComponent, f as createAstro, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_GrwkG2yk.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$VerifyEmail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VerifyEmail;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "V\xE9rification Email - Orbite" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"> <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"> <div class="text-center mb-6"> <h1 class="text-3xl font-bold text-gray-900 mb-2">Vérification Email</h1> <p class="text-gray-600">Vérification de votre adresse email...</p> </div> <div id="verification-status" class="text-center"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div> <p class="text-gray-600">Vérification en cours...</p> </div> <div id="verification-success" class="text-center hidden"> <div class="text-green-500 mb-4"> <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> </div> <h2 class="text-xl font-semibold text-green-800 mb-2">Email vérifié avec succès !</h2> <p class="text-gray-600 mb-4">Votre compte est maintenant activé.</p> <a href="/login" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-block">
Se connecter
</a> </div> <div id="verification-error" class="text-center hidden"> <div class="text-red-500 mb-4"> <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg> </div> <h2 class="text-xl font-semibold text-red-800 mb-2">Erreur de vérification</h2> <p id="error-message" class="text-gray-600 mb-4">Le lien de vérification est invalide ou a expiré.</p> <div class="space-y-3"> <a href="/register" class="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors text-center">
Créer un nouveau compte
</a> <button id="resend-verification" class="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition-colors">
Renvoyer l'email de vérification
</button> </div> </div> <!-- Formulaire pour renvoyer l'email (caché par défaut) --> <div id="resend-form" class="hidden mt-4"> <div class="border-t pt-4"> <h3 class="text-lg font-semibold mb-3">Renvoyer l'email de vérification</h3> <form id="resend-email-form"> <input type="email" id="resend-email" placeholder="Votre email @edu.univ-fcomte.fr" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3" required> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
Renvoyer
</button> </form> <div id="resend-message" class="mt-3 text-sm"></div> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/verify-email.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/verify-email.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/verify-email.astro";
const $$url = "/verify-email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VerifyEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
