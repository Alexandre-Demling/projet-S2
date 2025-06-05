/* empty css                                    */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_GrwkG2yk.mjs';
import { $ as $$HeaderDashboard } from '../../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../../chunks/FooterDashboard_BBVcmSux.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Boutique - Orbite", "data-astro-cid-kg5bim7r": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderDashboard", $$HeaderDashboard, { "data-astro-cid-kg5bim7r": true })} ${maybeRenderHead()}<main class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black pt-20" data-astro-cid-kg5bim7r> <!-- Messages d'état --> <div id="auth-error" class="max-w-4xl mx-auto px-4 py-8 hidden" data-astro-cid-kg5bim7r> <div class="bg-red-900/50 border border-red-500 text-white p-6 rounded-lg text-center" data-astro-cid-kg5bim7r> <div class="text-6xl mb-4" data-astro-cid-kg5bim7r>🔒</div> <h2 class="text-2xl font-bold mb-2" data-astro-cid-kg5bim7r>Accès restreint</h2> <p class="mb-4" data-astro-cid-kg5bim7r>Vous devez être connecté pour accéder à la boutique.</p> <a href="/login?redirect=/profile/shop" class="inline-block px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition-all font-medium" data-astro-cid-kg5bim7r>
🔑 Se connecter
</a> </div> </div> <div id="shop-content" class="max-w-6xl mx-auto px-4 py-8 hidden" data-astro-cid-kg5bim7r> <!-- En-tête de la boutique --> <div class="text-center mb-12" data-astro-cid-kg5bim7r> <h1 class="text-4xl md:text-5xl font-bold text-white mb-4" data-astro-cid-kg5bim7r> Boutique Orbite</h1> <p class="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed mb-8" data-astro-cid-kg5bim7r>
Personnalisez votre profil avec des cercles orbitaux uniques ! Dépensez vos points pour débloquer de nouveaux designs.
</p> <!-- Affichage des points --> <div class="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 inline-block shadow-2xl" data-astro-cid-kg5bim7r> <div class="flex items-center gap-3" data-astro-cid-kg5bim7r> <span class="text-3xl" data-astro-cid-kg5bim7r>⭐</span> <div class="text-left" data-astro-cid-kg5bim7r> <p class="text-yellow-100 text-sm font-medium" data-astro-cid-kg5bim7r>Vos points</p> <p id="user-points" class="text-3xl font-bold text-white" data-astro-cid-kg5bim7r>0</p> </div> </div> </div> </div> <!-- Navigation de retour --> <div class="mb-8" data-astro-cid-kg5bim7r> <a href="/profile" class="inline-flex items-center gap-2 text-purple-200 hover:text-white transition-all" data-astro-cid-kg5bim7r> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kg5bim7r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-kg5bim7r></path> </svg>
Retour au profil
</a> </div> <!-- Grille des articles --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-astro-cid-kg5bim7r> <!-- Article 1: Orbite Mercure --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all" data-astro-cid-kg5bim7r> <div class="text-center" data-astro-cid-kg5bim7r> <h3 class="text-xl font-bold text-white mb-4" data-astro-cid-kg5bim7r>Orbite Mercure</h3> <!-- Aperçu SVG --> <div class="w-32 h-32 mx-auto mb-6 bg-black/20 rounded-full p-4" data-astro-cid-kg5bim7r> <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-kg5bim7r> <defs data-astro-cid-kg5bim7r> <linearGradient id="mercure-orbit-shop" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-kg5bim7r> <stop offset="0%" style="stop-color:#94a3b8;stop-opacity:1" data-astro-cid-kg5bim7r></stop> <stop offset="50%" style="stop-color:#64748b;stop-opacity:0.5" data-astro-cid-kg5bim7r></stop> <stop offset="100%" style="stop-color:#475569;stop-opacity:1" data-astro-cid-kg5bim7r></stop> </linearGradient> </defs> <style>
                  .mercure-planet-orbit {
                    animation: mercure-rotate 8s linear infinite;
                    transform-origin: 50% 50%;
                  }
                  .mercure-planet {
                    fill: #94a3b8;
                  }
                  @keyframes mercure-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                </style> <circle cx="100" cy="100" r="95" fill="none" stroke="url(#mercure-orbit-shop)" stroke-width="4" data-astro-cid-kg5bim7r></circle> <g class="mercure-planet-orbit" data-astro-cid-kg5bim7r> <circle cx="100" cy="5" r="7" class="mercure-planet" data-astro-cid-kg5bim7r></circle> </g> </svg> </div> <div class="space-y-4" data-astro-cid-kg5bim7r> <div class="flex items-center justify-center gap-2" data-astro-cid-kg5bim7r> <span class="text-2xl" data-astro-cid-kg5bim7r>⭐</span> <span class="text-2xl font-bold text-white" data-astro-cid-kg5bim7r>100 points</span> </div> <p class="text-purple-200 text-sm" data-astro-cid-kg5bim7r>
