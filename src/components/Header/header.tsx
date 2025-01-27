import { Create } from "/home/sowe/program/to-do-ts/src/components/Header/Create/create.tsx"
import { Search } from "/home/sowe/program/to-do-ts/src/components/Header/Search/search.tsx"
import { FC } from "react"

interface Props {
    handleOpen: () => void
    active: boolean
}

export const Header: FC<Props> = ({handleOpen, active}) => {
    return(
        <div className="w-[700px] h-[60px] flex justify-between items-center px-[50px] bg-[url(./src/assets/header-bg.svg)]">
            <Search />
            <Create 
                handleOpen={handleOpen}
                active={active}
            />
        </div>
    );
}