import {twMerge} from "tailwind-merge";
import {ChangeEvent, useEffect, useState} from "react";

const Input = ({className, value, onChange, placeholder} : {className? : string, value : string, placeholder : string, onChange : (value : string) => void}) => {
    const [val,setVal] = useState(value || '');

    useEffect(()=>{
        onChange && onChange(val)
    },[val])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }
    return(
        <input
            placeholder={placeholder}
            className={twMerge('p-2 rounded-lg border border-[#ccc]',className)}
            onChange={handleChange}
            value={val || ''}
        />
    )
}
export default Input
