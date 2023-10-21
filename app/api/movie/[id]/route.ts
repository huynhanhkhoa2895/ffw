const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+process.env.API_ACCESS_TOKEN,
}
export async function GET(req: Request, { params }: { params: { id: string } }) {
    const url = (process.env.API_URL || '')+'/movie/'+params.id;

    const res = await fetch(url, {
        headers
    }).then(res => res.json()).catch((e)=>console.log(e))
    return Response.json(res)
}
