import { Link, useLocation } from 'react-router-dom'

export const Links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "project",
        path: "/project",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const Navbar = () => {
    const location = useLocation();
  return (
    <nav className='flex gap-8'>
        {Links.map((link, index) => (
            <Link 
            to={link.path} 
            key={index}
            className={`${location.pathname === link.path ? "text-primary border-b-2 border-primary capitalize" : ""} hover:text-primary capitalize transition-all duration-300`}
            >
                {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Navbar