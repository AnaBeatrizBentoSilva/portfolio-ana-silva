import {
    Laptop2,
    Code,
    BarChart,
    Database,
    GitFork,
} from "lucide-react";

const icons = {
    Laptop2: <Laptop2 className="text-[#CE1EFA] w-5 h-5" />,
    Code: <Code className="text-[#CE1EFA] w-5 h-5" />,
    BadgeCheck: <BarChart className="text-[#CE1EFA] w-5 h-5" />,
    Database: <Database className="text-[#CE1EFA] w-5 h-5" />,
    GitFork: <GitFork className="text-[#CE1EFA] w-5 h-5" />,
};

type QualificationProps = {
    titulo: string;
    descricao: string;
    icone: keyof typeof icons;
};

interface Props {
    dados: QualificationProps[];
}

export default function QualificationsCard({ dados }: Props) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dados.map((item, i) => (
                <div
                    key={i}
                    className="rounded-2xl border border-[#CE1EFA]/30 shadow-md bg-white dark:bg-[#1f1f1f] p-4"
                >
                    <div className="flex items-center gap-2 mb-2">
                        {icons[item.icone]}
                        <h3 className="font-medium text-lg text-[#CE1EFA]">{item.titulo}</h3>
                    </div>
                    <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">{item.descricao}</p>
                </div>
            ))}
        </div>
    );
}
