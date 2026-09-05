import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Preloader } from "@/components/portfolio/Preloader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Process } from "@/components/portfolio/Process";
import { Projects } from "@/components/portfolio/Projects";
import { CurrentlyBuilding } from "@/components/portfolio/CurrentlyBuilding";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swetha — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Swetha is an aspiring full stack developer building modern web applications with Angular, React Native, Node.js, Express, and MongoDB — currently building Doofy, a pet care ecosystem.",
      },
      { property: "og:title", content: "Swetha — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Modern web and mobile applications built with Angular, React Native, Node.js, Express, and MongoDB, plus AI-powered development tools.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },

    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-black font-display">
      <Preloader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
