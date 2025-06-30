"use client";

import { ProjectsCard } from "@/src/components/Card/ProjectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Erro ao buscar projetos:", err));
  }, []);

  return (
    <section>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-l from-[#3C2343] to-[#B729DB] text-transparent bg-clip-text mb-12 text-center lg:text-left">Meus Projetos</h1>
      <ProjectsCard dados={projects} />
    </section>
  )
}
