import { LinkedinOutlined, GithubOutlined, WhatsAppOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

export default function Contact() {
  return (
    <section>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-l from-[#3C2343] to-[#B729DB] text-transparent bg-clip-text mb-12 text-center lg:text-left">Contato</h1>
      <p className="text-base sm:text-lg mb-8">
        Fique à vontade para entrar em contato comigo por e-mail, WhatsApp ou pelas minhas redes. Estou sempre aberta a novas oportunidades!
      </p>
      <div className="gap-8 bg-card p-10 rounded-3xl shadow-lg">

        <div className="space-y-4 text-base sm:text-lg">
          <p>
            <MailOutlined className='mr-2' />
            <strong>E-mail: </strong>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anabento3807@gmail.com"
              target="_blank"
              className="text-link-active hover:underline">
              anabento3807@email.com
            </a>
          </p>
          <p>
            <WhatsAppOutlined className='mr-2' />

            <strong>Telefone: </strong>
            <a
              href="https://wa.me/5511989949992"
              target="_blank"
              className="text-link-active hover:underline">
              +55 (11) 98994-9992
            </a>
          </p>
          <p>
            <LinkedinOutlined className='mr-2' />
            <strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/anabbsilva/"
              target="_blank"
              rel="noreferrer"
              className="text-link-active hover:underline"
            >
              linkedin.com/in/anabbsilva
            </a>
          </p>
          <p>
            <GithubOutlined className='mr-2' />
            <strong>GitHub: </strong>
            <a
              href="https://github.com/AnaBeatrizBentoSilva"
              target="_blank"
              rel="noreferrer"
              className="text-link-active hover:underline"
            >
              github.com/AnaBeatrizBentoSilva
            </a>
          </p>

          <div className='flex gap-2'>
            <EnvironmentOutlined/>
            <strong>Cidade: </strong>
            <p className="text-link-active hover:underline">Mauá, São Paulo – Brasil</p>
          </div>

          <div className="w-full h-64 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.487473212618!2d-46.45624168452664!3d-23.667960779610785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cd6aa51efaf%3A0x6c0a3a6f8e841b8b!2sMau%C3%A1%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1718142000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Mauá"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
