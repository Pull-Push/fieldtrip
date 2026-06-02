export async function getAllUSWNTData() {
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v2/sports/soccer/leagues/usa.nwsl`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching USWNT data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch USWNT data', error)
        return null
    }
}