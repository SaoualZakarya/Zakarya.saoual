import { useState,useEffect } from "react"
import {  NavLink,useLocation } from "react-router-dom"
import {MdDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {motion} from 'framer-motion'
export const NavBar = () => {

    // To activate and disactive the active link
    const location = useLocation();
    let isActive = (path) => {
        return location.pathname === path;
    };

    // Dark mode setup
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        const newMode = !darkMode;
        localStorage.setItem('theme', newMode ? 'dark' : 'light')
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
        setDarkMode(true);
        }
    }, [])

    // to manipilate navbar in the small size mode
    const [collapsed,setCollapsed] = useState(true)

  return (
    <>
        <header className="flex justify-between items-center py-8 px-3 md:px-12 mx-auto my-0 shadow-md">
            <motion.a
              initial={{x:-300}}
              animate={{ x:0 }}
              transition={{delay:.3}}
              href="/"
              className="flex items-center gap-2 md:gap-4 text-[#222222] dark:text-white"
            >
                <div className="rounded-[50%] bg-[#007ced] w-7 h-7 md:w-9 md:h-9 font-extrabold flex justify-center items-center text-white text-[16px] md:text-[18px]"> Z </div>
                <div className="text-[16px] md:text-[18px]"> <span className="font-extrabold pr-1 md:pr-2">Zakarya</span><span className="font-medium">Saoual</span> </div>
            </motion.a>
            <motion.button
              initial={{y:-100}}
              animate={{ y:0 }}
              transition={{delay:.3}}
              onClick={toggleTheme}
            >
                {!darkMode ? 
                <div className='flex gap-1 items-center '><MdDarkMode className="w-6 h-6"/> 
                   <p className="font-semibold text-[16px] md:text-[18px] uppercase"> Dark</p>
                </div> : 
                <div className='flex gap-1 items-center text-yellow-400'><BsSun className="w-6 h-6"/> 
                  <p className="font-semibold text-[16px] md:text-[18px] uppercase"> Light</p>
                </div>}
            </motion.button>
            <motion.nav 
              initial={{x:800}}
              animate={{ x:0 }}
              transition={{delay:.3}}
              className="hidden font-bold lg:flex gap-14"
            >
                <NavLink to="/" className={` ${isActive('/') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                    About Me
                </NavLink>
                <NavLink to="/resume" className={` ${isActive('/resume') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                    Resume
                </NavLink>
                <NavLink to="/portfolio" className={` ${isActive('/portfolio') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                    Portfolio
                </NavLink>
                <NavLink to="/blog" className={` ${isActive('/blog') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                    Blog
                </NavLink>
                <NavLink to="/contact" className={`${isActive('/contact') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0] '}`}>
                    Contact
                </NavLink>
            </motion.nav>
            <nav onClick={()=>{setCollapsed(!collapsed)}} className="block lg:hidden text-[#222222] font-bold dark:text-white ">
                <FaBars className="w-6 h-6"/>
            </nav>
        </header>
        {
            !collapsed && (
                <div className="bg-white shadow-2xl dark:bg-[#222222ec] lg:hidden fixed font-bold z-30 right-0 transition duration-1000 top-[102px] w-[240px] rounded-l-3xl h-fit ">
                    <div className="flex flex-col gap-10 items-center py-14">
                        <NavLink to="/" className={` ${isActive('/') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                            About Me
                        </NavLink>
                        <NavLink to="/resume" className={` ${isActive('/resume') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                            Resume
                        </NavLink>
                        <NavLink to="/portfolio" className={` ${isActive('/portfolio') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                            Portfolio
                        </NavLink>
                        <NavLink to="/blog" className={` ${isActive('/blog') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0]'}`}>
                            Blog
                        </NavLink>
                        <NavLink to="/contact" className={`${isActive('/contact') ? 'text-[#333333] dark:text-white' : 'text-[#C5D6D0] '}`}>
                            Contact
                        </NavLink>
                    </div>
                </div> 
            )
        }
           
    </>
  )
}
