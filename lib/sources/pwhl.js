// HELPER FUNCTIONS

//Canadian province codes so we can tell 'ON; (Canada) from 'MN' (USA)
const CA_PROVINCES = new Set([
    'ON', 'QC', 'BC', 'AB', 'MB', 'NS', 'SK', 'NB', 'NL', 'PE' ,'NT' ,'YT', 'NU'
])

//'St. Paul, MN' -> { city: "St. Paul", region: 'MN', country: 'USA'}
function parseLocation(loc){
    if(!loc) return {city:null, region:null, country:null}
    const parts = loc.split(",").map((part) => part.trim())
    const city = parts[0] ?? null
    const region = parts[1] ?? null
    const country = region ? (CA_PROVINCES.has(region) ? "Canada" : "USA" ) : null;
    return {city, region, country}
}

// "Grand Casino Arena | St. Paul" -> "Grand Casino Arena"
function parseVenueName(name){
    if(!name) return 'TBD';
    return name.split('|')[0].trim()
}

// SINGLE GAME NORMALIZER - Translator
/** @returns {Game} */
function normalizePwhlGame(raw){
    const loc = parseLocation(raw.venue_location);

    return{
        id: `pwhl-${raw.id}`,
        league:'pwhl',
        sport:'hockey',
        startUtc: raw.GameDateISO8601 ? new Date(raw.GameDateISO8601).toISOString() : null,
        home:{
            name: raw.home_team_name ?? "TBD",
            abbreviation: raw.home_team_code ?? "",
            logo: null
        },
        away:{
            name:raw.visiting_team_name ?? 'TBD',
            abbreviation:raw.visiting_team_code ?? "",
            logo:null
        },
        venue: {
            name:parseVenueName(raw.venue_name),
            city:loc.city,
            region:loc.region,
            country:loc.country
        },
    };
}

// FETCH AND MAP
const PWHL_URL = "https://lscluster.hockeytech.com/feed/?feed=modulekit&view=schedule&season_id=8&key=446521baf8c38984&client_code=pwhl&league_id=1&fmt=json";
// SEASON 10 is the 26-27 PRESEASON - SEASON 11 is the 26-67 REGULAR SEASON - SEASON 12 is the 26-27 POST SEASON 

/** @returns {Promise<Game[]/>} */
export async function getPwhlGames() {
    const res = await fetch(PWHL_URL, {cache: "no-store"})
    const json = await res.json()
    console.log("PWHL raw:", json?.SiteKit?.Schedule?.length, "games"); // ← temporary

    const schedule = json?.SiteKit?.Schedule ?? []
    return schedule.map(normalizePwhlGame)
}