Un cercle orbital élégant aux tons argentés, parfait pour un style minimaliste.
</p> <button class="purchase-btn w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg" data-item="mercure" data-price="100" data-name="Orbite Mercure" data-astro-cid-kg5bim7r> <span class="btn-text" data-astro-cid-kg5bim7r>Acheter</span> </button> </div> </div> </div> <!-- Article 2: Orbite Vénus --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all" data-astro-cid-kg5bim7r> <div class="text-center" data-astro-cid-kg5bim7r> <h3 class="text-xl font-bold text-white mb-4" data-astro-cid-kg5bim7r>Orbite Vénus</h3> <!-- Aperçu SVG --> <div class="w-32 h-32 mx-auto mb-6 bg-black/20 rounded-full p-4" data-astro-cid-kg5bim7r> <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-kg5bim7r> <defs data-astro-cid-kg5bim7r> <linearGradient id="venus-orbit-shop" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-kg5bim7r> <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:1" data-astro-cid-kg5bim7r></stop> <stop offset="50%" style="stop-color:#f59e0b;stop-opacity:0.5" data-astro-cid-kg5bim7r></stop> <stop offset="100%" style="stop-color:#eab308;stop-opacity:1" data-astro-cid-kg5bim7r></stop> </linearGradient> </defs> <style>
                  .venus-planet-orbit {
                    animation: venus-rotate 12s linear infinite;
                    transform-origin: 50% 50%;
                  }
                  .venus-planet {
                    fill: #fbbf24;
                  }
                  @keyframes venus-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                </style> <circle cx="100" cy="100" r="95" fill="none" stroke="url(#venus-orbit-shop)" stroke-width="4" data-astro-cid-kg5bim7r></circle> <g class="venus-planet-orbit" data-astro-cid-kg5bim7r> <circle cx="100" cy="5" r="8" class="venus-planet" data-astro-cid-kg5bim7r></circle> </g> </svg> </div> <div class="space-y-4" data-astro-cid-kg5bim7r> <div class="flex items-center justify-center gap-2" data-astro-cid-kg5bim7r> <span class="text-2xl" data-astro-cid-kg5bim7r>⭐</span> <span class="text-2xl font-bold text-white" data-astro-cid-kg5bim7r>200 points</span> </div> <p class="text-purple-200 text-sm" data-astro-cid-kg5bim7r>
Un cercle orbital doré et lumineux, symbole de richesse et d'élégance.
</p> <button class="purchase-btn w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg" data-item="venus" data-price="200" data-name="Orbite Vénus" data-astro-cid-kg5bim7r> <span class="btn-text" data-astro-cid-kg5bim7r>Acheter</span> </button> </div> </div> </div> <!-- Article 3: Orbite Terre --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all" data-astro-cid-kg5bim7r> <div class="text-center" data-astro-cid-kg5bim7r> <h3 class="text-xl font-bold text-white mb-4" data-astro-cid-kg5bim7r>Orbite Terre</h3> <!-- Aperçu SVG --> <div class="w-32 h-32 mx-auto mb-6 bg-black/20 rounded-full p-4" data-astro-cid-kg5bim7r> <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-kg5bim7r> <defs data-astro-cid-kg5bim7r> <linearGradient id="terre-orbit-shop" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-kg5bim7r> <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" data-astro-cid-kg5bim7r></stop> <stop offset="50%" style="stop-color:#10b981;stop-opacity:0.5" data-astro-cid-kg5bim7r></stop> <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" data-astro-cid-kg5bim7r></stop> </linearGradient> </defs> <style>
                  .terre-planet-orbit {
                    animation: terre-rotate 15s linear infinite;
                    transform-origin: 50% 50%;
                  }
                  .terre-planet {
                    fill: #3b82f6;
                  }
                  @keyframes terre-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                </style> <circle cx="100" cy="100" r="95" fill="none" stroke="url(#terre-orbit-shop)" stroke-width="4" data-astro-cid-kg5bim7r></circle> <g class="terre-planet-orbit" data-astro-cid-kg5bim7r> <circle cx="100" cy="5" r="8" class="terre-planet" data-astro-cid-kg5bim7r></circle> </g> </svg> </div> <div class="space-y-4" data-astro-cid-kg5bim7r> <div class="flex items-center justify-center gap-2" data-astro-cid-kg5bim7r> <span class="text-2xl" data-astro-cid-kg5bim7r>⭐</span> <span class="text-2xl font-bold text-white" data-astro-cid-kg5bim7r>400 points</span> </div> <p class="text-purple-200 text-sm" data-astro-cid-kg5bim7r>
