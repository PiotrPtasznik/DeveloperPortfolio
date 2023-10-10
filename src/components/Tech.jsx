import {BallCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import {motion} from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What do I use </p>
      <h2 className={styles.sectionHeadText}>Tech stack</h2>
      </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) =>(
      <div className='w-28 h-28 mt-8' key={technology.name}>
        <BallCanvas icon={technology.icon}> </BallCanvas>
        <h2 className='text-white text-[20px] font-bold text-center'>{technology.name}</h2>
      </div>
    ))}
    </div>

    </>
  )
}

export default SectionWrapper(Tech, "");