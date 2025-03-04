import create from "/src/assets/create.svg"
import { motion } from "motion/react"

export const Change = () => {
    return(
        <motion.div 
            className="w-[28px] h-[28px] rounded-[30px] bg-[#B3B7D3] flex justify-center items-center absolute left-0 cursor-pointer z-[1]"
            whileHover={{ scale: 1.2 }}    
        >
            <img src={create} alt="nf" />
        </motion.div>
    );
}