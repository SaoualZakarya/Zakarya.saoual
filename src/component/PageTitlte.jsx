import {motion} from 'framer-motion'
export const PageTitlte = (props) => {
  let title = props.title
  const getCurrentYear = new Date().getFullYear()
  return (
    <>
        <motion.div
          initial={{ x: -800 }}  
          animate={{ x:0, transition: { duration: .7 }}}
          className='px-[7.5%] border-y-2 border-[#f2f2f2] bg-[#fdfdfd] h-[150px] dark:bg-[#252525] dark:border-[#333333]  flex flex-col justify-center'
        >
            <h1 className='text-[35px] py-1 font-extrabold '>{title}</h1>
            <p className='text-[#aaaaaa]'>{getCurrentYear - 2022} Years of Experience</p>
        </motion.div>
    </>
  )
}
