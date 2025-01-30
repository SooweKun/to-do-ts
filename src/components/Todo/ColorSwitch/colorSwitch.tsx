import * as motion from "motion/react-client"
import sun from "/src/assets/sun.svg"
import moon from "/src/assets/moon.svg"
import { FC } from "react"

interface Props {
    isOn: boolean
    toggleSwitch: () => void
}

export const ColorSwitch: FC<Props> = ({toggleSwitch, isOn}) => {


    return(
        <button
        className="absolute top-0 right-0 w-[62px] h-[30px] bg-[#B3B7D3] rounded-[10px] flex items-center p-[3px] mr-[19px] mt-[4px] z-[2]"
        style={{justifyContent: isOn ? "flex-end" : "flex-start"}}
        onClick={toggleSwitch}
        >
            <div className="flex w-full h-full items-center">
                <img src={sun} alt="" className="abssolute ml-[5px] z-[1]"/>
                <img src={moon} alt="" className="absolute right-[7px] z-[1]"/>
            </div>
        <motion.div
            className="w-[23px] h-[23px] bg-[#ffffff] rounded-[7px] flex absolute cursor-pointer opacity-[0.5]"
            layout
            transition={{
                type: "spring",
                visualDuration: 0.3,
                bounce: 0.3,
            }}
        />
    </button>
    );
}