import {AiFillGithub,AiFillLinkedin,AiOutlineInstagram} from 'react-icons/ai'
export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
        <div className='bg-[#C5D6D0] dark:bg-gray-600 w-full h-[1px] '></div>
        <footer className="flex md:flex-row flex-col items-center gap-8 md:justify-between py-6 w-[92%] mx-auto dark:text-white text-[#222222]">
            <div className='flex gap-5'> 
                <a className='' href='https://github.com/zakaryaalgeria'> 
                    <AiFillGithub className='text-[30px] dark:text-white  dark:hover:text-gray-400 hover:text-gray-400' />
                </a>
                <a className='blok' href='https://www.linkedin.com/in/zakaria-saoual/'>
                     <AiFillLinkedin className='text-[30px] dark:text-white dark:hover:text-blue-600 hover:text-blue-600' />
                </a>
                <a className='blok' href='https://www.instagram.com/zakarya_tech/'>
                     <AiOutlineInstagram className='text-[30px] dark:text-white dark:hover:text-pink-400 hover:text-pink-400' />
                </a>
            </div>
            <div  >&copy; {currentYear} All rights reserved <span className="  font-bold uppercase">saoual zakarya</span></div>
        </footer>
    </>
  )
}
