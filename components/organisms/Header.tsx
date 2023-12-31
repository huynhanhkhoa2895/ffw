import {signOut} from "next-auth/react";
import HamburgerBar from "@/components/atoms/HamburgerBar"
import {useContext} from "react";
import appContext from "@/contexts/appContext";
import MenuListItem from "@/components/molecules/MenuListItem";
const Header = () => {
    const ctx = useContext(appContext)
    const toggleBar = () => {
        ctx?.updateState({
            isMenuOpen: !ctx.isMenuOpen
        })
    }
    return(
        <>
            <header className={'flex text-xl justify-between items-center bg-primary text-white font-bold p-3'}>
                <div>
                    <MenuListItem className={'max-lg:hidden'} />
                    <button className={'lg:hidden'} onClick={()=>toggleBar()}>
                        <HamburgerBar />
                    </button>
                </div>
                <div>
                    <ul>
                        <li>
                            <button type={'button'} onClick={() => signOut()}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>

    )
}
export default Header
