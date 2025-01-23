import create from "/src/assets/create.svg"
import { motion } from "motion/react"
import { useState } from "react";

export const Create = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)      

        setTimeout(() => {
            setActive(false);
          }, 300);
    }

    return(
        <button 
            className="ml-[100px] mt-[200px] flex items-center w-[120px] h-[33px] bg-[#B3B7D3] rounded-[30px] pr-[3px] pl-[19px] justify-between  text-[11px]"
            onClick={handleClick}
            >
            Create
            <motion.div 
                className="w-[29px] h-[29px] rounded-[30px] bg-[#EDE9EF] flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
                animate={{rotate: active ? 180 : 0, scale: active ? 1.2 : 1}}
                transition={{ duration: 0.3 }}
            >
                <img src={create} alt="nf" />
            </motion.div>
        </button>
    );
}