/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CIg22j6S.mjs';
import { $ as $$HeaderPublic } from '../chunks/HeaderPublic_S0hRoKZ2.mjs';
import { $ as $$FooterPublic } from '../chunks/FooterPublic_C0alk5Js.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Orbite" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPublic", $$HeaderPublic, {})}  ${maybeRenderHead()}<section class="bg-gradient-to-b from-purple-900 via-purple-900 to-black min-h-screen pt-20"> <div class="max-w-4xl mx-auto px-4 py-16"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
Contactez-nous
</h1> <p class="text-xl text-purple-200 max-w-2xl mx-auto">
Une question ? Une suggestion ? Nous sommes là pour vous aider !
</p> </div> <!-- Contact Form --> <div class="max-w-2xl mx-auto"> <div class="bg-purple-800/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-700/50"> <form class="space-y-6" action="https://formspree.io/f/xjkwqrve" method="POST"> <input type="hidden" name="_subject" value="Nouveau message depuis Orbite"> <div> <label for="name" class="block text-sm font-medium text-white mb-2">
Nom complet
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 bg-purple-900/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all" placeholder="Votre nom complet"> </div> <div> <label for="email" class="block text-sm font-medium text-white mb-2">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 bg-purple-900/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all" placeholder="votre.email@edu.univ-fcomte.fr"> </div> <div> <label for="subject" class="block text-sm font-medium text-white mb-2">
Sujet
</label> <input type="text" id="subject" name="subject" required class="w-full px-4 py-3 bg-purple-900/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all" placeholder="Sujet de votre message"> </div> <div> <label for="message" class="block text-sm font-medium text-white mb-2">
Message
</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 bg-purple-900/50 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none" placeholder="Votre message..."></textarea> </div> <button type="submit" class="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
📤 Envoyer le message
</button> </form> </div> <!-- Contact Info --> <div class="mt-12 grid md:grid-cols-2 gap-6"> <div class="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-700/50 text-center"> <div class="text-3xl mb-4">📧</div> <h3 class="font-semibold text-white mb-2">Email</h3> <p class="text-purple-200">orbitesite@gmail.com</p> </div> <div class="bg-purple-800/30 rounded-xl p-6 backdrop-blur-sm border border-purple-700/50 text-center"> <div class="text-3xl mb-4">🏫</div> <h3 class="font-semibold text-white mb-2">Université</h3> <p class="text-purple-200">Université de Franche-Comté</p> <p class="text-purple-300 text-sm">Besançon, France</p> </div> </div> <!-- Response Time --> <div class="mt-8 text-center"> <div class="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 border border-purple-500/50"> <h4 class="font-semibold text-white mb-2">⏰ Temps de réponse</h4> <p class="text-purple-200 text-sm">
Nous nous efforçons de répondre à tous les messages dans les 24-48 heures.
</p> </div> </div> </div> </div> </section> ${renderComponent($$result2, "FooterPublic", $$FooterPublic, {})} ` })}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/contact.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
