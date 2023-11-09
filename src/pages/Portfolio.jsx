import { PageTitlte } from "../component/PageTitlte"
import { projects } from "../utils/data"

export const Portfolio = () => {
  return (
    <>
      <PageTitlte desc={'My work'} title={'Portfolio'}  />
      <section>
        <div className="container flex justify-center py-14 flex-wrap gap-12">
          {
            projects.map((item,key)=>(
              <div 
                style={{backgroundImage:`url(${item.img})`,backgroundSize: 'cover'}} 
                className="project relative rounded-2xl w-[400px] lg:w-[450px] p-5 h-[450px]" 
                key={key}
              >
                <div className='project-text'>
                  <h1 className='font-bold text-[22px] uppercase'>{item.title}</h1>
                  <div className='text-[15px]' >{item.description}</div>
                  <div className='text-[16px] font-semibold' >View sourse code</div>
                  <div className='flex gap-8'> 
                    <a href={`${item.githubLinkFront}`} className="px-3 py-1 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#6c757d] hover:text-white border-[#6c757d]"> Front-end </a>
                    <a href={`${item.githubLinkBack}`} className="px-3 py-1 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#6c757d] hover:text-white border-[#6c757d]">Back-end</a>
                  </div>
                  <div className='text-[16px] font-semibold' >View demo link</div>
                  <a href={`${item.demoLink}`} className="px-3 py-1 rounded-[40px] border-solid border-2 transition duration-500 ease-in-out dark:text-white hover:bg-[#007bff] hover:text-white border-[#007bff]" > Check </a>
                  <div className='text-[16px] font-semibold' >Tech used</div>
                  <div className="flex justify-between w-[200px] ">
                    {item.techUsedLogo.map((e,key)=>(
                      <img key={key} src={`${e}`} className="w-10 h-10" />
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
