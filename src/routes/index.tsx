import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Preloader } from "@/components/portfolio/Preloader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Process } from "@/components/portfolio/Process";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swetha — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Swetha is a full stack developer building modern, scalable web applications with React, Next.js, Node.js, Tailwind CSS, and MongoDB.",
      },
      { property: "og:title", content: "Swetha — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Modern web applications and digital experiences built with React, Node.js, Tailwind CSS, and MongoDB.",
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
