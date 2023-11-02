import { useEffect } from "react"
import Swiper from 'swiper';
import {  Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PageTitlte } from "../component/PageTitlte"
import { Title } from "../component/Title"
import {motion} from 'framer-motion'

export const Resume = () => {

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination,Autoplay],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000, // Delay between slides (in milliseconds)
        disableOnInteraction: false, // Continue autoplay on user interaction
      }
    });
    
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <section >
        <PageTitlte title={'Resume'} />
        <div className="container flex flex-wrap py-14 md:justify-between justify-center">
          <div className="w-[450px]">
            <Title ele={'Education && Exprience'} />
            <div className="relative bg-[#fdfdfd] dark:bg-[#252525]  my-16 h-fit border-l-2 border-b-2 border-solid border-[#f5f6f9] dark:border-[#333333] p-4">
              <div className="absolute z-10 -top-6 left-0 text-[14px] px-2 py-1 border-2 border-solid rounded-2xl border-[#007ced]">
                2021 / 2022
              </div>
              <div className="absolute text-[16px] -top-[18px] font-semibold left-[105px] text-[#666666] dark:text-[#AAAAAA]">
                Baccalaureate 
              </div>
              <div className="indent-8 pt-4 text-[#666666] dark:text-[#d5d5d5]">
                I obtained my Baccalaureate in the field of Natural and life sciences
                with an average grade of 16.87.
              </div>
            </div>
            <div className="relative bg-[#fdfdfd] dark:bg-[#252525]  my-16 h-fit border-l-2 border-b-2 border-solid border-[#f5f6f9] dark:border-[#333333] p-4">
              <div className="absolute z-10 -top-6 left-0 text-[14px] px-2 py-1 border-2 border-solid rounded-2xl border-[#007ced]">
                2022 / 2023
              </div>
              <div className="absolute text-[16px] -top-[28px] font-semibold left-[105px] text-[#666666] dark:text-[#AAAAAA]">
                 National higher school of computer science -ESTIN- 
              </div>
              <div className="indent-8 pt-4 text-[#666666] dark:text-[#d5d5d5]">
              I commenced my studies at the National Higher School of Computer Science Engineering (ESTIN),
               delving into the foundational aspects of algorithms, data structures, electronics, and mathematics. 
               Throughout my academic journey, I proactively ventured into the realm of web development,
                mastering both front-end and back-end fundamentals through curated online courses and workshops. 
              </div>
            </div>
            <div className="relative bg-[#fdfdfd] dark:bg-[#252525]  my-16 h-fit border-l-2 border-b-2 border-solid border-[#f5f6f9] dark:border-[#333333] p-4">
              <div className="absolute z-10 -top-6 left-0 text-[14px] px-2 py-1 border-2 border-solid rounded-2xl border-[#007ced]">
                2023 / 2024
              </div>
              <div className="absolute text-[16px] -top-[28px] font-semibold left-[105px] text-[#666666] dark:text-[#AAAAAA]">
                 National higher school of computer science -ESTIN- 
              </div>
              <div className="indent-8 pt-4 text-[#666666] dark:text-[#d5d5d5]">
                 Pending ....
              </div>
            </div>
          </div>
          <div className="w-[450px]">
            <Title ele={'Skills && technologie'} />
            <div className="flex gap-8 py-6 justify-center flex-wrap bg-[#fdfdfd] p-6 rounded-3xl dark:bg-[#252525] "  >
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="/tools/html.png" className="w-14 h-14" alt="HTML"/>
                <div className="pt-2  font-bold">HTML</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="/tools/css.png" className="w-14 h-14" alt="CSS"/>
                <div className="pt-2 text-center font-bold">CSS</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/motion.png" className="w-14 h-14" alt="F.MOTION"/>
                <div className="pt-2 text-center font-bold">F.MOTION</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/js.png" className="w-14 h-14" alt="JAVASCRIPT"/>
                <div className="pt-2 text-center font-bold">JAVASCRIPT</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/tailwind.png" className="w-16 h-14" alt="TAILWIND"/>
                <div className="pt-2 text-center font-bold">TAILWIND</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/react.png" className="w-14 h-14" alt="REACT"/>
                <div className="pt-2 text-center font-bold">REACT</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/api.png" className="w-14 h-14" alt="API"/>
                <div className="pt-2 text-center font-bold">API</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/node.png" className="w-14 h-14" alt="NODE"/>
                <div className="pt-2 text-center font-bold">NODE</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/express.png" className="w-14 h-14" alt="EXPRESS"/>
                <div className="pt-2 text-center font-bold">EXPRESS</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/mongodb.png" className="w-14 h-14" alt="MONOGODB"/>
                <div className="pt-2 text-center font-bold">MONOGODB</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/sanity.png" className="w-14 h-14" alt="SANITY"/>
                <div className="pt-2 text-center font-bold">SANITY</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/python.png" className="w-14 h-14" alt="PYTHON"/>
                <div className="pt-2 text-center font-bold">PYTHON</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/bash.png" className="w-14 h-14" alt="BASH"/>
                <div className="pt-2 text-center font-bold">BASH</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/lunix.png" className="w-14 h-14" alt="LUNIX"/>
                <div className="pt-2 text-center font-bold">LUNIX</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/git.png" className="w-14 h-14" alt="GIT"/>
                <div className="pt-2 text-center font-bold">GIT</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/github.png" className="w-14 h-14" alt="GITHUB"/>
                <div className="pt-2 text-center font-bold">GITHUB</div>
              </motion.div>
              <motion.div 
                initial={{opacity:.2,scale:.4}}
                animate={{opacity:1,scale:1}}
                transition={{delay:.5}} 
                whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
              >
                <img src="tools/c.png" className="w-14 h-14" alt="C"/>
                <div className="pt-2 text-center font-bold">C</div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="container py-14 ">
          <Title ele={"certificate"}/>
          <swiper-container>
            <div className="swiper flex justify-center items-center w-[400px] h-[280px]">
              <div className="swiper-wrapper flex items-center">
                <div className="swiper-slide  flex items-center">
                  <a 
                    href="https://www.freecodecamp.org/certification/fcc529bb7f4-01aa-4625-96aa-e38dcffd4089/responsive-web-design"
                    className="border-2 hover:shadow-2xl border-solid rounded-xl border-[#e5e5e5] dark:border-[#444444] flex w-[400px] h-fit"
                  >
                    <div className="flex rounded-l-md items-center justify-center bg-[#f5f5f5] dark:bg-[#444444] w-[150px]">
                      FREE CODE CAMP
                    </div>
                    <div className="p-4 max-w-[230px]">
                      <h1 className="font-bold"> Responsive Web Design</h1>
                      <p className="text-[12px] py-2">16 March 2023</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide flex items-center">
                  <a 
                    href="https://www.freecodecamp.org/certification/fcc529bb7f4-01aa-4625-96aa-e38dcffd4089/javascript-algorithms-and-data-structures"
                    className="border-2 hover:shadow-2xl border-solid rounded-xl border-[#e5e5e5] dark:border-[#444444] flex w-[400px] h-fit"
                  >
                    <div className="flex rounded-l-md items-center justify-center bg-[#f5f5f5] dark:bg-[#444444] w-[150px]">
                      FREE CODE CAMP
                    </div>
                    <div className="p-4 max-w-[230px]">
                      <h1 className="font-bold"> JavaScript Algorithms and Data Structure</h1>
                      <p className="text-[12px] py-2">16 March 2023</p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="https://www.coursera.org/account/accomplishments/verify/5DDL4TVDP52S">
                    <img src={'/certificate/python2.png'} className="w-[400px] rounded-xl h-[240px] " alt="python"/>
                  </a>
                </div>
                <div className="swiper-slide">
                  <a href="https://www.coursera.org/account/accomplishments/verify/5M2V67K8Z5LR">
                    <img src={'/certificate/python.jpeg'} className="w-[400px] rounded-xl h-[240px] " alt="python"/>
                  </a>
                </div>
                <div className="swiper-slide">
                  <img src={'/certificate/bytecraft.png'} className="w-[400px] rounded-xl h-[240px] " alt="Bytecraft"/>
                </div>
                <div className="swiper-slide">
                  <img src={'/certificate/brainOn.png'} className="w-[400px] rounded-xl h-[240px] " alt="BrainOn"/>
                </div>
              </div>
              <div  className="swiper-pagination"></div>
            </div>
          </swiper-container> 
        </div>
      </section>
    </>
  )
}
