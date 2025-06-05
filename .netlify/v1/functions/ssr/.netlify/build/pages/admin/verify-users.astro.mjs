/* empty css                                    */
import { e as createComponent, k as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_GrwkG2yk.mjs';
export { renderers } from '../../renderers.mjs';

const $$VerifyUsers = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "V\xE9rification des utilisateurs - Admin" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 py-8"> <div class="max-w-4xl mx-auto px-4"> <div class="bg-white rounded-lg shadow p-6"> <h1 class="text-2xl font-bold mb-6">🔧 Vérification manuelle des utilisateurs</h1> <div class="mb-6"> <button id="load-users" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
Charger les utilisateurs non vérifiés
</button> </div> <div id="users-list" class="space-y-4"> <!-- Les utilisateurs seront chargés ici --> </div> </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/verify-users.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/verify-users.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/admin/verify-users.astro";
const $$url = "/admin/verify-users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VerifyUsers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
