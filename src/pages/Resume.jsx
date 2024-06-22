import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import 'swiper/css';
import { PageTitlte } from "../component/PageTitlte"
import { Title } from "../component/Title"
import {motion} from 'framer-motion'
import { getEducation,getCertificate, getToolsAndLanguages } from "../utils/serverData";
import { useEffect, useState } from "react";
import { urlFor } from "../utils/sanity";
export const Resume = () => {

  const [languageAndTools,setLanguageAndTools] = useState([])
  const [education,setEducation] = useState([]);
  const [certificate,setCertificate] = useState([]);

  useEffect(() => {
    getToolsAndLanguages().then(data=>setLanguageAndTools(data))
    getEducation().then(data=>setEducation(data))
    getCertificate().then(data=>setCertificate(data))
  }, []);

  const getCurrentYear = new Date().getFullYear();

  return (
    <>
      <section >
        <PageTitlte title={'Resume'} desc={`${getCurrentYear - 2022} Years of Experience`} />
        <div className="container flex flex-wrap py-14 md:justify-between justify-center">
          <div className="w-[450px]">
            <Title ele={'Education && Exprience'} />
            {education?.map((ele,i)=>(
              <motion.div 
              key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}}
              className="relative bg-[#fdfdfd] dark:bg-[#252525]  my-16 h-fit rounded-tr-2xl border-l-2 border-b-2 border-solid border-[#f5f6f9] dark:border-[#333333] p-4"
              >
                <div className="-ml-[80px] -mt-8 flex items-center gap-3">
                  <div className="w-[150px] font-semibold text-[14px] py-1 border-2 text-center border-solid rounded-2xl border-[#007ced]">
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
                languageAndTools?.map(ele=>(
                  <motion.div 
                    initial={{opacity:.2,scale:.4}}
                    animate={{opacity:1,scale:1}}
                    transition={{delay:.5}} 
                    key={ele.title}
                    whileHover={{ scale: 1.2 ,transition:{delay:.05} }}
                    className="flex flex-col items-center hover:scale-[1.2] hover:cursor-pointer"
                  >
                    <img src={urlFor(ele.src).url()} className="w-14 h-14" alt={ele.title}/>
                    <div className="pt-2 uppercase text-center font-bold">{ele.title}</div>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="container py-14 ">
          <Title ele={"certificate"}/>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            slideToClickedSlide={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={2}
            coverflowEffect={{
              rotate: 0,
              stretch: -60,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mentorSlider"
          >
                {
                  certificate.map(item=>(
                    <SwiperSlide key={item.title} className="h-[220px] w-[350px] md:h-[250px] md:w-[460px] ">
                      <a href={item.link}>
                        <img 
                          loading="lazy"
                          src={urlFor(item.src).url()} 
                          className="w-full h-full rounded-xl  " 
                          alt={item.title}
                        />
                      </a>
                    </SwiperSlide>
                  ))
                }
          </Swiper> 
        </div>
      </section>
    </>
  )
}
