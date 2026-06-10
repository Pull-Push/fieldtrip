import { getGamesforLeague } from "@/lib/registry";

export async function GET(request){
    const { searchParams } = new URL(request.url)
    const league = searchParams.get('league')

    if(!league){
        return Response.json({error: "Missing 'league' query param"}, {status:400})
    }

    try {
        const game = await getGamesforLeague(league);
        return Response.json(game)
    } catch (error) {
        return Response.json({error: error.message}, {status:500})
    }
}