Un cercle orbital aux couleurs de notre planète, mélange harmonieux de bleu et de vert.
</p> <button class="purchase-btn w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg" data-item="terre" data-price="400" data-name="Orbite Terre" data-astro-cid-kg5bim7r> <span class="btn-text" data-astro-cid-kg5bim7r>Acheter</span> </button> </div> </div> </div> <!-- Article 4: Orbite Mars --> <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all" data-astro-cid-kg5bim7r> <div class="text-center" data-astro-cid-kg5bim7r> <h3 class="text-xl font-bold text-white mb-4" data-astro-cid-kg5bim7r>Orbite Mars</h3> <!-- Aperçu SVG --> <div class="w-32 h-32 mx-auto mb-6 bg-black/20 rounded-full p-4" data-astro-cid-kg5bim7r> <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full" data-astro-cid-kg5bim7r> <defs data-astro-cid-kg5bim7r> <linearGradient id="mars-orbit-shop" x1="0%" y1="0%" x2="100%" y2="100%" data-astro-cid-kg5bim7r> <stop offset="0%" style="stop-color:#ef4444;stop-opacity:1" data-astro-cid-kg5bim7r></stop> <stop offset="50%" style="stop-color:#dc2626;stop-opacity:0.5" data-astro-cid-kg5bim7r></stop> <stop offset="100%" style="stop-color:#991b1b;stop-opacity:1" data-astro-cid-kg5bim7r></stop> </linearGradient> </defs> <style>
                  .mars-planet-orbit {
                    animation: mars-rotate 20s linear infinite;
                    transform-origin: 50% 50%;
                  }
                  .mars-planet {
                    fill: #ef4444;
                  }
                  @keyframes mars-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                </style> <circle cx="100" cy="100" r="95" fill="none" stroke="url(#mars-orbit-shop)" stroke-width="4" data-astro-cid-kg5bim7r></circle> <g class="mars-planet-orbit" data-astro-cid-kg5bim7r> <circle cx="100" cy="5" r="7.5" class="mars-planet" data-astro-cid-kg5bim7r></circle> </g> </svg> </div> <div class="space-y-4" data-astro-cid-kg5bim7r> <div class="flex items-center justify-center gap-2" data-astro-cid-kg5bim7r> <span class="text-2xl" data-astro-cid-kg5bim7r>⭐</span> <span class="text-2xl font-bold text-white" data-astro-cid-kg5bim7r>600 points</span> </div> <p class="text-purple-200 text-sm" data-astro-cid-kg5bim7r>
Un cercle orbital rouge intense, évoquant la puissance et la passion de la planète rouge.
</p> <button class="purchase-btn w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg" data-item="mars" data-price="600" data-name="Orbite Mars" data-astro-cid-kg5bim7r> <span class="btn-text" data-astro-cid-kg5bim7r>Acheter</span> </button> </div> </div> </div> </div> </div> <!-- Messages de succès/erreur --> <div id="success-message" class="fixed top-24 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg transform translate-x-full transition-transform z-50" data-astro-cid-kg5bim7r> <div class="flex items-center gap-2" data-astro-cid-kg5bim7r> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kg5bim7r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-kg5bim7r></path> </svg> <span id="success-text" data-astro-cid-kg5bim7r>Achat réussi !</span> </div> </div> <div id="error-message" class="fixed top-24 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg transform translate-x-full transition-transform z-50" data-astro-cid-kg5bim7r> <div class="flex items-center gap-2" data-astro-cid-kg5bim7r> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kg5bim7r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-kg5bim7r></path> </svg> <span id="error-text" data-astro-cid-kg5bim7r>Une erreur s'est produite</span> </div> </div> </main> ${renderComponent($$result2, "FooterDashboard", $$FooterDashboard, { "data-astro-cid-kg5bim7r": true })} ` })} <!-- Modal de confirmation d'achat --> <div id="purchase-modal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden" data-astro-cid-kg5bim7r> <div class="flex items-center justify-center min-h-screen p-4" data-astro-cid-kg5bim7r> <div class="bg-white rounded-2xl p-8 max-w-md w-full" data-astro-cid-kg5bim7r> <div class="text-center" data-astro-cid-kg5bim7r> <div class="text-6xl mb-4" data-astro-cid-kg5bim7r>🛒</div> <h3 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-kg5bim7r>Confirmer le déblocage</h3> <div class="mb-6" data-astro-cid-kg5bim7r> <p class="text-gray-600 mb-2" data-astro-cid-kg5bim7r>Vous êtes sur le point de débloquer :</p> <p id="modal-item-name" class="text-xl font-bold text-purple-600 mb-2" data-astro-cid-kg5bim7r>Orbite Mercure</p> <div class="flex items-center justify-center gap-2" data-astro-cid-kg5bim7r> <span class="text-2xl" data-astro-cid-kg5bim7r>⭐</span> <span id="modal-item-price" class="text-2xl font-bold text-gray-900" data-astro-cid-kg5bim7r>25 points</span> </div> </div> <div class="flex gap-3" data-astro-cid-kg5bim7r> <button id="confirm-purchase-btn" class="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all" data-astro-cid-kg5bim7r>
Confirmer
</button> <button id="cancel-purchase-btn" class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-3 px-6 rounded-full transition-all" data-astro-cid-kg5bim7r>
Annuler
</button> </div> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/profile/shop.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/profile/shop.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/profile/shop.astro";
const $$url = "/profile/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Shop,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
