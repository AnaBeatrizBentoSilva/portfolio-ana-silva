import { LinkedinOutlined, GithubOutlined, WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

export default function InfoCard() {
    const calcularIdade = () => {
        const dataNascimento = new Date('2006-04-06');
        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimento.getFullYear();
        const mes = hoje.getMonth() - dataNascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
            idade--;
        }
        return idade;
    };

    return (
        <div className="lg:fixed relative top-20 lg:top-1/2 lg:left-4 lg:transform lg:-translate-y-1/2 bg-[#100F0E] p-6 md:p-10 rounded-3xl shadow-lg w-full max-w-[400px] text-center flex flex-col items-center mx-auto mt-6 lg:mt-0">
            <img src="/img/ana.jpeg" alt="" className='rounded-full w-64 mb-8' />
            <h2 className="text-xl font-bold">Ana Beatriz Bento Silva</h2>
            <p className="text-lg">{calcularIdade()} anos</p>
            <p className="text-sm mb-4">São Paulo, Brasil</p>

            <div className="my-5">
                <h3 className="text-md font-semibold mb-2">Formação</h3>
                <ul className="pl-5">
                    <li className="text-sm">Técnico em Desenvolvimento de Sistemas - ETEC</li>
                    <li className="text-sm">Técnologo em Análise e Desenvolvimento de Sistemas - UNIP</li>
                </ul>
            </div>

            <div className="my-5 space-x-8">
                <a href="https://wa.me/5511989949992" target="_blank" className="hover:text-gray-500 text-4xl"><WhatsAppOutlined /></a>
                <a href="https://github.com/AnaBeatrizBentoSilva" target="_blank" className="hover:text-gray-500 text-4xl"><GithubOutlined /></a>
                <a href="https://www.linkedin.com/in/anabbsilva/" target="_blank" className="hover:text-gray-500 text-4xl"><LinkedinOutlined /></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anabento3807@gmail.com" target="_blank" className="hover:text-gray-500 text-4xl"><MailOutlined /></a>
            </div>

            <button className='w-full p-3 inline-block bg-gradient-to-r from-purple-600 to-purple-950 rounded-2xl'>
                <a href="/file/Currículo - Ana Silva.pdf" download className="text-white">Baixar CV</a>
            </button>
        </div>
    );
}
