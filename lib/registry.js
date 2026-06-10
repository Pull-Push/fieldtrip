//THE SWITCHBOARD FILE
import { getPwhlGames } from "./sources/pwhl";
import { getEspnGames } from "./sources/espn";

const registry = {
    pwhl: () => getPwhlGames(),
    nfl: () => getEspnGames({league: 'nfl', sport:'football', path:'football/nfl'}),
    mlb: () => getEspnGames({league: 'mlb', sport:'baseball', path:'baseball/mlb'}),
    nba: () => getEspnGames({league: 'nba', sport:'basketball', path:'basketball/nba'}),
    // ADD ADDITIONAL LEAGUES HERE
}

/** @returns {Promise<Game[]>} */
export function getGamesforLeague(league){
    const fetcher = registry[league]
    if(!fetcher){
        throw new Error(`No source registered for league : ${league}`)
    }
    return fetcher()
}