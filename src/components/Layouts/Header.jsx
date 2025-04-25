import { Link, useLocation } from 'react-router-dom'
import Navbar, { Links } from '../fragments/Navbar'
import Button from '../Elements/Button'
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const location = useLocation();
  
  return (
    <header className="py-8">
        <div className="container flex justify-between items-center">
          <Link to="/">
            <h1 className="font-semibold text-4xl">Arif<span className='text-primary'> .</span></h1>
          </Link>
          {/* Navbar */}
          <div className="hidden md:flex items-center gap-8">
            <Navbar />
            <Link to="/contact">
            <Button style="border-2 border-primary text-primary hover:bg-primary hover:text-hitam transition-all duration-100">
              Hire Me
            </Button>
            </Link> 
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <FiMenu className='size-8 text-primary'/>
            </button>
          </div>
        </div>

        {/* Overlay */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40"
            onClick={() => setIsOpen(false)} // Klik overlay untuk menutup sidebar
          />
        )}
        </AnimatePresence>

        {/* Mobile Nav */}
        <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full bottom-0 w-4/5 max-w-sm bg-[#272748] shadow-lg z-50 flex flex-col p-6"
            >
              <button
                onClick={() => setIsOpen(false)}
                className='self-end text-primary'
                >
                <FiX className="size-8" />
              </button>
              <div className="flex items-center flex-col justify-center h-3/4 gap-[60px]">
                <h1 className='text-4xl font-semibold'>Arif <span className='text-primary'>.</span></h1>
                <div className="mt-8 flex flex-col gap-6">
                  {Links.map((link, index) => (
                    <Link
                      to={link.path}
                      key={index}
                      onClick={() => setIsOpen(false)}
                      className={`${location.pathname === link.path ? "text-primary border-b-2 border-primary" : ""} text-center hover:text-primary transition-all duration-200 capitalize`} 
                      >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
          </motion.div>
        )}
        </AnimatePresence>
    </header>
  )
}

export default Header