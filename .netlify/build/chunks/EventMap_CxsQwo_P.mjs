import { e as createComponent, f as createAstro, r as renderTemplate, l as defineScriptVars, h as addAttribute, m as maybeRenderHead } from './astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$EventMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EventMap;
  const {
    height = "h-64",
    initialLat = 47.5101,
    initialLng = 6.7988,
    zoom = 13,
    interactive = true,
    showLocationPicker = false
  } = Astro2.props;
  const mapId = `map-${Math.random().toString(36).substr(2, 9)}`;
  return renderTemplate(_a || (_a = __template(["", "<div", " data-astro-cid-ja76sdrp> <div", ' class="w-full h-full" data-astro-cid-ja76sdrp></div> ', " </div> <script>(function(){", `
  document.addEventListener('DOMContentLoaded', () => {
    // V\xE9rifier si Leaflet est disponible
    if (typeof L === 'undefined') {
      console.error('Leaflet n\\'est pas charg\xE9');
      return;
    }

    try {
      // Initialiser la carte
      const map = L.map(mapId, {
        center: [initialLat, initialLng],
        zoom: zoom,
        zoomControl: interactive,
        dragging: interactive,
        touchZoom: interactive,
        scrollWheelZoom: interactive,
        doubleClickZoom: interactive,
        boxZoom: interactive,
        keyboard: interactive
      });

      // Ajouter les tuiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Cr\xE9er l'ic\xF4ne personnalis\xE9e avec le logo Orbite
      const orbiteIcon = L.divIcon({
        className: 'custom-orbite-marker',
        html: \`
          <div class="orbite-marker-container">
            <div class="orbite-marker-pulse"></div>
            <img src="/images/logo-orbite.svg" alt="Orbite" class="orbite-marker-logo" />
          </div>
        \`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });

      // Variable pour stocker le marqueur
      let marker = L.marker([initialLat, initialLng], { 
        icon: orbiteIcon, 
        draggable: showLocationPicker 
      }).addTo(map);

      if (showLocationPicker) {
        // Fonction pour mettre \xE0 jour les coordonn\xE9es
        function updateCoordinates(lat, lng) {
          // Dispatch un \xE9v\xE9nement personnalis\xE9 avec les nouvelles coordonn\xE9es
          const event = new CustomEvent('locationSelected', {
            detail: { lat, lng }
          });
          document.dispatchEvent(event);
        }

        // Mettre \xE0 jour les coordonn\xE9es lorsque le marqueur est d\xE9plac\xE9
        marker.on('dragend', function(e) {
          const position = marker.getLatLng();
          updateCoordinates(position.lat, position.lng);
        });

        // Ajouter un marqueur lorsqu'on clique sur la carte
        map.on('click', function(e) {
          map.removeLayer(marker);
          marker = L.marker(e.latlng, { icon: orbiteIcon, draggable: true }).addTo(map);
          updateCoordinates(e.latlng.lat, e.latlng.lng);
          
          marker.on('dragend', function(e) {
            const position = marker.getLatLng();
            updateCoordinates(position.lat, position.lng);
          });
        });

        // Initialiser avec les coordonn\xE9es par d\xE9faut
        updateCoordinates(initialLat, initialLng);
      }

      // Exposer la carte globalement pour pouvoir l'utiliser depuis l'ext\xE9rieur
      window[\`map_\${mapId}\`] = map;
      window[\`marker_\${mapId}\`] = marker;

    } catch (error) {
      console.error("Erreur lors de l'initialisation de la carte:", error);
      const mapContainer = document.getElementById(mapId);
      if (mapContainer) {
        mapContainer.innerHTML = '<div class="flex items-center justify-center h-full bg-red-900/50 text-white">Erreur lors du chargement de la carte</div>';
      }
    }
  });
})();<\/script> `], ["", "<div", " data-astro-cid-ja76sdrp> <div", ' class="w-full h-full" data-astro-cid-ja76sdrp></div> ', " </div> <script>(function(){", `
  document.addEventListener('DOMContentLoaded', () => {
    // V\xE9rifier si Leaflet est disponible
    if (typeof L === 'undefined') {
      console.error('Leaflet n\\\\'est pas charg\xE9');
      return;
    }

    try {
      // Initialiser la carte
      const map = L.map(mapId, {
        center: [initialLat, initialLng],
        zoom: zoom,
        zoomControl: interactive,
        dragging: interactive,
        touchZoom: interactive,
        scrollWheelZoom: interactive,
        doubleClickZoom: interactive,
        boxZoom: interactive,
        keyboard: interactive
      });

      // Ajouter les tuiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Cr\xE9er l'ic\xF4ne personnalis\xE9e avec le logo Orbite
      const orbiteIcon = L.divIcon({
        className: 'custom-orbite-marker',
        html: \\\`
          <div class="orbite-marker-container">
            <div class="orbite-marker-pulse"></div>
            <img src="/images/logo-orbite.svg" alt="Orbite" class="orbite-marker-logo" />
          </div>
        \\\`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });

      // Variable pour stocker le marqueur
      let marker = L.marker([initialLat, initialLng], { 
        icon: orbiteIcon, 
        draggable: showLocationPicker 
      }).addTo(map);

      if (showLocationPicker) {
        // Fonction pour mettre \xE0 jour les coordonn\xE9es
        function updateCoordinates(lat, lng) {
          // Dispatch un \xE9v\xE9nement personnalis\xE9 avec les nouvelles coordonn\xE9es
          const event = new CustomEvent('locationSelected', {
            detail: { lat, lng }
          });
          document.dispatchEvent(event);
        }

        // Mettre \xE0 jour les coordonn\xE9es lorsque le marqueur est d\xE9plac\xE9
        marker.on('dragend', function(e) {
          const position = marker.getLatLng();
          updateCoordinates(position.lat, position.lng);
        });

        // Ajouter un marqueur lorsqu'on clique sur la carte
        map.on('click', function(e) {
          map.removeLayer(marker);
          marker = L.marker(e.latlng, { icon: orbiteIcon, draggable: true }).addTo(map);
          updateCoordinates(e.latlng.lat, e.latlng.lng);
          
          marker.on('dragend', function(e) {
            const position = marker.getLatLng();
            updateCoordinates(position.lat, position.lng);
          });
        });

        // Initialiser avec les coordonn\xE9es par d\xE9faut
        updateCoordinates(initialLat, initialLng);
      }

      // Exposer la carte globalement pour pouvoir l'utiliser depuis l'ext\xE9rieur
      window[\\\`map_\\\${mapId}\\\`] = map;
      window[\\\`marker_\\\${mapId}\\\`] = marker;

    } catch (error) {
      console.error("Erreur lors de l'initialisation de la carte:", error);
      const mapContainer = document.getElementById(mapId);
      if (mapContainer) {
        mapContainer.innerHTML = '<div class="flex items-center justify-center h-full bg-red-900/50 text-white">Erreur lors du chargement de la carte</div>';
      }
    }
  });
})();<\/script> `])), maybeRenderHead(), addAttribute(`w-full ${height} rounded-lg overflow-hidden relative`, "class"), addAttribute(mapId, "id"), showLocationPicker && renderTemplate`<div class="absolute top-2 left-2 z-[1000] bg-white/90 backdrop-blur-sm rounded-lg p-2 text-sm text-gray-700" data-astro-cid-ja76sdrp> <span class="text-purple-600" data-astro-cid-ja76sdrp>📍</span> Cliquez pour placer votre événement
</div>`, defineScriptVars({ mapId, initialLat, initialLng, zoom, interactive, showLocationPicker }));
}, "C:/Users/alexa/Documents/orbite-astro/src/components/EventMap.astro", void 0);

export { $$EventMap as $ };
