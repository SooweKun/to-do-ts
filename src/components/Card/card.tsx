import left from "/src/assets/left.svg"
import { Delete } from "./Delete/delete";
import { Change } from "./Change/change";
import { useColorStore } from "/home/sowe/program/to-do-ts/src/store/useColorStore.ts";
import { Left } from "./left";

export const Card = () => {
    const { fill} = useColorStore();

    return(
        <div className="w-[331px] h-[100px] flex justify-center relative">
            <div className="flex items-end w-[55px] h-[100px]">
                <Left
                     fill={fill}
                />
                <Change />
            </div>
            <div className="w-full h-full bg-[#A0929D] rounded-[10px]">

            </div>
            <div className="w-[50px] h-[100px]">
                <img src={left} alt="" className="absolute right-1 top-0"/>
                <Delete />
            </div>
        </div>
    );
}