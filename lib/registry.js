//THE SWITCHBOARD FILE
import { getPwhlGames } from "./sources/pwhl";
import { getEspnGames } from "./sources/espn";

const registry = {
    pwhl: () => getPwhlGames(),
    nfl: () => getEspnGames({league: 'nfl', sport:'football', path:'football/nfl'}),
    mlb: () => getEspnGames({league: 'mlb', sport:'baseball', path:'baseball/mlb'}),
    nba: () => getEspnGames({league: 'nba', sport:'basketball', path:'basketball/nba'}),
    "usa.1":() => getEspnGames({league: 'usa.1', sport:'soccer', path:'soccer/usa.1'}),
    "college-football":() => getEspnGames({league: 'college-football', sport:'football', path:'football/college-football'}),
    "mens-college-basketball":() => getEspnGames({league: 'mens-college-basketball', sport:'basketball', path:'basketball/mens-college-basketball'}),
    "womens-college-basketball":() => getEspnGames({league: 'womens-college-basketball', sport:'basketball', path:'basketball/womens-college-basketball'}),
    nhl:() => getEspnGames({league: 'nhl', sport:'hockey', path:'hockey/nhl'}),
    "usa.nwsl":() => getEspnGames({league: 'usa.nswl', sport:'soccer', path:'soccer/usa.nwsl'}),
    wnba:() => getEspnGames({league: 'wnba', sport:'basketball', path:'basketball/wnba'})
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