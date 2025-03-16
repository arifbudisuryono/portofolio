import { motion } from "framer-motion";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const HeroSection = (props) => {
  const { children } = props
  return (
    <div>
      {children}
    </div>
  )
}

const HeroDesc = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.4, ease: "easeInOut" }}
        className="text-center lg:text-left"
        >
          <h2 className="font-semibold text-3xl md:text-4xl">Hello I'm</h2>
          <h1 className="font-semibold text-4xl md:text-5xl lg:text-[52px] text-primary">Arif Budi Suryono</h1>
          <p className="text-slate-300 lg:text-[20px]">Frontend Developer Enthusiast</p>
          <div className="px-6 border-1 border-slate-300 w-[10%] mx-auto mt-5 mb-2 lg:ml-0"></div>
          <p className="text-slate-300 lg:text-[20px]">I am passionate about creating engaging and interactive web interfaces. I am honing my skills in modern frontend technologies to build dynamic and innovative web applications.</p>
          <div className="flex justify-center lg:justify-start gap-4 mt-5">
          <a href="https://drive.google.com/drive/folders/1yQLLUN-baHuIagCTnJmwo56LSfHtNaN_/" target="_blank" rel="noopener noreferrer">
            <Button style="bg-primary flex items-center text-hitam font-semibold justify-center gap-x-1 w-[150px] md:w-[203px] hover:bg-[#37AFE1] transition-all duration-300">
            <span className="hidden md:block"><IoDocumentTextOutline size={20}/></span>
            <span>Download CV</span>
            </Button>
          </a>
          <Link to="/about">
          <Button style="border-2 w-[150px] md:w-[203px] font-semibold border-primary hover:bg-primary hover:text-hitam transition-all duration-300">More</Button>
          </Link>
          </div>
          <div className="flex justify-center lg:justify-start lg:text-[20px] lg:gap-10 gap-3 items-center mt-5">
            <div className="text-center font-semibold mr-4">
              <h3>Find Me On</h3>
            </div>
            <a href="https://github.com/arifbudisuryono" target="_blank" rel="noopener noreferrer">
              <div className="p-2 bg-[#272748] text-primary rounded-full hover:bg-primary hover:text-hitam transition-all duration-300">
                <FaGithub size={20}/>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/arif-budi-suryono-15215016b/" target="_blank" rel="noopener noreferrer">
              <div className="p-2 bg-[#272748] text-primary rounded-full hover:bg-primary hover:text-hitam transition-all duration-300">
                <FaLinkedinIn size={20}/>
            </div>
            </a>
            <a href="https://www.instagram.com/arifbudisuryono/" target="_blank" rel="noopener noreferrer">
              <div className="p-2 bg-[#272748] text-primary rounded-full hover:bg-primary hover:text-hitam transition-all duration-300">
                <FaInstagram size={20}/>
              </div>
            </a>
          </div>
      </motion.div>
    </div>
  )
}

const HeroImage = () => {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.3, duration: 0.4, ease: "easeIn" }}
      className="relative w-full flex justify-center"
      >
        <img src="../image/hero.png" alt="" className="w-[60%]"/>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#1c1c22]/100 to-transparent"></div>
        <motion.svg
          className="absolute w-[250px] md:w-[500px] lg:w-[400px] h-[250px] md:h-[500px] lg:h-[400px]"
          fill="transparent"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          >
          <motion.circle
            cx="250"
            cy="250"
            r="250"
            stroke="#0ef"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{ 
              strokeDasharray: ["15 120 25 25", "16 25 92 72","4 250 22 22"],
              rotate: [120, 360],  
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
    </motion.div>
  )
}

HeroSection.HeroDesc = HeroDesc;
HeroSection.HeroImage = HeroImage;

export default HeroSection