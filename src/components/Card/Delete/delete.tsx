import deleted from "/src/assets/delete.svg"
import {motion} from "motion/react"

export const Delete = () => {
    return(
        <motion.div 
            className="w-[29px] h-[29px] rounded-[30px] bg-[#EDE9EF] flex justify-center items-center absolute right-1 cursor-pointer"
            whileHover={{ scale: 1.2 }}    
        >
            <img src={deleted} alt="nf" />
        </motion.div>
    );
}