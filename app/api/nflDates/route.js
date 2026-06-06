import { getNFLGamesByDateRange } from "@/lib/nfl"


export async function GET(request) {

    const { searchParams } = new URL(request.url)
    const dates = searchParams.get('dates')

    const data = await getNFLGamesByDateRange(dates)
    return Response.json(data)
}