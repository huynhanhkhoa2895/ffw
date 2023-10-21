import {Movie} from "@/entities/movie";
import {twMerge} from "tailwind-merge";
import Image from 'next/image'
import Description from "@/components/atoms/Description";
import Link from "next/link";
const MovieListItem = ({movie} : {movie: Movie}) => {
    return(
        <div className={'lg:h-[380px] border border-[#ccc] rounded-2xl'}>
            <Link href={'/movie/'+movie.id}>
                <div className={twMerge('flex flex-col p-3 gap-3 h-full')}>
                    <div className={'relative w-full h-[250px]'}>
                        <Image alt={movie.title} src={process.env.NEXT_PUBLIC_APP_IMAGE_URL+movie.poster_path} fill className={'object-contain'} />
                    </div>
                    <div>
                        <p className={'text-xl font-semibold'}>{movie.title}</p>
                        <Description className={'text-sm'} maxLength={100} content={movie.overview} />
                    </div>

                </div>
            </Link>
        </div>

    )
}
export default MovieListItem
