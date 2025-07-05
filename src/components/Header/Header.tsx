'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';
import { CloseOutlined, MenuOutlined, MoonFilled, SunFilled } from '@ant-design/icons';


const pages = [
  { href: '/', label: 'Home' },
  { href: '/sobre-mim', label: 'Sobre Mim' },
  { href: '/experiencias', label: 'Experiências' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const pathname = usePathname()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  function toggleTheme() {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
    <header className="w-full fixed backdrop-blur-xs py-4 px-4 lg:px-8 flex items-center justify-between z-50">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-xl"
        aria-label="Abrir menu"
      >
        {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </button>
      <nav className="hidden md:flex flex-wrap gap-5 md:gap-12 justify-center flex-grow">
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition duration-200 ${pathname === href
              ? 'border-2 border-purple-500 rounded-4xl px-4 text-link-active'
              : 'hover:text-gray-400'
              }`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        onClick={toggleTheme}
        aria-label='Alterar modo claro/escuro'
        title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        className="flex items-center gap-2 bg-[#B729DB] hover:bg-[#9e25c0] transition-colors text-white py-1 px-1 sm:px-4 rounded-xl text-sm font-medium"
      >
        {isDarkMode
          ? <SunFilled className="w-4 h-4 !text-yellow-400" />
          : <MoonFilled className="w-4 h-4 text-gray-600 dark:text-white" />
        }
        <span className="hidden sm:inline">
          {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
        </span>

      </button>
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full h-[calc(100%-64px)] z-50 flex flex-col md:hidden transition-all text-center">
        {pages.map(({ href, label }, index) => (
            <div key={href} className='bg-header'>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block my-2 text-lg ${pathname === href
                  ? 'text-purple-500 font-semibold'
                  : 'hover:text-purple-400'
                  }`}
              >
                {label}
              </Link>
              {index < pages.length - 1 && (
                <hr className="border-t-2 border-white/20 w-4 mx-auto" />
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
