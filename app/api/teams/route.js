import { getNFLTeams } from "@/lib/nfl"
import { getSportTeams } from "@/lib/sports"

export async function GET(request) {
    const { searchParams } = new URL(request.url)

    const sport = searchParams.get('sport')
    const league = searchParams.get('league')

    const data = await getSportTeams(sport, league)
    return Response.json(data)
}