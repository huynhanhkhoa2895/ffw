import DetailMovieTemplate from "@/components/template/DetailMovieTemplate";

const MovieDetail = async ({ params }: { params: { id: string } }) => {
    const data = await getDetailMovie(params.id)
    return(
        <>
            <DetailMovieTemplate data={data}  />
        </>
    )
}
const getDetailMovie = async (id: string) => {
    return await fetch(process.env.APP_URL+'/api/movie/'+id).then(res=> res.json()).catch(e => e);
}
export default MovieDetail
