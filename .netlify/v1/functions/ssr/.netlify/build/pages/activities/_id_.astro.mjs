/* empty css                                    */
import { e as createComponent, f as createAstro, r as renderTemplate, l as defineScriptVars, n as renderScript, k as renderComponent, h as addAttribute, o as Fragment, p as renderHead } from '../../chunks/astro/server_YPkzwji1.mjs';
import 'kleur/colors';
import { $ as $$HeaderDashboard } from '../../chunks/HeaderDashboard_L5qrl61F.mjs';
import { $ as $$FooterDashboard } from '../../chunks/FooterDashboard_BBVcmSux.mjs';
import { $ as $$EventMap } from '../../chunks/EventMap_CxsQwo_P.mjs';
import { g as getEventById, a as getAllEvents, b as getImageUrl } from '../../chunks/pocketbase_CBsTR6xY.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const events = await getAllEvents();
    return events.map((event) => ({
      params: { id: event.id },
      props: { event }
    }));
  } catch (error) {
    console.error("Erreur lors de la r\xE9cup\xE9ration des \xE9v\xE9nements pour getStaticPaths:", error);
    return [];
  }
}
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let event = Astro2.props.event;
  console.log("\u{1F50D} Page [id].astro - ID demand\xE9:", id);
  console.log("\u{1F4E6} \xC9v\xE9nement depuis props:", event ? "Pr\xE9sent" : "Absent");
  if (!event && id) {
    try {
      console.log("\u{1F504} Tentative de chargement c\xF4t\xE9 serveur pour:", id);
      event = await getEventById(id);
      if (!event) {
        console.log("\u274C M\xE9thode 1 \xE9chou\xE9e, tentative m\xE9thode 2...");
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        event = await getEventById(id);
      }
      if (!event) {
        console.log("\u274C M\xE9thode 2 \xE9chou\xE9e, tentative m\xE9thode 3...");
        const allEvents = await getAllEvents();
        event = allEvents.find((e) => e.id === id);
        if (event) {
          console.log("\u2705 \xC9v\xE9nement trouv\xE9 via recherche globale");
        }
      }
      if (event) {
        console.log("\u2705 \xC9v\xE9nement charg\xE9 c\xF4t\xE9 serveur:", event.nom_event);
      }
    } catch (error) {
      console.error("\u274C Erreur lors du chargement c\xF4t\xE9 serveur:", error);
    }
  }
  if (!event) {
    console.log("\u274C Aucun \xE9v\xE9nement trouv\xE9, redirection vers page d'erreur");
  }
  function formatDate(dateString) {
    if (!dateString) return "Date non sp\xE9cifi\xE9e";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Date invalide";
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      };
      return date.toLocaleDateString("fr-FR", options);
    } catch (e) {
      console.error("Erreur lors du formatage de la date:", e);
      return "Date invalide";
    }
  }
  function cleanHtmlText(text) {
    if (!text) return "";
    if (typeof text === "object" && text.lat && text.lng) {
      return `Coordonn\xE9es: ${text.lat.toFixed(4)}, ${text.lng.toFixed(4)}`;
    }
    if (typeof text === "string") {
      return text.replace(/<\/?[^>]+(>|$)/g, "");
    }
    return String(text);
  }
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
      "bien-\xEAtre": "\u{1F9D8}"
    };
    return icons[category?.toLowerCase()] || "\u{1F31F}";
  }
  let mapLat = 47.5101;
  let mapLng = 6.7988;
  let imageUrl = "";
  let currentParticipants = 0;
  let isEventPassed = false;
  if (event && event.date_event) {
    const eventDate = new Date(event.date_event);
    const now = /* @__PURE__ */ new Date();
    isEventPassed = eventDate < now;
  }
  if (event) {
    if (event.location && typeof event.location === "object" && event.location.lat && event.location.lng) {
      mapLat = parseFloat(event.location.lat);
      mapLng = parseFloat(event.location.lng);
    }
    if (event.image_event) {
      imageUrl = getImageUrl(event, event.image_event);
    }
    currentParticipants = event.participe ? event.participe.length : 0;
  }
  return renderTemplate(_a || (_a = __template(['<html lang="fr" data-astro-cid-olxbfqi3> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>', "</title>", '<!-- Leaflet CSS --><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">', '</head> <body class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black" data-astro-cid-olxbfqi3> ', " ", ` <!-- Messages de succ\xE8s/erreur --> <div id="success-message" class="fixed top-24 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg transform translate-x-full transition-transform z-50" data-astro-cid-olxbfqi3> <div class="flex items-center gap-2" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-olxbfqi3></path> </svg> <span id="success-text" data-astro-cid-olxbfqi3>Action r\xE9ussie !</span> </div> </div> <div id="error-message" class="fixed top-24 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg transform translate-x-full transition-transform z-50" data-astro-cid-olxbfqi3> <div class="flex items-center gap-2" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-olxbfqi3></path> </svg> <span id="error-text" data-astro-cid-olxbfqi3>Une erreur s'est produite</span> </div> </div> `, " <!-- Leaflet JavaScript --> ", " <!-- PocketBase JavaScript --> ", " <script>(function(){", `
    // Variables globales
    let pb;
    let currentUser = null;
    let eventData = serverEvent;
    let isParticipating = false;
    
    // Initialisation
    document.addEventListener('DOMContentLoaded', async () => {
      console.log('\u{1F680} D\xE9marrage de l\\'application');
      
      // Initialiser PocketBase
      try {
        pb = new PocketBase('https://pocketbaseprojet.alexandre-demling.fr');
        console.log('\u2705 PocketBase initialis\xE9');
      } catch (error) {
        console.error('\u274C Erreur lors de l\\'initialisation de PocketBase:', error);
        showError('Erreur de connexion \xE0 la base de donn\xE9es');
        return;
      }
      
      if (eventData) {
        await initEventPage();
      }
    });
    
    async function initEventPage() {
      try {
        console.log('\u{1F504} Initialisation de la page \xE9v\xE9nement');
        
        // V\xE9rifier l'authentification
        await checkAuthentication();
        
        // Charger les donn\xE9es de l'\xE9v\xE9nement
        if (eventData) {
          await loadEventData(eventData.id);
          await loadParticipants(eventData.id);
          setupEventListeners();
          
          // \u2705 Charger les commentaires et configurer les listeners
          await loadComments();
          setupCommentListeners();
        }
        
      } catch (error) {
        console.error('\u274C Erreur lors de l\\'initialisation:', error);
        showError('Erreur lors du chargement de la page');
      }
    }
    
    async function checkAuthentication() {
      try {
        console.log('\u{1F50D} V\xE9rification de l\\'authentification...');
        
        if (pb.authStore.isValid) {
          currentUser = pb.authStore.model;
          console.log('\u{1F464} Utilisateur connect\xE9:', currentUser?.username || currentUser?.email);
        } else {
          console.log('\u274C Utilisateur non connect\xE9');
          showAuthWarning();
        }
      } catch (error) {
        console.error('\u274C Erreur lors de la v\xE9rification de l\\'authentification:', error);
        showAuthWarning();
      }
    }
    
    function showAuthWarning() {
      const authWarning = document.getElementById('auth-warning');
      if (authWarning) authWarning.classList.remove('hidden');
      
      const participateBtn = document.getElementById('participate-btn');
      if (participateBtn) {
        participateBtn.disabled = true;
        const btnText = document.getElementById('btn-text');
        if (btnText) btnText.textContent = 'Connexion requise';
      }
    }
    
    async function loadEventData(eventId) {
      try {
        console.log('\u{1F4CB} Chargement des donn\xE9es de l\\'\xE9v\xE9nement:', eventId);
        
        // R\xE9cup\xE9rer l'\xE9v\xE9nement avec les participants
        eventData = await pb.collection('event').getOne(eventId);
        
        console.log('\u2705 Donn\xE9es de l\\'\xE9v\xE9nement charg\xE9es:', eventData);
        
        // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
        const eventDate = new Date(eventData.date_event);
        const now = new Date();
        const isEventPassed = eventDate < now;
        
        if (isEventPassed) {
          console.log('\u23F0 Cet \xE9v\xE9nement est d\xE9j\xE0 pass\xE9');
          const participateBtn = document.getElementById('participate-btn');
          if (participateBtn) {
            participateBtn.disabled = true;
            participateBtn.setAttribute('data-event-passed', 'true');
            const btnText = document.getElementById('btn-text');
            if (btnText) btnText.textContent = '\xC9v\xE9nement pass\xE9';
          }
          
          const eventPassedWarning = document.getElementById('event-passed');
          if (eventPassedWarning) eventPassedWarning.classList.remove('hidden');
        }
        
        // V\xE9rifier si l'utilisateur participe d\xE9j\xE0
        if (currentUser && eventData.participe) {
          isParticipating = eventData.participe.includes(currentUser.id);
          console.log('\u{1F3AF} Participation actuelle:', isParticipating);
        }
        
        updateParticipationButton();
        updateParticipantCount();
        
      } catch (error) {
        console.error('\u274C Erreur lors du chargement de l\\'\xE9v\xE9nement:', error);
        throw error;
      }
    }
    
    async function loadParticipants(eventId) {
      try {
        console.log('\u{1F465} Chargement des participants pour l\\'\xE9v\xE9nement:', eventId);
        
        // R\xE9cup\xE9rer l'\xE9v\xE9nement \xE0 jour
        const updatedEvent = await pb.collection('event').getOne(eventId);
        console.log('\u{1F4CB} \xC9v\xE9nement r\xE9cup\xE9r\xE9:', updatedEvent);
        console.log('\u{1F4CB} Liste des participants (IDs):', updatedEvent.participe);
        
        if (!updatedEvent || !updatedEvent.participe || updatedEvent.participe.length === 0) {
          console.log('\u2139\uFE0F Aucun participant trouv\xE9');
          showNoParticipants();
          return;
        }
        
        hideNoParticipants();
        
        const participants = [];
        
        // Charger les donn\xE9es de chaque participant avec plus de logs
        for (const userId of updatedEvent.participe) {
          try {
            console.log('\u{1F50D} Tentative de chargement de l\\'utilisateur:', userId);
            const user = await pb.collection('users').getOne(userId);
            participants.push(user);
            console.log('\u{1F464} Participant charg\xE9 avec succ\xE8s:', {
              id: user.id,
              name: user.name || user.username || user.email,
              email: user.email
            });
          } catch (error) {
            console.error('\u274C Impossible de charger l\\'utilisateur:', userId, error);
            // Ajouter un participant placeholder pour les utilisateurs non trouv\xE9s
            participants.push({
              id: userId,
              name: 'Utilisateur inconnu',
              username: 'unknown',
              email: 'unknown@example.com',
              avatar: null
            });
          }
        }
        
        console.log('\u2705 Total participants charg\xE9s:', participants.length);
        console.log('\u{1F4CA} D\xE9tails des participants:', participants);
        displayParticipants(participants);
        
        // Mettre \xE0 jour le compteur
        updateParticipantCount(participants.length);
        
      } catch (error) {
        console.error('\u274C Erreur lors du chargement des participants:', error);
        showNoParticipants();
      }
    }
    
    function displayParticipants(participants) {
      const container = document.getElementById('participants-avatars');
      if (!container) {
        console.warn('\u26A0\uFE0F Container des avatars non trouv\xE9');
        return;
      }
      
      if (participants.length === 0) {
        container.innerHTML = '';
        showNoParticipants();
        return;
      }
      
      console.log('\u{1F5BC}\uFE0F Affichage des avatars pour', participants.length, 'participants');
      
      const avatarElements = participants.map((participant, index) => {
        let avatarUrl = '';
        
        // Construire l'URL de l'avatar si disponible
        if (participant.avatar) {
          try {
            avatarUrl = pb.files.getUrl(participant, participant.avatar);
          } catch (error) {
            console.warn('\u26A0\uFE0F Erreur lors de la construction de l\\'URL avatar:', error);
          }
        }
        
        const displayName = participant.name || participant.username || participant.email || 'Utilisateur';
        
        // \u2705 Cr\xE9er un avatar par d\xE9faut avec les initiales
        const initials = displayName.substring(0, 2).toUpperCase();
        const fallbackAvatar = \`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\${initials}</text></svg>\`;
        
        return \`
      <div class="relative" data-participant-id="\${participant.id}">
        <a href="/users/\${participant.id}" class="block">
          <img 
            src="\${avatarUrl || fallbackAvatar}" 
            alt="\${displayName}" 
            class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover hover:scale-110 transition-transform cursor-pointer"
            title="Voir le profil de \${displayName}"
          />
        </a>
      </div>
    \`;
      }).join('');
      
      container.innerHTML = avatarElements;
      console.log('\u2705 Avatars affich\xE9s avec succ\xE8s');
}
    
    function showNoParticipants() {
      const noParticipants = document.getElementById('no-participants');
      if (noParticipants) noParticipants.classList.remove('hidden');
    }
    
    function hideNoParticipants() {
      const noParticipants = document.getElementById('no-participants');
      if (noParticipants) noParticipants.classList.add('hidden');
    }
    
    function updateParticipationButton() {
      const btn = document.getElementById('participate-btn');
      const btnText = document.getElementById('btn-text');
      
      if (!btn || !btnText) return;
      
      // Si pas connect\xE9
      if (!currentUser) {
        btn.disabled = true;
        btnText.textContent = 'Connexion requise';
        return;
      }
      
      // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
      const isEventPassed = btn.getAttribute('data-event-passed') === 'true';
      if (isEventPassed) {
        btn.disabled = true;
        btnText.textContent = '\xC9v\xE9nement pass\xE9';
        return;
      }
      
      const currentParticipants = eventData.participe ? eventData.participe.length : 0;
      const maxParticipants = eventData.nb_users_max || 0;
      
      // Si \xE9v\xE9nement complet et utilisateur ne participe pas
      if (currentParticipants >= maxParticipants && !isParticipating) {
        btn.disabled = true;
        btnText.textContent = '\xC9v\xE9nement complet';
        const eventFull = document.getElementById('event-full');
        if (eventFull) eventFull.classList.remove('hidden');
        return;
      }
      
      // Cacher le message d'\xE9v\xE9nement complet si affich\xE9
      const eventFull = document.getElementById('event-full');
      if (eventFull) eventFull.classList.add('hidden');
      
      // \u2705 Mettre \xE0 jour le bouton selon l'\xE9tat de participation avec nouveaux textes
      if (isParticipating) {
        btn.classList.remove('bg-yellow-400', 'hover:bg-yellow-500', 'text-black');
        btn.classList.add('bg-red-600', 'hover:bg-red-700', 'text-white');
        btnText.textContent = 'Ne plus participer (-10 points)';
      } else {
        btn.classList.remove('bg-red-600', 'hover:bg-red-700', 'text-white');
        btn.classList.add('bg-yellow-400', 'hover:bg-yellow-500', 'text-black');
        btnText.textContent = 'Je participe (+10 points)';
      }
      
      btn.disabled = false;
    }
    
    function updateParticipantCount(count = null) {
      const participantCount = count !== null ? count : (eventData.participe ? eventData.participe.length : 0);
      const countEl = document.getElementById('current-participants');
      if (countEl) {
        countEl.textContent = participantCount;
      }
      console.log('\u{1F4CA} Compteur de participants mis \xE0 jour:', participantCount);
    }
    
    function setupEventListeners() {
      const participateBtn = document.getElementById('participate-btn');
      
      if (participateBtn) {
        console.log('\u{1F517} Configuration du listener pour le bouton participer');
        
        participateBtn.addEventListener('click', async (e) => {
          e.preventDefault();
          console.log('\u{1F5B1}\uFE0F Clic sur le bouton participer d\xE9tect\xE9');
          
          if (!currentUser) {
            console.log('\u274C Utilisateur non connect\xE9');
            showError('Vous devez \xEAtre connect\xE9 pour participer');
            return;
          }
          
          // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
          const isEventPassed = participateBtn.getAttribute('data-event-passed') === 'true';
          if (isEventPassed) {
            console.log('\u23F0 Impossible de participer \xE0 un \xE9v\xE9nement pass\xE9');
            showError('Impossible de participer \xE0 un \xE9v\xE9nement pass\xE9');
            return;
          }
          
          try {
            // D\xE9sactiver le bouton pendant le traitement
            participateBtn.disabled = true;
            const btnText = document.getElementById('btn-text');
            if (btnText) btnText.textContent = 'Traitement...';
            
            console.log('\u{1F504} Traitement de la participation...');
            
            if (isParticipating) {
              console.log('\u2796 Tentative de quitter l\\'\xE9v\xE9nement');
              await leaveEvent();
            } else {
              console.log('\u2795 Tentative de rejoindre l\\'\xE9v\xE9nement');
              await joinEvent();
            }
            
          } catch (error) {
            console.error('\u274C Erreur lors de la participation:', error);
            showError(error.message || 'Erreur lors de la participation');
          } finally {
            // R\xE9activer le bouton
            participateBtn.disabled = false;
          }
        });
        
        console.log('\u2705 Listener configur\xE9 avec succ\xE8s');
      } else {
        console.error('\u274C Bouton participer non trouv\xE9');
      }
    }
    
    // \u2705 Fonction joinEvent avec v\xE9rification d'\xE9v\xE9nement pass\xE9
    async function joinEvent() {
      try {
        console.log('\u2795 D\xE9but de l\\'inscription \xE0 l\\'\xE9v\xE9nement');
        
        const eventId = eventData.id;
        
        // R\xE9cup\xE9rer l'\xE9tat actuel de l'\xE9v\xE9nement
        const currentEvent = await pb.collection('event').getOne(eventId);
        
        // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
        const eventDate = new Date(currentEvent.date_event);
        const now = new Date();
        if (eventDate < now) {
          throw new Error('Impossible de participer \xE0 un \xE9v\xE9nement pass\xE9');
        }
        
        const currentParticipants = currentEvent.participe || [];
        const maxParticipants = currentEvent.nb_users_max || 0;
        
        // V\xE9rifier si l'\xE9v\xE9nement est complet
        if (currentParticipants.length >= maxParticipants) {
          throw new Error('\xC9v\xE9nement complet');
        }
        
        // V\xE9rifier si l'utilisateur participe d\xE9j\xE0
        if (currentParticipants.includes(currentUser.id)) {
          throw new Error('Vous participez d\xE9j\xE0 \xE0 cet \xE9v\xE9nement');
        }
        
        // \u2705 \xC9TAPE 1: Ajouter 10 points \xE0 l'utilisateur IMM\xC9DIATEMENT
        console.log('\u2B50 Attribution imm\xE9diate de +10 points...');
        const currentPoints = currentUser.points || 0;
        const newPoints = currentPoints + 10;
        
        await pb.collection('users').update(currentUser.id, {
          points: newPoints
        });
        
        console.log(\`\u2705 Points attribu\xE9s: \${currentPoints} \u2192 \${newPoints}\`);
        
        // Mettre \xE0 jour l'utilisateur local
        currentUser.points = newPoints;
        
        // \u2705 \xC9TAPE 2: Ajouter l'utilisateur \xE0 la liste des participants
        const updatedParticipants = [...currentParticipants, currentUser.id];
        
        console.log('\u{1F4DD} Mise \xE0 jour de l\\'\xE9v\xE9nement avec nouveaux participants:', updatedParticipants);
        
        eventData = await pb.collection('event').update(eventId, {
          participe: updatedParticipants
        });
        
        console.log('\u2705 Inscription r\xE9ussie');
        
        // Mettre \xE0 jour l'\xE9tat local
        isParticipating = true;
        
        // Recharger l'affichage
        await loadParticipants(eventId);
        updateParticipationButton();
        updateParticipantCount();
        
        showSuccess(\`Inscription r\xE9ussie ! +10 points ajout\xE9s (Total: \${newPoints} points)\`);
        
      } catch (error) {
        console.error('\u274C Erreur lors de l\\'inscription:', error);
        throw error;
      }
    }
    
    // \u2705 Fonction leaveEvent avec v\xE9rification d'\xE9v\xE9nement pass\xE9
    async function leaveEvent() {
      try {
        console.log('\u2796 D\xE9but de la sortie de l\\'\xE9v\xE9nement');
        
        const eventId = eventData.id;
        
        // R\xE9cup\xE9rer l'\xE9tat actuel de l'\xE9v\xE9nement
        const currentEvent = await pb.collection('event').getOne(eventId);
        
        // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
        const eventDate = new Date(currentEvent.date_event);
        const now = new Date();
        if (eventDate < now) {
          throw new Error('Impossible de quitter un \xE9v\xE9nement pass\xE9');
        }
        
        // \u2705 \xC9TAPE 1: Retirer 10 points \xE0 l'utilisateur IMM\xC9DIATEMENT
        console.log('\u2B50 Retrait imm\xE9diat de -10 points...');
        const currentPoints = currentUser.points || 0;
        const newPoints = Math.max(0, currentPoints - 10); // Ne pas descendre en dessous de 0
        
        await pb.collection('users').update(currentUser.id, {
          points: newPoints
        });
        
        console.log(\`\u2705 Points retir\xE9s: \${currentPoints} \u2192 \${newPoints}\`);
        
        // Mettre \xE0 jour l'utilisateur local
        currentUser.points = newPoints;
        
        // \u2705 \xC9TAPE 2: Retirer l'utilisateur de la liste des participants
        const currentParticipants = currentEvent.participe || [];
        const updatedParticipants = currentParticipants.filter(id => id !== currentUser.id);
        
        console.log('\u{1F4DD} Mise \xE0 jour de l\\'\xE9v\xE9nement sans l\\'utilisateur:', updatedParticipants);
        
        eventData = await pb.collection('event').update(eventId, {
          participe: updatedParticipants
        });
        
        console.log('\u2705 Sortie r\xE9ussie');
        
        // Mettre \xE0 jour l'\xE9tat local
        isParticipating = false;
        
        // Recharger l'affichage
        await loadParticipants(eventId);
        updateParticipationButton();
        updateParticipantCount();
        
        showSuccess(\`Vous ne participez plus \xE0 cette activit\xE9. -10 points retir\xE9s (Total: \${newPoints} points)\`);
        
      } catch (error) {
        console.error('\u274C Erreur lors de la sortie:', error);
        throw error;
      }
    }

    // \u2705 NOUVELLES FONCTIONS POUR LES COMMENTAIRES
    
    async function submitComment() {
      const input = document.getElementById('comment-input');
      const submitBtn = document.getElementById('submit-comment');
      
      if (!input || !submitBtn) {
        console.error('\u274C \xC9l\xE9ments du formulaire non trouv\xE9s');
        return;
      }
      
      const content = input.value.trim();
      console.log('\u{1F4DD} Contenu du commentaire:', content);
      console.log('\u{1F4DD} Longueur du contenu:', content.length);
      
      if (!content) {
        showError('Veuillez \xE9crire un commentaire');
        return;
      }
      
      try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Publication...';
        
        console.log('\u{1F4E4} Envoi du commentaire...');
        
        // \u2705 Cr\xE9er FormData avec les bons noms de champs
        const formData = new FormData();
        formData.append('eventId', eventData.id);
        formData.append('comment', content); // \u2705 Utiliser 'comment' comme attendu par l'API
        
        // Ajouter les infos utilisateur
        if (currentUser) {
          formData.append('username', currentUser.name || currentUser.username || currentUser.email);
          formData.append('userToken', pb.authStore.token);
        } else {
          formData.append('username', 'Visiteur');
        }
        
        // Debug: afficher le contenu du FormData
        console.log('\u{1F4CB} FormData envoy\xE9:');
        for (let [key, value] of formData.entries()) {
          console.log(\`  \${key}: \${value}\`);
        }
        
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: formData
        });
        
        console.log('\u{1F4E5} R\xE9ponse re\xE7ue:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('\u274C Erreur HTTP:', errorText);
          throw new Error(\`Erreur \${response.status}: \${errorText}\`);
        }
        
        const result = await response.json();
        console.log('\u2705 R\xE9sultat:', result);
        
        if (result.success) {
          input.value = '';
          updateCharCount();
          await loadComments();
          showSuccess('Commentaire publi\xE9 avec succ\xE8s !');
        } else {
          throw new Error(result.error || 'Erreur lors de la publication');
        }
        
      } catch (error) {
        console.error('\u274C Erreur lors de la publication du commentaire:', error);
        showError(error.message || 'Erreur lors de la publication du commentaire');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Publier';
      }
    }
    
    async function loadComments() {
      try {
        console.log('\u{1F4AC} Chargement des commentaires...');
        
        const response = await fetch(\`/api/comment?eventId=\${eventData.id}\`);
        
        if (!response.ok) {
          throw new Error(\`Erreur \${response.status}\`);
        }
        
        const comments = await response.json();
        console.log('\u2705 Commentaires charg\xE9s:', comments.length);
        
        displayComments(comments);
        
      } catch (error) {
        console.error('\u274C Erreur lors du chargement des commentaires:', error);
        showCommentsError();
      }
    }
    
    async function deleteComment(commentId) {
      if (!confirm('\xCAtes-vous s\xFBr de vouloir supprimer ce commentaire ?')) {
        return;
      }
      
      try {
        const token = currentUser ? pb.authStore.token : '';
        const response = await fetch(\`/api/comment?id=\${commentId}&token=\${token}\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          await loadComments();
          showSuccess('Commentaire supprim\xE9 avec succ\xE8s !');
        } else {
          throw new Error(result.error || 'Erreur lors de la suppression');
        }
        
      } catch (error) {
        console.error('\u274C Erreur lors de la suppression du commentaire:', error);
        showError(error.message || 'Erreur lors de la suppression du commentaire');
      }
    }
    
    function displayComments(comments) {
      const container = document.getElementById('comments-list');
      const loading = document.getElementById('comments-loading');
      const noComments = document.getElementById('no-comments');
      
      if (loading) loading.style.display = 'none';
      
      if (comments.length === 0) {
        if (noComments) noComments.classList.remove('hidden');
        if (container) container.innerHTML = '';
        return;
      }
      
      if (noComments) noComments.classList.add('hidden');
      
      const commentsHtml = comments.map(comment => {
        const user = comment.expand?.users;
        const userName = user?.name || user?.username || user?.email || 'Utilisateur';
        
        // \u2705 Cr\xE9er un avatar par d\xE9faut avec les initiales ou un emoji
        let userAvatar = '';
        if (user?.avatar) {
          userAvatar = pb.files.getUrl(user, user.avatar);
        } else {
          // Cr\xE9er un avatar avec les initiales
          const initials = userName.substring(0, 2).toUpperCase();
          userAvatar = \`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\${initials}</text></svg>\`;
        }
        
        const commentDate = new Date(comment.created).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        });
        
        const isOwnComment = currentUser && comment.users === currentUser.id;
        
        return \`
      <div class="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10" data-comment-id="\${comment.id}">
        <div class="flex gap-3">
          <div class="flex-shrink-0">
            <a href="/users/\${user?.id || 'unknown'}" class="block">
              <img 
                src="\${userAvatar}" 
                alt="\${userName}" 
                class="w-10 h-10 rounded-full border-2 border-white/20 object-cover hover:scale-110 transition-transform cursor-pointer"
                title="Voir le profil de \${userName}"
              />
            </a>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-1">
              <h4 class="font-medium text-white truncate">\${userName}</h4>
              <div class="flex items-center gap-2">
                <span class="text-xs text-white/60">\${commentDate}</span>
                \${isOwnComment ? \`
                  <button 
                    class="text-red-400 hover:text-red-300 text-xs opacity-60 hover:opacity-100 transition-opacity"
                    onclick="deleteComment('\${comment.id}')"
                    title="Supprimer"
                  >
                    \u{1F5D1}\uFE0F
                  </button>
                \` : ''}
              </div>
            </div>
            <p class="text-white/90 text-sm leading-relaxed break-words">\${comment.content}</p>
          </div>
        </div>
      </div>
    \`;
      }).join('');
      
      if (container) container.innerHTML = commentsHtml;
    }
    
    function showCommentsError() {
      const container = document.getElementById('comments-list');
      const loading = document.getElementById('comments-loading');
      
      if (loading) loading.style.display = 'none';
      
      if (container) {
        container.innerHTML = \`
          <div class="text-center py-8 text-red-300">
            <div class="text-4xl mb-2">\u26A0\uFE0F</div>
            <p>Erreur lors du chargement des commentaires</p>
          </div>
        \`;
      }
    }
    
    
    function updateCharCount() {
      const input = document.getElementById('comment-input');
      const counter = document.getElementById('char-count');
      const submitBtn = document.getElementById('submit-comment');
      
      if (!input || !counter || !submitBtn) return;
      
      const length = input.value.length;
      counter.textContent = \`\${length}/500\`;
      
      // Activer/d\xE9sactiver le bouton selon le contenu
      const hasContent = input.value.trim().length > 0;
      const isAuthenticated = currentUser !== null;
      
      submitBtn.disabled = !hasContent || !isAuthenticated;
      
      // Changer la couleur si proche de la limite
      if (length > 450) {
        counter.classList.add('text-red-400');
      } else {
        counter.classList.remove('text-red-400');
      }
    }
    
    function setupCommentListeners() {
      const input = document.getElementById('comment-input');
      const submitBtn = document.getElementById('submit-comment');
      
      if (input) {
        input.addEventListener('input', updateCharCount);
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            submitComment();
          }
        });
      }
      
      if (submitBtn) {
        submitBtn.addEventListener('click', submitComment);
      }
      
      // Charger l'avatar de l'utilisateur dans le formulaire
      if (currentUser) {
        const avatarContainer = document.getElementById('user-avatar-comment');
        if (avatarContainer) {
          let avatarUrl = '';
          
          if (currentUser.avatar) {
            try {
              avatarUrl = pb.files.getUrl(currentUser, currentUser.avatar);
              avatarContainer.innerHTML = \`
            <img 
              src="\${avatarUrl}" 
              alt="\${currentUser.name || currentUser.username || 'Vous'}" 
              class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
            />
          \`;
            } catch (error) {
              // Fallback silencieux vers les initiales
              const initials = (currentUser.name || currentUser.username || 'U').substring(0, 2).toUpperCase();
              const fallbackAvatar = \`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\${initials}</text></svg>\`;
              
              avatarContainer.innerHTML = \`
            <img 
              src="\${fallbackAvatar}" 
              alt="\${currentUser.name || currentUser.username || 'Vous'}" 
              class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
            />
          \`;
            }
          } else {
            // Utiliser les initiales si pas d'avatar
            const initials = (currentUser.name || currentUser.username || 'U').substring(0, 2).toUpperCase();
            const fallbackAvatar = \`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\${initials}</text></svg>\`;
            
            avatarContainer.innerHTML = \`
          <img 
            src="\${fallbackAvatar}" 
            alt="\${currentUser.name || currentUser.username || 'Vous'}" 
            class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
          />
        \`;
          }
        }
      }
    }
    
    function showSuccess(message) {
      console.log('\u2705 Affichage du message de succ\xE8s:', message);
      const successEl = document.getElementById('success-message');
      const textEl = document.getElementById('success-text');
      
      if (successEl && textEl) {
        textEl.textContent = message;
        successEl.classList.remove('translate-x-full');
        
        setTimeout(() => {
          successEl.classList.add('translate-x-full');
        }, 4000);
      }
    }
    
    function showError(message) {
      console.log('\u274C Affichage du message d\\'erreur:', message);
      const errorEl = document.getElementById('error-message');
      const textEl = document.getElementById('error-text');
      
      if (errorEl && textEl) {
        textEl.textContent = message;
        errorEl.classList.remove('translate-x-full');
        
        setTimeout(() => {
          errorEl.classList.add('translate-x-full');
        }, 4000);
      }
    }

    // Rendre les fonctions globales pour les boutons onclick
    window.deleteComment = deleteComment;
  })();<\/script> </body> </html> `], ['<html lang="fr" data-astro-cid-olxbfqi3> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>', "</title>", '<!-- Leaflet CSS --><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">', '</head> <body class="min-h-screen bg-gradient-to-b from-purple-950 via-purple-900 to-black" data-astro-cid-olxbfqi3> ', " ", ` <!-- Messages de succ\xE8s/erreur --> <div id="success-message" class="fixed top-24 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg transform translate-x-full transition-transform z-50" data-astro-cid-olxbfqi3> <div class="flex items-center gap-2" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-olxbfqi3></path> </svg> <span id="success-text" data-astro-cid-olxbfqi3>Action r\xE9ussie !</span> </div> </div> <div id="error-message" class="fixed top-24 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg transform translate-x-full transition-transform z-50" data-astro-cid-olxbfqi3> <div class="flex items-center gap-2" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-olxbfqi3></path> </svg> <span id="error-text" data-astro-cid-olxbfqi3>Une erreur s'est produite</span> </div> </div> `, " <!-- Leaflet JavaScript --> ", " <!-- PocketBase JavaScript --> ", " <script>(function(){", `
    // Variables globales
    let pb;
    let currentUser = null;
    let eventData = serverEvent;
    let isParticipating = false;
    
    // Initialisation
    document.addEventListener('DOMContentLoaded', async () => {
      console.log('\u{1F680} D\xE9marrage de l\\\\'application');
      
      // Initialiser PocketBase
      try {
        pb = new PocketBase('https://pocketbaseprojet.alexandre-demling.fr');
        console.log('\u2705 PocketBase initialis\xE9');
      } catch (error) {
        console.error('\u274C Erreur lors de l\\\\'initialisation de PocketBase:', error);
        showError('Erreur de connexion \xE0 la base de donn\xE9es');
        return;
      }
      
      if (eventData) {
        await initEventPage();
      }
    });
    
    async function initEventPage() {
      try {
        console.log('\u{1F504} Initialisation de la page \xE9v\xE9nement');
        
        // V\xE9rifier l'authentification
        await checkAuthentication();
        
        // Charger les donn\xE9es de l'\xE9v\xE9nement
        if (eventData) {
          await loadEventData(eventData.id);
          await loadParticipants(eventData.id);
          setupEventListeners();
          
          // \u2705 Charger les commentaires et configurer les listeners
          await loadComments();
          setupCommentListeners();
        }
        
      } catch (error) {
        console.error('\u274C Erreur lors de l\\\\'initialisation:', error);
        showError('Erreur lors du chargement de la page');
      }
    }
    
    async function checkAuthentication() {
      try {
        console.log('\u{1F50D} V\xE9rification de l\\\\'authentification...');
        
        if (pb.authStore.isValid) {
          currentUser = pb.authStore.model;
          console.log('\u{1F464} Utilisateur connect\xE9:', currentUser?.username || currentUser?.email);
        } else {
          console.log('\u274C Utilisateur non connect\xE9');
          showAuthWarning();
        }
      } catch (error) {
        console.error('\u274C Erreur lors de la v\xE9rification de l\\\\'authentification:', error);
        showAuthWarning();
      }
    }
    
    function showAuthWarning() {
      const authWarning = document.getElementById('auth-warning');
      if (authWarning) authWarning.classList.remove('hidden');
      
      const participateBtn = document.getElementById('participate-btn');
      if (participateBtn) {
        participateBtn.disabled = true;
        const btnText = document.getElementById('btn-text');
        if (btnText) btnText.textContent = 'Connexion requise';
      }
    }
    
    async function loadEventData(eventId) {
      try {
        console.log('\u{1F4CB} Chargement des donn\xE9es de l\\\\'\xE9v\xE9nement:', eventId);
        
        // R\xE9cup\xE9rer l'\xE9v\xE9nement avec les participants
        eventData = await pb.collection('event').getOne(eventId);
        
        console.log('\u2705 Donn\xE9es de l\\\\'\xE9v\xE9nement charg\xE9es:', eventData);
        
        // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
        const eventDate = new Date(eventData.date_event);
        const now = new Date();
        const isEventPassed = eventDate < now;
        
        if (isEventPassed) {
          console.log('\u23F0 Cet \xE9v\xE9nement est d\xE9j\xE0 pass\xE9');
          const participateBtn = document.getElementById('participate-btn');
          if (participateBtn) {
            participateBtn.disabled = true;
            participateBtn.setAttribute('data-event-passed', 'true');
            const btnText = document.getElementById('btn-text');
            if (btnText) btnText.textContent = '\xC9v\xE9nement pass\xE9';
          }
          
          const eventPassedWarning = document.getElementById('event-passed');
          if (eventPassedWarning) eventPassedWarning.classList.remove('hidden');
        }
        
        // V\xE9rifier si l'utilisateur participe d\xE9j\xE0
        if (currentUser && eventData.participe) {
          isParticipating = eventData.participe.includes(currentUser.id);
          console.log('\u{1F3AF} Participation actuelle:', isParticipating);
        }
        
        updateParticipationButton();
        updateParticipantCount();
        
      } catch (error) {
        console.error('\u274C Erreur lors du chargement de l\\\\'\xE9v\xE9nement:', error);
        throw error;
      }
    }
    
    async function loadParticipants(eventId) {
      try {
        console.log('\u{1F465} Chargement des participants pour l\\\\'\xE9v\xE9nement:', eventId);
        
        // R\xE9cup\xE9rer l'\xE9v\xE9nement \xE0 jour
        const updatedEvent = await pb.collection('event').getOne(eventId);
        console.log('\u{1F4CB} \xC9v\xE9nement r\xE9cup\xE9r\xE9:', updatedEvent);
        console.log('\u{1F4CB} Liste des participants (IDs):', updatedEvent.participe);
        
        if (!updatedEvent || !updatedEvent.participe || updatedEvent.participe.length === 0) {
          console.log('\u2139\uFE0F Aucun participant trouv\xE9');
          showNoParticipants();
          return;
        }
        
        hideNoParticipants();
        
        const participants = [];
        
        // Charger les donn\xE9es de chaque participant avec plus de logs
        for (const userId of updatedEvent.participe) {
          try {
            console.log('\u{1F50D} Tentative de chargement de l\\\\'utilisateur:', userId);
            const user = await pb.collection('users').getOne(userId);
            participants.push(user);
            console.log('\u{1F464} Participant charg\xE9 avec succ\xE8s:', {
              id: user.id,
              name: user.name || user.username || user.email,
              email: user.email
            });
          } catch (error) {
            console.error('\u274C Impossible de charger l\\\\'utilisateur:', userId, error);
            // Ajouter un participant placeholder pour les utilisateurs non trouv\xE9s
            participants.push({
              id: userId,
              name: 'Utilisateur inconnu',
              username: 'unknown',
              email: 'unknown@example.com',
              avatar: null
            });
          }
        }
        
        console.log('\u2705 Total participants charg\xE9s:', participants.length);
        console.log('\u{1F4CA} D\xE9tails des participants:', participants);
        displayParticipants(participants);
        
        // Mettre \xE0 jour le compteur
        updateParticipantCount(participants.length);
        
      } catch (error) {
        console.error('\u274C Erreur lors du chargement des participants:', error);
        showNoParticipants();
      }
    }
    
    function displayParticipants(participants) {
      const container = document.getElementById('participants-avatars');
      if (!container) {
        console.warn('\u26A0\uFE0F Container des avatars non trouv\xE9');
        return;
      }
      
      if (participants.length === 0) {
        container.innerHTML = '';
        showNoParticipants();
        return;
      }
      
      console.log('\u{1F5BC}\uFE0F Affichage des avatars pour', participants.length, 'participants');
      
      const avatarElements = participants.map((participant, index) => {
        let avatarUrl = '';
        
        // Construire l'URL de l'avatar si disponible
        if (participant.avatar) {
          try {
            avatarUrl = pb.files.getUrl(participant, participant.avatar);
          } catch (error) {
            console.warn('\u26A0\uFE0F Erreur lors de la construction de l\\\\'URL avatar:', error);
          }
        }
        
        const displayName = participant.name || participant.username || participant.email || 'Utilisateur';
        
        // \u2705 Cr\xE9er un avatar par d\xE9faut avec les initiales
        const initials = displayName.substring(0, 2).toUpperCase();
        const fallbackAvatar = \\\`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\\\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\\\${initials}</text></svg>\\\`;
        
        return \\\`
      <div class="relative" data-participant-id="\\\${participant.id}">
        <a href="/users/\\\${participant.id}" class="block">
          <img 
            src="\\\${avatarUrl || fallbackAvatar}" 
            alt="\\\${displayName}" 
            class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover hover:scale-110 transition-transform cursor-pointer"
            title="Voir le profil de \\\${displayName}"
          />
        </a>
      </div>
    \\\`;
      }).join('');
      
      container.innerHTML = avatarElements;
      console.log('\u2705 Avatars affich\xE9s avec succ\xE8s');
}
    
    function showNoParticipants() {
      const noParticipants = document.getElementById('no-participants');
      if (noParticipants) noParticipants.classList.remove('hidden');
    }
    
    function hideNoParticipants() {
      const noParticipants = document.getElementById('no-participants');
      if (noParticipants) noParticipants.classList.add('hidden');
    }
    
    function updateParticipationButton() {
      const btn = document.getElementById('participate-btn');
      const btnText = document.getElementById('btn-text');
      
      if (!btn || !btnText) return;
      
      // Si pas connect\xE9
      if (!currentUser) {
        btn.disabled = true;
        btnText.textContent = 'Connexion requise';
        return;
      }
      
      // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
      const isEventPassed = btn.getAttribute('data-event-passed') === 'true';
      if (isEventPassed) {
        btn.disabled = true;
        btnText.textContent = '\xC9v\xE9nement pass\xE9';
        return;
      }
      
      const currentParticipants = eventData.participe ? eventData.participe.length : 0;
      const maxParticipants = eventData.nb_users_max || 0;
      
      // Si \xE9v\xE9nement complet et utilisateur ne participe pas
      if (currentParticipants >= maxParticipants && !isParticipating) {
        btn.disabled = true;
        btnText.textContent = '\xC9v\xE9nement complet';
        const eventFull = document.getElementById('event-full');
        if (eventFull) eventFull.classList.remove('hidden');
        return;
      }
      
      // Cacher le message d'\xE9v\xE9nement complet si affich\xE9
      const eventFull = document.getElementById('event-full');
      if (eventFull) eventFull.classList.add('hidden');
      
      // \u2705 Mettre \xE0 jour le bouton selon l'\xE9tat de participation avec nouveaux textes
      if (isParticipating) {
        btn.classList.remove('bg-yellow-400', 'hover:bg-yellow-500', 'text-black');
        btn.classList.add('bg-red-600', 'hover:bg-red-700', 'text-white');
        btnText.textContent = 'Ne plus participer (-10 points)';
      } else {
        btn.classList.remove('bg-red-600', 'hover:bg-red-700', 'text-white');
        btn.classList.add('bg-yellow-400', 'hover:bg-yellow-500', 'text-black');
        btnText.textContent = 'Je participe (+10 points)';
      }
      
      btn.disabled = false;
    }
    
    function updateParticipantCount(count = null) {
      const participantCount = count !== null ? count : (eventData.participe ? eventData.participe.length : 0);
      const countEl = document.getElementById('current-participants');
      if (countEl) {
        countEl.textContent = participantCount;
      }
      console.log('\u{1F4CA} Compteur de participants mis \xE0 jour:', participantCount);
    }
    
    function setupEventListeners() {
      const participateBtn = document.getElementById('participate-btn');
      
      if (participateBtn) {
        console.log('\u{1F517} Configuration du listener pour le bouton participer');
        
        participateBtn.addEventListener('click', async (e) => {
          e.preventDefault();
          console.log('\u{1F5B1}\uFE0F Clic sur le bouton participer d\xE9tect\xE9');
          
          if (!currentUser) {
            console.log('\u274C Utilisateur non connect\xE9');
            showError('Vous devez \xEAtre connect\xE9 pour participer');
            return;
          }
          
          // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
          const isEventPassed = participateBtn.getAttribute('data-event-passed') === 'true';
          if (isEventPassed) {
            console.log('\u23F0 Impossible de participer \xE0 un \xE9v\xE9nement pass\xE9');
            showError('Impossible de participer \xE0 un \xE9v\xE9nement pass\xE9');
            return;
          }
          
          try {
            // D\xE9sactiver le bouton pendant le traitement
            participateBtn.disabled = true;
            const btnText = document.getElementById('btn-text');
            if (btnText) btnText.textContent = 'Traitement...';
            
            console.log('\u{1F504} Traitement de la participation...');
            
            if (isParticipating) {
              console.log('\u2796 Tentative de quitter l\\\\'\xE9v\xE9nement');
              await leaveEvent();
            } else {
              console.log('\u2795 Tentative de rejoindre l\\\\'\xE9v\xE9nement');
              await joinEvent();
            }
            
          } catch (error) {
            console.error('\u274C Erreur lors de la participation:', error);
            showError(error.message || 'Erreur lors de la participation');
          } finally {
            // R\xE9activer le bouton
            participateBtn.disabled = false;
          }
        });
        
        console.log('\u2705 Listener configur\xE9 avec succ\xE8s');
      } else {
        console.error('\u274C Bouton participer non trouv\xE9');
      }
    }
    
    // \u2705 Fonction joinEvent avec v\xE9rification d'\xE9v\xE9nement pass\xE9
    async function joinEvent() {
      try {
        console.log('\u2795 D\xE9but de l\\\\'inscription \xE0 l\\\\'\xE9v\xE9nement');
        
        const eventId = eventData.id;
        
        // R\xE9cup\xE9rer l'\xE9tat actuel de l'\xE9v\xE9nement
        const currentEvent = await pb.collection('event').getOne(eventId);
        
        // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
        const eventDate = new Date(currentEvent.date_event);
        const now = new Date();
        if (eventDate < now) {
          throw new Error('Impossible de participer \xE0 un \xE9v\xE9nement pass\xE9');
        }
        
        const currentParticipants = currentEvent.participe || [];
        const maxParticipants = currentEvent.nb_users_max || 0;
        
        // V\xE9rifier si l'\xE9v\xE9nement est complet
        if (currentParticipants.length >= maxParticipants) {
          throw new Error('\xC9v\xE9nement complet');
        }
        
        // V\xE9rifier si l'utilisateur participe d\xE9j\xE0
        if (currentParticipants.includes(currentUser.id)) {
          throw new Error('Vous participez d\xE9j\xE0 \xE0 cet \xE9v\xE9nement');
        }
        
        // \u2705 \xC9TAPE 1: Ajouter 10 points \xE0 l'utilisateur IMM\xC9DIATEMENT
        console.log('\u2B50 Attribution imm\xE9diate de +10 points...');
        const currentPoints = currentUser.points || 0;
        const newPoints = currentPoints + 10;
        
        await pb.collection('users').update(currentUser.id, {
          points: newPoints
        });
        
        console.log(\\\`\u2705 Points attribu\xE9s: \\\${currentPoints} \u2192 \\\${newPoints}\\\`);
        
        // Mettre \xE0 jour l'utilisateur local
        currentUser.points = newPoints;
        
        // \u2705 \xC9TAPE 2: Ajouter l'utilisateur \xE0 la liste des participants
        const updatedParticipants = [...currentParticipants, currentUser.id];
        
        console.log('\u{1F4DD} Mise \xE0 jour de l\\\\'\xE9v\xE9nement avec nouveaux participants:', updatedParticipants);
        
        eventData = await pb.collection('event').update(eventId, {
          participe: updatedParticipants
        });
        
        console.log('\u2705 Inscription r\xE9ussie');
        
        // Mettre \xE0 jour l'\xE9tat local
        isParticipating = true;
        
        // Recharger l'affichage
        await loadParticipants(eventId);
        updateParticipationButton();
        updateParticipantCount();
        
        showSuccess(\\\`Inscription r\xE9ussie ! +10 points ajout\xE9s (Total: \\\${newPoints} points)\\\`);
        
      } catch (error) {
        console.error('\u274C Erreur lors de l\\\\'inscription:', error);
        throw error;
      }
    }
    
    // \u2705 Fonction leaveEvent avec v\xE9rification d'\xE9v\xE9nement pass\xE9
    async function leaveEvent() {
      try {
        console.log('\u2796 D\xE9but de la sortie de l\\\\'\xE9v\xE9nement');
        
        const eventId = eventData.id;
        
        // R\xE9cup\xE9rer l'\xE9tat actuel de l'\xE9v\xE9nement
        const currentEvent = await pb.collection('event').getOne(eventId);
        
        // \u2705 V\xE9rifier si l'\xE9v\xE9nement est pass\xE9
        const eventDate = new Date(currentEvent.date_event);
        const now = new Date();
        if (eventDate < now) {
          throw new Error('Impossible de quitter un \xE9v\xE9nement pass\xE9');
        }
        
        // \u2705 \xC9TAPE 1: Retirer 10 points \xE0 l'utilisateur IMM\xC9DIATEMENT
        console.log('\u2B50 Retrait imm\xE9diat de -10 points...');
        const currentPoints = currentUser.points || 0;
        const newPoints = Math.max(0, currentPoints - 10); // Ne pas descendre en dessous de 0
        
        await pb.collection('users').update(currentUser.id, {
          points: newPoints
        });
        
        console.log(\\\`\u2705 Points retir\xE9s: \\\${currentPoints} \u2192 \\\${newPoints}\\\`);
        
        // Mettre \xE0 jour l'utilisateur local
        currentUser.points = newPoints;
        
        // \u2705 \xC9TAPE 2: Retirer l'utilisateur de la liste des participants
        const currentParticipants = currentEvent.participe || [];
        const updatedParticipants = currentParticipants.filter(id => id !== currentUser.id);
        
        console.log('\u{1F4DD} Mise \xE0 jour de l\\\\'\xE9v\xE9nement sans l\\\\'utilisateur:', updatedParticipants);
        
        eventData = await pb.collection('event').update(eventId, {
          participe: updatedParticipants
        });
        
        console.log('\u2705 Sortie r\xE9ussie');
        
        // Mettre \xE0 jour l'\xE9tat local
        isParticipating = false;
        
        // Recharger l'affichage
        await loadParticipants(eventId);
        updateParticipationButton();
        updateParticipantCount();
        
        showSuccess(\\\`Vous ne participez plus \xE0 cette activit\xE9. -10 points retir\xE9s (Total: \\\${newPoints} points)\\\`);
        
      } catch (error) {
        console.error('\u274C Erreur lors de la sortie:', error);
        throw error;
      }
    }

    // \u2705 NOUVELLES FONCTIONS POUR LES COMMENTAIRES
    
    async function submitComment() {
      const input = document.getElementById('comment-input');
      const submitBtn = document.getElementById('submit-comment');
      
      if (!input || !submitBtn) {
        console.error('\u274C \xC9l\xE9ments du formulaire non trouv\xE9s');
        return;
      }
      
      const content = input.value.trim();
      console.log('\u{1F4DD} Contenu du commentaire:', content);
      console.log('\u{1F4DD} Longueur du contenu:', content.length);
      
      if (!content) {
        showError('Veuillez \xE9crire un commentaire');
        return;
      }
      
      try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Publication...';
        
        console.log('\u{1F4E4} Envoi du commentaire...');
        
        // \u2705 Cr\xE9er FormData avec les bons noms de champs
        const formData = new FormData();
        formData.append('eventId', eventData.id);
        formData.append('comment', content); // \u2705 Utiliser 'comment' comme attendu par l'API
        
        // Ajouter les infos utilisateur
        if (currentUser) {
          formData.append('username', currentUser.name || currentUser.username || currentUser.email);
          formData.append('userToken', pb.authStore.token);
        } else {
          formData.append('username', 'Visiteur');
        }
        
        // Debug: afficher le contenu du FormData
        console.log('\u{1F4CB} FormData envoy\xE9:');
        for (let [key, value] of formData.entries()) {
          console.log(\\\`  \\\${key}: \\\${value}\\\`);
        }
        
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: formData
        });
        
        console.log('\u{1F4E5} R\xE9ponse re\xE7ue:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('\u274C Erreur HTTP:', errorText);
          throw new Error(\\\`Erreur \\\${response.status}: \\\${errorText}\\\`);
        }
        
        const result = await response.json();
        console.log('\u2705 R\xE9sultat:', result);
        
        if (result.success) {
          input.value = '';
          updateCharCount();
          await loadComments();
          showSuccess('Commentaire publi\xE9 avec succ\xE8s !');
        } else {
          throw new Error(result.error || 'Erreur lors de la publication');
        }
        
      } catch (error) {
        console.error('\u274C Erreur lors de la publication du commentaire:', error);
        showError(error.message || 'Erreur lors de la publication du commentaire');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Publier';
      }
    }
    
    async function loadComments() {
      try {
        console.log('\u{1F4AC} Chargement des commentaires...');
        
        const response = await fetch(\\\`/api/comment?eventId=\\\${eventData.id}\\\`);
        
        if (!response.ok) {
          throw new Error(\\\`Erreur \\\${response.status}\\\`);
        }
        
        const comments = await response.json();
        console.log('\u2705 Commentaires charg\xE9s:', comments.length);
        
        displayComments(comments);
        
      } catch (error) {
        console.error('\u274C Erreur lors du chargement des commentaires:', error);
        showCommentsError();
      }
    }
    
    async function deleteComment(commentId) {
      if (!confirm('\xCAtes-vous s\xFBr de vouloir supprimer ce commentaire ?')) {
        return;
      }
      
      try {
        const token = currentUser ? pb.authStore.token : '';
        const response = await fetch(\\\`/api/comment?id=\\\${commentId}&token=\\\${token}\\\`, {
          method: 'DELETE'
        });
        
        const result = await response.json();
        
        if (result.success) {
          await loadComments();
          showSuccess('Commentaire supprim\xE9 avec succ\xE8s !');
        } else {
          throw new Error(result.error || 'Erreur lors de la suppression');
        }
        
      } catch (error) {
        console.error('\u274C Erreur lors de la suppression du commentaire:', error);
        showError(error.message || 'Erreur lors de la suppression du commentaire');
      }
    }
    
    function displayComments(comments) {
      const container = document.getElementById('comments-list');
      const loading = document.getElementById('comments-loading');
      const noComments = document.getElementById('no-comments');
      
      if (loading) loading.style.display = 'none';
      
      if (comments.length === 0) {
        if (noComments) noComments.classList.remove('hidden');
        if (container) container.innerHTML = '';
        return;
      }
      
      if (noComments) noComments.classList.add('hidden');
      
      const commentsHtml = comments.map(comment => {
        const user = comment.expand?.users;
        const userName = user?.name || user?.username || user?.email || 'Utilisateur';
        
        // \u2705 Cr\xE9er un avatar par d\xE9faut avec les initiales ou un emoji
        let userAvatar = '';
        if (user?.avatar) {
          userAvatar = pb.files.getUrl(user, user.avatar);
        } else {
          // Cr\xE9er un avatar avec les initiales
          const initials = userName.substring(0, 2).toUpperCase();
          userAvatar = \\\`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\\\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\\\${initials}</text></svg>\\\`;
        }
        
        const commentDate = new Date(comment.created).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit'
        });
        
        const isOwnComment = currentUser && comment.users === currentUser.id;
        
        return \\\`
      <div class="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10" data-comment-id="\\\${comment.id}">
        <div class="flex gap-3">
          <div class="flex-shrink-0">
            <a href="/users/\\\${user?.id || 'unknown'}" class="block">
              <img 
                src="\\\${userAvatar}" 
                alt="\\\${userName}" 
                class="w-10 h-10 rounded-full border-2 border-white/20 object-cover hover:scale-110 transition-transform cursor-pointer"
                title="Voir le profil de \\\${userName}"
              />
            </a>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between mb-1">
              <h4 class="font-medium text-white truncate">\\\${userName}</h4>
              <div class="flex items-center gap-2">
                <span class="text-xs text-white/60">\\\${commentDate}</span>
                \\\${isOwnComment ? \\\`
                  <button 
                    class="text-red-400 hover:text-red-300 text-xs opacity-60 hover:opacity-100 transition-opacity"
                    onclick="deleteComment('\\\${comment.id}')"
                    title="Supprimer"
                  >
                    \u{1F5D1}\uFE0F
                  </button>
                \\\` : ''}
              </div>
            </div>
            <p class="text-white/90 text-sm leading-relaxed break-words">\\\${comment.content}</p>
          </div>
        </div>
      </div>
    \\\`;
      }).join('');
      
      if (container) container.innerHTML = commentsHtml;
    }
    
    function showCommentsError() {
      const container = document.getElementById('comments-list');
      const loading = document.getElementById('comments-loading');
      
      if (loading) loading.style.display = 'none';
      
      if (container) {
        container.innerHTML = \\\`
          <div class="text-center py-8 text-red-300">
            <div class="text-4xl mb-2">\u26A0\uFE0F</div>
            <p>Erreur lors du chargement des commentaires</p>
          </div>
        \\\`;
      }
    }
    
    
    function updateCharCount() {
      const input = document.getElementById('comment-input');
      const counter = document.getElementById('char-count');
      const submitBtn = document.getElementById('submit-comment');
      
      if (!input || !counter || !submitBtn) return;
      
      const length = input.value.length;
      counter.textContent = \\\`\\\${length}/500\\\`;
      
      // Activer/d\xE9sactiver le bouton selon le contenu
      const hasContent = input.value.trim().length > 0;
      const isAuthenticated = currentUser !== null;
      
      submitBtn.disabled = !hasContent || !isAuthenticated;
      
      // Changer la couleur si proche de la limite
      if (length > 450) {
        counter.classList.add('text-red-400');
      } else {
        counter.classList.remove('text-red-400');
      }
    }
    
    function setupCommentListeners() {
      const input = document.getElementById('comment-input');
      const submitBtn = document.getElementById('submit-comment');
      
      if (input) {
        input.addEventListener('input', updateCharCount);
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            submitComment();
          }
        });
      }
      
      if (submitBtn) {
        submitBtn.addEventListener('click', submitComment);
      }
      
      // Charger l'avatar de l'utilisateur dans le formulaire
      if (currentUser) {
        const avatarContainer = document.getElementById('user-avatar-comment');
        if (avatarContainer) {
          let avatarUrl = '';
          
          if (currentUser.avatar) {
            try {
              avatarUrl = pb.files.getUrl(currentUser, currentUser.avatar);
              avatarContainer.innerHTML = \\\`
            <img 
              src="\\\${avatarUrl}" 
              alt="\\\${currentUser.name || currentUser.username || 'Vous'}" 
              class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
            />
          \\\`;
            } catch (error) {
              // Fallback silencieux vers les initiales
              const initials = (currentUser.name || currentUser.username || 'U').substring(0, 2).toUpperCase();
              const fallbackAvatar = \\\`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\\\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\\\${initials}</text></svg>\\\`;
              
              avatarContainer.innerHTML = \\\`
            <img 
              src="\\\${fallbackAvatar}" 
              alt="\\\${currentUser.name || currentUser.username || 'Vous'}" 
              class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
            />
          \\\`;
            }
          } else {
            // Utiliser les initiales si pas d'avatar
            const initials = (currentUser.name || currentUser.username || 'U').substring(0, 2).toUpperCase();
            const fallbackAvatar = \\\`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="%23\\\${Math.floor(Math.random()*16777215).toString(16)}" rx="20"/><text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="14" font-weight="bold">\\\${initials}</text></svg>\\\`;
            
            avatarContainer.innerHTML = \\\`
          <img 
            src="\\\${fallbackAvatar}" 
            alt="\\\${currentUser.name || currentUser.username || 'Vous'}" 
            class="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover"
          />
        \\\`;
          }
        }
      }
    }
    
    function showSuccess(message) {
      console.log('\u2705 Affichage du message de succ\xE8s:', message);
      const successEl = document.getElementById('success-message');
      const textEl = document.getElementById('success-text');
      
      if (successEl && textEl) {
        textEl.textContent = message;
        successEl.classList.remove('translate-x-full');
        
        setTimeout(() => {
          successEl.classList.add('translate-x-full');
        }, 4000);
      }
    }
    
    function showError(message) {
      console.log('\u274C Affichage du message d\\\\'erreur:', message);
      const errorEl = document.getElementById('error-message');
      const textEl = document.getElementById('error-text');
      
      if (errorEl && textEl) {
        textEl.textContent = message;
        errorEl.classList.remove('translate-x-full');
        
        setTimeout(() => {
          errorEl.classList.add('translate-x-full');
        }, 4000);
      }
    }

    // Rendre les fonctions globales pour les boutons onclick
    window.deleteComment = deleteComment;
  })();<\/script> </body> </html> `])), event ? `D\xE9tails de l'activit\xE9 - ${event.nom_event}` : "\xC9v\xE9nement non trouv\xE9", renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/[id].astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "HeaderDashboard", $$HeaderDashboard, { "data-astro-cid-olxbfqi3": true }), !event ? renderTemplate`<!-- Page d'erreur -->
    <div class="min-h-screen flex items-center justify-center px-4" data-astro-cid-olxbfqi3> <div class="max-w-2xl mx-auto text-center text-white" data-astro-cid-olxbfqi3> <div class="mb-8" data-astro-cid-olxbfqi3> <div class="text-8xl mb-4" data-astro-cid-olxbfqi3>🔍</div> <h1 class="text-3xl font-bold mb-4" data-astro-cid-olxbfqi3>Événement non trouvé</h1> <p class="text-xl text-purple-200 mb-6" data-astro-cid-olxbfqi3>
L'événement avec l'ID <code class="bg-purple-800 px-2 py-1 rounded" data-astro-cid-olxbfqi3>${id}</code> n'a pas pu être chargé.
</p> </div> <div class="space-y-4" data-astro-cid-olxbfqi3> <a href="/activities" class="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-colors" data-astro-cid-olxbfqi3>
← Retour à la liste
</a> </div> </div> </div>` : renderTemplate`<!-- Contenu normal de l'événement -->
    <div id="main-content" class="min-h-screen" data-astro-cid-olxbfqi3> <div class="relative" data-astro-cid-olxbfqi3> <!-- Image de fond avec overlay --> <div class="absolute inset-0 z-0" data-astro-cid-olxbfqi3> <img id="event-image"${addAttribute(imageUrl || "/placeholder.svg", "src")}${addAttribute(event.nom_event, "alt")} class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" data-astro-cid-olxbfqi3> <!-- Fallback background --> <div id="fallback-bg"${addAttribute(`w-full h-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center ${imageUrl ? "hidden" : "flex"}`, "class")} data-astro-cid-olxbfqi3> <div class="text-center p-4" data-astro-cid-olxbfqi3> <div id="category-icon" class="text-8xl mb-4" data-astro-cid-olxbfqi3>${getCategoryIcon(event.categorie_event)}</div> <p id="event-title-fallback" class="text-white text-xl font-medium" data-astro-cid-olxbfqi3>${event.nom_event}</p> </div> </div> <!-- Overlay gradient violet --> <div class="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-900/90 to-purple-900" data-astro-cid-olxbfqi3></div> </div> <!-- Contenu avec espacement ajusté --> <div class="relative z-10 px-4 pt-20 pb-24 min-h-screen" data-astro-cid-olxbfqi3> <div class="max-w-2xl mx-auto text-white" data-astro-cid-olxbfqi3> <h1 class="text-2xl font-bold mb-6" data-astro-cid-olxbfqi3>Détails de l'activité</h1> <div class="space-y-4" data-astro-cid-olxbfqi3> <!-- Titre --> <div data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold" data-astro-cid-olxbfqi3>Titre : <span id="event-title" class="font-normal" data-astro-cid-olxbfqi3>${event.nom_event}</span></h2> </div> <!-- Date --> <div data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold" data-astro-cid-olxbfqi3>Date : <span id="event-date" class="font-normal" data-astro-cid-olxbfqi3>${formatDate(event.date_event)}</span></h2>  ${isEventPassed && renderTemplate`<div class="mt-2 inline-block bg-red-900/50 text-red-200 px-3 py-1 rounded-full text-sm" data-astro-cid-olxbfqi3> <span class="flex items-center gap-1" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-olxbfqi3></path> </svg>
