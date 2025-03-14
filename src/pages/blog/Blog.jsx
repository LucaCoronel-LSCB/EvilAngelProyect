"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CloudLightning, Info, Zap } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips esenciales para nuevos vapeadores",
    excerpt:
      "Descubre los consejos más importantes para comenzar tu experiencia de vapeo de manera segura y placentera.",
    icon: <Info className="post-icon" />,
    content: `1. Carga tu vaper con carga lenta, ya sea con un televisor o una PC.
2. Mantén tu dispositivo limpio.
3. Hidrátate frecuentemente.
4. Experimenta con diferentes sabores.
5. No mezcles con cigarrillos tradicionales.`,
  },
  {
    id: 2,
    title: "Trucos de vapeo para impresionar",
    excerpt:
      "Aprende algunos trucos básicos y avanzados para hacer anillos, tornados y más con tu vaper.",
    icon: <CloudLightning className="post-icon" />,
    content: `ANILLOS DE HUMO: Forma una 'O' con tus labios y da golpecitos suaves en tu mejilla.
TORNADO: Exhala una nube densa sobre una superficie plana y pasa tu mano rápidamente por encima.
MEDUSA: Crea múltiples anillos pequeños en rápida sucesión.`,
  },
  {
    id: 3,
    title: "Vapeo vs. Cigarrillos: ¿Cuál es menos dañino?",
    excerpt:
      "Un análisis comparativo entre el vapeo y los cigarrillos tradicionales basado en estudios recientes.",
    icon: <Zap className="post-icon" />,
    content: `Aunque el vapeo no está libre de riesgos, muchos estudios sugieren que es menos dañino que fumar cigarrillos tradicionales.
El vapeo no produce alquitrán ni monóxido de carbono, dos de los componentes más dañinos del humo del tabaco.
Sin embargo, aún contiene nicotina y otros químicos.
Consulta siempre a un profesional de la salud antes de hacer cambios en tus hábitos.`,
  },
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (id) => {
    setExpandedPost((prev) => (prev === id ? null : id));
  };

  return (
    <div className="blog-container">
      <h1>Blog de Evil Angel</h1>
      <p className="blog-intro">
        Explora nuestros artículos sobre vapeo, trucos y comparativas. Mantente
        informado y disfruta de una experiencia de vapeo responsable.
      </p>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <div className="post-header" onClick={() => togglePost(post.id)}>
              {post.icon}
              <h2>{post.title}</h2>
              <ChevronRight
                className={`expand-icon ${
                  expandedPost === post.id ? "expanded" : ""
                }`}
              />
            </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <motion.div
              className="post-content"
              initial={false}
              animate={{ height: expandedPost === post.id ? "auto" : 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ overflow: "hidden", opacity: expandedPost === post.id ? 1 : 0 }}
            >
              {post.content.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .blog-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 5rem 2rem;
          background-color: #111;
          color: #ffffff;
          font-family: "Arial", sans-serif;
        }

        h1 {
          color: #3de0fc;
          text-align: center;
          margin-bottom: 1rem;
        }

        .blog-intro {
          text-align: center;
          margin-bottom: 2rem;
          color: #133c6a;
        }

        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .blog-post {
          background-color: #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .post-header {
          display: flex;
          align-items: center;
          padding: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .post-header:hover {
          background-color: #333;
        }

        .post-icon {
          margin-right: 1rem;
          color: #4ecdc4;
        }

        h2 {
          flex-grow: 1;
          margin: 0;
          font-size: 1.2rem;
        }

        .expand-icon {
          transition: transform 0.3s ease;
        }

        .expand-icon.expanded {
          transform: rotate(90deg);
        }

        .post-excerpt {
          padding: 0 1rem 1rem;
          color: #bbb;
        }

        .post-content {
          padding: 1rem;
          border-top: 1px solid #444;
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .blog-container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
