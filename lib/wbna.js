export async function getAllWBNAData() {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/wnba/scoreboard`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching wnba data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch wnba data', error)
        return null
    }
}