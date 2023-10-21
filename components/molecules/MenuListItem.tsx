import Link from "next/link";

const MenuListItem = () => {
    return(
        <ul className={'flex max-lg:flex-col gap-3 max-lg:p-3'}>
            <li><Link href={'/'}>Now Playing</Link></li>
            <li><Link href={'/movies/popular'}>Popular</Link></li>
            <li><Link href={'/movies/upcoming'}>Upcoming</Link></li>
        </ul>
    )
}
export default MenuListItem
