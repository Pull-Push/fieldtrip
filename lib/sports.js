export async function getLeagueInfo(sport, league) {
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v3/sports/${sport}/${league}`,
            {headers:{
                cache:'no-store'
            }}
        )
        if(!response.ok){
            console.error('error fetching league information', response.status)
            return null
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to load League Data', error)
        return null
    }
}




export async function getSportTeams(sport, league){
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v3/sports/${sport}/${league}/teams?limit=100`, 
            {headers:{
                cache:'no-store'
            }}
        )
        if(!response.ok){
            console.error(`error fetching teams`, response.status)
            return null
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to load Teams', error)
        return null
    }
}
