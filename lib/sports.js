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


export async function getPWHLTeams() {
    try {
        const response = await fetch(`https://lscluster.hockeytech.com/feed/index.php?feed=modulekit&view=teamsbyseason&season_id=5&key=446521baf8c38984&client_code=pwhl`,
            {headers:{
                cache:'no-store'
            }}
        )
        if(!response.ok){
            console.error('error fetching PWHL teams', response.status)
            return null
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to load PWHL Teams', error)
        return null
    }
}