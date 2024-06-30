import { motion } from "framer-motion"
import Marquee from 'react-fast-marquee'
import { Link } from "react-router-dom"
import { Title } from "../component/Title"
import {FaLaptopCode} from 'react-icons/fa'
import {FaFileCode} from 'react-icons/fa'
import {RiCodeBoxLine} from 'react-icons/ri'
import { services } from "../utils/localData"
import { useEffect } from "react"
import posthog from "posthog-js"
import {Meta} from '../utils/Meta'

export const AboutMe = () => {

  useEffect(() => {
    posthog.capture('profile_visited', {
      distinct_id: posthog.get_distinct_id(),
    });
  }, []);

  const currentJobs = [
    'Computer science engeneering student',
    'Full stack web developer',
    'Cyber security entoushiaste',
    'Content Creator'
  ]

  const iconMap = {
    FaLaptopCode: FaLaptopCode,
    FaFileCode: FaFileCode,
    RiCodeBoxLine: RiCodeBoxLine,
  };

  return (
    <>
    <Meta title={"about me"} />
    {/* Photo , CV and jobs */}
      <section className="container py-14 flex lg:flex-row flex-col items-center gap-7 lg:justify-between">
        <motion.div 
          initial={{ scale:0,oppacity:0 }}
          animate={{ scale: 1,oppacity:1 }}
          transition={{ delay: .3 }}
          >
            <motion.img
              whileHover={{scale:0.96}} 
              src="https://res.cloudinary.com/dwou4xhhu/image/upload/v1719242135/raud0poo7vbmkpzspuog.webp" 
              className="border-white aspect-w-1 aspect-h-1  sm:w-[400px] sm:h-[400px] shadow-2xl dark:border-[#343a40] border-[16px] hover:cursor-pointer rounded-[50%]" 
              alt="personal image"
              loading="lazy"
            />
        </motion.div>
        <motion.div
          initial={{x:800}}
          animate={{ x:0 }}
          transition={{delay:.3}}
          className="w-[300px] md:w-[440px]"
        >
          <Marquee className="w-full h-[30px] text-[#aaaaaa] py-3">
            {currentJobs.map((job, i) => (
              <div className='px-10 text-[18px]' key={i}>
                {job} 
              </div>
            ))}
          </Marquee>
          <div 
            className="font-extrabold uppercase text-[32px] md:text-[40px] text-[#333333] dark:text-[#F5F5F5] py-3"
          >
            Saoual zakarya
          </div>
          <div className="max-w-[440px] py-3 text-[#666666] dark:text-[#f8f9fa]">
            Greetings! I&apos;m Saoual Zakarya, a dedicated computer science engineering student with a strong
            focus on full-stack web development. My passion lies in crafting dynamic and intuitive
            user interfaces that engage users effectively.
          </div>
          <div className="flex gap-10 font-semibold py-3">
          <a
            href="/CV.pdf"
            download="zakaryaSaoual-cv.pdf"
            className="px-6 py-3 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#007bff] hover:text-white border-[#007bff]"
          >
            Download CV
          </a>
            <Link 
              to={'/contact'}
              className="px-6 py-3 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#6c757d] hover:text-white border-[#6c757d]"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </section>
      {/* What i do  */}
      <section className="container pb-20">
        <Title ele={'What I Do'}/>
        <div className="flex flex-wrap gap-8 justify-center lg:gap-10"> 
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div key={service.id} className="flex items-center gap-4 w-[380px] p-4 hover:scale-[1.05] dark:bg-[#333333] rounded-3xl hover:cursor-pointer shadow-2xl">
                <div className="w-[50px]">
                  <IconComponent className=" w-7 h-7 sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h1 className="font-semibold pb-1 text-[18px]">{service.title}</h1>
                  <p className="text-[#666666] dark:text-white indent-4">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Clients */}
      <section className="container py-20">
        <Title ele={'satisfied Clients'} />
          <div className="flex justify-center text-[25px] font-extrabold">  On the way ....  </div>  
      </section>
    </>
  )
}
