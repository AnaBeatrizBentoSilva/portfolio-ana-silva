import './globals.css'
import Header from '@/src/components/Header/Header'
import InfoCard from '@/src/components/Card/InfoCard'

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio da Ana Silva',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="relative min-h-screen mb-20 lg:mb-0">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if(theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <Header/>
        <div className="absolute top-0 right-0 -z-10">
          <img src="img/fundo.svg" alt="Fundo" className="w-40 md:w-64 lg:w-80"
          />
        </div>
        <div className="absolute -bottom-20 lg:bottom-0 left-0 rotate-180 -z-10">
          <img src="img/fundo.svg" alt="Fundo" className="w-40 md:w-64 lg:w-80"
          />
        </div>
        <div className="flex flex-col lg:flex-row">
        <InfoCard />
        <main className="lg:ml-[420px] mt-16 py-10 px-6 lg:px-16">
        {children}
        </main>
        </div>
      </body>
    </html>
  )
}
