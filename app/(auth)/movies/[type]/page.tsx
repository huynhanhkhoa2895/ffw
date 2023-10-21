import ListMovieTemplate from "@/components/template/ListMovieTemplate";
import {redirect} from "next/navigation";
import {MovieType} from "@/entities/movie";

const acceptType = ['upcoming', 'popular']
const MoviesWithTypePage = ({params : {type}} : {params : { type : MovieType }}) => {
    if(!acceptType.includes(type)) {
        redirect('/')
    }
    return(
        <>
            <ListMovieTemplate type={type} />
        </>
    )
}
export default MoviesWithTypePage
