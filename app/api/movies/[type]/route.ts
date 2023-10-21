import {MovieType} from "@/entities/movie";

const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+process.env.API_ACCESS_TOKEN,
}
export async function GET(req: Request, { params : {type} }: { params: { type: MovieType } }) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page')
    const url = (process.env.API_URL || '')+`/movie/${type}?page=${page}`;

    const res = await fetch(url, {
        headers
    })
    const data = await res.json()

    return Response.json(data)
}
