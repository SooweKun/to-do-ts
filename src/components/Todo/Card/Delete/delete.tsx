import deleted from "/src/assets/delete.svg"
import {motion} from "motion/react"
import { useCardStore } from "../../../../store/useCardStore";
import { FC } from "react";

interface Props {
    index: number
}

export const Delete: FC<Props> = ({index}) => {
    const { removeCard } = useCardStore();

    return(
        <motion.div 
            className="w-[29px] h-[29px] rounded-[30px] bg-[#B3B7D3] flex justify-center items-center absolute right-1 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => removeCard(index)}
        >
            <img src={deleted} alt="nf" />
        </motion.div>
    );
}