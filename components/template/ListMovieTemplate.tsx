'use client';
import {Movie, MovieType} from "@/entities/movie";
import MovieListItem from "@/components/molecules/MovieListItem";
import {MovieResponse} from "@/entities/movieResponse";
import {useEffect, useState} from "react";
import useDebounce from "@/hooks/useDebounce";
import Input from "@/components/atoms/Input";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "@/components/atoms/Loading";

const ListMovieTemplate = ({type} : {type : MovieType}) => {
    const [data, setData] = useState<Movie[]>([])
    const [dataDisplay, setDataDisplay] = useState<Movie[]>([])
    const [searchValue, setSearchValue] = useState<string>('')
    const [isLoadContinue,setIsLoading] = useState<boolean>(false)
    const valueToSearch = useDebounce(searchValue,500)
    const getListMovie = async (page: number) => {
        const rs: MovieResponse = await fetch(`/api/movies/${type}?page=`+page).then(res => res.json());
        setData((data) => data ? [...data,...rs.results] : rs.results)
    }

    useEffect(() => {
        setIsLoading(true)
    }, []);

    useEffect(()=>{
        setDataDisplay(data)
    },[data])

    useEffect(()=>{
        if(valueToSearch === '') {
            setIsLoading(true);
            return;
        }
        setIsLoading(false)
        const regex = new RegExp(valueToSearch,"gi")
        const newDataDisplay = valueToSearch === '' ? data : [...data.filter((movie: Movie)=> movie.title.match(regex))]
        setDataDisplay(newDataDisplay)
    },[valueToSearch])

    return (
        <div className={'p-3'}>
            <div className={'flex mb-3 items-center justify-end w-full'}>
                <Input placeholder={'Search'} value={searchValue} onChange={(val: string)=>setSearchValue(val)} />
            </div>
            <InfiniteScroll
                pageStart={0}
                loadMore={getListMovie}
                hasMore={isLoadContinue}
                loader={<Loading className={'mx-auto mt-10'} key={'loading'} />}
            >
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-center'}>
                    {
                        dataDisplay.map((movie, key: number) => <MovieListItem key={key} movie={movie} />)
                    }
                </div>
            </InfiniteScroll>
        </div>

    )
}
export default ListMovieTemplate
