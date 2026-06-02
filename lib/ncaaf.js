export async function getAllNCAAFData() {
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v2/sports/football/leagues/college-football`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching College Football data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch college football data', error)
        return null
    }
}