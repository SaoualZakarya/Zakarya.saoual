import { useEffect } from "react"
import Swiper from 'swiper';
import {  Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PageTitlte } from "../component/PageTitlte"
import { Title } from "../component/Title"
import {motion} from 'framer-motion'
import { edu_exp, lang_tools } from "../utils/data";

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

  const getCurrentYear = new Date().getFullYear()

  return (
    <>
      <section >
        <PageTitlte title={'Resume'} desc={`${getCurrentYear - 2022} Years of Experience`} />
        <div className="container flex flex-wrap py-14 md:justify-between justify-center">
          <div className="w-[450px]">
            <Title ele={'Education && Exprience'} />
            {edu_exp.map((ele,i)=>(
              <motion.div 
              key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}}
              className="relative bg-[#fdfdfd] dark:bg-[#252525]  my-16 h-fit rounded-tr-2xl border-l-2 border-b-2 border-solid border-[#f5f6f9] dark:border-[#333333] p-4"
              >
                <div className="flex items-center gap-5">
                  <div className="w-[150px] text-[14px] px-2 py-1 border-2 text-center border-solid rounded-2xl border-[#007ced]">
                    {ele.year}
                  </div>
                  <div className="text-[16px] font-semibold  text-[#666666] dark:text-[#AAAAAA]">
                    {ele.school} 
                  </div>
                </div>
                
                <div className="indent-8 pt-4 text-[#666666] dark:text-[#d5d5d5]">
                  {ele.desc}
                </div>
              </motion.div>
            ))}
            
          </div>
          <div className="w-[450px]">
            <Title ele={'Skills && technologie'} />
            <div className="flex gap-8 py-6 justify-center flex-wrap bg-[#fdfdfd] p-6 rounded-3xl dark:bg-[#252525] "  >
              {
                lang_tools?.map((ele,i)=>(
                  <motion.div 
                    initial={{opacity:.2,scale:.4}}
                    animate={{opacity:1,scale:1}}
                    transition={{delay:.5}} 
                    key={i}
                    whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                    className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
                  >
                    <img src={ele.img} className="w-14 h-14" alt={ele.name}/>
                    <div className="pt-2 uppercase text-center font-bold">{ele.name}</div>
                  </motion.div>
                ))
              }
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
