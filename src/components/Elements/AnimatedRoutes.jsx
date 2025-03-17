import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "./PageTransition";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Project from "../../pages/Project";
import Contact from "../../pages/Contact";
import Notfound from "../../pages/Notfound404";

const AnimatedRoutes = () => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <AnimatePresence mode="sync">
        <div key={location.pathname}>
        <PageTransition isAnimating={isAnimating}/>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        <motion.div className="h-screen w-screen fixed bg-black top-0 pointer-events-none" 
          initial={{opacity: 1,}}
          animate={{opacity: 0,
            transition: {
              delay: 1.8,
              duration: 0.4,
              ease: "easeInOut"},
            }} />
            </div>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
