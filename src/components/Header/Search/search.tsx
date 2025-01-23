import search from "/src/assets/search.svg"
import { motion } from "motion/react"
import { useState } from "react";

export const Search = () => {
    const [active, isActive] = useState(false)
    const [scale, setScale] = useState(false);

    const handleInputBlur = () => {
        isActive(false)
        setScale(true)
        setTimeout(() => {
            setScale(false);
          }, 300);
      };

    const handleClick = () => {
        isActive(true)
        setScale(true)
        setTimeout(() => {
            setScale(false);
          }, 300);
    }

    return(
        <motion.div 
            className="flex w-[100px] h-[33px] rounded-[30px] bg-[#B3B7D3] ml-[100px] pl-[2px] pr-[16px] items-center"
            animate={{width: active ? "200px" : "100px"}}
        >
            <motion.div
             className="w-[29px] h-[29px] rounded-[30px] bg-[#EDE9EF] flex justify-center items-center cursor-pointer"
             animate={{ scale: scale ? 1.2 : 1 , rotate: scale ? 180 : 0 }}
             transition={{ duration: 0.3 }}
             whileHover={{ scale: 1.1 }}
            >
                <img src={search} alt="nf" className="w-[10.5px] h-[10.5px]"/>
            </motion.div>   
            <motion.input
                onClick={handleClick} // scale/width + if input click
                onBlur={handleInputBlur} // width - if input click
                type="text" 
                placeholder="Search" 
                className="w-full h-full text-[11px] pl-[10px] bg-transparent cursor-pointer outline-none border-none placeholder:text-black placeholder:text-[11px] mb-[1px]"
                animate={{width: active ? "140px" : "45px"}}
                />
        </motion.div>
    );
}