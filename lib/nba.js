export async function getAllNBAData() {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching nba data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch NBA data', error)
        return null
    }
}