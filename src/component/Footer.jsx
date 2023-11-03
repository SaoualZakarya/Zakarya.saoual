import {AiFillGithub,AiFillLinkedin,AiOutlineMail,AiOutlineInstagram} from 'react-icons/ai'
import {motion} from 'framer-motion'
export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <>
        <motion.div 
          initial={{x:-1400}}
          animate={{ x:0 }}
          transition={{delay:.5}}
          className='bg-[#C5D6D0] dark:bg-gray-600 w-full h-[1px] '>
        </motion.div>
        <footer className="flex md:flex-row flex-col items-center gap-8 md:justify-between py-6 w-[92%] mx-auto dark:text-white text-[#222222]">
            <motion.div
                initial={{y:400}}
                animate={{ y:0 }}
                transition={{delay:.5}}
              className='flex gap-5'
            > 
                <a className='' href='https://github.com/zakaryaalgeria'> 
                    <AiFillGithub className='text-[30px] dark:text-white  dark:hover:text-gray-400 hover:text-gray-400' />
                </a>
                <a className='blok' href='https://www.linkedin.com/in/zakaria-saoual/'>
                     <AiFillLinkedin className='text-[30px] dark:text-white dark:hover:text-blue-600 hover:text-blue-600' />
                </a>
                <a className='blok' href='https://www.instagram.com/zakarya_tech/'>
                     <AiOutlineInstagram className='text-[30px] dark:text-white dark:hover:text-pink-400 hover:text-pink-400' />
                </a>
                <a className='blok' href='mailto:zakaryasaoual@gmail.com'>
                     <AiOutlineMail className='text-[30px] dark:text-white dark:hover:text-[#4285f4] hover:text-[#4285f4]' />
                </a>
            </motion.div>
            <motion.div 
                initial={{x:500}}
                animate={{ x:0 }}
                transition={{delay:.5}} 
            >&copy; {currentYear} All rights reserved 
              <span className="pl-2  font-bold uppercase">
                saoual zakarya
              </span>
            </motion.div>
        </footer>
    </>
  )
}
