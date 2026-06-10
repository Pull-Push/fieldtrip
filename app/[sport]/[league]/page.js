import Games from "@/app/components/Games"
import { getLeagueInfo } from "@/lib/sports"

export default async function LeaguePage({ params }){
    const {sport, league } = await params
    console.log('sport', sport)
    console.log('league', league)

    return(
        <div className="py-20">
            <Games sport={sport} league={league}/>
        </div>
    )
}