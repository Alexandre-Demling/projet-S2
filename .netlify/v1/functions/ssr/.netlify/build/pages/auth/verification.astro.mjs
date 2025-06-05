/* empty css                                    */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_GrwkG2yk.mjs';
import { $ as $$HeaderPublic } from '../../chunks/HeaderPublic_S0hRoKZ2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Verification = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "V\xE9rification du compte - Orbite" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPublic", $$HeaderPublic, {})} ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-20"> <div class="max-w-2xl mx-auto px-4"> <div class="bg-white rounded-2xl shadow-2xl p-8"> <!-- Header --> <div class="text-center mb-8"> <div class="flex items-center justify-center space-x-2 mb-4"> <span class="text-4xl">🎓</span> <span class="text-2xl font-bold text-purple-900">Vérification étudiante</span> </div> <h1 class="text-2xl font-bold text-gray-800 mb-2">Confirmez votre statut étudiant</h1> <p class="text-gray-600">
Pour finaliser votre inscription sur Orbite, nous devons vérifier votre statut d'étudiant à l'UFC
</p> </div> <!-- Info Box --> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"> <div class="flex items-start space-x-3"> <span class="text-blue-500 text-xl">ℹ️</span> <div> <h3 class="font-semibold text-blue-800 mb-1">Pourquoi cette vérification ?</h3> <p class="text-blue-700 text-sm">
Orbite est réservé aux étudiants de l'Université de Franche-Comté. 
                Cette vérification garantit un environnement sûr et authentique pour tous.
</p> </div> </div> </div> <!-- Verification Form --> <form id="verification-form" class="space-y-6"> <div> <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
Email universitaire
</label> <input type="email" id="email" name="email" required readonly class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="votre.nom@edu.univ-fcomte.fr"> </div> <div> <label for="student_name" class="block text-sm font-medium text-gray-700 mb-2">
Nom complet (tel qu'il apparaît sur votre carte étudiante)
</label> <input type="text" id="student_name" name="student_name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Nom et prénom complets"> </div> <div> <label for="student_id" class="block text-sm font-medium text-gray-700 mb-2">
Numéro étudiant (optionnel)
</label> <input type="text" id="student_id" name="student_id" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Votre numéro étudiant si vous l'avez"> </div> <!-- Photo Upload Section --> <div class="space-y-4"> <h3 class="text-lg font-semibold text-gray-800">Photos de votre carte étudiante</h3> <p class="text-sm text-gray-600">
Veuillez fournir des photos claires et lisibles de votre carte étudiante UFC (recto et verso)
</p> <div class="grid md:grid-cols-2 gap-4"> <!-- Recto --> <div> <label for="card_front" class="block text-sm font-medium text-gray-700 mb-2">
📷 Carte étudiante - Recto
</label> <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors"> <input type="file" id="card_front" name="card_front" accept="image/*" required class="hidden"> <label for="card_front" class="cursor-pointer"> <div class="text-gray-500"> <span class="text-3xl block mb-2">📸</span> <span class="text-sm">Cliquez pour ajouter la photo du recto</span> </div> </label> <div id="front-preview" class="mt-2 hidden"> <img id="front-img" class="max-w-full h-32 object-cover rounded"> <p class="text-xs text-green-600 mt-1">✅ Photo ajoutée</p> </div> </div> </div> <!-- Verso --> <div> <label for="card_back" class="block text-sm font-medium text-gray-700 mb-2">
📷 Carte étudiante - Verso
</label> <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-purple-400 transition-colors"> <input type="file" id="card_back" name="card_back" accept="image/*" required class="hidden"> <label for="card_back" class="cursor-pointer"> <div class="text-gray-500"> <span class="text-3xl block mb-2">📸</span> <span class="text-sm">Cliquez pour ajouter la photo du verso</span> </div> </label> <div id="back-preview" class="mt-2 hidden"> <img id="back-img" class="max-w-full h-32 object-cover rounded"> <p class="text-xs text-green-600 mt-1">✅ Photo ajoutée</p> </div> </div> </div> </div> </div> <!-- Additional Message --> <div> <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
Message supplémentaire (optionnel)
</label> <textarea id="message" name="message" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Informations supplémentaires ou questions..."></textarea> </div> <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
📤 Envoyer ma demande de vérification
</button> </form> <!-- Status messages --> <div id="form-status" class="mt-4 hidden"></div> <!-- Info Footer --> <div class="mt-8 p-4 bg-gray-50 rounded-lg"> <h4 class="font-semibold text-gray-800 mb-2">🕐 Délai de traitement</h4> <p class="text-sm text-gray-600">
Nous vérifierons votre compte dans les plus brefs délais (généralement sous 24-48h). 
            Vous recevrez un email de confirmation une fois votre compte activé.
</p> </div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/verification.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/verification.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/auth/verification.astro";
const $$url = "/auth/verification";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Verification,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
