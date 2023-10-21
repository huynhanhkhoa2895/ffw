import Link from "next/link";
import {twMerge} from "tailwind-merge";

const MenuListItem = ({className} : {className? : string}) => {
    return(
        <ul className={twMerge('flex max-lg:flex-col gap-3 max-lg:p-3',className)}>
            <li><Link href={'/'}>Now Playing</Link></li>
            <li><Link href={'/movies/popular'}>Popular</Link></li>
            <li><Link href={'/movies/upcoming'}>Upcoming</Link></li>
        </ul>
    )
}
export default MenuListItem