Événement passé
</span> </div>`} </div> <!-- Lieu --> <div data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold" data-astro-cid-olxbfqi3>Lieu : <span id="event-location" class="font-normal" data-astro-cid-olxbfqi3>${event.lieu_event}</span></h2> </div> <!-- Participants avec avatars --> <div data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold" data-astro-cid-olxbfqi3>Participants :
<span class="font-normal" data-astro-cid-olxbfqi3> <span id="current-participants" data-astro-cid-olxbfqi3>${currentParticipants}</span>/<span id="max-participants" data-astro-cid-olxbfqi3>${event.nb_users_max}</span> personnes
</span> </h2> <!-- Liste des avatars des participants --> <div id="participants-avatars" class="flex flex-wrap gap-2 mt-3" data-astro-cid-olxbfqi3> <!-- Les avatars seront chargés ici par JavaScript --> </div> <!-- Message si aucun participant --> <div id="no-participants"${addAttribute(`mt-3 text-purple-200 text-sm ${currentParticipants > 0 ? "hidden" : ""}`, "class")} data-astro-cid-olxbfqi3>
🎭 Soyez le premier à participer !
</div> </div> <!-- Description --> <div data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold" data-astro-cid-olxbfqi3>Description :</h2> <p id="event-description" class="mt-1" data-astro-cid-olxbfqi3>${cleanHtmlText(event.description_event)}</p> </div> <!-- Localisation avec carte interactive --> <div id="map-section"${addAttribute(event.location ? "" : "hidden", "class")} data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold mb-3" data-astro-cid-olxbfqi3>Localisation :</h2> <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-astro-cid-olxbfqi3> ${renderComponent($$result, "EventMap", $$EventMap, { "height": "h-48", "initialLat": mapLat, "initialLng": mapLng, "zoom": 15, "interactive": true, "showLocationPicker": false, "data-astro-cid-olxbfqi3": true })} <p id="coordinates-display" class="text-sm text-white/80 mt-2 text-center" data-astro-cid-olxbfqi3>
📍 ${mapLat.toFixed(4)}, ${mapLng.toFixed(4)} </p> </div> </div> <!-- ✅ Système de points immédiat --> <div class="bg-yellow-400/20 border border-yellow-400/50 rounded-lg p-4" data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold text-white mb-2" data-astro-cid-olxbfqi3>⭐ Système de points</h2> <div class="text-yellow-200 text-sm space-y-1" data-astro-cid-olxbfqi3> ${isEventPassed ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-olxbfqi3": true }, { "default": async ($$result2) => renderTemplate` <p data-astro-cid-olxbfqi3>• <strong data-astro-cid-olxbfqi3>Événement terminé :</strong> Les points ont été distribués aux participants</p> <p class="text-red-300 font-medium" data-astro-cid-olxbfqi3>Plus possible de participer à cet événement</p> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-olxbfqi3": true }, { "default": async ($$result2) => renderTemplate` <p data-astro-cid-olxbfqi3>• <strong data-astro-cid-olxbfqi3>+10 points</strong> quand vous cliquez "Je participe"</p> <p data-astro-cid-olxbfqi3>• <strong data-astro-cid-olxbfqi3>-10 points</strong> si vous cliquez "Ne plus participer"</p> <p class="text-yellow-300 font-medium" data-astro-cid-olxbfqi3>Points attribués immédiatement !</p> ` })}`} </div> </div> <!-- Catégorie --> <div data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold" data-astro-cid-olxbfqi3>Catégorie : <span id="event-category" class="font-normal" data-astro-cid-olxbfqi3>${getCategoryIcon(event.categorie_event)} ${event.categorie_event}</span></h2> </div> <!-- ✅ Section Commentaires --> <div class="mt-8" data-astro-cid-olxbfqi3> <h2 class="text-lg font-semibold mb-4" data-astro-cid-olxbfqi3>💬 Commentaires</h2> <!-- Formulaire d'ajout de commentaire --> <div id="comment-form" class="mb-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-astro-cid-olxbfqi3> <div class="flex gap-3" data-astro-cid-olxbfqi3> <div id="user-avatar-comment" class="flex-shrink-0" data-astro-cid-olxbfqi3> <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium" data-astro-cid-olxbfqi3>
👤
</div> </div> <div class="flex-1" data-astro-cid-olxbfqi3> <textarea id="comment-input" placeholder="Écrivez votre commentaire..." class="w-full bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white placeholder-white/60 resize-none focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400" rows="3" maxlength="500" data-astro-cid-olxbfqi3></textarea> <div class="flex justify-between items-center mt-2" data-astro-cid-olxbfqi3> <span id="char-count" class="text-xs text-white/60" data-astro-cid-olxbfqi3>0/500</span> <button id="submit-comment" class="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled data-astro-cid-olxbfqi3>
Publier
</button> </div> </div> </div> </div> <!-- Liste des commentaires --> <div id="comments-list" class="space-y-4" data-astro-cid-olxbfqi3> <!-- Les commentaires seront chargés ici --> <div id="comments-loading" class="text-center py-8" data-astro-cid-olxbfqi3> <div class="animate-spin w-6 h-6 border-2 border-yellow-400 border-t-transparent rounded-full mx-auto mb-2" data-astro-cid-olxbfqi3></div> <p class="text-white/60" data-astro-cid-olxbfqi3>Chargement des commentaires...</p> </div> </div> <!-- Message si aucun commentaire --> <div id="no-comments" class="text-center py-8 text-white/60 hidden" data-astro-cid-olxbfqi3> <div class="text-4xl mb-2" data-astro-cid-olxbfqi3>💭</div> <p data-astro-cid-olxbfqi3>Aucun commentaire pour le moment.</p> <p class="text-sm" data-astro-cid-olxbfqi3>Soyez le premier à commenter !</p> </div> </div> </div> <!-- Messages d'état --> <div id="auth-warning" class="mt-8 p-4 bg-yellow-900/50 border border-yellow-500 rounded-lg hidden" data-astro-cid-olxbfqi3> <div class="flex items-center gap-2 text-yellow-200" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" data-astro-cid-olxbfqi3></path> </svg> <span data-astro-cid-olxbfqi3>Vous devez être connecté pour participer à cette activité.</span> </div> </div> <div id="event-full" class="mt-8 p-4 bg-red-900/50 border border-red-500 rounded-lg hidden" data-astro-cid-olxbfqi3> <div class="flex items-center gap-2 text-red-200" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" data-astro-cid-olxbfqi3></path> </svg> <span data-astro-cid-olxbfqi3>Cette activité est complète.</span> </div> </div>  <div id="event-passed"${addAttribute(`mt-8 p-4 bg-red-900/50 border border-red-500 rounded-lg ${isEventPassed ? "" : "hidden"}`, "class")} data-astro-cid-olxbfqi3> <div class="flex items-center gap-2 text-red-200" data-astro-cid-olxbfqi3> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-olxbfqi3> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-olxbfqi3></path> </svg> <span data-astro-cid-olxbfqi3>Cet événement est déjà passé. Il n'est plus possible de s'y inscrire.</span> </div> </div> <!-- Boutons --> <div class="mt-16 mb-12" data-astro-cid-olxbfqi3> <div class="flex flex-row gap-4 items-center" data-astro-cid-olxbfqi3> <a href="/activities" class="flex-1 text-center px-6 py-4 border border-white text-white rounded-full hover:bg-white hover:text-purple-900 transition-colors text-lg font-medium" data-astro-cid-olxbfqi3>
Retour à la liste des activités
</a> <button id="participate-btn" class="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-4 px-6 rounded-full transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"${addAttribute(event.id, "data-event-id")}${addAttribute(isEventPassed.toString(), "data-event-passed")}${addAttribute(isEventPassed, "disabled")} data-astro-cid-olxbfqi3> <span id="btn-text" data-astro-cid-olxbfqi3>${isEventPassed ? "\xC9v\xE9nement pass\xE9" : "Je participe (+10 points)"}</span> </button> </div> </div> </div> </div> </div> </div>`, renderComponent($$result, "FooterDashboard", $$FooterDashboard, { "data-astro-cid-olxbfqi3": true }), renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/[id].astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/[id].astro?astro&type=script&index=2&lang.ts"), defineScriptVars({ serverEvent: event, eventId: id }));
}, "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/[id].astro", void 0);

const $$file = "C:/Users/alexa/Documents/orbite-astro/src/pages/activities/[id].astro";
const $$url = "/activities/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
