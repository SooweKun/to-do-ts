import { ColorBtn } from "./ColorBtn/Colorbtn";
import save from "/src/assets/save.svg";
import block from "/src/assets/block.svg";
import colp from "/src/assets/colp.svg";
import { type FC } from "react";

interface Props {
    handleClick?: () => void
}

export const Menu: FC<Props> = ({handleClick}) => {
    return(
        <div className="w-[60px] h-[350px] px-[10px] py-[20px] bg-[url(./src/assets/menu-bg.png)] flex flex-col items-center gap-[15px]">
            <ColorBtn
                img={save}
                text="save"
            />
            <span className="w-[40px] h-[1px] bg-black"></span>
            <ColorBtn
                img={block}
                text="block"
            />
            <span className="w-[40px] h-[1px] bg-black"></span>
            <ColorBtn 
                handleClick={handleClick}
                img={colp}
                text="color"
            />
            <span className="w-[40px] h-[1px] bg-black"></span>
        </div>
    );
}