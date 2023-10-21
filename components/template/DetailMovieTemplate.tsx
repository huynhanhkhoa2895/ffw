'use client';

import {Movie} from "@/entities/movie";
import MovieDetail from "@/components/molecules/MovieDetail";

const DetailMovieTemplate = ({data} : {data : Movie}) => {
    return <div className={'w-full max-w-[1440px] p-3 mx-auto'}>
        <MovieDetail movie={data} />
    </div>
}
export default DetailMovieTemplate
