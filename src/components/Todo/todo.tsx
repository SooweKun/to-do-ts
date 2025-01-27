import { Menu } from "./Menu/menu";
import { ColorPicker } from "./ColorPicker/colorPicker";
import { FC, useState } from "react";
import modalicon from '/src/assets/modalico.svg';
import { ColorSwitch } from "./ColorSwitch/colorSwitch";
import { Cardmain } from "./Card/card";
import { CreateMenu } from "./CreateMenu/createMenu";
import { useCardStore } from "../../store/useCardStore";

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

export const Todo: FC<Props> = ({open, setOpen}) => {
    const [active, setActive] = useState(false)
    const { card} = useCardStore();

    const handleClick = () => {
        setActive((prev) => !prev)        
    }

    return(
        <div className="w-[600px] h-[500px] bg-[url(./src/assets/todo.svg)] flex relative justify-center items-center backdrop-blur-[1px]">
            <ColorSwitch />
            <img src={modalicon} alt="" className="absolute right-0 bottom-0 select-none"/>
            {open && <CreateMenu setOpen={setOpen}/>}
            <div className="w-[410px] h-[500px] pl-[25px] pt-[40px] gap-[30px] flex flex-col">
                {card.map(({name, description},index) => (
                    <Cardmain
                     key={index}
                     name={name}
                     description={description}
                     index={index}
                    />
                ))}
            </div>
            <div className="w-[190px] h-[500px] flex items-center justify-end pr-[29px] z-[1]">
                {active && <ColorPicker setActive={setActive}/>}
                <Menu 
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
}