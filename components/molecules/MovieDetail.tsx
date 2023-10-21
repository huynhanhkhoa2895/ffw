import {Movie} from "@/entities/movie";
import Image from "next/image";
import Link from "next/link";

const MovieDetail = ({movie} : {movie : Movie}) => {
    return(
        <div className={'grid grid-cols-1 lg:grid-cols-2 gap-2'}>
            <div className={'pt-[100%] relative'}>
                <Image alt={movie.title} src={process.env.NEXT_PUBLIC_APP_IMAGE_URL+movie.poster_path} fill className={'object-contain'} />
            </div>
            <div>
                <h1 className={'text-3xl color-main mb-3'} data-testid="title">{movie.title}</h1>
                <div className={'mb-3'}>
                    <p><span className={'text-lg font-semibold'} data-testid="release">Release Date:</span> {movie.release_date}</p>
                    <p><span className={'text-lg font-semibold'} data-testid="popularity">Popularity:</span> {movie.popularity}</p>
                    <p><span className={'text-lg font-semibold'} data-testid="genres">Genres:</span> {movie.genres?.map((genre, key)=><span key={key}>{genre.name}{(movie?.genres?.length || 0) - 1 === key ? '' : ', '}</span>)}</p>
                </div>
                <p className={'text-md'}>{movie.overview}</p>
                <p className={'bg-[#E2B616] p-3 font-bold rounded-2xl w-max mt-3 max-lg:mx-auto'}><Link href={`https://www.imdb.com/title/${movie.imdb_id}`} target={'_blank'}>IMDB</Link></p>
            </div>
        </div>
    )
}
export default MovieDetail
