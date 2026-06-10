function pickTeam(competitors, side){
    const c = competitors.find((x) => x.homeAway === side) ?? {};
    const team = c.team ?? {}
    return{
        name: team.displayName ?? "TBD",
        abbreviation: team.abbreviation ?? "",
        logo: team.logo ?? null
    }
}

/** @returns {Game} */
function normalizeEspnEvent(event ,{ league, sport }){
    const comp = event?.competitions?.[0] ?? {};
    const competitors = comp.competitors ?? [];
    const v = comp.venue ?? {};

    return {
        id: `${league}-${event.id}`,
        league,
        sport,
        startUtc: event.date,
        home: pickTeam(competitors, "home"),
        away: pickTeam(competitors, "away"),
        venue:{
            name: v.fullName ?? "TBD",
            city: v.address?.city ?? null,
            region: v.address?.state ?? null,
            country: v.address?.country ?? null
        }
    }
}

const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports";

/** @returns {Promise<Game[]>} */
export async function getEspnGames({league, sport, path}) {
    const res = await fetch(`${ESPN_BASE}/${path}/scoreboard`,{
        cache:'no-store',
    });
    const json = await res.json();
    const events = json?.events ?? []
    return events.map((event) => normalizeEspnEvent(event, {league, sport}))
}