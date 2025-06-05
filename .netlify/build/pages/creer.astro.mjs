/* empty css                                 */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ldsaV2-t.mjs';
import { $ as $$HeaderDashboard } from '../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../chunks/FooterDashboard_BBVcmSux.mjs';
import { $ as $$EventMap } from '../chunks/EventMap_CxsQwo_P.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cr\xE9er un \xE9v\xE9nement - Orbite" }, { "default": async ($$result2) => renderTemplate`  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""> ${renderComponent($$result2, "HeaderDashboard", $$HeaderDashboard, {})} ${maybeRenderHead()}<div class="min-h-screen px-4 py-8 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 pt-20"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold text-white mb-8 text-center">
Créer un nouvel événement
</h1> <!-- Messages d'état --> <div id="auth-error" class="bg-red-900/50 border border-red-500 text-white p-4 rounded-lg mb-6 hidden"> <div class="flex items-center space-x-2"> <span class="text-red-400">⚠️</span> <span>Vous devez être connecté pour créer un événement.</span> </div> </div> <div id="form-error" class="bg-red-900/50 border border-red-500 text-white p-4 rounded-lg mb-6 hidden"> <div class="flex items-center space-x-2"> <span class="text-red-400">❌</span> <span id="error-message">Une erreur s'est produite lors de la création de l'événement.</span> </div> </div> <div id="form-success" class="bg-green-900/50 border border-green-500 text-white p-4 rounded-lg mb-6 hidden"> <div class="flex items-center space-x-2"> <span class="text-green-400">✅</span> <span id="success-message">Activité créée avec succès!</span> </div> </div> <!-- Formulaire de création --> <form id="create-form" class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl space-y-6"> <!-- Titre --> <div class="space-y-2"> <label for="nom_event" class="block text-white font-medium">
Titre de l'événement *
</label> <input type="text" id="nom_event" name="nom_event" placeholder="Ex: Soirée jeux de société" class="w-full bg-white border-2 border-purple-400/50 rounded-lg p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all" required> </div> <!-- Date et heure --> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div class="space-y-2"> <label for="date_event" class="block text-white font-medium">
Date de l'événement *
</label> <input type="datetime-local" id="date_event" name="date_event" class="w-full bg-white border-2 border-purple-400/50 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all" required> </div> <div class="space-y-2"> <label for="categorie_event" class="block text-white font-medium">
Catégorie *
</label> <select id="categorie_event" name="categorie_event" class="w-full bg-white border-2 border-purple-400/50 rounded-lg p-3 text-black focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all" required> <option value="" class="bg-white text-black">Choisir une catégorie</option> <option value="Sport" class="bg-white text-black">⚽ Sport</option> <option value="Soirée" class="bg-white text-black">🎉 Soirée</option> <option value="Cinéma" class="bg-white text-black">🎬 Cinéma</option> <option value="Jeux" class="bg-white text-black">🎮 Jeux</option> <option value="Musique" class="bg-white text-black">🎵 Musique</option> <option value="Chill" class="bg-white text-black">😌 Chill</option> <option value="Voyages" class="bg-white text-black">✈️ Voyages</option> <option value="Études" class="bg-white text-black">📚 Études</option> <option value="Resto" class="bg-white text-black">🍽️ Resto</option> <option value="Rencontres" class="bg-white text-black">👥 Rencontres</option> <option value="Cuisine" class="bg-white text-black">👨‍🍳 Cuisine</option> <option value="Shopping" class="bg-white text-black">🛍️ Shopping</option> <option value="Culture" class="bg-white text-black">🎭 Culture</option> <option value="Bien-être" class="bg-white text-black">🧘 Bien-être</option> <option value="Bénévolat" class="bg-white text-black">🤝 Bénévolat</option> </select> </div> </div> <!-- Lieu et participants --> <div class="grid grid-cols-1 md:grid-cols-1 gap-4"> <div class="space-y-2"> <label for="lieu_event" class="block text-white font-medium">
Lieu de l'événement *
</label> <input type="text" id="lieu_event" name="lieu_event" placeholder="Ex: Campus universitaire" class="w-full bg-white border-2 border-purple-400/50 rounded-lg p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all" required> </div> <div class="space-y-2"> <label for="nb_users_max" class="block text-white font-medium">
Nombre max de participants *
</label> <input type="number" id="nb_users_max" name="nb_users_max" min="1" max="1000" placeholder="Ex: 20" class="w-full bg-white border-2 border-purple-400/50 rounded-lg p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all" required> </div> </div> <!-- Information sur les points automatiques --> <div class="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-4"> <div class="flex items-center gap-3"> <div class="text-2xl"></div> <div> <h3 class="text-white font-semibold mb-1">Système de points automatique</h3> <p class="text-yellow-200 text-sm">
• Vous gagnez <strong>10 points</strong> en créant cette activité<br>
• Les participants gagnent <strong>10 points</strong> en participant à l'événement
</p> </div> </div> </div> <!-- Description --> <div class="space-y-2"> <label for="description_event" class="block text-white font-medium">
Description de l'événement *
</label> <textarea id="description_event" name="description_event" rows="4" placeholder="Décrivez votre événement en détail..." class="w-full bg-white border-2 border-purple-400/50 rounded-lg p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-none" required></textarea> </div> <!-- Image --> <div class="space-y-2"> <label for="image_event" class="block text-white font-medium">
Image de l'événement (PNG uniquement)
</label> <div class="relative"> <input type="file" id="image_event" name="image_event" accept="image/png" class="hidden"> <div id="image-preview" class="w-full h-48 bg-white/10 border-2 border-dashed border-purple-400/50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all group"> <div class="text-center p-6" id="upload-prompt"> <div class="w-16 h-16 mx-auto mb-4 bg-purple-400/20 rounded-full flex items-center justify-center group-hover:bg-purple-400/30 transition-all"> <svg class="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <p class="text-purple-200 font-medium">Cliquez pour sélectionner une image</p> <p class="text-purple-300 text-sm mt-1">Format PNG uniquement</p> </div> <img id="preview-img" class="w-full h-full object-cover rounded-lg hidden" src="#" alt="Aperçu"> </div> <p id="image-error" class="text-red-400 text-sm mt-2 hidden">⚠️ Seuls les fichiers PNG sont acceptés.</p> </div> </div> <!-- Localisation sur carte --> <div class="space-y-4"> <label class="block text-white font-medium">
Localisation précise sur la carte
</label> <p class="text-purple-200 text-sm">
Cliquez sur la carte pour définir la position exacte de votre événement
</p> ${renderComponent($$result2, "EventMap", $$EventMap, { "height": "h-64", "showLocationPicker": true, "initialLat": 47.5101, "initialLng": 6.7988, "zoom": 13 })} <!-- Champs cachés pour les coordonnées --> <input type="hidden" id="latitude" name="latitude" value="47.5101"> <input type="hidden" id="longitude" name="longitude" value="6.7988"> <div class="flex items-center justify-between bg-white/10 rounded-lg p-3"> <div id="location-display" class="text-sm text-purple-200">
Latitude: 47.5101, Longitude: 6.7988
</div> <button type="button" id="use-my-location" class="text-xs bg-purple-600 hover:bg-purple-500 text-white px-3 py-1 rounded-full transition-all">
Ma position
</button> </div> </div> <!-- Boutons d'action --> <div class="pt-6 flex flex-col sm:flex-row gap-4"> <button type="submit" id="submit-button" class="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
✨ Créer l'événement (+10 points)
</button> <a href="/activities" class="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full transition-all text-center border border-white/30">
❌ Annuler
</a> </div> </form> </div> </div> ${renderComponent($$result2, "FooterDashboard", $$FooterDashboard, {})} ` })} <!-- Leaflet JavaScript --> ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/creer/index.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/creer/index.astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/creer/index.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/creer/index.astro";
const $$url = "/creer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
