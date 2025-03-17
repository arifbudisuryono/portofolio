import  { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import "swiper/css";
import ButtonSlider from "../Elements/ButtonSlider";

const projects = [
    // {
    //     num: "01",
    //     category: "Fullstack",
    //     title: "Project 1",
    //     description: "This Project I developed using the Laravel framework during my internship with the help of AI",
    //     stack: [
    //         {name: "Laravel 11"},
    //         {name: "Tailwind"},
    //     ],
    //     image: "../image/project2.png",
    //     live: "",
    //     github: "https://github.com/arifbudisuryono/rental_mobil",
    // },
    {
        num: "01",
        category: "Fullstack",
        title: "Project 1",
        description: "This Project I developed using the CodeIgniter framework during college",
        stack: [
            {name: "CodeIgniter 3"},
            {name: "Bootstrap"},
        ],
        image: "../image/rental.png",
        live: "",
        github: "https://github.com/arifbudisuryono/rental_mobil",
    },
    {
        num: "02",
        category: "Frontend",
        title: "Project 2",
        description: "This Project is my portofolio, which I developed using ReactJS and TailwindCSS libraries with the help of AI",
        stack: [
            {name: "ReactJS"},
            {name: "TaildwindCSS"},
        ],
        image: "../image/porto.png",
        live: "https://arifbudisuryono.vercel.app/",
        github: "https://github.com/arifbudisuryono/rental_mobil",
    },
];

const ProjectSection = () => {
    const [ project, setProject ] = useState(projects[0]);

    const handletoSlideChange = (swiper) => {
        // get curret slide index
        const curretSlideIndex = swiper.activeIndex;
        // update project state base on curret index
        setProject(projects[curretSlideIndex]);
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"} }}
            exit={{ opacity: 0 }}
            className="min-h-[80vh] flex flex-col lg:flex-row lg:gap-[30px] lg:items-center justify-center py-12 lg:py-0"
            >
            <div className="w-full order-2 lg:order-none">
                <div className="flex flex-col gap-[20px] h-[50%]">
                    {/* project num */}
                    <div className="text-8xl leading-none font-extrabold">
                        {project.num}
                    </div>
                    {/* project category */}
                    <h2 className="text-4xl font-bold leading-none">{project.category}</h2>
                    {/* project desc */}
                    <p className="text-slate-300">{project.description}</p>
                    {/* project stack */}
                    <ul className="flex gap-4">
                        {project.stack.map((item, index) => {
                            return (
                                <li key={index} className="text-xl text-primary">
                                    {item.name}
                                    {/* remove the last comma */}
                                    {index !== project.stack.length -1 && ", "}
                                </li>
                            )
                        })}
                    </ul>
                    {/* border */}
                    <div className="border border-slate-300"></div>
                    {/* button */}
                    <div className="flex gap-4 items-center">
                        {project.live && (
                            <Link to={project.live} target="_blank" rel="noopener noreferrer">
                            <div className="bg-[#272748] w-[50px] h-[50px] flex items-center justify-center rounded-full hover:text-primary delay-100" data-tooltip-id="live-tooltip">
                                < BsArrowUpRight size={25}/>
                            </div>
                            <Tooltip id="live-tooltip" place="top" delayShow={100} delayHide={100} style={{backgroundColor: "#ffff", color: "black",}}>
                                Live Project
                            </Tooltip>
                        </Link>
                        )}
                        <Link to={project.github} target="_blank" rel="noopener noreferrer">
                            <div className="bg-[#272748] w-[50px] h-[50px] flex items-center justify-center rounded-full hover:text-primary delay-100" data-tooltip-id="github-tooltip">
                                < BsGithub size={25}/>
                            </div>
                            <Tooltip id="github-tooltip" place="top" delayShow={100} delayHide={100} style={{backgroundColor: "#ffff", color: "black"}}>
                                GitHub
                            </Tooltip>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-[50%] mb-12 lg:mb-0">
                <Swiper 
                    spaceBetween={30}
                    slidesPerView={1}
                    className="lg:h-[460px] "
                    onSlideChange={handletoSlideChange}
                    >
                    {projects.map((project, index) => {
                        return <SwiperSlide key={index}>
                            <div className="h-[400px] relative flex justify-center items-center bg-pink-50/20">
                            {/* overlay */}
                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                            {/* image */}
                            <img src={project.image} alt="" className="w-full h-full object-cover"/>
                            </div>
                        </SwiperSlide>
                    })}
                    {/* Button SLider */}
                    <ButtonSlider contsainerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]    lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" btnStyles="bg-primary w-[40px] h-[40px] flex items-center justify-center text-hitam text-[18px] hover:bg-[#37AFE1] transition-all duration-300"/>
                </Swiper>
            </div>
        </motion.div>
    )
}

export default ProjectSection