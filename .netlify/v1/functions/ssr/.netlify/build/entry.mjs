import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D6pJCGXq.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/activities/_id_.astro.mjs');
const _page3 = () => import('./pages/activities.astro.mjs');
const _page4 = () => import('./pages/admin/award-points.astro.mjs');
const _page5 = () => import('./pages/admin/points-check.astro.mjs');
const _page6 = () => import('./pages/admin/verify-users.astro.mjs');
const _page7 = () => import('./pages/api/auto-check-points.astro.mjs');
const _page8 = () => import('./pages/api/award-points.astro.mjs');
const _page9 = () => import('./pages/api/check-points.astro.mjs');
const _page10 = () => import('./pages/api/comment.astro.mjs');
const _page11 = () => import('./pages/api/participation.astro.mjs');
const _page12 = () => import('./pages/api/shop/equip.astro.mjs');
const _page13 = () => import('./pages/api/shop/purchase.astro.mjs');
const _page14 = () => import('./pages/auth/login.astro.mjs');
const _page15 = () => import('./pages/auth/register.astro.mjs');
const _page16 = () => import('./pages/auth/verification.astro.mjs');
const _page17 = () => import('./pages/contact.astro.mjs');
const _page18 = () => import('./pages/creer.astro.mjs');
const _page19 = () => import('./pages/dashboard/about.astro.mjs');
const _page20 = () => import('./pages/dashboard/contact.astro.mjs');
const _page21 = () => import('./pages/dashboard/legal/a-quoi-ca-sert.astro.mjs');
const _page22 = () => import('./pages/dashboard/legal/conditions-generales.astro.mjs');
const _page23 = () => import('./pages/dashboard/legal/faq.astro.mjs');
const _page24 = () => import('./pages/dashboard/legal/les-fonctionnalites.astro.mjs');
const _page25 = () => import('./pages/dashboard/legal/mentions-legales.astro.mjs');
const _page26 = () => import('./pages/dashboard/legal/politique-confidentialite.astro.mjs');
const _page27 = () => import('./pages/dashboard.astro.mjs');
const _page28 = () => import('./pages/debug.astro.mjs');
const _page29 = () => import('./pages/help.astro.mjs');
const _page30 = () => import('./pages/legal/a-quoi-ca-sert.astro.mjs');
const _page31 = () => import('./pages/legal/conditions-generales.astro.mjs');
const _page32 = () => import('./pages/legal/faq.astro.mjs');
const _page33 = () => import('./pages/legal/les-fonctionnalites.astro.mjs');
const _page34 = () => import('./pages/legal/mentions-legales.astro.mjs');
const _page35 = () => import('./pages/legal/politique-confidentialite.astro.mjs');
const _page36 = () => import('./pages/map.astro.mjs');
const _page37 = () => import('./pages/profile/shop.astro.mjs');
const _page38 = () => import('./pages/profile.astro.mjs');
const _page39 = () => import('./pages/users/_id_.astro.mjs');
const _page40 = () => import('./pages/verify-email.astro.mjs');
const _page41 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/activities/[id].astro", _page2],
    ["src/pages/activities/index.astro", _page3],
    ["src/pages/admin/award-points.astro", _page4],
    ["src/pages/admin/points-check.astro", _page5],
    ["src/pages/admin/verify-users.astro", _page6],
    ["src/pages/api/auto-check-points.js", _page7],
    ["src/pages/api/award-points.js", _page8],
    ["src/pages/api/check-points.js", _page9],
    ["src/pages/api/comment.js", _page10],
    ["src/pages/api/participation.js", _page11],
    ["src/pages/api/shop/equip.js", _page12],
    ["src/pages/api/shop/purchase.js", _page13],
    ["src/pages/auth/login.astro", _page14],
    ["src/pages/auth/register.astro", _page15],
    ["src/pages/auth/verification.astro", _page16],
    ["src/pages/contact.astro", _page17],
    ["src/pages/creer/index.astro", _page18],
    ["src/pages/dashboard/about.astro", _page19],
    ["src/pages/dashboard/contact.astro", _page20],
    ["src/pages/dashboard/legal/a-quoi-ca-sert.astro", _page21],
    ["src/pages/dashboard/legal/conditions-generales.astro", _page22],
    ["src/pages/dashboard/legal/faq.astro", _page23],
    ["src/pages/dashboard/legal/les-fonctionnalites.astro", _page24],
    ["src/pages/dashboard/legal/mentions-legales.astro", _page25],
    ["src/pages/dashboard/legal/politique-confidentialite.astro", _page26],
    ["src/pages/dashboard.astro", _page27],
    ["src/pages/debug/index.astro", _page28],
    ["src/pages/help.astro", _page29],
    ["src/pages/legal/a-quoi-ca-sert.astro", _page30],
    ["src/pages/legal/conditions-generales.astro", _page31],
    ["src/pages/legal/faq.astro", _page32],
    ["src/pages/legal/les-fonctionnalites.astro", _page33],
    ["src/pages/legal/mentions-legales.astro", _page34],
    ["src/pages/legal/politique-confidentialite.astro", _page35],
    ["src/pages/map.astro", _page36],
    ["src/pages/profile/shop.astro", _page37],
    ["src/pages/profile/index.astro", _page38],
    ["src/pages/users/[id].astro", _page39],
    ["src/pages/verify-email.astro", _page40],
    ["src/pages/index.astro", _page41]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "31c83b26-4e96-4acf-b121-cb55c96c8dc8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
