'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/sobre-mim', label: 'Sobre Mim' },
  { href: '/experiencias', label: 'Experiências' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full fixed backdrop-blur-xs py-4 px-4 lg:px-8 flex items-center justify-center z-50">
      <nav className="flex flex-wrap gap-5 md:gap-12 justify-center">
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition duration-200 ${pathname === href
              ? 'border-2 border-purple-500 rounded-4xl px-4 text-purple-300'
              : 'hover:text-gray-400'
              }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
