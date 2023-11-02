import {motion} from 'framer-motion'
export const Title = (props) => {
    let ele = props.ele
  return (
    <>
        <motion.div
           initial={{opacity:.1}}
           animate={{opacity:1}}
           transition={{delay:.5}}
          className="title"
        >
            {ele}
        </motion.div>
    </>
  )
}
