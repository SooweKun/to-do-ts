import left from "/src/assets/left.svg"
import { Delete } from "./Delete/delete";
import { Change } from "./Change/change";
import { useColorStore } from "/home/sowe/program/to-do-ts/src/store/useColorStore.ts";
import { Left } from "./left";
import { FC } from "react";

interface Props {
    name: string;
    description: string;
    index: number;
}

export const Cardmain: FC<Props> = ({name, description, index}) => {
    const { fill } = useColorStore();

    return(
        <div className="w-[331px] h-[100px] flex justify-center relative">
            <div className="flex items-end w-[55px] h-[100px]">
                <Left
                     fill={fill}
                />
                <Change />
            </div>
            <div className="w-full h-full bg-[#A0929D] rounded-[10px] relative font-nova-cut">
                <h1 className="text-white absolute top-2 left-6">{name}</h1>
                <p className="text-[#474545] absolute top-[28px] left-6">card description:</p>
                <p className="text-white absolute top-[55px] left-6 leading-[17px] w-[230px]">{description}</p>
            </div>
            <div className="w-[50px] h-[100px]">
                <img src={left} alt="" className="absolute right-1 top-0"/>
                <Delete 
                    index={index}
                />
            </div>
        </div>
    );
}