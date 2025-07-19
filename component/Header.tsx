
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isContactPage = pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  const navLinks = isContactPage ? (
    <Link href="/" onClick={closeMenu} className="hover:text-gray-300 block px-4 py-2">
      Home
    </Link>
  ) : (
    <>
      <a href="#home" onClick={closeMenu} className="hover:text-gray-300 block ">
        Home
      </a>
      <a href="#about" onClick={closeMenu} className="hover:text-gray-300 block ">
        About us
      </a>
      <a href="#works" onClick={closeMenu} className="hover:text-gray-300 block ">
        Projects
      </a>
      <a href="#team" onClick={closeMenu} className="hover:text-gray-300 block ">
        Team
      </a>
      <a href="#ideas" onClick={closeMenu} className="hover:text-gray-300 block ">
        Our Vision
      </a>
      <Link href="/contact" onClick={closeMenu} className="hover:text-gray-300 block ">
        Contact
      </Link>
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a0909b1] text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center p-6 md:px-12">
        <h1 className="relative inline-block text-4xl text-white">
          EVOLVE
          <span className="absolute -top-2 right--4 w-2 h-2 bg-white rounded-full animate-bounce"></span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">{navLinks}</nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0909ec] text-white px-6 py-4 space-y-2">
          {navLinks}
        </div>
      )}
    </header>
  )
}
