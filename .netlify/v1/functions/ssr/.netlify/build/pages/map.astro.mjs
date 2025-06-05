/* empty css                                 */
import { e as createComponent, r as renderTemplate, l as defineScriptVars, n as renderScript, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CIg22j6S.mjs';
import { $ as $$HeaderDashboard } from '../chunks/HeaderDashboard_L5qrl61F.mjs';
import { a as getAllEvents } from '../chunks/pocketbase_CBsTR6xY.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const events = await getAllEvents();
  const eventsWithLocation = events.filter((event) => {
    if (!event.location) return false;
    try {
      const location = typeof event.location === "string" ? JSON.parse(event.location) : event.location;
      return location && location.lat && location.lng;
    } catch {
      return false;
    }
  });
  console.log(`\u{1F4CD} ${eventsWithLocation.length} \xE9v\xE9nements avec localisation trouv\xE9s`);
  return renderTemplate(_a || (_a = __template(["", " <!-- Leaflet JavaScript --> ", " <script>(function(){", `
  document.addEventListener('DOMContentLoaded', async () => {
    // Coordonn\xE9es de Montb\xE9liard (centre par d\xE9faut)
    const montbeliardCoords = [47.5109, 6.7989];
    
    // Initialiser la carte
    const map = L.map('map', {
      center: montbeliardCoords,
      zoom: 13,
      zoomControl: true,
      attributionControl: true
    });

    // Ajouter les tuiles de la carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Fonction pour obtenir l'ic\xF4ne de cat\xE9gorie
    function getCategoryIcon(category) {
      const icons = {
        'sport': '\u{1F30D}',
        'soir\xE9e': '\u{1F389}',
        'cin\xE9ma': '\u{1F3AC}',
        'jeux': '\u{1F3AE}',
        'musique': '\u{1F3B5}',
        'chill': '\u{1F60C}',
        'voyages': '\u2708\uFE0F',
        '\xE9tudes': '\u{1F4DA}',
        'resto': '\u{1F37D}\uFE0F',
        'rencontres': '\u{1F465}',
        'cuisine': '\u{1F468}\u200D\u{1F373}',
        'shopping': '\u{1F6CD}\uFE0F',
        'culture': '\u{1F3AD}',
        'bien-\xEAtre': '\u{1F9D8}',
        'conf\xE9rence': '\u{1F3A4}',
        'atelier': '\u{1F6E0}\uFE0F',
        'divers': '\u{1F4E6}'
      };
      return icons[category?.toLowerCase()] || '\u{1F31F}';
    }

    // Fonction pour formater la date
    function formatDate(dateString) {
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch {
        return 'Date non d\xE9finie';
      }
    }

    // Cr\xE9er l'ic\xF4ne personnalis\xE9e avec le logo Orbite
    const orbiteIcon = L.divIcon({
      className: 'custom-orbite-marker',
      html: \`
        <div class="orbite-marker-container">
          <div class="orbite-marker-pulse"></div>
          <img src="/images/logo-orbite.svg" alt="Orbite" class="orbite-marker-logo" />
        </div>
      \`,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -60]
    });

    // Groupe de marqueurs pour g\xE9rer les clusters si n\xE9cessaire
    const markers = [];

    // Ajouter un marqueur pour chaque \xE9v\xE9nement
    eventsWithLocation.forEach(event => {
      try {
        // Parser les coordonn\xE9es
        const location = typeof event.location === 'string' 
          ? JSON.parse(event.location) 
          : event.location;
        
        if (!location || !location.lat || !location.lng) {
          console.warn('Coordonn\xE9es invalides pour l\\'\xE9v\xE9nement:', event.id);
          return;
        }

        const lat = parseFloat(location.lat);
        const lng = parseFloat(location.lng);

        if (isNaN(lat) || isNaN(lng)) {
          console.warn('Coordonn\xE9es non num\xE9riques pour l\\'\xE9v\xE9nement:', event.id);
          return;
        }

        // Cr\xE9er le marqueur
        const marker = L.marker([lat, lng], { 
          icon: orbiteIcon,
          title: event.nom_event
        }).addTo(map);

        // Cr\xE9er le contenu du popup
        const popupContent = \`
          <div class="orbite-popup-event">
            <div class="flex items-start space-x-3 p-2">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-lg">\${getCategoryIcon(event.categorie_event)}</span>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-purple-900 text-base leading-tight mb-1">
                  \${event.nom_event || '\xC9v\xE9nement sans nom'}
                </h3>
                <div class="space-y-1 text-xs text-gray-600">
                  <div class="flex items-center">
                    <span class="mr-1">\u{1F4C5}</span>
                    <span>\${formatDate(event.date_event)}</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-1">\u{1F4CD}</span>
                    <span>\${event.lieu_event || 'Lieu non sp\xE9cifi\xE9'}</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-1">\u{1F465}</span>
                    <span>\${event.nb_users_max || 0} participants max</span>
                  </div>
                  \${event.nb_points_gagne ? \`
                    <div class="flex items-center">
                      <span class="mr-1">\u2B50</span>
                      <span class="text-yellow-600 font-medium">\${event.nb_points_gagne} points</span>
                    </div>
                  \` : ''}
                </div>
                
              </div>
            </div>
          </div>
        \`;

        // Ajouter le popup
        marker.bindPopup(popupContent, {
          maxWidth: 280,
          className: 'orbite-popup-container-event',
          offset: [0, -10]
        });

        // Ajouter les \xE9v\xE9nements hover - afficher le grand popup au survol
        marker.on('mouseover', function() {
          // Ouvrir le popup au survol
          marker.openPopup();

          // Effet visuel sur le marqueur
          const markerElement = marker.getElement();
          if (markerElement) {
            const logo = markerElement.querySelector('.orbite-marker-logo');
            if (logo) {
              logo.style.transform = 'scale(1.2)';
              logo.style.filter = 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))';
            }
          }
        });

        marker.on('mouseout', function() {
          // Fermer le popup quand on quitte le survol
          marker.closePopup();

          // Reset de l'effet visuel
          const markerElement = marker.getElement();
          if (markerElement) {
            const logo = markerElement.querySelector('.orbite-marker-logo');
            if (logo) {
              logo.style.transform = 'scale(1)';
              logo.style.filter = 'none';
            }
          }
        });

        // Ajouter l'\xE9v\xE9nement click - redirection imm\xE9diate
        marker.on('click', function() {
          // Redirection imm\xE9diate vers la page de d\xE9tail
          window.location.href = \`/activities/\${event.id}\`;
        });

        markers.push(marker);

      } catch (error) {
        console.error('Erreur lors de la cr\xE9ation du marqueur pour l\\'\xE9v\xE9nement:', event.id, error);
      }
    });

    // Ajuster la vue pour inclure tous les marqueurs
    if (markers.length > 0) {
      const group = new L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
      
      // Limiter le zoom maximum
      if (map.getZoom() > 15) {
        map.setZoom(15);
      }
    }

    // Ajouter des contr\xF4les personnalis\xE9s
    const customControl = L.control({ position: 'bottomright' });
    customControl.onAdd = function(map) {
      const div = L.DomUtil.create('div', 'custom-control');
      div.innerHTML = \`
        <div class="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-gray-300 shadow-lg">
          <div class="flex items-center space-x-2 text-gray-700 text-sm">
            <span class="text-purple-600">\u{1F3AF}</span>
            <span>Zoom: <span id="zoom-level">\${map.getZoom()}</span></span>
          </div>
        </div>
      \`;
      return div;
    };
    customControl.addTo(map);

    // Mettre \xE0 jour le niveau de zoom
    map.on('zoomend', function() {
      const zoomLevel = document.getElementById('zoom-level');
      if (zoomLevel) {
        zoomLevel.textContent = map.getZoom();
      }
    });

    console.log(\`\u2705 \${markers.length} marqueurs ajout\xE9s \xE0 la carte\`);
  });
})();<\/script> `], ["", " <!-- Leaflet JavaScript --> ", " <script>(function(){", `
  document.addEventListener('DOMContentLoaded', async () => {
    // Coordonn\xE9es de Montb\xE9liard (centre par d\xE9faut)
    const montbeliardCoords = [47.5109, 6.7989];
    
    // Initialiser la carte
    const map = L.map('map', {
      center: montbeliardCoords,
      zoom: 13,
      zoomControl: true,
      attributionControl: true
    });

    // Ajouter les tuiles de la carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Fonction pour obtenir l'ic\xF4ne de cat\xE9gorie
    function getCategoryIcon(category) {
      const icons = {
        'sport': '\u{1F30D}',
        'soir\xE9e': '\u{1F389}',
        'cin\xE9ma': '\u{1F3AC}',
        'jeux': '\u{1F3AE}',
        'musique': '\u{1F3B5}',
        'chill': '\u{1F60C}',
        'voyages': '\u2708\uFE0F',
        '\xE9tudes': '\u{1F4DA}',
        'resto': '\u{1F37D}\uFE0F',
        'rencontres': '\u{1F465}',
        'cuisine': '\u{1F468}\u200D\u{1F373}',
        'shopping': '\u{1F6CD}\uFE0F',
        'culture': '\u{1F3AD}',
        'bien-\xEAtre': '\u{1F9D8}',
        'conf\xE9rence': '\u{1F3A4}',
        'atelier': '\u{1F6E0}\uFE0F',
        'divers': '\u{1F4E6}'
      };
      return icons[category?.toLowerCase()] || '\u{1F31F}';
    }

    // Fonction pour formater la date
    function formatDate(dateString) {
      try {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch {
        return 'Date non d\xE9finie';
      }
    }

    // Cr\xE9er l'ic\xF4ne personnalis\xE9e avec le logo Orbite
    const orbiteIcon = L.divIcon({
      className: 'custom-orbite-marker',
      html: \\\`
        <div class="orbite-marker-container">
          <div class="orbite-marker-pulse"></div>
          <img src="/images/logo-orbite.svg" alt="Orbite" class="orbite-marker-logo" />
        </div>
      \\\`,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -60]
    });

    // Groupe de marqueurs pour g\xE9rer les clusters si n\xE9cessaire
    const markers = [];

    // Ajouter un marqueur pour chaque \xE9v\xE9nement
    eventsWithLocation.forEach(event => {
      try {
        // Parser les coordonn\xE9es
        const location = typeof event.location === 'string' 
          ? JSON.parse(event.location) 
          : event.location;
        
        if (!location || !location.lat || !location.lng) {
          console.warn('Coordonn\xE9es invalides pour l\\\\'\xE9v\xE9nement:', event.id);
          return;
        }

        const lat = parseFloat(location.lat);
        const lng = parseFloat(location.lng);

        if (isNaN(lat) || isNaN(lng)) {
          console.warn('Coordonn\xE9es non num\xE9riques pour l\\\\'\xE9v\xE9nement:', event.id);
          return;
        }

        // Cr\xE9er le marqueur
        const marker = L.marker([lat, lng], { 
          icon: orbiteIcon,
          title: event.nom_event
        }).addTo(map);

        // Cr\xE9er le contenu du popup
        const popupContent = \\\`
          <div class="orbite-popup-event">
            <div class="flex items-start space-x-3 p-2">
              <div class="flex-shrink-0">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-lg">\\\${getCategoryIcon(event.categorie_event)}</span>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-purple-900 text-base leading-tight mb-1">
                  \\\${event.nom_event || '\xC9v\xE9nement sans nom'}
                </h3>
                <div class="space-y-1 text-xs text-gray-600">
                  <div class="flex items-center">
                    <span class="mr-1">\u{1F4C5}</span>
                    <span>\\\${formatDate(event.date_event)}</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-1">\u{1F4CD}</span>
                    <span>\\\${event.lieu_event || 'Lieu non sp\xE9cifi\xE9'}</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-1">\u{1F465}</span>
                    <span>\\\${event.nb_users_max || 0} participants max</span>
                  </div>
                  \\\${event.nb_points_gagne ? \\\`
                    <div class="flex items-center">
                      <span class="mr-1">\u2B50</span>
                      <span class="text-yellow-600 font-medium">\\\${event.nb_points_gagne} points</span>
                    </div>
                  \\\` : ''}
                </div>
                
              </div>
            </div>
          </div>
        \\\`;

        // Ajouter le popup
        marker.bindPopup(popupContent, {
          maxWidth: 280,
          className: 'orbite-popup-container-event',
          offset: [0, -10]
        });

        // Ajouter les \xE9v\xE9nements hover - afficher le grand popup au survol
        marker.on('mouseover', function() {
          // Ouvrir le popup au survol
          marker.openPopup();

          // Effet visuel sur le marqueur
          const markerElement = marker.getElement();
          if (markerElement) {
            const logo = markerElement.querySelector('.orbite-marker-logo');
            if (logo) {
              logo.style.transform = 'scale(1.2)';
              logo.style.filter = 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))';
            }
          }
        });

        marker.on('mouseout', function() {
          // Fermer le popup quand on quitte le survol
          marker.closePopup();

          // Reset de l'effet visuel
          const markerElement = marker.getElement();
          if (markerElement) {
            const logo = markerElement.querySelector('.orbite-marker-logo');
            if (logo) {
              logo.style.transform = 'scale(1)';
              logo.style.filter = 'none';
            }
          }
        });

        // Ajouter l'\xE9v\xE9nement click - redirection imm\xE9diate
        marker.on('click', function() {
          // Redirection imm\xE9diate vers la page de d\xE9tail
          window.location.href = \\\`/activities/\\\${event.id}\\\`;
        });

        markers.push(marker);

      } catch (error) {
        console.error('Erreur lors de la cr\xE9ation du marqueur pour l\\\\'\xE9v\xE9nement:', event.id, error);
      }
    });

    // Ajuster la vue pour inclure tous les marqueurs
    if (markers.length > 0) {
      const group = new L.featureGroup(markers);
      map.fitBounds(group.getBounds().pad(0.1));
      
      // Limiter le zoom maximum
      if (map.getZoom() > 15) {
        map.setZoom(15);
      }
    }

    // Ajouter des contr\xF4les personnalis\xE9s
    const customControl = L.control({ position: 'bottomright' });
    customControl.onAdd = function(map) {
      const div = L.DomUtil.create('div', 'custom-control');
      div.innerHTML = \\\`
        <div class="bg-white/90 backdrop-blur-sm rounded-lg p-2 border border-gray-300 shadow-lg">
          <div class="flex items-center space-x-2 text-gray-700 text-sm">
            <span class="text-purple-600">\u{1F3AF}</span>
            <span>Zoom: <span id="zoom-level">\\\${map.getZoom()}</span></span>
          </div>
        </div>
      \\\`;
      return div;
    };
    customControl.addTo(map);

    // Mettre \xE0 jour le niveau de zoom
    map.on('zoomend', function() {
      const zoomLevel = document.getElementById('zoom-level');
      if (zoomLevel) {
        zoomLevel.textContent = map.getZoom();
      }
    });

    console.log(\\\`\u2705 \\\${markers.length} marqueurs ajout\xE9s \xE0 la carte\\\`);
  });
})();<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": "Carte - Orbite", "data-astro-cid-y6dp7ad7": true }, { "default": async ($$result2) => renderTemplate`  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""> ${renderComponent($$result2, "HeaderDashboard", $$HeaderDashboard, { "data-astro-cid-y6dp7ad7": true })}  ${maybeRenderHead()}<div class="relative" data-astro-cid-y6dp7ad7> <!-- Carte Leaflet --> <div id="map" class="w-full h-screen pt-20" data-astro-cid-y6dp7ad7></div> <!-- Légende --> <div class="absolute bottom-20 left-4 z-[1000] bg-purple-950/90 backdrop-blur-sm rounded-xl p-4 border border-purple-700/50 shadow-xl" data-astro-cid-y6dp7ad7> <h3 class="text-white font-bold text-sm mb-2" data-astro-cid-y6dp7ad7>💡 Interactions</h3> <div class="space-y-1 text-xs text-purple-200" data-astro-cid-y6dp7ad7> <div data-astro-cid-y6dp7ad7>🖱️ Survolez un pin pour voir les détails</div> <div data-astro-cid-y6dp7ad7>👆 Cliquez pour accéder à l'événement</div> </div> </div> </div> ` }), renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/map.astro?astro&type=script&index=0&lang.ts"), defineScriptVars({ eventsWithLocation }));
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/map.astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/map.astro";
const $$url = "/map";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Map,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
