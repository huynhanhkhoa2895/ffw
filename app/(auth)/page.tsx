import ListMovieTemplate from "@/components/template/ListMovieTemplate";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import { redirect } from 'next/navigation'
export default async function Home() {
    const session = await getServerSession(authOptions);
    if(!session){
        redirect(process.env.NEXTAUTH_URL+'/api/auth/signin')
    }
    return(
        <ListMovieTemplate type={'now_playing'} />
    )
}


