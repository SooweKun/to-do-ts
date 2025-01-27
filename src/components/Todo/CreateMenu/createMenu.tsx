import { useForm } from "react-hook-form"
import { type FC } from "react";
import { useCardStore, type Card } from "../../../store/useCardStore";


interface Props {
    setOpen: (open: boolean) => void
}

export const CreateMenu: FC<Props> = ({setOpen}) => {
    const { register, handleSubmit} = useForm<Card>();
    const { setCard } = useCardStore();


    const onSubmit = (data: Card) => {
        setCard(data);
        setOpen(false);
    };

    return(
        <div className="absolute flex flex-col w-[310px] h-[280px] bg-[url(./src/assets/create-bg.svg)] bg-no-repeat z-[1] py-[15px] px-[25px] items-center">
            <div className="w-full h-max flex justify-start">
                <img src="/src/assets/close.svg" alt="" onClick={() => setOpen(false)} className="z-[2] cursor-pointer"/>
            </div>
            <form className="w-full h-max flex flex-col gap-[30px] mt-[20px]">
                <input type="text" placeholder="Введите имя"
                    {...register("name")}
                    className="w-full h-[31px] bg-[#B3B7D3] rounded-[5px] border-[1px] border-white outline-none pl-[10px] placeholder:text-[#EAEAEA] text-[13px] placeholder:text-[12px]"
                />
                <input type="text" placeholder="Введите описание"
                    {...register("description")}
                    className="w-full h-[45px] bg-[#B3B7D3] rounded-[5px] border-[1px] border-white outline-none pl-[10px] placeholder:text-[#EAEAEA] text-[13px] placeholder:text-[12px]"
                />
            </form>
            <button className="w-[101px] h-[22px] bg-[#B3B7D3] outline-none border-none rounded-[5px] text-[#EAEAEA] text-center text-[13px] mt-[67px]"
                    onClick={handleSubmit(onSubmit)}
                >
                create
            </button>
        </div>
    );
}