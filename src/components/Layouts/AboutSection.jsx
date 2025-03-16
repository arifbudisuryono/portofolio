import { FaReact, FaHtml5, FaCss3, FaLaravel, FaPhp } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiMysql } from "react-icons/si"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Tooltip } from "react-tooltip";
import { motion } from "framer-motion";

const skills = [
  {
    title: "My Skills",
    desc: "Here are some of the skills I've mastered and am still learning.",
    info: [
      {
        icon: <FaHtml5/>,
        name: "HTML",
      },
      {
        icon: <FaCss3/>,
        name: "CSS",
      },
      {
        icon: <SiMysql />,
        name: "MySQL",
      },
      {
        icon: <SiTailwindcss/>,
        name: "Tailwind",
      },
      {
        icon: <SiJavascript/>,
        name: "Javascript",
      },
      {
        icon: <FaPhp/>,
        name: "PHP",
      },
      {
        icon: <FaReact/>,
        name: "React",
      },
      {
        icon: <FaLaravel/>,
        name: "Laravel",
      }
    ]
  }
];

const experience = [
  {
    title: "My Experience",
    desc: "Experienced in web development, SEO, and UI/UX design.",
    info: [
      {
        position: "CNC Machine Operator",
        company: "PT. Musashi Autoparts Indonesia",
        duration: "2014 - 2016",
      },
      {
        position: "CNC Machine Operator",
        company: "PT. Mmf Metal Fabrication",
        duration: "2019 - 2021",
      },
      {
        position: "Software Engineer",
        company: "PT. Media Sarana Digitalindo",
        duration: "Agustus 2024  - Januari 2025",
      },
    ]
  }
];

const education = [
  {
    title: "My Education",
    desc: "Informatics Engineering, specializing in Intelligent Systems & Web Development.",
    info: [
      {
        institution: "Duta Bangsa University",
        degree: "Undergraduate Informatics Engineering",
        duration: "2021 - 2025",
      },
    ]
  }
];

const AboutSection = () => {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.4, ease: "easeIn" }}
        className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0"
        >
            <Tabs defaultValue="Skills" className="flex flex-col md:flex-row gap-[65px]">
                <div className="flex flex-col  mx-auto gap-4 min-w-[340px] max-w-[400px]">
                    <h2 className="text-4xl font-semibold">Why Hire me?</h2>
                    <p></p>
                    <TabList className="flex flex-col text-center gap-6">
                    <Tab value="Experience">Experience</Tab>
                    <Tab value="Education">Education</Tab>
                    <Tab value="Skills">Skills</Tab>
                    </TabList>
                </div>

                {/* Experience */}
                <TabPanel value="Experience">
                    <div className="flex flex-col w-full lg:w-[750px] gap-4">
                        <h1 className="text-4xl text-primary font-semibold">{experience[0].title}</h1>
                        <p>{experience[0].desc}</p>
                        <div className="h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-800">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                            {experience[0].info.map((item, index) => {
                              return (
                                <li key={index} className="bg-[#272748] h-[164px] py-6 px-10 rounded-lg flex flex-col justify-center gap-2 items-center lg:items-start mb-2">
                                <span className="text-primary">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">{item.position}</h3>
                                <div className="flex items-center gap-2">
                                  <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                                  <p className="text-slate-400">{item.company}</p>
                                </div>
                              </li>
                              )
                            })}
                          </ul>
                        </div>
                    </div>
                </TabPanel>

                {/* Education */}
                <TabPanel value="Education">
                    <div className="flex flex-col w-full lg:w-[750px] gap-4">
                        <h1 className="text-4xl text-primary font-semibold">{education[0].title}</h1>
                        <p>{education[0].desc}</p>
                        <div className="h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-800">
                          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                            {education[0].info.map((item, index) => {
                              return (
                                <li key={index} className="bg-[#272748] h-[164px] py-6 px-10 rounded-lg flex flex-col justify-center gap-2 items-center lg:items-start mb-2">
                                <span className="text-primary">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[40px] text-center lg:text-left">{item.degree}</h3>
                                <div className="flex items-center gap-2">
                                  <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                                  <p className="text-slate-400">{item.institution}</p>
                                </div>
                              </li>
                              )
                            })}
                          </ul>
                        </div>
                    </div>
                </TabPanel>

                {/* Skills */}
                <TabPanel value="Skills">
                    <div className="flex flex-col w-full lg:w-[750px] gap-4">
                        <h1 className="text-4xl text-primary font-semibold">{skills[0].title}</h1>
                        <p>{skills[0].desc}</p>
                        <div className="h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-800">
                        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[20px]">
                          {skills[0].info.map((item, index) => {
                            return (
                              <li key={index} className="">
                                  <div className="text-6xl items-center flex justify-center" >
                                    <span className="w-[140px] h-[140px] rounded-sm items-center flex justify-center bg-[#272748] hover:text-primary transition-all duration-300" data-tooltip-id={`tooltip-${index}`}>{item.icon}</span> 
                                  </div>
                                  <Tooltip id={`tooltip-${index}`} place="top" delayShow={100} delayHide={100} style={{backgroundColor: "#ffff", color: "black",}}>
                                    <p className="">{item.name}</p>
                                  </Tooltip>
                              </li>
                            )
                          })}
                        </ul>
                        </div>
                        
                    </div>
                </TabPanel>
            </Tabs>
    </motion.div>
  )
}

export default AboutSection