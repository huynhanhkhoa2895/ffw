import {useEffect, useState} from "react";

const useDebounce = (value: any, time: number) => {
    const [val, setVal] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(()=>{
            setVal(value)
        },time)
        return () => {
            timeout && clearTimeout(timeout)
        }
    },[value])
    return val
}
export default useDebounce
