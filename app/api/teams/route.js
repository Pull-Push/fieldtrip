import { getNFLTeams } from "@/lib/nfl"


export async function GET() {

    const data = await getNFLTeams()
    return Response.json(data)
}