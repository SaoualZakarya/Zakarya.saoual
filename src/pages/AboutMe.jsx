import { motion } from "framer-motion"
import Marquee from 'react-fast-marquee'
import { Link } from "react-router-dom"
import { Title } from "../component/Title"
import {FaLaptopCode} from 'react-icons/fa'
import {FaFileCode} from 'react-icons/fa'
import {RiCodeBoxLine} from 'react-icons/ri'
export const AboutMe = () => {

  const currentJobs = ['Computer science engeneering student',
  'Content Creator',
  'Front-end web developer',
  'Full stack web developer',
  'Cyber security entoushiaste'
  ]

  return (
    <>
    {/* Photo , CV and jobs */}
      <section className="container py-14 flex lg:flex-row flex-col items-center gap-8 lg:gap-[100px]">
        <motion.div 
          initial={{ scale:0,oppacity:0 }}
          animate={{ scale: 1,oppacity:1 }}
          transition={{ delay: .3 }}
          >
            <motion.img
              whileHover={{scale:0.96}} 
              src="/personal/zaki.jpeg" 
              className="border-white w-[400px] h-[400px] shadow-2xl dark:border-[#343a40] border-[16px] hover:cursor-pointer rounded-[50%]" 
              alt="personal image"
            />
        </motion.div>
        <motion.div
          initial={{x:800}}
          animate={{ x:0 }}
          transition={{delay:.3}}
        >
          <Marquee className="w-[300px] h-[30px] text-[#aaaaaa] py-3">
            {currentJobs.map((job, i) => (
              <div className='px-10 text-[18px]' key={i}>
                {job} 
              </div>
            ))}
          </Marquee>
          <div 
            className="font-extrabold uppercase text-[40px] text-[#333333] dark:text-[#F5F5F5] py-3"
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
            download="your-cv.pdf"
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
          <div className="flex items-center gap-4 w-[380px] p-4 hover:scale-[1.05] dark:bg-[#333333] rounded-3xl hover:cursor-pointer shadow-2xl">
            <div className="w-[50px]">
              <FaLaptopCode className="w-10 h-10"/>
            </div>
            <div>
              <h1 className="font-semibold pb-1 text-[18px]">Front-End web Development</h1>
              <p className="text-[#666666] dark:text-white indent-4"> 
                We create stunning and responsive user interfaces, 
                ensuring seamless navigation and engaging user experiences.
                Let us transform your vision into a visually appealing and interactive digital platform. 
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-[380px] p-4 hover:scale-[1.05] dark:bg-[#333333] rounded-3xl hover:cursor-pointer shadow-2xl">
            <div className="w-[50px]">
              <FaFileCode className="w-10 h-10"/>
            </div>
            <div>
              <h1 className="font-semibold pb-1 text-[18px]">Back-End Development</h1>
              <p className="text-[#666666] dark:text-white indent-4"> 
                We specialize in building robust server-side applications, databases, and APIs,
                ensuring your website or application runs efficiently, securely, and smoothly.
                Let us handle the complexities, while you focus on your business goals. 
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-[380px] p-4 hover:scale-[1.05] dark:bg-[#333333] rounded-3xl hover:cursor-pointer shadow-2xl">
            <div className="w-[50px]">
              <RiCodeBoxLine className="w-10 h-10"/>
            </div>
            <div>
              <h1 className="font-semibold pb-1 text-[18px]">Full-stack web Development</h1>
              <p className="text-[#666666] dark:text-white indent-4"> 
                From intuitive front-end designs to powerful back-end functionality, we create dynamic,
                user-friendly websites and applications tailored to your unique needs.
                Experience a seamless digital journey from concept to launch.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Clients */}
      <section className="container py-20">
        <Title ele={'Clients'} />
          <div className="flex justify-center text-[25px] font-extrabold">  On the way ....  </div>  
      </section>
    </>
  )
}
