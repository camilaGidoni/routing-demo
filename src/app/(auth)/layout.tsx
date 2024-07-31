'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import "./styles.css"

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot password', href: '/forgot-password' }
]
export default function AuthLayout({
  children, // child component during rendering
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname() // the name always need to be pathname
  // each navigation to route from the navlink ,
  // pathname will be the current route
    return (
    <div>
      {navLinks.map((link) => {
         const isActive = pathname.startsWith(link.href)
        return (
          <Link 
          href={link.href} 
          key={link.name}
          className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4" }
          >
            {link.name}
          </Link>
        )
      })}
      {children}
      <h2>this is group layout</h2>
    </div>
  )
}
