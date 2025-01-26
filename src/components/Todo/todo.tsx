import { Menu } from "./Menu/menu";
import { ColorPicker } from "./ColorPicker/colorPicker";
import { useState } from "react";
import modalicon from '/src/assets/modalico.svg';
import { ColorSwitch } from "./ColorSwitch/colorSwitch";

export const Todo = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive((prev) => !prev)
        console.log("+");         
    }
    
    return(
        <div className="w-[600px] h-[500px] bg-[url(./src/assets/todo.svg)] flex relative">
            <ColorSwitch />
            <img src={modalicon} alt="" className="absolute right-0 bottom-0"/>
            <div className="w-[410px] h-[500px]">

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