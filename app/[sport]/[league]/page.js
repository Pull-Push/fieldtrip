import Games from "@/app/components/Games"
import { getLeagueInfo } from "@/lib/sports"

export default async function LeaguePage({ params }){
    const {sport, league } = await params
    console.log('sport', sport)
    console.log('league', league)

    const leagueData = await getLeagueInfo(sport, league)
    console.log('league data', leagueData)
    return(
        <div className="py-20">
            <h1>League Page</h1>
            <h2>{leagueData.name}</h2>
            <Games sport={sport} league={league}/>
        </div>
    )
}