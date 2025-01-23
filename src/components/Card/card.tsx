import sub from "/src/assets/Subtract.svg"
import left from "/src/assets/left.svg"

export const Card = () => {
    return(
        <div className="w-[331px] h-[100px] mt-[200px] ml-[500px] flex justify-center relative">
            <div>
                <img src={sub} alt="" className="w-[55px] h-[100px] absolute left-0 top-0"/>
            </div>
            <div className="w-[239px] h-full bg-[#A0929D] rounded-[10px]">

            </div>
            <div>
                <img src={left} alt="" className="absolute right-1.5 top-0"/>
            </div>
        </div>
    );
}