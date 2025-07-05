import Link from "next/link";

type ProjectProps = {
    id: number;
    img: string;
    title: string;
    description: string;
    linkGitHub: string;
};

interface Props {
    dados: ProjectProps[];
}

export function ProjectsCard({ dados }: Props) {
    return (
        <div className="flex flex-wrap gap-10 justify-center sm:justify-start w-full">
            {dados.map((project) => (
                <div
                    key={project.id}
                    className="bg-card p-5 rounded-3xl shadow-lg w-full md:w-[400px] flex flex-col"
                >
                    {/* <img src={project.img} alt={project.title} className="rounded-3xl w-full mb-4" /> */}
                    <div className="flex-1 flex flex-col">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h1>
                        <p className="text-sm sm:text-base font-semibold mb-8 sm:mb-10">{project.description}</p>
                    </div>
                    <Link href={project.linkGitHub} target="_blank" className="text-[#CE1EFA]">
                        Ver no GitHub →
                    </Link>
                </div>
            ))}
        </div>
    );
}
