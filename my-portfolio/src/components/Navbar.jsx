import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-22 py-4 border-b border-b-emerald-300 text-white text-2xl">
      <span className="font-semibold">Basit 
        <span className='text-emerald-300 px-1'>/</span>
      </span>
      <div className="flex gap-12 text-lg">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'border-b-emerald-300 border-b-2' : 'text-white-600'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar