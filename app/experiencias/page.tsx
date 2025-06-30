"use client";

import { ExperiencesCard } from "@/src/components/Card/ExperiencesCard";
import { useEffect, useState } from "react";

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/experiences")
      .then(res => res.json())
      .then(data => setExperiences(data))
      .catch(err => console.error("Erro ao buscar projetos:", err));
  }, []);

  return (
    <section>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-l from-[#3C2343] to-[#B729DB] text-transparent bg-clip-text mb-12 text-center lg:text-left">Minhas Experiências</h1>
      <ExperiencesCard dados={experiences}/>
    </section>
  )
}
