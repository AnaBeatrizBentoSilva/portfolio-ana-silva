"use client";

import QualificationsCard from "@/src/components/Card/QualificationsCard";
import { Book, BookOpen, Cpu, GraduationCap, Layers, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function AboutMe() {
  const [qualifications, setQualifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/qualifications")
      .then(res => res.json())
      .then(data => setQualifications(data))
      .catch(err => console.error("Erro ao buscar projetos:", err));
  }, []);

  return (
    <section>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-l from-[#3C2343] to-[#B729DB] text-transparent bg-clip-text mb-12 text-center lg:text-left">
        Sobre Mim
      </h1>

      <div className="space-y-8 text-base sm:text-lg leading-relaxed">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#CE1EFA] border-b-2 border-[#B729DB] pb-2">
            Minha Jornada
          </h2>
          <div className="space-y-3">
            <p>
              Desde pequena, sempre achei fascinantes aquelas telas cheias de códigos, mas acreditava
              que essa profissão era inacessível para mim — que apenas pessoas “muito inteligentes”
              nasciam com esse “poder” ou uma profissão de filme.
            </p>
            <p>
              Isso mudou quando meu cunhado me apresentou esse mundo e
              mostrou que eu poderia aprender a escrever códigos e entender aquelas linhas que antes
              pareciam incompreensíveis. Minha mente se abriu, e desde então não parei mais de estudar.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#CE1EFA] border-b-2 border-[#B729DB] pb-2">
            Meus Objetivos
          </h2>
          <p>
            Embora goste mais do front-end — especialmente de brincar com as cores dos botões — meu sonho é me tornar
            uma desenvolvedora Full Stack. Sei da importância de entender todo o processo, do front-end ao back-end,
            e estou determinada a adquirir todas as habilidades para alcançar essa meta e me tornar uma dessas pessoas
            “super inteligentes” que dominam esse “poder” dos códigos.
          </p>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#CE1EFA] border-b-2 border-[#B729DB] pb-2">
            Principais Qualificações
          </h2>
          <QualificationsCard dados={qualifications} />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#CE1EFA] border-b-2 border-[#B729DB] pb-2">
            Experiências e Projetos
          </h2>
          <div className="space-y-3">
            <p>
              Ao longo dos meus estudos, desenvolvi diversos projetos, tanto em cursos quanto na faculdade. Grande parte dos projetos e estudos estão disponíveis no meu GitHub. Na seção de <Link href='/projetos' className="text-[#de8bf5]">Projetos</Link>, separei uma seleção daqueles que considero mais relevantes.
            </p>
            <p>
              Até o momento, já tive algumas experiências profissionais, principalmente como desenvolvedora front-end — sendo uma como freelancer com React Native, uma como freelancer com React e outra como estagiária com React. Nesses caminhos, também adquiri vivência com o back-end, aumentando minhas habilidades na criação de aplicações completas. Na seção de <Link href='/experiencias' className="text-[#de8bf5]">Experiências</Link> você confere mais detalhes sobre essa trajetória, os projetos em que atuei e as responsabilidades que assumi ao longo do tempo.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#CE1EFA] border-b-2 border-[#B729DB] pb-2">
            Formação e Conhecimentos
          </h2>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed">

            <div className="flex items-start gap-4">
              <Cpu className="text-[#CE1EFA] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Ensino Fundamental e Médio</p>
                <p>
                  Tive contato com programação e robótica: programei robôs EV3 com linguagem em blocos, desenvolvi jogos no Scratch, trabalhei com Arduino e criei aplicativos no App Inventor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Book className="text-[#CE1EFA] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Curso Técnico de Desenvolvimento de Sistemas</p>
                <p>
                  Durante o curso, aprendi Java, HTML, CSS, JavaScript e Wiring C/C++, além de um maior aprofundamento em PHP e MySQL. Antes disso, já tinha conhecimentos prévios em HTML, CSS, JavaScript e React Native.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="text-[#CE1EFA] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Faculdade</p>
                <p>
                  Aprofundei-me nas principais etapas do desenvolvimento de software, incluindo levantamento de requisitos, criação de diagramas e processos completos de engenharia de software. Também estudei linguagens como C++, C# e ferramentas como SQL Server.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Terminal className="text-[#CE1EFA] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Projetos Freelance e Estágio</p>
                <p>
                  Desenvolvi habilidades em React Native, React com Next.js, TypeScript, JavaScript, CSS, SCSS, Tailwind CSS.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Zap className="text-[#CE1EFA] w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Cursos Complementares</p>
                <p>
                  Incluem desenvolvimento mobile com Android Studio, controle de versão com Git e GitHub, Angular 9, testes de software, segurança em TI, front-end com React, design com Figma e ciência de dados (Python, cálculo, bancos de dados).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
