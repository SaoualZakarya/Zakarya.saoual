import { PageTitlte } from "../component/PageTitlte"
import {FaLocationDot} from 'react-icons/fa6'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import { Title } from "../component/Title"
export const Contact = () => {
  return (
    <section>
      <PageTitlte title={'Contact'} desc={'Get in touch'} />
      <div
        className="container py-20"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173867.2920544374!2d4.89028787661351!3d35.930064003491054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cace3c911151f%3A0x560b498ef8b564b9!2sRas%20El%20Oued!5e0!3m2!1sfr!2sdz!4v1699003340137!5m2!1sfr!2sdz" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[300px] mb-14"
        >
        </iframe>
        <div className="flex lg:justify-between justify-center flex-wrap ">
          <div className="">
            <div className="flex bg-[#fdfdfd] dark:bg-[#252525] mb-6 px-3 rounded-2xl  py-8 gap-8 w-[350px] items-center">
              <BiPhoneCall className="w-16 h-16 text-[#007ced]"/>
              <div>
                <h1 className="font-bold text-[19px]">+213668581327</h1>
                <p className="indent-4">
                  Available for job opportunities and professional networking. Let&apos;s connect
                </p>
              </div>
            </div>
            <div className="flex  bg-[#fdfdfd] dark:bg-[#252525] mb-6 px-3 rounded-2xl py-8 gap-8 w-[350px] items-center">
              <FaLocationDot className="w-10 h-10 text-[#007ced]"/>
              <div>
                <h1 className="font-bold text-[19px]">Algeria</h1>
                <p className="indent-4">
                  You can find me in Ras El Oued ,Bordj Bou Arreridj
                </p>
              </div>
            </div>
            <div className="flex bg-[#fdfdfd] dark:bg-[#252525] mb-6 px-3 rounded-2xl  py-8 gap-8 w-[350px] items-center">
              <AiOutlineMail className="w-16 h-12 text-[#007ced]"/>
              <div>
              <a href="mailto:zakaryasaoual@gmail.com" className="font-bold text-[19px]">zakaryasaoual@gmail.com</a>
                <p className="indent-4">
                  Feel free to reach out! I&apos;m available for freelance projects and collaborations.
                </p>
              </div>
            </div>
            
          </div>
          <div>
            <Title ele={'How can I help You  ?'} />
          </div>
          
        </div>
      </div>
    </section>
  )
}
