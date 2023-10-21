import {twMerge} from "tailwind-merge";
import {useContext} from "react";
import AppContext from "@/contexts/appContext";
import MenuListItem from "@/components/molecules/MenuListItem";

const MenuSidebar = () => {
    const ctx = useContext(AppContext)
    return(
        <div className={twMerge(
            'fixed top-0 left-0 h-[100svh] w-screen bg-primary transition-all duration-500 lg:hidden',
            ctx?.isMenuOpen ? 'opacity-100 translate-x-0 visible' : 'opacity-0 -translate-x-full invisible'
        )}>
            <div className={'flex p-3 justify-between flex-col text-2xl font-semibold text-white h-full'}>
                <MenuListItem />
                <div>
                    <button onClick={()=>ctx?.updateState({isMenuOpen: false})}>Close</button>
                </div>

            </div>

        </div>
    )
}
export default MenuSidebar
