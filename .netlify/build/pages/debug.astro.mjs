/* empty css                                 */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_GrwkG2yk.mjs';
import { $ as $$HeaderDashboard } from '../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../chunks/FooterDashboard_BBVcmSux.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Debug PocketBase - Orbite", "data-astro-cid-5gtirzdt": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderDashboard", $$HeaderDashboard, { "data-astro-cid-5gtirzdt": true })} ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 pt-20" data-astro-cid-5gtirzdt> <div class="max-w-4xl mx-auto px-4 py-8" data-astro-cid-5gtirzdt> <h1 class="text-3xl font-bold text-white mb-8 text-center" data-astro-cid-5gtirzdt>
🔧 Diagnostic PocketBase
</h1> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl" data-astro-cid-5gtirzdt> <div id="debug-results" class="space-y-4" data-astro-cid-5gtirzdt> <div class="text-white" data-astro-cid-5gtirzdt>Chargement des diagnostics...</div> </div> <button id="run-debug" class="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all" data-astro-cid-5gtirzdt>
🔄 Relancer les tests
</button> </div> </div> </div> ${renderComponent($$result2, "FooterDashboard", $$FooterDashboard, { "data-astro-cid-5gtirzdt": true })} ` })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/debug/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/debug/index.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/debug/index.astro";
const $$url = "/debug";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
