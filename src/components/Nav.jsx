'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home', exact: true },
  { href: '/documents', label: 'Documents' },
  { href: '/gamify', label: 'Practice Arena' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand" style={{ textDecoration: 'none' }}>
          <span className="brand-mark">Σ</span>
          Summit Math
        </Link>
        <nav className="nav-links">
          {links.map((link) => {
            const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href)
            return (
              <Link key={link.href} href={link.href} className={'nav-link' + (isActive ? ' active' : '')}>
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
