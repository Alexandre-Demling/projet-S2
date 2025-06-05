import PocketBase from 'pocketbase';
export { renderers } from '../../renderers.mjs';

// API endpoint for handling comments
const prerender = false;

// Initialiser PocketBase
const pb = new PocketBase("https://pocketbaseprojet.alexandre-demling.fr");

async function GET({ url }) {
  const eventId = url.searchParams.get("eventId");

  if (!eventId) {
    return new Response(JSON.stringify({ error: "Event ID is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  try {
    console.log("📥 GET - Récupération des commentaires pour l'événement:", eventId);

    // Récupérer les commentaires existants de PocketBase
    const existingComments = [];
    try {
      // ✅ Récupérer d'abord les commentaires sans expand
      const rawComments = await pb.collection("comments").getFullList({
        filter: `event = "${eventId}"`,
        sort: "-created",
      });

      console.log("📋 Commentaires bruts récupérés:", rawComments.length);

      // ✅ Pour chaque commentaire, récupérer manuellement les données utilisateur
      for (const comment of rawComments) {
        try {
          console.log("🔍 Récupération utilisateur pour commentaire:", comment.id, "user ID:", comment.users);

          const user = await pb.collection("users").getOne(comment.users);

          // ✅ Construire le commentaire avec les données utilisateur
          const enrichedComment = {
            ...comment,
            expand: {
              users: user,
            },
          };

          existingComments.push(enrichedComment);

          console.log("✅ Commentaire enrichi:", {
            id: comment.id,
            content: comment.content.substring(0, 30) + "...",
            user: {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
              avatar: user.avatar,
            },
          });
        } catch (userError) {
          console.warn("⚠️ Impossible de récupérer l'utilisateur pour le commentaire:", comment.id, userError);
          // Ajouter le commentaire sans données utilisateur
          existingComments.push({
            ...comment,
            expand: {
              users: {
                id: comment.users,
                name: "Utilisateur inconnu",
                username: "unknown",
                email: "unknown@example.com",
                avatar: null,
              },
            },
          });
        }
      }

      console.log("✅ Commentaires PocketBase enrichis:", existingComments.length);
    } catch (pbError) {
      console.error("⚠️ Erreur PocketBase lors de la récupération des commentaires:", pbError);
    }

    console.log("✅ Total commentaires retournés:", existingComments.length);

    return new Response(JSON.stringify(existingComments), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des commentaires:", error);

    return new Response(JSON.stringify({ error: "Failed to retrieve comments" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

async function POST({ request }) {
  try {
    console.log("📥 POST - Création d'un nouveau commentaire");

    const formData = await request.formData();
    const eventId = formData.get("eventId");
    const username = formData.get("username") || "Utilisateur";
    const comment = formData.get("comment");
    const userToken = formData.get("userToken");

    console.log("📋 Données reçues:", {
      eventId,
      username,
      comment: comment ? comment.substring(0, 50) + "..." : "vide",
      hasToken: !!userToken,
    });

    if (!eventId || !comment) {
      console.error("❌ Données manquantes");
      return new Response(JSON.stringify({ error: "EventId and comment are required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    // Vérifier si l'utilisateur est authentifié
    if (!userToken) {
      console.error("❌ Token utilisateur manquant");
      return new Response(JSON.stringify({ error: "User token is required" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    try {
      console.log("🔐 Tentative d'authentification avec PocketBase...");
      pb.authStore.save(userToken, null);

      // Vérifier si l'authentification a réussi
      if (!pb.authStore.isValid) {
        console.error("❌ Token d'authentification invalide");
        return new Response(JSON.stringify({ error: "Invalid authentication token" }), {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        })
      }

      await pb.collection("users").authRefresh();
      console.log("✅ Authentification réussie:", pb.authStore.model);

      // Créer le commentaire
      const commentData = {
        event: eventId,
        users: pb.authStore.model.id,
        content: comment.trim(),
      };

      console.log("📝 Données du commentaire à sauvegarder:", commentData);

      const createdComment = await pb.collection("comments").create(commentData);
      console.log("✅ Commentaire créé avec succès:", createdComment);

      // Récupérer les données utilisateur
      const user = await pb.collection("users").getOne(pb.authStore.model.id);

      // Construire le commentaire complet avec les données utilisateur
      const newComment = {
        ...createdComment,
        expand: {
          users: user,
        },
      };

      return new Response(
        JSON.stringify({
          success: true,
          comment: newComment,
          message: "Commentaire ajouté avec succès",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    } catch (pbError) {
      console.error("❌ Erreur PocketBase détaillée:", {
        message: pbError.message,
        status: pbError.status,
        data: pbError.data,
      });

      // Vérifier si c'est une erreur de validation
      if (pbError.status === 400) {
        return new Response(
          JSON.stringify({
            error: "Erreur de validation",
            details: pbError.data,
          }),
          { status: 400, headers: { "Content-Type": "application/json" } },
        )
      }

      return new Response(JSON.stringify({ error: pbError.message || "Erreur lors de la création du commentaire" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }
  } catch (error) {
    console.error("❌ Erreur lors de la création du commentaire:", error);

    return new Response(JSON.stringify({ error: "Failed to process comment" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

async function DELETE({ url }) {
  try {
    console.log("📥 DELETE - Suppression d'un commentaire");

    const commentId = url.searchParams.get("id");
    const userToken = url.searchParams.get("token");

    console.log("📋 Paramètres:", { commentId, hasToken: !!userToken });

    if (!commentId) {
      return new Response(JSON.stringify({ error: "Comment ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    if (!userToken) {
      return new Response(JSON.stringify({ error: "User token is required" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    try {
      console.log("🔐 Tentative d'authentification pour suppression...");
      pb.authStore.save(userToken, null);

      if (!pb.authStore.isValid) {
        return new Response(JSON.stringify({ error: "Invalid authentication token" }), {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        })
      }

      await pb.collection("users").authRefresh();

      // Vérifier que l'utilisateur est l'auteur
      const comment = await pb.collection("comments").getOne(commentId);
      if (comment.users === pb.authStore.model.id) {
        await pb.collection("comments").delete(commentId);
        console.log("✅ Commentaire supprimé de PocketBase");

        return new Response(
          JSON.stringify({
            success: true,
            message: "Commentaire supprimé avec succès",
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
      } else {
        return new Response(JSON.stringify({ error: "Vous ne pouvez supprimer que vos propres commentaires" }), {
          status: 403,
          headers: {
            "Content-Type": "application/json",
          },
        })
      }
    } catch (pbError) {
      console.warn("⚠️ Erreur lors de la suppression PocketBase:", pbError);
      return new Response(JSON.stringify({ error: pbError.message }), {
        status: 403,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }
  } catch (error) {
    console.error("❌ Erreur lors de la suppression:", error);

    return new Response(JSON.stringify({ error: "Failed to delete comment" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
