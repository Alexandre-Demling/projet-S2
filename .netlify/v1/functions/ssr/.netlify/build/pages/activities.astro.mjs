/* empty css                                 */
import { e as createComponent, n as renderScript, p as renderHead, k as renderComponent, h as addAttribute, r as renderTemplate } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { a as getAllEvents, b as getImageUrl, f as formatDate } from '../chunks/pocketbase_CBsTR6xY.mjs';
import { $ as $$HeaderDashboard } from '../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../chunks/FooterDashboard_BBVcmSux.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const events = await getAllEvents();
  const allCategories = [
    "Sport",
    "Soir\xE9e",
    "Cin\xE9ma",
    "Jeux",
    "Musique",
    "Chill",
    "Voyages",
    "\xC9tudes",
    "Resto",
    "Rencontres",
    "Cuisine",
    "Shopping",
    "Culture",
    "Bien-\xEAtre",
    "B\xE9n\xE9volat"
  ];
  function getCategoryIcon(category) {
    const icons = {
      "sport": "\u26BD",
      "soir\xE9e": "\u{1F389}",
      "cin\xE9ma": "\u{1F3AC}",
      "jeux": "\u{1F3AE}",
      "musique": "\u{1F3B5}",
      "chill": "\u{1F60C}",
      "voyages": "\u2708\uFE0F",
      "\xE9tudes": "\u{1F4DA}",
      "resto": "\u{1F37D}\uFE0F",
      "rencontres": "\u{1F465}",
      "cuisine": "\u{1F468}\u200D\u{1F373}",
      "shopping": "\u{1F6CD}\uFE0F",
      "culture": "\u{1F3AD}",
      "bien-\xEAtre": "\u{1F9D8}",
      "b\xE9n\xE9volat": "\u{1F91D}"
    };
    return icons[category.toLowerCase()] || "\u{1F31F}";
  }
  function cleanHtmlText(text) {
    if (!text) return "";
    if (typeof text === "string") {
      return text.replace(/<[^>]*>/g, "").trim();
    }
    return String(text);
  }
  function getEventStatus(dateString) {
    const eventDate = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    if (eventDate > now) {
      return { status: "upcoming", label: "\xC0 venir", class: "bg-green-600" };
    } else {
      return { status: "passed", label: "Pass\xE9", class: "bg-red-600" };
    }
  }
  return renderTemplate`<html lang="fr" data-astro-cid-vps6h44j> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Activités - Dashboard</title>${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/index.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black" data-astro-cid-vps6h44j> ${renderComponent($$result, "HeaderDashboard", $$HeaderDashboard, { "data-astro-cid-vps6h44j": true })} <main class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black pt-20" data-astro-cid-vps6h44j> <!-- Hero Section --> <section class="py-16 px-4" data-astro-cid-vps6h44j> <div class="max-w-6xl mx-auto" data-astro-cid-vps6h44j> <div class="text-center mb-12" data-astro-cid-vps6h44j> <div class="flex items-center justify-center mb-6" data-astro-cid-vps6h44j> <h1 class="text-4xl md:text-5xl font-bold text-white" data-astro-cid-vps6h44j>Découvrez les activités</h1> </div> <p class="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed mb-8" data-astro-cid-vps6h44j>
Trouvez l'activité parfaite pour vous ! Sport, culture, musique, cinéma... il y en a pour tous les goûts dans la communauté étudiante!
</p> </div> <!-- Filtres avec scroll horizontal --> <div class="mb-8" data-astro-cid-vps6h44j> <div class="bg-purple-800/30 rounded-2xl p-6 backdrop-blur-sm border border-purple-700/50" data-astro-cid-vps6h44j> <div class="flex items-center gap-4" data-astro-cid-vps6h44j> <!-- Filtres par catégorie avec scroll horizontal --> <div class="flex-1 min-w-0" data-astro-cid-vps6h44j> <div class="flex gap-3 pb-2 scroll-container" style="overflow-x: auto; overflow-y: hidden; white-space: nowrap; scrollbar-width: none; -ms-overflow-style: none;" data-astro-cid-vps6h44j> <button class="filter-btn active inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/30 border border-white/30 whitespace-nowrap" data-category="all" style="flex-shrink: 0;" data-astro-cid-vps6h44j>
☀️ Toutes
</button> ${allCategories.map((category) => renderTemplate`<button class="filter-btn inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/20 border border-white/20 whitespace-nowrap"${addAttribute(category.toLowerCase(), "data-category")} style="flex-shrink: 0;" data-astro-cid-vps6h44j> ${getCategoryIcon(category)} ${category} </button>`)} </div> </div> <!-- Section droite avec bouton créer et filtre date --> <div class="flex flex-col gap-3 flex-shrink-0" data-astro-cid-vps6h44j> <!-- Bouton Créer une activité - Style jaune avec hover --> <a href="/creer" class="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-sm whitespace-nowrap border-2 border-yellow-400 hover:border-yellow-500" data-astro-cid-vps6h44j> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" data-astro-cid-vps6h44j> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-astro-cid-vps6h44j></path> </svg>
Créer une activité
</a> <!-- Filtre par date --> <select id="date-filter" class="px-4 py-2 rounded-full backdrop-blur-sm text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer text-sm" style="background: rgba(255, 255, 255, 0.2); color: white;" data-astro-cid-vps6h44j> <option value="all" style="background: #6b46c1; color: white;" data-astro-cid-vps6h44j> Par date</option> <option value="today" style="background: #6b46c1; color: white;" data-astro-cid-vps6h44j>Aujourd'hui</option> <option value="week" style="background: #6b46c1; color: white;" data-astro-cid-vps6h44j>Cette semaine</option> <option value="month" style="background: #6b46c1; color: white;" data-astro-cid-vps6h44j>Ce mois</option> </select> </div> </div> </div> </div> <!-- Grille des événements --> <div id="events-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-vps6h44j> ${events.map((event) => {
    const imageUrl = event.image_event ? getImageUrl(event, event.image_event) : null;
    const eventStatus = getEventStatus(event.date_event);
    return renderTemplate`<a${addAttribute(`/activities/${event.id}`, "href")} class="block hover-card" data-astro-cid-vps6h44j> <div class="event-card relative rounded-lg overflow-hidden h-64 group cursor-pointer"${addAttribute(event.categorie_event.toLowerCase(), "data-category")}${addAttribute(event.date_event, "data-date")}${addAttribute(event.nb_points_gagne, "data-points")}${addAttribute(event.nb_users_max, "data-spots")}${addAttribute(eventStatus.status, "data-status")}${addAttribute(event.id, "data-event-id")} style="position: relative; height: 16rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);" data-astro-cid-vps6h44j> ${imageUrl ? renderTemplate`<img${addAttribute(imageUrl || "/placeholder.svg", "src")}${addAttribute(event.nom_event, "alt")} class="card-image w-full h-full object-cover" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" data-astro-cid-vps6h44j>` : null} <!-- Fallback background si pas d'image --> <div${addAttribute(`w-full h-full bg-purple-800 flex items-center justify-center ${imageUrl ? "hidden" : "flex"}`, "class")} style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" data-astro-cid-vps6h44j> <div class="text-center p-4" data-astro-cid-vps6h44j> <div class="text-6xl mb-2" data-astro-cid-vps6h44j>${getCategoryIcon(event.categorie_event)}</div> <p class="text-white text-sm font-medium" data-astro-cid-vps6h44j>${event.nom_event || "\xC9v\xE9nement"}</p> </div> </div> <!--  Badge de statut (À venir / Passé) avec indicateur de points --> <div${addAttribute(`absolute top-4 right-4 z-30 px-3 py-1 rounded-full text-white text-xs font-medium ${eventStatus.class} flex items-center gap-1`, "class")} style="box-shadow: 0 2px 8px rgba(0,0,0,0.3);" data-astro-cid-vps6h44j> ${eventStatus.label} ${event.points_distributed && eventStatus.status === "passed" && renderTemplate`<span class="text-yellow-300" data-astro-cid-vps6h44j></span>`} </div> <!-- Overlay gradient pour la lisibilité --> <div class="card-overlay bg-gradient-to-t from-black via-transparent to-transparent" style="position: absolute; bottom: 0; left: 0; right: 0; height: 50%; z-index: 10; transition: all 0.3s ease;" data-astro-cid-vps6h44j></div> <!-- Contenu de la carte --> <div class="card-content text-white p-4" style="position: absolute; bottom: 0; left: 0; right: 0; z-index: 20; transition: all 0.3s ease;" data-astro-cid-vps6h44j> <h2 class="card-title text-xl font-bold mb-2 text-white" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.8); transition: all 0.3s ease;" data-astro-cid-vps6h44j> ${event.nom_event} </h2> <div class="card-info space-y-1 mb-3" style="transition: all 0.3s ease;" data-astro-cid-vps6h44j> <div class="flex items-center text-white text-sm" data-astro-cid-vps6h44j> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vps6h44j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-vps6h44j></path> </svg> <span style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);" data-astro-cid-vps6h44j>${formatDate(event.date_event)}</span> </div> ${event.lieu_event && renderTemplate`<div class="flex items-center text-white text-sm" data-astro-cid-vps6h44j> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vps6h44j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-vps6h44j></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-vps6h44j></path> </svg> <span style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);" data-astro-cid-vps6h44j>${cleanHtmlText(event.lieu_event)}</span> </div>`} <div class="flex items-center text-white text-sm" data-astro-cid-vps6h44j> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-vps6h44j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" data-astro-cid-vps6h44j></path> </svg> <span style="text-shadow: 1px 1px 2px rgba(0,0,0,0.8);" data-astro-cid-vps6h44j>${event.nb_users_max} Personnes</span> </div> </div> <div class="card-badges flex flex-wrap gap-2" style="transition: all 0.3s ease;" data-astro-cid-vps6h44j> <span class="bg-purple-600 text-white text-xs px-2 py-1 rounded shadow-lg" style="transition: all 0.3s ease;" data-astro-cid-vps6h44j> ${getCategoryIcon(event.categorie_event)} ${event.categorie_event || "Divers"} </span> <!-- ✅ Affichage des points automatiques avec statut --> <span${addAttribute(`text-xs px-2 py-1 rounded shadow-lg font-medium ${eventStatus.status === "passed" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"}`, "class")} style="transition: all 0.3s ease;" data-astro-cid-vps6h44j> ${eventStatus.status === "passed" ? "\u2705 Points distribu\xE9s" : "\u2B50 10 pts instantan\xE9ment"} </span> </div> </div> <!-- Bouton d'action --> <div class="card-button bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg" style="position: absolute; bottom: 16px; right: 16px; z-index: 30; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);" data-astro-cid-vps6h44j> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="transition: all 0.3s ease;" data-astro-cid-vps6h44j> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-astro-cid-vps6h44j></path> </svg> </div> </div> </a>`;
  })} </div> <!-- Message si aucun événement --> <div id="no-events" class="hidden text-center py-12" data-astro-cid-vps6h44j> <div class="text-6xl mb-4" data-astro-cid-vps6h44j>🔍</div> <h3 class="text-2xl font-bold text-white mb-2" data-astro-cid-vps6h44j>Aucune activité trouvée</h3> <p class="text-purple-200" data-astro-cid-vps6h44j>Essayez de modifier vos filtres pour voir plus d'activités.</p> </div> </div> </section> </main> ${renderComponent($$result, "FooterDashboard", $$FooterDashboard, { "data-astro-cid-vps6h44j": true })} ${renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/index.astro?astro&type=script&index=1&lang.ts")} </body></html>`;
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/index.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/index.astro";
const $$url = "/activities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
