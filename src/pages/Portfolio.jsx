import { useEffect, useState } from "react"
import { PageTitlte } from "../component/PageTitlte"
import { getProjects } from "../utils/serverData"
import { urlFor } from "../utils/sanity"
import { Meta } from "../utils/meta"

export const Portfolio = () => {

  const [projects,setProjects] = useState([])

  useEffect(()=>{
    getProjects().then(data=>setProjects(data))
  },[])

  return (
    <>
      <Meta title={"Portfolio"} />
      <PageTitlte desc={'My work'} title={'Portfolio'}  />
      <section>
        <div className="container flex justify-center py-14 flex-wrap gap-12">
          {
            projects.map((item,key)=>(
              <div 
                style={{backgroundImage:`url(${urlFor(item.img).url()})`,backgroundSize: 'cover'}} 
                className="project relative rounded-2xl w-[400px] lg:w-[450px] h-[500px]" 
                key={key}
              >
                <div className='project-text'>
                  <h1 className='font-bold text-[22px] uppercase'>{item.title}</h1>
                  <div className='text-[15px]' >{item.description}</div>
                  {
                    (item.githubLinkFront !== "/" || item.githubLinkBack !== "/") && <div className='text-[16px] font-semibold' >View sourse code</div>
                  }
                  <div className='flex gap-8'> 
                    {
                      item.githubLinkFront !== "/" && <a href={`${item.githubLinkFront}`} className="px-3 py-1 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#6c757d] hover:text-white border-[#6c757d]"> Front-end </a>
                    }
                    {      
                      item.githubLinkBack !== "/" && <a href={`${item.githubLinkBack}`} className="px-3 py-1 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#6c757d] hover:text-white border-[#6c757d]">Back-end</a>
                    }
                  </div>
                  {
                    item.demoLink !== "/" && <div className='text-[16px] font-semibold' >View demo link</div>
                  }
                  {
                    item.demoLink !== "/" && <a href={`${item.demoLink}`} className="px-3 py-1 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#007bff] hover:text-white border-[#007bff]" > Check </a>
                  }
                  <div className='text-[16px] font-semibold' >Tech used</div>
                  <div className="flex justify-between w-[200px] ">
                    {item.techUsedLogo.map((e,key)=>(
                      <img key={key} src={urlFor(e).url()} className="w-10 cursor-pointer h-10" />
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}
