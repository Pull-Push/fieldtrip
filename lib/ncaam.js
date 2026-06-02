export async function getAllNCAAMData() {
    try {
        const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/mens-college-basketball
`, 
            {headers:{
                cache:'no-store'
            }
                
            }
        )

        if(!response.ok){
            console.error(`error fetching Mens College basketball data`, response.status)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Failed to fetch mens college basketball data', error)
        return null
    }
}