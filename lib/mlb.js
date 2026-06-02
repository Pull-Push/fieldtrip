export async function getAllMLBData() {
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v2/sports/baseball/leagues/mlb/calendar`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching mlb data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch mlb data', error)
        return null
    }
}



// DATE RANGE PULL WORKS!!! https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard?dates=20260602-20260603