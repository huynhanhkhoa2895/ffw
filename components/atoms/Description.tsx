import {twMerge} from "tailwind-merge";

const Description = ({maxLength, content, className = ''} : {maxLength : number, content : string, className?: string}) => {
    return(
        <p className={twMerge(className)}>{content.slice(0, maxLength)+'...'}</p>
    )
}
export default Description
