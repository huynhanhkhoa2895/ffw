import {twMerge} from "tailwind-merge";

const HamburgerBar = ({className} : {className? : string}) => {
    return(
        <svg className={twMerge('block w-[40px] lg:hidden',className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" strokeWidth=".6" fill="rgba(0,0,0,0)" strokeLinecap="round">
            <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">

            </path>
            <rect width="10" height="10" stroke="none">

            </rect>
            <rect width="10" height="10" stroke="none">

            </rect>
        </svg>
    )
}
export default HamburgerBar
