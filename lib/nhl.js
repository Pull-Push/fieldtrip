export async function getAllNHLData() {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching nhl data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch NHL data', error)
        return null
    }
}