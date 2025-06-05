import PocketBase from 'pocketbase';

const pb = new PocketBase("https://pocketbaseprojet.alexandre-demling.fr:443");
async function getAllEvents() {
  try {
    console.log("🔍 Tentative de connexion à PocketBase...");
    console.log("URL PocketBase:", pb.baseUrl);
    const health = await pb.health.check();
    console.log("✅ PocketBase est accessible:", health);
    console.log("📋 Récupération des événements...");
    const records = await pb.collection("event").getFullList({
      sort: "-date_event",
      expand: "users",
      // ✅ Seulement expand users, pas participe
      requestKey: null
      // Évite la mise en cache
    });
    console.log("📊 Nombre d'événements trouvés:", records.length);
    console.log("📄 Données des événements:", records);
    return records;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des événements:", error);
    if (error instanceof Error) {
      console.error("Message d'erreur:", error.message);
      console.error("Stack trace:", error.stack);
    }
    try {
      const collections = await pb.collections.getFullList();
      console.log(
        "📚 Collections disponibles:",
        collections.map((c) => c.name)
      );
    } catch (collectionError) {
      console.error("❌ Impossible de récupérer les collections:", collectionError);
    }
    return [];
  }
}
async function getEventById(id) {
  try {
    console.log("🔍 Récupération de l'événement ID:", id);
    if (!id || id.trim() === "") {
      console.error("❌ ID d'événement invalide:", id);
      return null;
    }
    try {
      const collections = await pb.collections.getFullList();
      const eventCollection = collections.find((c) => c.name === "event");
      if (!eventCollection) {
        console.error("❌ Collection 'event' introuvable dans la base de données");
        return null;
      }
      console.log("✅ Collection 'event' trouvée");
    } catch (collectionError) {
      console.error("❌ Erreur lors de la vérification des collections:", collectionError);
    }
    const validIdRegex = /^[a-zA-Z0-9]{15}$/;
    if (!validIdRegex.test(id)) {
      console.error("❌ Format d'ID invalide. Les IDs PocketBase font généralement 15 caractères alphanumériques.");
      console.log("🔍 ID reçu:", id, "Longueur:", id.length);
      return null;
    }
    console.log("🔄 Tentative de récupération de l'événement sans expand...");
    const record = await pb.collection("event").getOne(id);
    console.log("✅ Événement trouvé:", record);
    try {
      const recordWithExpand = await pb.collection("event").getOne(id, {
        expand: "users",
        requestKey: null
        // Évite la mise en cache
      });
      console.log("✅ Événement avec expand users récupéré");
      return recordWithExpand;
    } catch (expandError) {
      console.warn("⚠️ Impossible d'expand users, utilisation de l'événement simple:", expandError);
      return record;
    }
  } catch (error) {
    console.error("❌ Erreur lors de la récupération de l'événement:", error);
    if (error instanceof Error) {
      console.error("Message d'erreur:", error.message);
      if (error.message.includes("404") || error.message.includes("not found")) {
        console.log("📝 L'événement n'existe pas dans la base de données");
        try {
          console.log("🔍 Vérification des événements disponibles...");
          const allEvents = await pb.collection("event").getFullList({
            fields: "id,nom_event",
            requestKey: null
          });
          console.log(
            "📋 Événements disponibles:",
            allEvents.map((e) => ({ id: e.id, nom: e.nom_event }))
          );
          const similarEvents = allEvents.filter(
            (e) => e.id.includes(id.substring(0, 5)) || id.includes(e.id.substring(0, 5))
          );
          if (similarEvents.length > 0) {
            console.log("💡 Événements avec ID similaire:", similarEvents);
          }
        } catch (listError) {
          console.error("❌ Impossible de lister les événements:", listError);
        }
      }
    }
    return null;
  }
}
function getImageUrl(record, filename) {
  if (!filename) return "";
  return pb.files.getUrl(record, filename);
}
function formatDate(dateString) {
  if (!dateString) return "Date non définie";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  } catch {
    return "Date non définie";
  }
}

export { getAllEvents as a, getImageUrl as b, formatDate as f, getEventById as g };
