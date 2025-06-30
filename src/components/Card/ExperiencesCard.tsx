import Link from "next/link";

type ExperienceProps = {
    id: number;
    title: string;
    project: string;
    description: string;
    type: string;
    status: string;
    time: string;
    linkProject: string;
    technologies: {
        name: string;
        icon: string;
    }[];
    img: string;
};

interface Props {
    dados: ExperienceProps[];
}

export function ExperiencesCard({ dados }: Props) {
    return (
        <div className="flex flex-col border-l-4 border-[#B729DB] pl-8 space-y-20">
            {dados.map((experience) => (
                <div key={experience.id} className="relative">
                    <span className="absolute -left-[47px] top-0 w-6 h-6 bg-[#B729DB] rounded-full border-4 border-white" />
                    <div className="bg-[#100F0E] p-6 sm:p-10 rounded-3xl shadow-lg flex flex-col mr-0 sm:mr-20">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{experience.title}</h1>
                            <p className="text-sm sm:text-md font-semibold text-[#621675] bg-[rgba(104,37,121,0.24)] py-1 px-4 rounded-3xl border border-[#621675] whitespace-nowrap">
                                {experience.status}
                            </p>
                        </div>

                        <div className="flex flex-wrap text-lg gap-2 mb-8 font-semibold">
                            <Link href={experience.linkProject} target="_blank" className="text-[#CE1EFA] hover:underline">
                                {experience.project}
                            </Link>
                            <p>{experience.type}</p>
                            <p>-</p>
                            <p>{experience.time}</p>
                        </div>

                        <p className="text-base sm:text-lg font-medium mb-8">{experience.description}</p>

                        <div className="flex flex-col sm:flex-row items-stretch gap-10">
                            <img
                                src={experience.img}
                                alt={experience.title}
                                className="rounded-2xl w-full sm:w-1/2 max-h-60 sm:max-h-[320px] object-cover"
                            />
                            <div className="flex flex-wrap content-center justify-center gap-4 border border-[#444444] bg-black w-full sm:w-1/2 p-4 rounded-2xl">
                                {experience.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 bg-[#1A1919] px-5 py-2 rounded-4xl items-center whitespace-nowrap"
                                    >
                                        <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                                        <span className="text-base sm:text-lg font-bold">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
