import { type FC } from "react";

interface Props {
    handleClick?: () => void
    img: string
    text: string
}

export const ColorBtn: FC<Props> = ({handleClick, img, text}) => {

    return(
        <div className="w-[30px] h-[50px] flex justify-center items-center flex-col gap-[5px] cursor-pointer"
             onClick={handleClick}
         >
            <div className="w-[30px] h-[30px] rounded-[30px] bg-[#EDE9EF] flex justify-center items-center">
            <img src={img} alt="nf" className="w-[10px] h-[10px]"/>
            </div>
            <p className="text-[9px]">{text}</p>
        </div>
    );
}